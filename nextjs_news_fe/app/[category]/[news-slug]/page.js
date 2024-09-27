import { ChatBubbleBottomCenterIcon, ShareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { images } from '@/assets/images'
import NewsCard from '@/components/news-card'


const News = () => (
  <>
    <Image src={images.xperia} width={595} height={100} alt="" className="w-full" />

    <div className='hidden md:flex items-start gap-[10px] py-[10px]'>
      <article className='basis-3/4'>
        <div className='flex items-center gap-[10px] text-[10px] py-[10px]'>
          <p>Diễn đàn</p>
          <p>{">"}</p>
          <p>Điện tử - Tiêu dùng</p>
        </div>

        <div></div>

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
        {Array.from({ length: 5 }).map(index => (
          <NewsCard
            key={index}
            isHorizontal
            bigThumbHorizontal
            hasExcerpt={false}
          />
        ))}

        <p className="text-[19px] text-[#000] font-semibold px-[10px]">
          Bài nổi bật
        </p>
        {Array.from({ length: 5 }).map(index => (
          <NewsCard
            key={index}
            isHorizontal
            bigThumbHorizontal
            hasExcerpt={false}
          />
        ))}

        {Array.from({ length: 3 }).map(index => (
          <Image
            key={index}
            src={images.icloudThumb}
            width={300}
            height={209}
            alt=''
            className=' aspect-square w-full h-auto object-cover'
          />
        ))}
      </div>
    </div>

    <article className='md:hidden px-[10px]'>
      <div className='flex items-center gap-[10px] text-[10px] py-[10px]'>
        <p>Diễn đàn</p>
        <p>{">"}</p>
        <p>Điện tử - Tiêu dùng</p>
      </div>

      <div></div>

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
        {Array.from({ length: 6 }).map(index => (
          <NewsCard
            key={index}
            titleSmall={false}
            hasExcerpt={false}
          />
        ))}
      </div>
    </div>
  </>
)

export default News