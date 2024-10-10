import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { newsUrlParams } from "@/constants/urlParams/news";
import { urls } from "@/constants/urls";

const getAllNews = async () => {
  const params = {
    ...newsUrlParams.newsCardParams,
    'pagination[pageSize]': 20,
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.NEWS}?${queryString.stringify(params)}`
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

const getNewsBySlug = async (slug, queryParams) => {
  if (!slug) {
    return null
  }

  const params = {
    ...queryParams,
    populate: 'deep,2',
  }
  const endpoint = `${urls.baseUrl}/api/slugify/slugs${apiPaths.NEW}/${slug}?${queryString.stringify(params)}`
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

const getOutstandingNews = async () => {
  const params = {
    ...newsUrlParams.allOutStandingNewsParams,
    'pagination[pageSize]': 20,
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.NEWS}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to getOutstandingNews: ${res.status} ${JSON.stringify(res)}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

const getNewsByCategorySlug = async (slug, searchParams) => {
  if (!slug) {
    return null
  }

  const params = {
    ...newsUrlParams.newsCardParams,
    "filters[category][slug]": slug,
    'pagination[page]': Number(searchParams?.page) || 1,
    'pagination[pageSize]': Number(searchParams?.pageSize) || 25,
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.NEWS}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to getNewsByCategorySlug: ${res.status} ${JSON.stringify(res)}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return {
    data: body?.data || [],
    pagination: body?.meta?.pagination,
  }
}

const newsApi = {
  getAllNews,
  getNewsBySlug,
  getOutstandingNews,
  getNewsByCategorySlug
}

export default newsApi