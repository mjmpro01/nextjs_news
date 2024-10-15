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
import { lato } from "@/utils/fonts"

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

  const outstandingNews = await newsApi.getOutstandingNews();
  const { data: notOutstandingNews } = await newsApi.getNotOutstandingNews();

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
          {newsList?.slice(2, 5)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>

        {/* Mobile */}
        <div className="grid md:hidden grid-cols-2">
          {newsList?.slice(2, 6)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>
      </div>

      <section className="hidden md:block">
        <div className="flex items-start gap-[20px]">
          <div className="flex-1 flex flex-col gap-[10px]">
            <div className='flex flex-col bg-[#f8f8f8] py-[10px] gap-[10px] rounded-[8px]'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                {newsList?.slice(0, 2)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={true} key={index} data={news} />
                )) || null}
              </div>

              <div className="hidden md:grid grid-cols-3">
                {newsList?.slice(2, 5)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={true} key={index} data={news} />
                )) || null}
              </div>

              <div className="grid md:hidden grid-cols-2">
                {newsList?.slice(2, 6)?.map((news, index) => (
                  <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
                )) || null}
              </div>
            </div>

            {newsList?.slice(5, 13)?.map((news, index) => (
              <NewsCard isHorizontal bigThumbHorizontal titleSmall={false} data={news} key={index} />
            )) || null}
            {banner1?.image?.data?.attributes?.url && (
              <Link href={banner1?.link || paths.HOME}>
                <Image
                  src={`${urls.baseUrl}${banner1?.image?.data?.attributes?.url}`}
                  width={840}
                  height={130}
                  alt=""
                  className={`w-full`}
                />
              </Link>
            )}
            {newsList?.slice(13, 25)?.map((news, index) => (
              <NewsCard isHorizontal bigThumbHorizontal titleSmall={false} data={news} key={index} />
            )) || null}
            <div className="flex items-center justify-center my-[20px]">
              <PaginationComponent pagination={{ ...pagination, pageSize: 25 }} />
            </div>
          </div>

          <div className='w-[310px] flex flex-col gap-[20px]'>
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
            {outstandingNews?.filter(news => news?.attributes?.is_outstanding).slice(0, 5)?.map((news, index) => (
              <NewsCard
                key={index}
                isHorizontal
                bigThumbHorizontal
                hasExcerpt={false}
                data={news}
              />
            )) || null}

            {[banner2, banner3, banner4]?.map((banner, index) => {
              if (!banner?.image?.data?.attributes?.url) return null;

              return (
                <Link
                  key={index}
                  href={banner?.link || paths.HOME}
                >
                  <Image
                    src={`${urls.baseUrl}${banner?.image?.data?.attributes?.url}` || paths.HOME}
                    width={310}
                    height={310}
                    alt=""
                    className={`w-full aspect-square h-auto object-cover`}
                  />
                </Link>
              )
            }) || null}
          </div>
        </div>
      </section>

      {/* Mobile */}
      <section className="md:hidden py-[10px]">
        <p className={clsx(
          "text-[19px] p-[10px] text-orange-500 font-bold",
          lato.className
        )}>
          Tin mới
        </p>
        <div className="grid grid-cols-2">
          {newsList?.slice(6, 25)?.map((news, index) =>
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          ) || null}
        </div>
        <div className="flex items-center justify-center my-[20px]">
          <PaginationComponent pagination={{ ...pagination, pageSize: 25 }} />
        </div>
      </section>
    </>
  )
}

export default page