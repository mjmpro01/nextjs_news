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

  if (!res.ok) {
    throw new Error(`Failed to fetch news by slug: ${res.status}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getNewsByCategoryId = async (id) => {
  if (!id) {
    return null
  }

  const params = {
    'fields[0]': 'name',
    'fields[1]': 'slug',
    'populate[news][fields][0]': 'title',
    'populate[news][fields][1]': 'short_description',
    'populate[news][populate][avatar][fields]': 'url',
    'pagination[pageSize]': 10,
  }
  const endpoint = `${urls.baseUrl}/api${paths.CATEGORIES}/${id}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`Failed to getNewsByCategoryId: ${res.status}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

export const getCategoryBySlug = async (slug) => {
  if (!slug) {
    return null
  }

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

  if (!res.ok) {
    throw new Error(`Failed to getCategoryBySlug: ${res.status} ${res.messages}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}