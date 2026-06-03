import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Star } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

const locationsData = {
  'champaign-il': {
    city: 'Champaign',
    state: 'IL',
    description: 'Top-rated garbage bin cleaning, dumpster sanitization, and power washing in Champaign, Illinois.',
  },
  'urbana-il': {
    city: 'Urbana',
    state: 'IL',
    description: 'Expert garbage bin cleaning, dumpster sanitization, and power washing in Urbana, Illinois.',
  },
  'savoy-il': {
    city: 'Savoy',
    state: 'IL',
    description: 'Professional exterior cleaning, bin washing, and power washing services for homes and businesses in Savoy, IL.',
  },
  'mahomet-il': {
    city: 'Mahomet',
    state: 'IL',
    description: 'Reliable power washing and garbage bin cleaning services keeping Mahomet properties pristine.',
  },
  'danville-il': {
    city: 'Danville',
    state: 'IL',
    description: 'Funk Away proudly serves Danville with our top-tier dumpster cleaning and power washing solutions.',
  },
  'westville-il': {
    city: 'Westville',
    state: 'IL',
    description: 'Your local Westville experts in residential bin cleaning, commercial dumpsters, and pressure washing.',
  },
  'st-joseph-il': {
    city: 'St. Joseph',
    state: 'IL',
    description: 'Affordable and professional power washing and bin cleaning services in St. Joseph, Illinois.',
  },
  'rantoul-il': {
    city: 'Rantoul',
    state: 'IL',
    description: 'Making Rantoul homes and businesses shine with deep power washing and garbage bin sanitization.',
  }
};

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = locationsData[slug as keyof typeof locationsData];
  
  if (!location) {
    return {
      title: 'Location Not Found | Funk Away GCS'
    }
  }

  const title = `Garbage Bin Cleaning & Power Washing in ${location.city}, ${location.state} | Funk Away GCS`;
  
  return {
    title,
    description: location.description,
    openGraph: {
      title,
      description: location.description,
      type: 'website',
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({
    slug,
  }));
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = locationsData[slug as keyof typeof locationsData];

  if (!location) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Location Not Found</h1>
          <Link href="/" className="text-cyan-600 hover:text-cyan-700 underline">Return Home</Link>
        </div>
      </div>
    );
  }

  // Use the services data object if available
  const allServices = Object.entries(servicesData).map(([serviceSlug, s]) => ({
     slug: serviceSlug,
     ...s
  }));

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-cyan-200 selection:text-cyan-900 font-sans flex flex-col">
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          <Link href="/" className="flex items-center gap-3">
            <ArrowLeft className="text-cyan-600" />
            <span className="font-bold text-cyan-900 hidden sm:inline">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Call Rob & Ray</span>
              <a href="tel:2175526182" className="text-sm font-bold text-cyan-900">
                (217) 552-6182
              </a>
            </div>
            <Link href="/#contact" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#F0F9FF] border-b border-cyan-100 flex-grow-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 bg-cyan-100/50 text-cyan-800 px-4 py-2 rounded-full font-bold text-sm tracking-wider uppercase">
            <MapPin className="w-4 h-4" /> Serving {location.city}, {location.state}
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-tight">
             Power Washing & Bin Cleaning in <span className="text-cyan-600 border-b-4 border-cyan-200">{location.city}</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            {location.description} We are committed to keeping {location.city} clean, safe, and odor-free.
          </p>
        </div>
      </section>

      {/* Services Map */}
      <section className="py-16 bg-white relative flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight uppercase mb-4">Our Services in {location.city}</h2>
            <p className="text-lg text-slate-600">Explore the professional cleaning services we offer to {location.city} residents and businesses.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={idx} className="bg-slate-50 p-6 rounded-3xl border border-slate-100 hover:border-cyan-200 hover:shadow-lg transition-all group flex flex-col">
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-cyan-600">{service.title}</h3>
                 <p className="text-slate-600 mb-4 flex-grow text-sm">{service.description}</p>
                 <div className="flex items-center text-cyan-600 font-bold text-sm uppercase tracking-wider mt-auto">
                   View Service <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-900 text-center relative border-t border-cyan-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">Ready to get started in {location.city}?</h2>
          <p className="text-cyan-100 text-lg mb-8 max-w-2xl mx-auto">Book your appointment today and let Rob & Ray handle the dirty work.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
             <Link href="/#contact" className="w-full sm:w-auto bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30">
                Book Service in {location.city}
             </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 text-center text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-slate-600 whitespace-nowrap mb-4">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. Serving Central Illinois.
          </p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 max-w-2xl mx-auto text-xs font-semibold text-slate-500">
             {Object.entries(locationsData).map(([locSlug, loc]) => (
                <Link key={locSlug} href={`/locations/${locSlug}`} className="hover:text-cyan-400 transition-colors">
                  {loc.city}, {loc.state}
                </Link>
             ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
