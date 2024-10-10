const allOutStandingNewsParams = {
  "fields[0]": "title",
  "fields[1]": "slug",
  "fields[2]": "short_description",
  "fields[3]": "is_outstanding",
  "fields[4]": "created_at",
  "populate[avatar][fields][0]": "url",
  "populate[category][fields][0]": "slug",
  "sort": "createdAt:desc",
  "filters[is_outstanding]": true,
}

const newsCardParams = {
  "fields[0]": "title",
  "fields[1]": "slug",
  "fields[2]": "short_description",
  "fields[3]": "is_outstanding",
  "fields[4]": "created_at",
  "populate[avatar][fields][0]": "url",
  "populate[category][fields][0]": "slug",
  "sort": "createdAt:desc",
}

export const newsUrlParams = {
  allOutStandingNewsParams,
  newsCardParams
}