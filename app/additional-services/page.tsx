import { ArrowLeft, Menu, X, Star, CheckCircle, ArrowRight } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { BeforeAfterSlider } from '@/components/BeforeAfterSlider';
import { BOOKING_URL } from '@/lib/servicesData';

export default async function AdditionalServices() {
  const services = [
    {
      title: "Gutters",
      description: "Keep your gutters clear of debris to prevent water damage and maintain proper drainage.",
      href: "/services/gutter-cleaning"
    },
    {
      title: "Interior & Exterior Windows",
      description: "Crystal clear windows inside and out, improving your home's appearance and natural light.",
      href: "/services/window-cleaning"
    },
    {
      title: "Patios and Decks (Cleaning & Staining)",
      description: "Restore your outdoor living spaces with deep cleaning and high-quality protective staining.",
      href: "/services/patio-deck-cleaning"
    },
    {
      title: "Fence Cleaning & Staining",
      description: "Revitalize your fence's look and extend its lifespan with professional cleaning and staining.",
      href: "/services/fence-cleaning-staining"
    },
    {
      title: "Roof & Solar Panel Cleaning",
      description: "Remove moss, algae, and dirt carefully from your roof and maximize your solar panels' efficiency.",
      href: "/services/roof-solar-cleaning"
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

  // Pair the "patio" photo with the matching "Patios and Decks" service so it
  // can be featured beside it. Every other photo stays in the gallery below.
  const patioService = services.find(s => /patio/i.test(s.href) || /patio/i.test(s.title));
  const patioPair = galleryPairs.find(p => /patio/i.test(p.label));
  const featuredPatio = patioService && patioPair ? { service: patioService, pair: patioPair } : null;
  const otherServices = featuredPatio ? services.filter(s => s !== patioService) : services;
  const galleryRest = featuredPatio ? galleryPairs.filter(p => p !== patioPair) : galleryPairs;

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

      {/* Service List */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured service with its before/after photo beside it */}
          {featuredPatio && (
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 bg-white p-6 sm:p-8 rounded-[32px] border border-cyan-100 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)]">
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <BeforeAfterSlider
                  beforeSrc={featuredPatio.pair.before}
                  afterSrc={featuredPatio.pair.after}
                  label={featuredPatio.pair.label}
                  aspectRatio="3 / 4"
                />
              </div>
              <div className="flex flex-col items-start">
                <CheckCircle className="w-8 h-8 text-cyan-500 mb-6" />
                <h3 className="font-display text-2xl font-black text-slate-900 mb-3 tracking-tight">{featuredPatio.service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6">
                  {featuredPatio.service.description}
                </p>
                <Link href={featuredPatio.service.href} className="inline-flex items-center text-cyan-600 font-bold text-sm tracking-wider uppercase group">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherServices.map((service, idx) => (
              <Link href={service.href} key={idx} className="bg-white p-8 rounded-[32px] border border-cyan-100 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] hover:shadow-[0_20px_40px_-5px_rgba(8,145,178,0.15)] transition-all flex flex-col items-start hover:-translate-y-1 group cursor-pointer block h-full">
                <CheckCircle className="w-8 h-8 text-cyan-500 mb-6" />
                <h3 className="font-display text-xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-cyan-700 transition-colors">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium mb-6 flex-grow">
                  {service.description}
                </p>
                <div className="flex items-center text-cyan-600 font-bold text-sm tracking-wider uppercase mt-auto">
                  Learn More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
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
