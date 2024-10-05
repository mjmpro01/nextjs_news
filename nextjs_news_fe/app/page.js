
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import { getNewsByCategory } from "@/apis/categories";
import { getAllNews } from "@/apis/news";
import { images } from "@/assets/images";
import NewsCard from "@/components/news-card";

export default async function Home() {
  const newsData = await getAllNews();
  const [newsCat1, newsCat2, newsCat3, newsCat4, newsCat5] = await Promise.all([
    getNewsByCategory(1),
    getNewsByCategory(2),
    getNewsByCategory(3),
    getNewsByCategory(4),
    getNewsByCategory(5),
  ]);

  return (
    <>
      <section className="pt-[10px] hidden md:block">
        <div className="flex items-start w-full">
          <div className="basis-3/4 max-w-[75%]">
            <div className="flex">
              <div className="basis-2/3 max-w-[66.666667%]">
                <div className="flex flex-col gap-[10px]">
                  <NewsCard
                    titleSmall={false}
                    titleLarge
                    data={newsData?.[0]}
                  />
                  <div className="flex">
                    {newsData?.slice(1, 4).map((data, index) => (
                      <NewsCard
                        key={index}
                        hasExcerpt={false}
                        data={data}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="basis-1/3 max-w-[33.333333%]">
                <div className="flex flex-col">
                  <NewsCard
                    hasExcerpt={false}
                    data={newsData?.[4]}
                  />
                  {newsData?.slice(5, 10).map(((data, index) => (
                    <div key={index}>
                      <div className="px-[10px]">
                        <div className="w-full border-b border-b-[#CCC]" />
                      </div>
                      <NewsCard
                        hasThumbnail={false}
                        hasExcerpt={false}
                        data={data}
                      />
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
              {newsData?.slice(11, 16)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  isHorizontal
                  hasExcerpt={false}
                  data={data}
                />
              )))}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-col md:flex-row items-center gap-[10px] my-[20px]">
        <Image src={images.xperia} width={595} height={100} alt="" />
        <Image src={images.xperia} width={595} height={100} alt="" />
      </section>

      <section className="hidden md:block">
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

        <div className="grid grid-cols-3 my-[10px]">
          {newsData?.slice(17, 20)?.map(((data, index) => (
            <NewsCard
              key={index}
              hasDate
              titleSmall={false}
              data={data}
            />
          )))}
        </div>

        <div className="grid grid-cols-4">
          {newsData?.slice(21, 25)?.map(((data, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              hasExcerpt={false}
              data={data}
            />
          )))}
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
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
            <NewsCard titleSmall={false} data={newsData?.[26]} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsData?.slice(27, 33)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              )))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
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
              {newsData?.slice(34, 40)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              )))}
            </div>
          </div>

          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} data={newsData?.[41]} />
          </div>
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
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
            <NewsCard titleSmall={false} data={newsData?.[42]} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsData?.slice(43, 49)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              )))}
            </div>
          </div>
        </div>
      </section>

      <Image src={images.xperia} width={595} height={100} alt="" className="w-full hidden md:block" />

      <section className="hidden md:block">
        <div className="flex items-start">
          <div className="basis-2/3 max-w-[66.666667%] flex flex-col">
            {newsData?.slice(50, 56)?.map(((data, index) =>
              <NewsCard
                isHorizontal
                bigThumbHorizontal
                hasDate
                titleSmall={false}
                key={index}
                data={data}
              />
            ))}
            <Image src={images.xperia} width={595} height={100} alt="" className="w-full" />
            {newsData?.slice(56, 71)?.map(((data, index) =>
              <NewsCard
                isHorizontal
                bigThumbHorizontal
                hasDate
                titleSmall={false}
                key={index}
                data={data}
              />
            ))}
          </div>

          <div className="basis-1/3 max-w-[33.333333%]">
            {[newsCat1, newsCat2, newsCat3, newsCat4, newsCat5].map((cat, index) => (
              <div className="my-[10px]" key={index}>
                <div className="flex items-center justify-between">
                  <p className="text-[19px] mb-[10px] text-[#980d17]">
                    {cat?.attributes?.name}
                  </p>
                  <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
                    Xem tất cả
                    <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
                  </p>
                </div>
                <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

                <div className="flex flex-col">
                  <NewsCard
                    titleSmall={false}
                    hasExcerpt={false}
                    data={cat?.attributes?.news?.data?.[0]}
                  />
                  <div className="grid grid-cols-2">
                    {cat?.attributes?.news?.data?.slice(1, 5).map((news, index) => (
                      <NewsCard
                        titleSmall={false}
                        hasExcerpt={false}
                        key={index}
                        data={news}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Image src={images.xperia} width={595} height={100} alt="" className="w-full hidden md:block" />


      {/* Mobile */}
      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Bài viết mới nhất
        </p>
        <div className="grid grid-cols-2">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard key={index} hasExcerpt={false} />
          )}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Gỡ bỏ tài khoản Google
        </p>
        <div className="grid grid-cols-2">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard key={index} hasExcerpt={false} />
          )}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Gỡ bỏ tài khoản Icloud
        </p>
        <div className="grid grid-cols-2">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard key={index} hasExcerpt={false} />
          )}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Mở khóa nhà mạng
        </p>
        <div className="grid grid-cols-2">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard key={index} hasExcerpt={false} />
          )}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Thủ thuật – kinh nghiệm
        </p>
        <div className="grid grid-cols-2">
          {Array.from({ length: 6 }).map(index =>
            <NewsCard key={index} hasExcerpt={false} />
          )}
        </div>
      </section>
    </>
  );
}
