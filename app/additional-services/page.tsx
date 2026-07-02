import { ArrowLeft } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { AdditionalServicesCarousel, type CarouselSlide } from '@/components/AdditionalServicesCarousel';
import { BOOKING_URL } from '@/lib/servicesData';

export default async function AdditionalServices() {
  // Each service can be paired with a before/after photo. Drop images named like
  // `11-gutter-before.webp` / `12-gutter-after.webp` into `public/addserv/` and the
  // matching service (via `match`) will automatically feature the slider beside it.
  const services = [
    {
      title: "Gutters",
      description: "Keep your gutters clear of debris to prevent water damage and maintain proper drainage.",
      href: "/services/gutter-cleaning",
      match: /gutter/i
    },
    {
      title: "Interior & Exterior Windows",
      description: "Crystal clear windows inside and out, improving your home's appearance and natural light.",
      href: "/services/window-cleaning",
      match: /window/i
    },
    {
      title: "Patios and Decks (Cleaning & Staining)",
      description: "Restore your outdoor living spaces with deep cleaning and high-quality protective staining.",
      href: "/services/patio-deck-cleaning",
      match: /patio|deck/i
    },
    {
      title: "Stripping & Staining",
      description: "Wood decks and fences — strip away years of weathering and grime, then protect them with a fresh coat of high-quality stain.",
      href: "/services/fence-cleaning-staining",
      match: /strip|fence/i
    },
    {
      title: "Home Siding Cleaning",
      description: "Soft wash away algae, dirt, and grime to make your home's siding look brand new.",
      href: "/services/home-siding-cleaning",
      match: /siding/i
    },
    {
      title: "Roof & Solar Panel Cleaning",
      description: "Remove moss, algae, and dirt carefully from your roof and maximize your solar panels' efficiency.",
      href: "/services/roof-solar-cleaning",
      match: /roof|solar/i
    }
  ];

  // Build before/after pairs from files named like `1-patio-before.webp` and `2-patio-after.webp`.
  // Files are grouped by the name between the numeric prefix and the `before`/`after` suffix.
  type GalleryPair = { label: string; before: string; after: string };
  const galleryPairs: GalleryPair[] = [];
  try {
    const dirPath = path.join(process.cwd(), 'public', 'addserv');
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort();

    const groups = new Map<string, { before?: string; after?: string }>();
    for (const file of files) {
      const match = file.match(/^(?:\d+-)?(.+?)-(before|after)\.[a-z]+$/i);
      if (!match) continue;
      const [, rawName, kind] = match;
      const key = rawName.toLowerCase();
      const group = groups.get(key) ?? {};
      group[kind.toLowerCase() as 'before' | 'after'] = `/addserv/${file}`;
      groups.set(key, group);
    }

    for (const [key, group] of groups) {
      if (group.before && group.after) {
        const label = key
          .replace(/[-_]+/g, ' ')
          .replace(/\b\w/g, c => c.toUpperCase());
        galleryPairs.push({ label, before: group.before, after: group.after });
      }
    }
  } catch (error) {
    // Directory might not exist yet
  }

  // Pair each service with its matching before/after photo (by the service's
  // `match` pattern) so it can be featured in the carousel. Services without a
  // matching photo still appear as a slide, and any leftover photos stay in the
  // gallery below.
  const usedPairs = new Set<GalleryPair>();
  const slides: CarouselSlide[] = services.map(service => {
    const pair = service.match
      ? galleryPairs.find(p => !usedPairs.has(p) && service.match!.test(p.label))
      : undefined;
    if (pair) usedPairs.add(pair);
    return {
      title: service.title,
      description: service.description,
      href: service.href,
      pair: pair ? { before: pair.before, after: pair.after, label: pair.label } : undefined,
    };
  });
  const galleryRest = galleryPairs.filter(p => !usedPairs.has(p));

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-cyan-200 selection:text-cyan-900 font-sans">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeft className="text-cyan-600" />
            <span className="font-bold text-cyan-900 hidden sm:inline">Back to Home</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Call Rob & Ray</span>
              <a href="tel:2175526182" className="text-sm font-bold text-cyan-900">
                (217) 552-6182
              </a>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            Additional <span className="text-cyan-600">Services</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 font-medium">
            We don't just stop at keeping your bins clean and fresh! We offer extended exterior and interior home maintenance solutions to keep your property looking its best.
          </p>
        </div>
      </section>

      {/* Service Carousel — auto-rotates through each service (10s each) so the
          full list stays compact and visible without scrolling. */}
      <section className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdditionalServicesCarousel slides={slides} />
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-[#F0F9FF] relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase">
              Our <span className="text-cyan-600">Gallery</span>
            </h2>
            <p className="text-slate-600 font-medium mt-4">
              Drag the slider on each image to see the before and after results we've delivered for our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryRest.map((pair, index) => (
              <div key={index}>
                <BeforeAfterSlider
                  beforeSrc={pair.before}
                  afterSrc={pair.after}
                  label={pair.label}
                  aspectRatio="9 / 16"
                />
                {pair.label && (
                  <p className="text-center text-slate-700 font-bold mt-3 tracking-wide">
                    {pair.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800 focus:outline-none relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SocialLinks className="mb-8" />
          <p className="text-xs text-slate-600 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
