import queryString from "query-string";

import { paths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getCategories = async () => {
  const params = {
    populate: 'deep,2',
    'pagination[pageSize]': 100,
  }
  const endpoint = `${urls.baseUrl}/api${paths.CATEGORIES}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'cache': 'no-store'
    },
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getNewsByCategory = async (id) => {
  const params = {
    populate: 'deep,4',
    'pagination[pageSize]': 100,
  }
  const endpoint = `${urls.baseUrl}/api${paths.CATEGORIES}/${id}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
      'cache': 'no-store'
    },
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}