import { MetadataRoute } from 'next'

const SITE_URL = 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/home`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/noticias`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contato`,
      lastModified: new Date(),
    },
  ]
}