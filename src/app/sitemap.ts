import { MetadataRoute } from 'next'
import content from '@/data/content.json'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: content.meta.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
