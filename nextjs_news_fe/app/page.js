
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { getBanner } from "@/apis/banner";
import categoriesApi from "@/apis/categories";
import newsApi from "@/apis/news";
import NewsCard from "@/components/NewsCard";
import NewsListHome from "@/components/NewsListHome";
import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";
import { merriweather } from "@/utils/fonts";

const Home = async () => {
  const newsData = await newsApi.getAllNews();
  const outstandingNews = await newsApi.getOutstandingNews();
  const { data: notOutstandingNews } = await newsApi.getNotOutstandingNews();
  const { banner1, banner2, banner3, banner4, banner5, banner6 } = await getBanner();
  const categories = await categoriesApi.getCategories();

  const categoriesIds = categories.map(cat => cat.id)

  const newsCat = await Promise.all(
    categoriesIds.map(id => categoriesApi.getNewsByCategoryId(id))
  ).catch(() => notFound());

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
                    data={notOutstandingNews?.[0]}
                  />
                  <div className="flex">
                    {notOutstandingNews?.slice(1, 4)?.map((data, index) => (
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
                  {banner1?.image?.data?.attributes?.url && (
                    <Link href={banner1?.link || paths.HOME}>
                      <Image
                        src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
                        width={300}
                        height={168}
                        alt="galaxy"
                        className="w-full h-[100px] mb-[10px] px-[10px]"
                      />
                    </Link>
                  )}
                  <div className="px-[10px]">
                    <div className="w-full border-b border-b-[#CCC]" />
                  </div>
                  <div className="flex flex-col gap-[10px] py-[10px]">
                    {notOutstandingNews?.slice(4, 9)?.map(((data, index) => (
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
            </div>

          </div>
          <div className="basis-1/4 max-w-[25%]">
            <div className="flex flex-col">
              <NewsCard
                hasExcerpt={false}
                data={notOutstandingNews?.[9]}
              />
              {notOutstandingNews?.slice(10, 16)?.map(((data, index) => (
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
      </section>

      <section className="hidden md:flex flex-col md:flex-row items-center gap-[10px] my-[20px]">
        {banner2?.image?.data?.attributes?.url && (
          <Link href={banner2?.link || paths.HOME}>
            <Image src={`${urls.baseUrl}${banner2?.image?.data?.attributes?.url}`} width={595} height={100} alt="" />
          </Link>
        )}
        {banner3?.image?.data?.attributes?.url && (
          <Link href={banner3?.link || paths.HOME}>
            <Image src={`${urls.baseUrl}${banner3?.image?.data?.attributes?.url}`} width={595} height={100} alt="" />
          </Link>
        )}
      </section>

      <section className="hidden md:block py-[10px]">
        <div className="flex items-center justify-between">
          <p className={clsx(
            "text-[19px] mb-[10px] text-[#980d17] font-bold",
            merriweather.className
          )}>
            Tin nổi bật
          </p>
        </div>
        <div className="w-full border-b border-b-[#CCC]" />

        <div className="grid grid-cols-3 my-[10px]">
          {outstandingNews?.slice(0, 3)?.map(((data, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              data={data}
            />
          ))) || null}
        </div>

        <div className="grid grid-cols-4">
          {outstandingNews?.slice(3, 7)?.map(((data, index) => (
            <NewsCard
              key={index}
              hasExcerpt={false}
              data={data}
            />
          ))) || null}
        </div>
      </section>

      <section className="hidden md:block py-[10px]">
        <div className="flex items-center justify-between">
          <p className={clsx(
            "text-[19px] mb-[10px] text-[#980d17] font-bold",
            merriweather.className
          )}>
            {newsCat?.[0]?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat?.[0]?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC]" />

        <div className="grid grid-cols-3 my-[10px]">
          {newsCat?.[0]?.attributes?.news?.data?.slice(0, 3)?.map(((data, index) => (
            <NewsCard
              key={index}
              titleSmall={false}
              data={data}
            />
          ))) || null}
        </div>

        <div className="grid grid-cols-4">
          {newsCat?.[0]?.attributes?.news?.data?.slice(3, 7)?.map(((data, index) => (
            <NewsCard
              key={index}
              hasExcerpt={false}
              data={data}
            />
          ))) || null}
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
        <div className="flex items-center justify-between">
          <p className={clsx(
            "text-[19px] mb-[10px] text-[#980d17] font-bold",
            merriweather.className
          )}>
            {newsCat?.[1]?.attributes?.name}

          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat?.[1]?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-start">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard
              titleSmall={false}
              data={newsCat?.[1]?.attributes?.news?.data?.[0]}
            />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2 gap-[10px]">
              {newsCat?.[1]?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
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
          <p className={clsx(
            "text-[19px] mb-[10px] text-[#980d17] font-bold",
            merriweather.className
          )}>
            {newsCat?.[2]?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat?.[2]?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-start">
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsCat?.[2]?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>

          <div className="basis-1/2 max-w-[50%]">
            <NewsCard
              titleSmall={false}
              data={newsCat?.[2]?.attributes?.news?.data?.[0]}
            />
          </div>
        </div>
      </section>

      <section className="py-[10px] hidden md:block">
        <div className="flex items-center justify-between">
          <p className={clsx(
            "text-[19px] mb-[10px] text-[#980d17] font-bold",
            merriweather.className
          )}>
            {newsCat?.[3]?.attributes?.name}
          </p>
          <Link
            className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap"
            href={`/${newsCat?.[3]?.attributes?.slug}`}
          >
            Xem tất cả
            <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
          </Link>
        </div>
        <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

        <div className="flex items-start">
          <div className="basis-1/2 max-w-[50%]">
            <NewsCard
              titleSmall={false}
              data={newsCat?.[3]?.attributes?.news?.data?.[0]}
            />
          </div>
          <div className="basis-1/2 max-w-[50%]">
            <div className="grid grid-cols-3 grid-rows-2">
              {newsCat?.[3]?.attributes?.news?.data?.slice(1, 7)?.map(((data, index) => (
                <NewsCard
                  key={index}
                  hasExcerpt={false}
                  data={data}
                />
              ))) || null}
            </div>
          </div>
        </div>
      </section>

      {banner4?.image?.data?.attributes?.url && (
        <Link href={banner4?.link || paths.HOME}>
          <Image src={`${urls.baseUrl}${banner4?.image?.data?.attributes?.url}`} width={1170} height={234} alt="" className="w-full hidden md:block" />
        </Link>
      )}

      <section className="hidden md:block">
        <div className="flex items-start gap-[20px]">
          <NewsListHome banner5={banner5} />

          <div className="basis-1/3 max-w-[33.333333%]">
            {[newsCat?.[4], newsCat?.[5], newsCat?.[6], newsCat?.[7], newsCat?.[8]].map((cat, index) => {
              if (!cat?.id) return null
              return (
                <div className="my-[10px]" key={index}>
                  <div className="flex items-center justify-between">
                    <p className={clsx(
                      "text-[19px] mb-[10px] text-[#980d17] font-bold",
                      merriweather.className
                    )}>
                      {cat?.attributes?.name}
                    </p>
                    <p className="text-[#b1b1b1] text-[14px] flex gap-[10px] whitespace-nowrap">
                      Xem tất cả
                      <ArrowRightIcon className="text-[#b1b1b1] w-[10px]" />
                    </p>
                  </div>
                  <div className="w-full border-b border-b-[#CCC] mb-[10px]" />

                  <div className="flex flex-col gap-[10px]">
                    <NewsCard
                      titleSmall={false}
                      hasExcerpt={false}
                      data={cat?.attributes?.news?.data?.[0]}
                    />
                    <div className="grid grid-cols-2 gap-[10px]">
                      {cat?.attributes?.news?.data?.slice(1, 5)?.map((news, index) => (
                        <NewsCard
                          hasExcerpt={false}
                          key={index}
                          data={news}
                        />
                      )) || null}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {banner6?.image?.data?.attributes?.url && (
        <Link href={banner6?.link || paths.HOME}>
          <Image src={`${urls.baseUrl}${banner6?.image?.data?.attributes?.url}`} width={1170} height={234} alt="" className="w-full hidden md:block" />
        </Link>
      )}

      {/* Mobile */}
      <section className="my-[20px] md:hidden">
        <p className={clsx(
          "text-[18px] leading-[22px] text-[#980d17] font-bold p-[10px]",
          merriweather.className
        )}>
          Bài viết mới nhất
        </p>
        <div className="grid grid-cols-2">
          {newsData?.slice(0, 6)?.map((news, index) =>
            <NewsCard key={index} hasExcerpt={false} data={news} />
          ) || null}
        </div>
      </section>

      {[newsCat?.[0], newsCat?.[1], newsCat?.[2], newsCat?.[3], newsCat?.[4]].map((cat, index) => {
        if (!cat?.id) return null

        return (
          <section className="my-[20px] md:hidden" key={index}>
            <p className={clsx(
              "text-[18px] leading-[22px] text-[#980d17] font-bold p-[10px]",
              merriweather.className
            )}>
              {cat?.attributes?.name}
            </p>
            <div className="grid grid-cols-2">
              {cat?.attributes?.news?.data?.slice(0, 6)?.map((news, index) => (
                <NewsCard key={index} hasExcerpt={false} data={news} />
              )) || null}
            </div>
          </section>
        )
      })}

    </>
  );
}

export default Home