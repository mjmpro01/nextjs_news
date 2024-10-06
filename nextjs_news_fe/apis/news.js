import queryString from "query-string";

import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getAllNews = async () => {
  const params = {
    populate: 'deep,2',
    'pagination[pageSize]': 100,
  }
  const endpoint = `${urls.baseUrl}/api${paths.NEWS}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getNewsBySlug = async (slug) => {
  console.log("🚀 ~ file: news.js:34 ~ getNewsBySlug ~ slug:", slug)
  if (!slug) {
    return null
  }

  const params = {
    populate: 'deep,2',
  }
  const endpoint = `${urls.baseUrl}/api/slugify/slugs${paths.NEW}/${slug}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to fetch news by slug: ${res.status} ${JSON.stringify(res)}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}