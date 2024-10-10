import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getHeaderBanner = async () => {
  const params = {
    populate: 'deep,2'
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.HEADER_BANNER}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return `${urls.baseUrl}${body?.data?.attributes?.image?.data?.attributes?.url}`
}