import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import categoriesApi from "@/apis/categories"
import { getCategoryBanner } from "@/apis/categoryBanner"
import newsApi from "@/apis/news"
import NewsCard from "@/components/NewsCard"
import PaginationComponent from "@/components/Pagination"
import { paths } from "@/constants/paths"
import { urls } from "@/constants/urls"
import { merriweather } from "@/utils/fonts"

import { genPageMetadata } from "../seo"

export async function generateMetadata({ params: { category } }) {
  const categoryData = await categoriesApi.getCategoryBySlug(category)
  return genPageMetadata({ title: categoryData?.attributes?.name })
}

const page = async ({ params: { category }, searchParams }) => {
  const categories = await categoriesApi.getCategories();
  const { banner1, banner2, banner3, banner4 } = await getCategoryBanner();

  const categoryIndex = categories.findIndex(cat => cat?.attributes?.slug === category)
  if (categoryIndex === -1) {
    return notFound();
  }

  const newsData = await newsApi.getAllNews();

  const { data: newsList, pagination } = await newsApi.getNewsByCategorySlug(category, searchParams)

  return (
    <>
      <div className='flex items-center gap-[10px] text-[14px] py-[10px] px-[10px] md:px-0'>
        <Link href={paths.HOME} className="hover:underline hover:text-[#CCC]">Trang chủ</Link>
        <p>{"/"}</p>
        <p>{categories[categoryIndex]?.attributes?.name}</p>
      </div>

      <div className='md:hidden flex flex-col bg-[#f8f8f8] py-[10px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {newsList?.slice(0, 2)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>

        <div className="hidden md:grid grid-cols-3">
          {newsList?.slice(3, 6)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>

        <div className="grid md:hidden grid-cols-2">
          {newsList?.slice(3, 7)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>
      </div>

      <section className="hidden md:block">
        <div className="flex items-start gap-[20px]">
          <div className="basis-2/3 max-w-[66.666667%] flex flex-col gap-[10px]">
            <div className='flex flex-col bg-[#f8f8f8] py-[10px] gap-[10px] rounded-[8px]'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {newsList?.slice(0, 2)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={true} key={index} data={news} hasDate />
                )) || null}
              </div>

              <div className="hidden md:grid grid-cols-3">
                {newsList?.slice(3, 6)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={true} key={index} data={news} hasDate />
                )) || null}
              </div>

              <div className="grid md:hidden grid-cols-2">
                {newsList?.slice(3, 7)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
                )) || null}
              </div>
            </div>

            {newsList?.slice(7, 13)?.map((news, index) => (
              <NewsCard isHorizontal bigThumbHorizontal hasDate titleSmall={false} data={news} key={index} />
            )) || null}
            <Link href={banner1?.link || paths.HOME}>
              <Image
                src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
                width={595}
                height={100}
                alt=""
                className={`w-full`}
              />
            </Link>
            {newsList?.slice(14, 25)?.map((news, index) => (
              <NewsCard isHorizontal bigThumbHorizontal hasDate titleSmall={false} data={news} key={index} />
            )) || null}
            <div className="flex items-center justify-center my-[20px]">
              <PaginationComponent pagination={pagination} />
            </div>
          </div>

          <div className='basis-1/3 w-full flex flex-col gap-[20px]'>
            <p className={clsx(
              "text-[19px] text-[#980d17] font-semibold px-[10px]",
              merriweather.className
            )}>
              Bài mới
            </p>
            {newsData?.slice(0, 5)?.map((news, index) => (
              <NewsCard
                key={index}
                isHorizontal
                bigThumbHorizontal
                hasExcerpt={false}
                data={news}
                hasDate
              />
            )) || null}

            <p className={clsx(
              "text-[19px] text-[#980d17] font-semibold px-[10px]",
              merriweather.className
            )}>
              Bài nổi bật
            </p>
            {newsData?.filter(news => news?.attributes?.is_outstanding).slice(0, 5)?.map((news, index) => (
              <NewsCard
                key={index}
                isHorizontal
                bigThumbHorizontal
                hasExcerpt={false}
                data={news}
                hasDate
              />
            )) || null}

            {[banner2, banner3, banner4]?.map((banner, index) => (
              <Link
                key={index}
                href={banner?.link || paths.HOME}
              >
                <Image
                  src={`${urls.baseUrl}${banner?.image?.data?.attributes?.url}` || paths.HOME}
                  width={300}
                  height={209}
                  alt=""
                  className={`w-full aspect-square h-auto object-cover px-[10px]`}
                />
              </Link>
            )) || null}
          </div>
        </div>
      </section>

      <section className="md:hidden py-[10px]">
        <p className="text-[18px] leading-[22px] text-[#0A0103] p-[10px]">
          Tin mới
        </p>
        <div className="grid grid-cols-2">
          {newsData?.slice(0, 6)?.map((news, index) =>
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          ) || null}
        </div>
      </section>
    </>
  )
}

export default page