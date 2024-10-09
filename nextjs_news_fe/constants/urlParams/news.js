const allOutStandingNewsParams = {
  populate: 'deep,2',
  "fields[0]": "title",
  "fields[1]": "slug",
  "fields[2]": "short_description",
  "fields[3]": "is_outstanding",
  "sort": "createdAt:desc",
  "filters[is_outstanding]": true,
}

const newsCardParams = {
  populate: 'deep,2',
  "fields[0]": "title",
  "fields[1]": "slug",
  "fields[2]": "short_description",
  "fields[3]": "is_outstanding",
  "sort": "createdAt:desc",
}

export const newsUrlParams = {
  allOutStandingNewsParams,
  newsCardParams
}