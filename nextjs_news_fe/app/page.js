
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBanner } from "@/apis/banner";
import { getNewsByCategoryId } from "@/apis/categories";
import { getAllNews, getOutstandingNews } from "@/apis/news";
import NewsCard from "@/components/NewsCard";
import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";

const Home = async () => {
  const newsData = await getAllNews();
  const outstandingNews = await getOutstandingNews();
  const { banner1, banner2, banner3, banner4, banner5, banner6 } = await getBanner();
  const [newsCat1, newsCat2, newsCat3, newsCat4, newsCat5] = await Promise.all([
    getNewsByCategoryId(1),
    getNewsByCategoryId(2),
    getNewsByCategoryId(3),
    getNewsByCategoryId(4),
    getNewsByCategoryId(5),
  ]).catch(() => notFound());

  if (!newsData?.length) {
    return notFound();
  }

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
                    data={outstandingNews?.[0]}
                  />
                  <div className="flex">
                    {outstandingNews?.slice(1, 4)?.map((data, index) => (
                      <NewsCard
                        key={index}
                        hasExcerpt={false}
                        data={data}
                      />
                    )) || null}
                  </div>
                </div>
              </div>
              <div className="basis-1/3 max-w-[33.333333%]">
                <div className="flex flex-col">
                  <NewsCard
                    hasExcerpt={false}
                    data={outstandingNews?.[4]}
                  />
                  {outstandingNews?.slice(5, 10)?.map(((data, index) => (
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
                  ))) || null}
                </div>
              </div>
            </div>

          </div>
          <div className="basis-1/4 max-w-[25%]">
            <div className="flex flex-col">
              <Link href={banner1?.link || paths.HOME}>
                <Image
                  src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
                  width={300}
                  height={168}
                  alt="galaxy"
                  className="w-full h-[100px] mb-[10px] px-[10px]"
                />
              </Link>
              <p className="text-[19px] mb-[10px] text-[#980d17] px-[10px] font-bold">
                Tin nổi bật
              </p>
              <div className="px-[10px]">
                <div className="w-full border-b border-b-[#CCC]" />
              </div>
              {outstandingNews?.slice(11, 16)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  isHorizontal
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>
        </div>
      </section>

      <section className="hidden md:flex flex-col md:flex-row items-center gap-[10px] my-[20px]">
        <Link href={banner2?.link || paths.HOME}>
          <Image src={`${urls.baseUrl}${banner2?.image?.data?.attributes?.url}`} width={595} height={100} alt="" />
        </Link>
        <Link href={banner3?.link || paths.HOME}>
          <Image src={`${urls.baseUrl}${banner3?.image?.data?.attributes?.url}`} width={595} height={100} alt="" />
        </Link>
      </section>

      <section className="hidden md:block">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17] font-bold">
            {newsCat1?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat1?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC]" />

        <div className="grid grid-cols-3 my-[10px]">
          {newsCat1?.attributes?.news?.data?.slice(0, 3)?.map(((data, index) => (
            <NewsCard
              key={index}
              hasDate
              titleSmall={false}
              data={data}
            />
          ))) || null}
        </div>

        <div className="grid grid-cols-4">
          {newsCat1?.attributes?.news?.data?.slice(4, 8)?.map(((data, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              hasExcerpt={false}
              data={data}
            />
          ))) || null}
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17] font-bold">
            {newsCat2?.attributes?.name}

          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat2?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} data={newsCat2?.attributes?.news?.data?.[0]} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsCat2?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17] font-bold">
            {newsCat3?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat3?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsCat3?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>

          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} data={newsCat3?.attributes?.news?.data?.[0]} />
          </div>
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
        <div className="flex items-center justify-between">
          <p className="text-[19px] mb-[10px] text-[#980d17] font-bold">
            {newsCat4?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat4?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-center">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard titleSmall={false} data={newsCat4?.attributes?.news?.data?.[0]} />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsCat4?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  titleSmall={false}
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>
        </div>
      </section>

      <Link href={banner4?.link || paths.HOME}>
        <Image src={`${urls.baseUrl}${banner4?.image?.data?.attributes?.url}`} width={595} height={100} alt="" className="w-full hidden md:block" />
      </Link>

      <section className="hidden md:block">
        <div className="flex items-start">
          <div className="basis-2/3 max-w-[66.666667%] flex flex-col">
            {newsData?.slice(0, 6)?.map(((data, index) =>
              <NewsCard
                isHorizontal
                bigThumbHorizontal
                hasDate
                titleSmall={false}
                key={index}
                data={data}
              />
            )) || null}
            <Link href={banner5?.link || paths.HOME}>
              <Image src={`${urls.baseUrl}${banner5?.image?.data?.attributes?.url}`} width={595} height={100} alt="" className="w-full" />
            </Link>
            {newsData?.slice(7, 20)?.map(((data, index) =>
              <NewsCard
                isHorizontal
                bigThumbHorizontal
                hasDate
                titleSmall={false}
                key={index}
                data={data}
              />
            )) || null}
          </div>

          <div className="basis-1/3 max-w-[33.333333%]">
            {[newsCat1, newsCat2, newsCat3, newsCat4, newsCat5].map((cat, index) => (
              <div className="my-[10px]" key={index}>
                <div className="flex items-center justify-between">
                  <p className="text-[19px] mb-[10px] text-[#980d17] font-bold">
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
                    {cat?.attributes?.news?.data?.slice(1, 5)?.map((news, index) => (
                      <NewsCard
                        titleSmall={false}
                        hasExcerpt={false}
                        key={index}
                        data={news}
                      />
                    )) || null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Link href={banner6?.link || paths.HOME}>
        <Image src={`${urls.baseUrl}${banner6?.image?.data?.attributes?.url}`} width={595} height={100} alt="" className="w-full hidden md:block" />
      </Link>

      {/* Mobile */}
      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Bài viết mới nhất
        </p>
        <div className="grid grid-cols-2">
          {newsData?.slice(0, 6)?.map((news, index) =>
            <NewsCard key={index} hasExcerpt={false} data={news} />
          ) || null}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          {newsCat1?.attributes?.name}
        </p>
        <div className="grid grid-cols-2">
          {newsCat1?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
            <NewsCard key={index} hasExcerpt={false} data={news} />
          )) || null}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          {newsCat2?.attributes?.name}
        </p>
        <div className="grid grid-cols-2">
          {newsCat2?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
            <NewsCard key={index} hasExcerpt={false} data={news} />
          )) || null}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          {newsCat3?.attributes?.name}
        </p>
        <div className="grid grid-cols-2">
          {newsCat3?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
            <NewsCard key={index} hasExcerpt={false} data={news} />
          )) || null}
        </div>
      </section>

      <section className="my-[20px] md:hidden">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          {newsCat4?.attributes?.name}
        </p>
        <div className="grid grid-cols-2">
          {newsCat4?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
            <NewsCard key={index} hasExcerpt={false} data={news} />
          )) || null}
        </div>
      </section>
    </>
  );
}

export default Home