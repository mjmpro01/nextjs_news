import queryString from "query-string";

import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getCategories = async () => {
  const params = {
    'pagination[pageSize]': 20,
  }
  const endpoint = `${urls.baseUrl}/api${paths.CATEGORIES}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getNewsByCategoryId = async (id) => {
  const params = {
    populate: 'deep,4',
    'pagination[pageSize]': 100,
  }
  const endpoint = `${urls.baseUrl}/api${paths.CATEGORIES}/${id}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getCategoryBySlug = async (slug) => {
  const params = {
    populate: 'deep,4',
  }
  const endpoint = `${urls.baseUrl}/api/slugify/slugs${paths.CATEGORY}/${slug}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}