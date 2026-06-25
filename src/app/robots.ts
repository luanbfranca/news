import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [ '/components/', '/mocks/', '/models/', '/services/', '/utils/' ],
    },
    sitemap: 'http://localhost:3000/sitemap.xml',
  }
}