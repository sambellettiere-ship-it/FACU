import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, Trash2, Droplets, ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';
import { SocialLinks } from '@/components/SocialLinks';
import { JsonLd } from '@/components/JsonLd';
import { serviceSchema, breadcrumbSchema } from '@/lib/siteConfig';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];
  
  if (!service) {
    return {
      title: 'Service Not Found | Funk Away GCS'
    }
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: `/services/${slug}`,
      type: 'website',
    }
  }
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData[slug as keyof typeof servicesData];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/" className="text-cyan-600 hover:text-cyan-700 underline">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-cyan-200 selection:text-cyan-900 font-sans">
      <JsonLd
        data={[
          serviceSchema({
            name: service.title,
            description: service.seoDescription,
            slug,
            price: service.price,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: service.title, path: `/services/${slug}` },
          ]),
        ]}
      />
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
            <Link href={service.url.startsWith('http') ? service.url : `/${service.url}`} target={service.url.startsWith('http') ? "_blank" : "_self"} className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
              Book Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#F0F9FF] border-b border-cyan-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
            {service.title.split(' ').map((word, i, arr) => 
               i === arr.length - 1 ? <span key={i} className="text-cyan-600">{word}</span> : word + ' '
            )}
          </h1>
          <p className="text-xl text-slate-600 font-medium">
            {service.description}
          </p>
        </div>
      </section>

      {/* Details */}
      <section className="py-16 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">About This Service</h2>
            <p className="text-slate-600 leading-relaxed text-lg mb-8">
              {service.longDescription}
            </p>

            <h3 className="text-xl font-bold text-slate-900 mb-4">What's Included:</h3>
            <ul className="grid sm:grid-cols-2 gap-4 mb-8">
              {service.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-600 font-medium">
                  <CheckCircle className="w-6 h-6 text-cyan-500 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/3">
            <div className="bg-[#F0F9FF] p-8 rounded-3xl border border-cyan-100 shadow-md">
              <div className="mb-6">
                <div className="font-display text-3xl font-black text-cyan-600">{service.price}</div>
                <div className="text-sm text-slate-500 font-bold uppercase tracking-tighter mt-1">{service.subPrice}</div>
              </div>
              
              <Link 
                href={service.url.startsWith('http') ? service.url : `/${service.url}`}
                target={service.url.startsWith('http') ? "_blank" : "_self"}
                className="w-full mb-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors uppercase tracking-wider text-sm shadow-lg shadow-cyan-600/30"
              >
                Schedule Service <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="pt-6 mt-6 border-t border-cyan-200">
                <p className="text-sm text-slate-600 font-medium mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-500" /> Fully Insured Professionals
                </p>
                <p className="text-sm text-slate-600 font-medium mb-4 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-500" /> Need Help? (217) 552-6182
                </p>
                <p className="text-sm text-slate-600 font-medium flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-500" /> funkaway_gcs@yahoo.com
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800">
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
