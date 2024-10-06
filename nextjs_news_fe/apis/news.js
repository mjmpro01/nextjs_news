import queryString from "query-string";

import { paths } from "@/constants/paths";
import { newsUrlParams } from "@/constants/urlParams/news";
import { urls } from "@/constants/urls";

export const getAllNews = async () => {
  const params = {
    ...newsUrlParams.newsCardParams,
    'pagination[pageSize]': 20,
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

export const getOutstandingNews = async () => {
  const params = {
    ...newsUrlParams.allOutStandingNewsParams,
    'pagination[pageSize]': 20,
  }
  const endpoint = `${urls.baseUrl}/api${paths.NEWS}?${queryString.stringify(params)}`
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

export const getNewsByCategorySlug = async (slug) => {
  if (!slug) {
    return null
  }

  const params = {
    ...newsUrlParams.newsCardParams,
    "filters[category][slug]": slug
  }
  const endpoint = `${urls.baseUrl}/api${paths.NEWS}?${queryString.stringify(params)}`
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

  return body?.data
}