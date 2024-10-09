import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { getCategories, getCategoryBySlug } from "@/apis/categories"
import { getCategoryBanner } from "@/apis/categoryBanner"
import { getAllNews } from "@/apis/news"
import NewsCard from "@/components/NewsCard"
import { paths } from "@/constants/paths"
import { urls } from "@/constants/urls"

const page = async ({ params: { category } }) => {
  const categories = await getCategories();
  const { banner1, banner2, banner3, banner4 } = await getCategoryBanner();

  const categoryIndex = categories.findIndex(cat => cat?.attributes?.slug === category)
  if (categoryIndex === -1) {
    return notFound();
  }

  const newsData = await getAllNews();
  const categoryData = await getCategoryBySlug(category)

  const categoryNewsList = categoryData?.attributes?.news?.data || []

  return (
    <>
      <div className='flex items-center gap-[10px] text-[10px] py-[10px] px-[10px] md:px-0'>
        <p>Trang chủ</p>
        <p>{">"}</p>
        <p>{categories[categoryIndex]?.attributes?.name}</p>
      </div>

      <div className='flex flex-col bg-[#f8f8f8] py-[10px]'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          {categoryNewsList?.slice(0, 2)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>

        <div className="hidden md:grid grid-cols-3">
          {categoryNewsList?.slice(3, 6)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>

        <div className="grid md:hidden grid-cols-2">
          {categoryNewsList?.slice(3, 7)?.map((news, index) => (
            <NewsCard titleSmall={false} hasExcerpt={false} key={index} data={news} />
          )) || null}
        </div>
      </div>

      <section className="hidden md:block">
        <div className="flex items-start">
          <div className="basis-2/3 max-w-[66.666667%] flex flex-col">
            {categoryNewsList?.slice(7, 13)?.map((news, index) => (
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
            {categoryNewsList?.slice(14, 25)?.map((news, index) => (
              <NewsCard isHorizontal bigThumbHorizontal hasDate titleSmall={false} data={news} key={index} />
            )) || null}
          </div>

          <div className='basis-1/3 w-full flex flex-col gap-[20px]'>
            <p className="text-[19px] text-[#000] font-semibold px-[10px]">
              Bài mới
            </p>
            {newsData?.slice(0, 5)?.map((news, index) => (
              <NewsCard
                key={index}
                isHorizontal
                bigThumbHorizontal
                hasExcerpt={false}
                data={news}
              />
            )) || null}

            <p className="text-[19px] text-[#000] font-semibold px-[10px]">
              Bài nổi bật
            </p>
            {newsData?.filter(news => news?.attributes?.is_outstanding).slice(0, 5)?.map((news, index) => (
              <NewsCard
                key={index}
                isHorizontal
                bigThumbHorizontal
                hasExcerpt={false}
                data={news}
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