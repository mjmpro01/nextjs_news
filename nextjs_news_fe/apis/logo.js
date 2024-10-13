import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getLogo = async () => {
  const params = {
    populate: 'deep,2'
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.LOGO}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error(`Failed to getLogo: ${res.status} ${JSON.stringify(res)}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return `${urls.baseUrl}${body?.data?.attributes?.home_logo?.data?.attributes?.url}`
}