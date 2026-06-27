import { MetadataRoute } from 'next'
import content from '@/data/content.json'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${content.meta.url}/sitemap.xml`,
  }
}
