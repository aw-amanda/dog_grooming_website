import { MetadataRoute } from 'next'

const baseUrl = 'https://aw-amanda.github.io/dog_grooming_website';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

export const dynamic = 'force-static';