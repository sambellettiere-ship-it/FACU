import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/siteConfig';
import { servicesData } from '@/lib/servicesData';
import { locationsData } from '@/lib/locationsData';

// Generated at /sitemap.xml. Lists every crawlable URL so search engines can
// discover and index all service and location landing pages quickly.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/subscriptions`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/additional-services`, lastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesData).map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Local landing pages get a high priority — these are the pages that win
  // "pressure washing / garbage can cleaning near me" searches by city.
  const locationRoutes: MetadataRoute.Sitemap = Object.keys(locationsData).map((slug) => ({
    url: `${SITE_URL}/locations/${slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes];
}
