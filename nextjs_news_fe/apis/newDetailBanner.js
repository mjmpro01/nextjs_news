import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getNewDetailBanner = async () => {
  const params = {
    populate: 'deep,4'
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.NEW_DETAIL_BANNER}?${queryString.stringify(params)}`
  const res = await fetch(endpoint, {
    method: "GET",
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    throw new Error(`Failed to getNewDetailBanner: ${res.status} ${JSON.stringify(res)}`);
  }

  const body = await res.json();

  if (body?.errors) {
    throw body?.errors?.message
  }

  return {
    banner1: body?.data?.attributes?.banner_1,
    banner2: body?.data?.attributes?.banner_2,
    banner3: body?.data?.attributes?.banner_3,
    banner4: body?.data?.attributes?.banner_4,
  }
}