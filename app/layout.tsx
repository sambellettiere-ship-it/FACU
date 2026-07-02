import type {Metadata} from 'next';
import { Outfit } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Funk Away | Garbage & Power Washing in Champaign-Urbana, IL',
  description: 'Professional garbage bin cleaning, dumpster sanitization, and power washing services for residential and commercial properties in Champaign-Urbana, IL.',
  keywords: 'Champaign Pressure Washing, Urbana Pressure Washing, garbage bin cleaning, dumpster sanitization, power washing, Champaign-Urbana IL, central Illinois cleaning services',
  icons: {
    icon: '/icon.svg'
  }
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
      </head>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-[#F0F9FF]">{children}</body>
    </html>
  );
}
