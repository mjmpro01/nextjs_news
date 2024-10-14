import categoriesApi from '@/apis/categories';
import { paths } from '@/constants/paths';
import { siteMetadata } from '@/constants/siteMetadata';

const baseUrl = siteMetadata.siteUrl

export default async function sitemap() {
  const routesMap = Object.values(paths).map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const categoriesRoutesMap = await categoriesApi.getCategories().then(
    res =>
      res?.map(category => ({
        url: `${baseUrl}/${category?.attributes?.slug}`,
        lastModified: new Date().toISOString(),
      }))
  );

  const newsRoutesMap = await categoriesApi.getAllNewsCategorySlugs().then(
    res =>
      res.map(cat => {
        const catSlug = cat?.attributes?.slug;
        return cat?.attributes?.news?.data?.map(news => ({
          url: `${baseUrl}/${catSlug}/${news?.attributes?.slug}`,
          lastModified: new Date().toISOString(),
        }))
      })
        .flat()
  );

  return [...routesMap, ...categoriesRoutesMap, ...newsRoutesMap];
}
