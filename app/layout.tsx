import type {Metadata} from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE_URL, BUSINESS, localBusinessSchema, websiteSchema } from '@/lib/siteConfig';
import { JsonLd } from '@/components/JsonLd';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

const title =
  'Pressure Washing & Garbage Can Cleaning in Champaign County, IL | Funk Away GCS';
const description =
  'Funk Away GCS is Champaign County’s go-to team for professional pressure washing, power washing, and garbage can & dumpster cleaning. Serving Champaign, Urbana, Savoy, Mahomet, Rantoul & more. Fully insured. Book online or call (217) 552-6182.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: BUSINESS.shortName,
  authors: [{ name: BUSINESS.name }],
  keywords: [
    'pressure washing Champaign County',
    'pressure washing Champaign IL',
    'power washing Champaign Urbana',
    'garbage can cleaning Champaign',
    'trash bin cleaning Champaign County',
    'garbage bin cleaning',
    'dumpster cleaning Champaign',
    'commercial dumpster sanitization',
    'driveway pressure washing Champaign',
    'house soft washing Urbana IL',
    'bin cleaning service near me',
    'Central Illinois pressure washing',
    'Funk Away GCS',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: BUSINESS.name,
    title,
    description,
    locale: 'en_US',
    images: [
      {
        url: '/funkawaymascots.png',
        width: 2000,
        height: 2000,
        alt: 'Funk Away GCS — Rob & Ray, Champaign County pressure washing & garbage can cleaning',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/funkawaymascots.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Set NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION to the token from Google Search
  // Console to verify ownership (unlocks indexing insights & performance data).
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfit.variable}`}>
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-YQ0VRGSCZR" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-YQ0VRGSCZR');
          `}
        </Script>
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-[#F0F9FF]">{children}</body>
    </html>
  );
}
