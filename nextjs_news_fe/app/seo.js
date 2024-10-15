import { getLogo } from '@/apis/logo';
import { siteMetadata } from '@/constants/siteMetadata'

export async function genPageMetadata({ title, description, siteName, image, ...rest }) {
  const logo = await getLogo();

  return {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteName || siteMetadata.title,
      images: image ? [image] : [logo],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [logo],
    },
    ...rest,
  }
}
