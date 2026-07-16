import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteConfig';

// Generated at /robots.txt. Allows all crawlers everywhere and points them at
// the sitemap so new pages are found and indexed as fast as possible.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
