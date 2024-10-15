import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import categoriesApi from '@/apis/categories'
import { getNewDetailBanner } from '@/apis/newDetailBanner'
import newsApi from '@/apis/news'
import { genPageMetadata } from '@/app/seo'
import NewsCard from '@/components/NewsCard'
import { paths } from '@/constants/paths'
import { urls } from '@/constants/urls'
import { lato } from "@/utils/fonts"

export async function generateMetadata({ params: { news } }) {
  const newsData = await newsApi.getNewsBySlug(news);
  return await genPageMetadata({
    title: newsData?.attributes?.title,
    image: `${urls.baseUrl}${newsData?.attributes?.avatar?.data?.attributes?.url}`
  })
}

const News = async ({ params: { category, news } }) => {
  const categories = await categoriesApi.getCategories();
  const { banner1, banner2, banner3, banner4 } = await getNewDetailBanner();

  const categoryIndex = categories.findIndex(cat => cat?.attributes?.slug === category)
  if (categoryIndex === -1) {
    return notFound();
  }

  const newsData = await newsApi.getNewsBySlug(news);

  if (!newsData?.id) {
    return notFound();
  }

  const outstandingNews = await newsApi.getOutstandingNews();
  const { data: notOutstandingNews } = await newsApi.getNotOutstandingNews();
  const categoryData = await categoriesApi.getCategoryBySlug(category)

  return (
    <>
      {banner1?.image?.data?.attributes?.url && (
        <Link href={banner1?.link || paths.HOME}>
          <Image
            src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
            width={1170}
            height={234}
            alt=""
            className="w-full mt-4"
          />
        </Link>
      )}

      <div className='hidden md:flex items-start gap-[10px] py-[10px]'>
        <article className='flex-1'>
          <div className='flex items-center gap-[10px] text-[14px] py-[10px]'>
            <Link href={paths.HOME} className="hover:underline hover:text-[#CCC]">Trang chủ</Link>
            <p>{"/"}</p>
            <Link href={`${paths.HOME}${category}`} className="hover:underline hover:text-[#CCC]">{categoryData?.attributes?.name}</Link>
          </div>

          <h1 className={clsx(
            'mb-[16px] text-[32px] font-bold',
            lato.className
          )}>
            {newsData?.attributes?.title}
          </h1>

          <div
            className='prose max-w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: newsData?.attributes?.content }}
          ></div>

          {/* <div className='flex justify-end gap-[10px] py-[10px] w-full'>
            <div className='text-[14px] flex items-center gap-[5px]'>
              <ChatBubbleBottomCenterIcon width={24} />
              <p>Bình luận</p>
            </div>

            <div className='text-[14px] flex items-center gap-[5px]'>
              <ShareIcon width={24} />
              <p>Chia sẻ</p>
            </div>
          </div> */}
        </article>

        <div className=' w-[310px] flex flex-col gap-[20px]'>
          <p className={clsx(
            "text-[19px] text-orange-500 font-semibold px-[10px]",
            lato.className
          )}>
            Bài mới
          </p>
          {notOutstandingNews?.slice(0, 5)?.map((news, index) => (
            <NewsCard
              key={index}
              isHorizontal
              bigThumbHorizontal
              hasExcerpt={false}
              data={news}
            />
          )) || null}

          <p className={clsx(
            "text-[19px] text-orange-500 font-semibold px-[10px]",
            lato.className
          )}>
            Bài nổi bật
          </p>
          {outstandingNews?.filter(news => news?.attributes?.is_outstanding)?.slice(0, 5)?.map((news, index) => (
            <NewsCard
              key={index}
              isHorizontal
              bigThumbHorizontal
              hasExcerpt={false}
              data={news}
            />
          )) || null}

          {[banner2, banner3, banner4]?.map((banner, index) => {
            if (!banner?.image?.data?.attributes?.url) return null
            return (
              <Image
                key={index}
                src={`${urls.baseUrl}${banner?.image?.data?.attributes?.url}`}
                width={310}
                height={310}
                className='aspect-square w-full h-auto object-cover'
                alt=''
              />
            )
          })}
        </div>
      </div>

      <article className='md:hidden px-[10px]'>
        {/* <div className='flex items-center gap-[10px] text-[14px] py-[10px]'>
          <p>Trang chủ</p>
          <p>{"/"}</p>
          <p>{categoryData?.attributes?.name}</p>
          <p>{"/"}</p>
          <p>{newsData?.attributes?.title}</p>
        </div> */}

        <h1 className={clsx(
          'mb-[16px] text-[25px] font-bold',
          lato.className
        )}>
          {newsData?.attributes?.title}
        </h1>

        <div
          className='prose max-w-full prose-img:w-full'
          dangerouslySetInnerHTML={{ __html: newsData?.attributes?.content }}
        ></div>

        {/* <div className='flex justify-end gap-[10px] py-[10px] w-full'>
          <div className='text-[14px] flex items-center gap-[5px]'>
            <ChatBubbleBottomCenterIcon width={24} />
            <p>Bình luận</p>
          </div>

          <div className='text-[14px] flex items-center gap-[5px]'>
            <ShareIcon width={24} />
            <p>Chia sẻ</p>
          </div>
        </div> */}
      </article>

      <div className='px-[10px] md:px-0'>
        <p className="text-[19px] mb-[10px] text-orange-500">
          Cùng danh mục
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-[-10px]'>
          {categoryData?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              hasExcerpt={false}
              data={news}
            />
          )) || null}
        </div>
      </div>
    </>
  )
}

export default News