import { ArrowRightIcon } from "@heroicons/react/24/outline"
import Image from "next/image"

import { images } from "@/assets/images"
import NewsCard from "@/components/news-card"

const page = () => (
  <>
    <div className='flex items-center gap-[10px] text-[10px] py-[10px]'>
      <p>Diễn đàn</p>
      <p>{">"}</p>
      <p>Điện tử - Tiêu dùng</p>
    </div>

    <div className='flex flex-col bg-[#f8f8f8] py-[10px]'>
      <div className='grid grid-cols-2'>
        <NewsCard titleSmall={false} hasExcerpt={false} />
        <NewsCard titleSmall={false} hasExcerpt={false} />
      </div>

      <div className="grid grid-cols-3">
        <NewsCard titleSmall={false} hasExcerpt={false} />
        <NewsCard titleSmall={false} hasExcerpt={false} />
        <NewsCard titleSmall={false} hasExcerpt={false} />

      </div>
    </div>

    <section>
      <div className="flex items-start">
        <div className="basis-2/3 max-w-[66.666667%] flex flex-col">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard isHorizontal bigThumbHorizontal hasDate titleSmall={false} key={index} />
          )}
          <Image src={images.xperia} width={595} height={100} alt="" className="w-full" />
          {Array.from({ length: 15 }).map(index =>
            <NewsCard isHorizontal bigThumbHorizontal hasDate titleSmall={false} key={index} />
          )}
        </div>

        <div className=' basis-1/3 w-full flex flex-col gap-[20px]'>
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
              className=' aspect-square w-full h-auto object-cover px-[10px]'
            />
          ))}
        </div>
      </div>
    </section>
  </>
)

export default page