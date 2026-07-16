import type { Metadata } from 'next';

// The subscriptions page itself is a client component (it has interactive plan
// toggles), so its SEO metadata lives here in a route-level layout instead.
const title =
  'Garbage Can Cleaning Subscription Plans — Champaign County, IL | Funk Away GCS';
const description =
  'Never deal with a dirty bin again. Funk Away GCS monthly subscription plans keep your garbage cans sanitized, deodorized, and pest-free year-round starting at $39/month. Residential & commercial plans across Champaign County, IL.';

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: '/subscriptions',
  },
  openGraph: {
    title,
    description,
    url: '/subscriptions',
    type: 'website',
  },
};

export default function SubscriptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
