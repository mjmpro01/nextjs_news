import queryString from "query-string";

import { apiPaths } from "@/constants/paths";
import { urls } from "@/constants/urls";

export const getCategoryBanner = async () => {
  const params = {
    populate: 'deep,4'
  }
  const endpoint = `${urls.baseUrl}/api${apiPaths.CATEGORY_BANNER}?${queryString.stringify(params)}`
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

  return {
    banner1: body?.data?.attributes?.banner_1,
    banner2: body?.data?.attributes?.banner_2,
    banner3: body?.data?.attributes?.banner_3,
    banner4: body?.data?.attributes?.banner_4,
    banner5: body?.data?.attributes?.banner_5,
    banner6: body?.data?.attributes?.banner_6,
  }
}