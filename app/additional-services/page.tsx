import { ArrowLeft, Home, Menu, X, Facebook, Star, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

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

  let galleryImages: string[] = [];
  try {
    const dirPath = path.join(process.cwd(), 'public', 'addserv');
    const files = fs.readdirSync(dirPath);
    galleryImages = files
      .filter(file => /\.(jpg|jpeg|png|webp|gif)$/i.test(file))
      .sort()
      .map(file => `/addserv/${file}`);
  } catch (error) {
    // Directory might not exist yet
  }

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
            <a href="https://FunkAwayGCS.as.me/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
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
              Here are some of the results we've delivered for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <div key={index} className="aspect-square bg-slate-200 rounded-3xl overflow-hidden shadow-md relative group">
                <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium text-sm z-0">
                  Image {index + 1}
                </div>
                {/* If the image loads, it will cover the background. Nextjs Image component has some issues if the src does not exist on build time if doing static exports, so regular img is safer for this dynamic usecase. */}
                <img 
                  src={src} 
                  alt={`Gallery Image ${index + 1}`} 
                  className="block absolute inset-0 z-10 w-full h-full object-cover transition-opacity duration-300 ease-in-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800 focus:outline-none relative z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.facebook.com/FunkAwayGCS7434" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#8ED081] hover:text-white transition-colors" title="Nextdoor">
              <Home className="w-5 h-5 absolute opacity-20" />
              <span className="font-bold text-xs z-10 text-slate-400 group-hover:text-white tracking-tighter">ND</span>
            </a>
          </div>
          <p className="text-xs text-slate-600 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
