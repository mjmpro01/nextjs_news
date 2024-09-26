
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { images } from "@/assets/images";
import NewsCard from "@/components/news-card";

export default function Home() {
  return (
    <>
      <section className="pt-[10px]">
        <div className="flex items-start w-full">
          <div className="basis-3/4 max-w-[75%]">
            <div className="flex">
              <div className="basis-2/3 max-w-[66.666667%]">
                <div className="flex flex-col gap-[10px]">
                  <NewsCard
                    titleSmall={false}
                    titleLarge
                  />
                  <div className="flex">
                    <NewsCard hasExcerpt={false} />
                    <NewsCard hasExcerpt={false} />
                    <NewsCard hasExcerpt={false} />
                  </div>
                </div>
              </div>
              <div className="basis-1/3 max-w-[33.333333%]">
                <div className="flex flex-col">
                  <NewsCard hasExcerpt={false} />
                  {Array.from({ length: 6 }).map((index => (
                    <div key={index}>
                      <div className="px-[10px]">
                        <div className="w-full border-b border-b-[#CCC]" />
                      </div>
                      <NewsCard hasThumbnail={false} hasExcerpt={false} />
                    </div>
                  )))}
                </div>
              </div>
            </div>

          </div>
          <div className="basis-1/4 max-w-[25%]">
            <div className="flex flex-col">
              <Image
                src={images.galaxy}
                width={300}
                height={168}
                alt="galaxy"
                className="w-full h-[100px] mb-[10px] px-[10px]"
              />
              <p className="text-[19px] mb-[10px] text-[#980d17] px-[10px]">
                Kinh nghiệm - hướng dẫn
              </p>
              <div className="px-[10px]">
                <div className="w-full border-b border-b-[#CCC]" />
              </div>
              <NewsCard isHorizontal hasExcerpt={false} />
              <NewsCard isHorizontal hasExcerpt={false} />
              <NewsCard isHorizontal hasExcerpt={false} />
              <NewsCard isHorizontal hasExcerpt={false} />
              <NewsCard isHorizontal hasExcerpt={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="flex items-center gap-[10px] my-[20px]">
        <Image src={images.xperia} width={595} height={100} alt="" />
        <Image src={images.xperia} width={595} height={100} alt="" />
      </section>

      <section>
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17]">
            Mở khóa tài khoản Google
          </p>
          <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </p>
        </div>
        <div className="w-full border-b border-b-[#CCC]" />

        <div className="flex items-center my-[10px]">
          <NewsCard hasDate titleSmall={false} />
          <NewsCard hasDate titleSmall={false} />
          <NewsCard hasDate titleSmall={false} />
        </div>

        <div className="flex items-center">
          <NewsCard titleSmall={false} hasExcerpt={false} />
          <NewsCard titleSmall={false} hasExcerpt={false} />
          <NewsCard titleSmall={false} hasExcerpt={false} />
          <NewsCard titleSmall={false} hasExcerpt={false} />
        </div>
      </section>

      <section className="py-[10px]">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17]">
            Danh mục
          </p>
          <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </p>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-[10px]">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17]">
            Danh mục
          </p>
          <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </p>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
            </div>
          </div>

          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} />
          </div>
        </div>
      </section>

      <section className="py-[10px]">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17]">
            Danh mục
          </p>
          <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </p>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
              <NewsCard titleSmall={false} hasExcerpt={false} />
            </div>
          </div>
        </div>
      </section>

      <Image src={images.xperia} width={595} height={100} alt="" className="w-full" />

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

          <div className="basis-1/3 max-w-[33.333333%]">
            {Array.from({ length: 5 }).map(index => (
              <div className="my-[10px]" key={index}>
                <div className="flex items-center justify-between">
                  <p className="text-[19px] mb-[10px] text-[#980d17]">
                    Danh mục
                  </p>
                  <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
                    Xem tất cả
                    <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
                  </p>
                </div>
                <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

                <div className="flex flex-col">
                  <NewsCard titleSmall={false} hasExcerpt={false} />
                  <div className="grid grid-cols-2 grid-rows-2">
                    <NewsCard titleSmall={false} hasExcerpt={false} />
                    <NewsCard titleSmall={false} hasExcerpt={false} />
                    <NewsCard titleSmall={false} hasExcerpt={false} />
                    <NewsCard titleSmall={false} hasExcerpt={false} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Image src={images.xperia} width={595} height={100} alt="" className="w-full" />

    </>
  );
}
