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
import { merriweather } from "@/utils/fonts"

export async function generateMetadata({ params: { news } }) {
  const newsData = await newsApi.getNewsBySlug(news);
  return genPageMetadata({ title: newsData?.attributes?.title })
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

  const allNews = await newsApi.getAllNews();
  const categoryData = await categoriesApi.getCategoryBySlug(category)

  return (
    <>
      <Link href={banner1?.link || paths.HOME}>
        <Image
          src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
          width={1170}
          height={234}
          alt=""
          className="w-full"
        />
      </Link>

      <div className='hidden md:flex items-start gap-[10px] py-[10px]'>
        <article className='basis-3/4'>
          <div className='flex items-center gap-[10px] text-[14px] py-[10px]'>
            <Link href={paths.HOME} className="hover:underline hover:text-[#CCC]">Trang chủ</Link>
            <p>{"/"}</p>
            <Link href={`${paths.HOME}/${category}`} className="hover:underline hover:text-[#CCC]">{categoryData?.attributes?.name}</Link>
            <p>{"/"}</p>
            <p>{newsData?.attributes?.title}</p>
          </div>

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

        <div className=' basis-1/4 w-full flex flex-col gap-[20px]'>
          <p className={clsx(
            "text-[19px] text-[#980d17] font-semibold px-[10px]",
            merriweather.className
          )}>
            Bài mới
          </p>
          {allNews?.slice(0, 5)?.map((news, index) => (
            <NewsCard
              key={index}
              isHorizontal
              bigThumbHorizontal
              hasExcerpt={false}
              data={news}
            />
          )) || null}

          <p className={clsx(
            "text-[19px] text-[#980d17] font-semibold px-[10px]",
            merriweather.className
          )}>
            Bài nổi bật
          </p>
          {allNews?.filter(news => news?.attributes?.is_outstanding)?.slice(0, 5)?.map((news, index) => (
            <NewsCard
              key={index}
              isHorizontal
              bigThumbHorizontal
              hasExcerpt={false}
              data={news}
            />
          )) || null}

          {[banner2, banner3, banner4]?.map((banner, index) => (
            <Image
              key={index}
              src={`${urls.baseUrl}${banner?.image?.data?.attributes?.url}`}
              width={300}
              height={209}
              className='aspect-square w-full h-auto object-cover'
              alt=''
            />
          )) || null}
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
        <p className="text-[19px] mb-[10px] text-[#980d17]">
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