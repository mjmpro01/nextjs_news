import { ChatBubbleBottomCenterIcon, ShareIcon } from '@heroicons/react/24/outline'

import { images } from '@/assets/images'
import NewsCard from '@/components/news-card'
import { getAllNews, getNewsBySlug } from '@/apis/news'
import { getCategoryBySlug } from '@/apis/categories'
import ClientImageSection from '@/components/client-image-section'


const News = async ({ params: { category, news } }) => {
  const newsData = await getNewsBySlug(news);

  const allNews = await getAllNews();
  const categoryData = await getCategoryBySlug(category)

  return (
    <>
      <ClientImageSection src={images.xperia} width={595} height={100} alt="" className="w-full" />

      <div className='hidden md:flex items-start gap-[10px] py-[10px]'>
        <article className='basis-3/4'>
          <div className='flex items-center gap-[10px] text-[10px] py-[10px]'>
            <p>Trang chủ</p>
            <p>{">"}</p>
            <p>{categoryData?.attributes?.name}</p>
            <p>{">"}</p>
            <p>{newsData?.attributes?.title}</p>
          </div>

          <div
            className='prose max-w-full prose-img:w-full'
            dangerouslySetInnerHTML={{ __html: newsData?.attributes?.content }}
          ></div>

          <div className='flex justify-end gap-[10px] py-[10px] w-full'>
            <div className='text-[14px] flex items-center gap-[5px]'>
              <ChatBubbleBottomCenterIcon width={24} />
              <p>Bình luận</p>
            </div>

            <div className='text-[14px] flex items-center gap-[5px]'>
              <ShareIcon width={24} />
              <p>Chia sẻ</p>
            </div>
          </div>
        </article>

        <div className=' basis-1/4 w-full flex flex-col gap-[20px]'>
          <p className="text-[19px] text-[#000] font-semibold px-[10px]">
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
          ))}

          <p className="text-[19px] text-[#000] font-semibold px-[10px]">
            Bài nổi bật
          </p>
          {allNews?.filter(news => news?.attributes?.is_outstanding).slice(0, 5)?.map((news, index) => (
            <NewsCard
              key={index}
              isHorizontal
              bigThumbHorizontal
              hasExcerpt={false}
              data={news}
            />
          ))}

          {Array.from({ length: 3 }).map(index => (
            <ClientImageSection
              key={index}
              src={images.icloudThumb}
              width={300}
              height={209}
              className=' aspect-square w-full h-auto object-cover'
            />
          ))}
        </div>
      </div>

      <article className='md:hidden px-[10px]'>
        <div className='flex items-center gap-[10px] text-[10px] py-[10px]'>
          <p>Trang chủ</p>
          <p>{">"}</p>
          <p>{categoryData?.attributes?.name}</p>
          <p>{">"}</p>
          <p>{newsData?.attributes?.title}</p>
        </div>

        <div
          className='prose max-w-full prose-img:w-full'
          dangerouslySetInnerHTML={{ __html: newsData?.attributes?.content }}
        ></div>

        <div className='flex justify-end gap-[10px] py-[10px] w-full'>
          <div className='text-[14px] flex items-center gap-[5px]'>
            <ChatBubbleBottomCenterIcon width={24} />
            <p>Bình luận</p>
          </div>

          <div className='text-[14px] flex items-center gap-[5px]'>
            <ShareIcon width={24} />
            <p>Chia sẻ</p>
          </div>
        </div>
      </article>

      <div className='px-[10px] md:px-0'>
        <p className="text-[19px] mb-[10px] text-[#980d17]">
          Cùng danh mục
        </p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mx-[-10px]'>
          {categoryData?.attributes?.news?.data?.slice(0, 6).map((news, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              hasExcerpt={false}
              data={news}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default News