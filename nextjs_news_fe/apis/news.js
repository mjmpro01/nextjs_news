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
      'cache': 'no-store'
    },
  })

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return body?.data
}
