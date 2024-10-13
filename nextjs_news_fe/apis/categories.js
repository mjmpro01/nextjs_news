import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { urls } from "@/constants/urls";

const getCategories = async () => {
  const params = {
    'pagination[pageSize]': 20,
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.CATEGORIES}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`Failed to getCategories: ${res.status}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

const getNewsByCategoryId = async (id) => {
  if (!id) {
    return null
  }

  const params = {
    'fields[0]': 'name',
    'fields[1]': 'slug',
    'populate[news][fields][0]': 'title',
    'populate[news][fields][1]': 'short_description',
    'populate[news][fields][2]': 'created_at',
    'populate[news][fields][3]': 'slug',
    'populate[news][populate][avatar][fields]': 'url',
    'populate[news][populate][category][fields]': 'slug',
    'pagination[pageSize]': 10,
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.CATEGORIES}/${id}?${queryString.stringify(params)}`
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

const getCategoryBySlug = async (slug) => {
  if (!slug) {
    return null
  }

  const params = {
    populate: 'deep,4',
  }

  const endpoint = `${urls.baseUrl}/api/slugify/slugs${apiPaths.CATEGORY}/${slug}?${queryString.stringify(params)}`

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

const getAllNewsCategorySlugs = async () => {
  const params = {
    "fields[0]": 'slug',
    "populate[news][fields][0]": "slug"
  }

  const endpoint = `${urls.baseUrl}/api/${apiPaths.CATEGORIES}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`Failed to getAllNewsCategorySlugs: ${res.status} ${res.messages}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}

const categoriesApi = {
  getCategories,
  getNewsByCategoryId,
  getCategoryBySlug,
  getAllNewsCategorySlugs,
}

export default categoriesApi