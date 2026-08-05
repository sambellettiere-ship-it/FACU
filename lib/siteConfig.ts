// Central place for the site's canonical URL, business "NAP" (Name, Address,
// Phone) details, and structured-data (JSON-LD) builders. Keeping this in one
// spot means the sitemap, metadata, and every schema block stay consistent —
// which is exactly what search engines reward for local ranking.

// The public production domain. Overridable via env for preview deployments,
// but defaults to the live custom domain so canonical URLs, the sitemap, and
// Open Graph tags are always absolute and point at the real site.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://funkawaygcs.com'
).replace(/\/$/, '');

// Core business facts, reused across metadata and structured data.
export const BUSINESS = {
  name: 'Funk Away Garbage Cleaning Service',
  legalName: 'Funk Away Garbage Cleaning Service LLC',
  shortName: 'Funk Away GCS',
  slogan: 'Let us wash that STANK the FUNK AWAY!',
  description:
    'Funk Away GCS provides professional pressure washing, power washing, and garbage can & dumpster cleaning for homes and businesses across Champaign County, IL.',
  telephone: '+1-217-552-6182',
  telephoneDisplay: '(217) 552-6182',
  email: 'funkaway_gcs@yahoo.com',
  priceRange: '$$',
  // Business hours, surfaced to search engines via `openingHoursSpecification`
  // so Google can show an "Open now / Closes 6 PM" line and answer
  // "open now" queries. ⚠️ These are sensible defaults — update them to Rob &
  // Ray's real hours before relying on them, since wrong hours frustrate
  // customers and hurt trust.
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday'], opens: '09:00', closes: '16:00' },
  ],
  // Mobile, service-area business. Primary market is the Champaign–Urbana metro.
  address: {
    locality: 'Champaign',
    region: 'IL',
    country: 'US',
  },
  // Approx. center of Champaign, IL — anchors the business to the local map.
  geo: {
    latitude: 40.1164,
    longitude: -88.2434,
  },
  // Everywhere we serve. Champaign County first so it reads as the primary area.
  areaServed: [
    'Champaign County',
    'Champaign, IL',
    'Urbana, IL',
    'Savoy, IL',
    'Mahomet, IL',
    'Rantoul, IL',
    'St. Joseph, IL',
    'Danville, IL',
    'Westville, IL',
    'Central Illinois',
  ],
  // Verified profiles — `sameAs` links help search engines confirm the entity.
  sameAs: [
    'https://www.facebook.com/FunkAwayGCS7434',
    'https://www.tiktok.com/@funk.away.gcs',
    'https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il',
  ],
  logo: `${SITE_URL}/funkawaymascots.png`,
  image: `${SITE_URL}/funkawaymascots.png`,
} as const;

// Default social-share image (Open Graph / Twitter). 1200×630 is the size
// Facebook, LinkedIn, and iMessage render without cropping. Used as the
// fallback share card on every page that doesn't set its own image.
export const DEFAULT_OG_IMAGE = {
  url: '/og-default.png',
  width: 1200,
  height: 630,
  alt: 'Funk Away GCS — Champaign County pressure washing & garbage can cleaning',
} as const;

// Aggregate review data shown as a star rating in Google results. Populate
// `ratingValue` and `reviewCount` from the business's real Google Business
// Profile totals — Google's guidelines require ratings to reflect genuine
// reviews, so this stays `null` until real numbers are filled in. When set,
// `localBusinessSchema()` automatically emits an `aggregateRating`.
export const AGGREGATE_RATING: {
  ratingValue: number;
  reviewCount: number;
} | null = null;

// Stable @id so every schema block can reference the same business node.
const BUSINESS_ID = `${SITE_URL}/#business`;

type Json = Record<string, unknown>;

// Site-wide LocalBusiness node. Rendered on every page via the root layout so
// search engines always have the business's name, contact info, service area,
// and social profiles available.
export function localBusinessSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    alternateName: BUSINESS.shortName,
    description: BUSINESS.description,
    url: SITE_URL,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    slogan: BUSINESS.slogan,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.locality,
      addressRegion: BUSINESS.address.region,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.geo.latitude,
      longitude: BUSINESS.geo.longitude,
    },
    // Lets search engines surface hours ("Open now / Closes 6 PM").
    openingHoursSpecification: BUSINESS.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    // Explicit customer-service contact point for the phone number.
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      telephone: BUSINESS.telephone,
      email: BUSINESS.email,
      areaServed: 'US-IL',
      availableLanguage: ['English'],
    },
    areaServed: BUSINESS.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    knowsAbout: [
      'Pressure washing',
      'Power washing',
      'Soft washing',
      'Garbage can cleaning',
      'Trash bin sanitization',
      'Commercial dumpster cleaning',
    ],
    // Star rating in search results — only emitted once real review totals are
    // set in AGGREGATE_RATING (see note there).
    ...(AGGREGATE_RATING
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: AGGREGATE_RATING.ratingValue,
            reviewCount: AGGREGATE_RATING.reviewCount,
          },
        }
      : {}),
    sameAs: BUSINESS.sameAs,
  };
}

// WebSite node — ties the domain to the business as its publisher.
export function websiteSchema(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  };
}

// FAQPage node for the homepage FAQ. Feed it the same Q&A the page renders so
// the structured data always matches the visible content.
export function faqSchema(faqs: { q: string; a: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

// Service node for an individual service page.
export function serviceSchema(input: {
  name: string;
  description: string;
  slug: string;
  price?: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: input.name,
    description: input.description,
    url: `${SITE_URL}/services/${input.slug}`,
    serviceType: input.name,
    provider: { '@id': BUSINESS_ID },
    areaServed: BUSINESS.areaServed.map((name) => ({
      '@type': 'AdministrativeArea',
      name,
    })),
    ...(input.price
      ? {
          offers: {
            '@type': 'Offer',
            description: input.price,
            priceCurrency: 'USD',
            availability: 'https://schema.org/InStock',
          },
        }
      : {}),
  };
}

// Location landing pages describe the same business serving one specific city.
export function locationBusinessSchema(input: {
  city: string;
  region: string;
  title: string;
  description: string;
  slug: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: `${BUSINESS.shortName} — ${input.city}, ${input.region}`,
    description: input.description,
    url: `${SITE_URL}/locations/${input.slug}`,
    telephone: BUSINESS.telephone,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
    image: BUSINESS.image,
    parentOrganization: { '@id': BUSINESS_ID },
    address: {
      '@type': 'PostalAddress',
      addressLocality: input.city,
      addressRegion: input.region,
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'City',
      name: `${input.city}, ${input.region}`,
    },
    sameAs: BUSINESS.sameAs,
  };
}

// Breadcrumb trail so search engines show the page's place in the site.
export function breadcrumbSchema(items: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
