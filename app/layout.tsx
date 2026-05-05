import type {Metadata} from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Funk Away | Garbage & Power Washing in Champaign-Urbana, IL',
  description: 'Professional garbage bin cleaning, dumpster sanitization, and power washing services for residential and commercial properties in Champaign-Urbana, IL.',
  keywords: 'garbage bin cleaning, dumpster sanitization, power washing, Champaign-Urbana IL, central Illinois cleaning services'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${outfit.variable} ${outfit.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased text-slate-800 bg-[#F0F9FF]">{children}</body>
    </html>
  );
}
