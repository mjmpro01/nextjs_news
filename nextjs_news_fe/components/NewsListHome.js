'use client'

import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import newsApi from "@/apis/news";
import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";

import NewsCard from "./NewsCard"

const NewsListHome = ({ banner5 }) => {
  const [initList, setInitList] = useState([])
  const [newsList, setNewsList] = useState([])
  const [page, setPage] = useState(3)
  const [isShowLoadMore, setIsShowLoadMore] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      const { data: notOutstandingNews, pagination } = await newsApi.getNotOutstandingNews(2);

      if (pagination?.page !== pagination?.pageCount) setIsShowLoadMore(true)

      setInitList(notOutstandingNews)
    }

    fetchData();
  }, [])

  const loadMoreNews = async (nextPage) => {
    const { data: notOutstandingNews, pagination } = await newsApi.getNotOutstandingNews(nextPage);
    if (pagination?.page !== pagination?.pageCount) setIsShowLoadMore(true)

    setNewsList([...newsList, ...notOutstandingNews])
    setPage(nextPage + 1)
  }

  return (
    <div className="basis-2/3 max-w-[66.666667%] flex flex-col gap-[10px] py-[10px]">
      {initList?.slice(0, 6)?.map(((data, index) =>
        <NewsCard
          isHorizontal
          bigThumbHorizontal
          titleSmall={false}
          key={index}
          data={data}
        />
      )) || null}
      {banner5?.image?.data?.attributes?.url && (
        <Link href={banner5?.link || paths.HOME}>
          <Image src={`${urls.baseUrl}${banner5?.image?.data?.attributes?.url}`} width={780} height={130} alt="" className="w-full" />
        </Link>
      )}
      {initList?.slice(7, 20)?.map(((data, index) =>
        <NewsCard
          isHorizontal
          bigThumbHorizontal
          titleSmall={false}
          key={index}
          data={data}
        />
      )) || null}

      {newsList?.map(((data, index) =>
        <NewsCard
          isHorizontal
          bigThumbHorizontal
          titleSmall={false}
          key={index}
          data={data}
        />
      )) || null}

      {isShowLoadMore && (
        <Button type="" onClick={() => loadMoreNews(page)}>Xem thêm</Button>
      )}
    </div>
  )
}

export default NewsListHome