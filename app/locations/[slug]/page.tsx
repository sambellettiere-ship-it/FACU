import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Star, Quote, Sparkles, Building2, UserCheck, ShieldAlert } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { servicesData, BOOKING_URL } from '@/lib/servicesData';
import { locationsData } from '@/lib/locationsData';
import { JsonLd } from '@/components/JsonLd';
import { locationBusinessSchema, breadcrumbSchema, faqSchema, DEFAULT_OG_IMAGE } from '@/lib/siteConfig';

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

  const seoTitle = `${location.title} | Funk Away GCS`;
  const seoDescription = `${location.description} Serving the local communities of ${location.city}, IL. Get your free custom quote or book online today!`;
  
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: `${location.seoTarget}, exterior cleaning ${location.city}, pressure washer ${location.city} IL, power wash house ${location.city}, trash can sanitization ${location.city}, commercial dumpster cleaning ${location.city}, garbage can cleaning ${location.city}`,
    alternates: {
      canonical: `/locations/${slug}`,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: `/locations/${slug}`,
      type: 'website',
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: seoTitle,
      description: seoDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
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

  // Map services
  const allServices = Object.entries(servicesData).map(([serviceSlug, s]) => ({
     slug: serviceSlug,
     ...s
  }));

  // City-specific FAQ. Targets the "{service} {city} IL" long-tail searches
  // (e.g. "garbage can cleaning champaign", "pressure washing urbana il") and
  // feeds matching FAQPage structured data so the answers can surface directly
  // in search. Written from the city name so every location page stays unique.
  const locationFaqs = [
    {
      q: `Do you offer pressure washing and power washing in ${location.city}, ${location.state}?`,
      a: `Yes. Funk Away GCS provides professional pressure washing and soft washing throughout ${location.city}, ${location.state} — driveways, siding, patios, concrete and dumpster pads. Call (217) 552-6182 or book online for a free quote.`,
    },
    {
      q: `How much does garbage can cleaning cost in ${location.city}?`,
      a: `Residential bin cleaning in ${location.city} starts at $48 for the first bin and $14.99 for each additional bin, with optional Garbage Guard pest strips for $12 per bin. Subscription plans lower the per-visit cost.`,
    },
    {
      q: `Do you clean gutters and windows in ${location.city}?`,
      a: `We do. Along with bin and dumpster cleaning, we handle gutter cleaning, window washing, roof soft washing, and deck and siding cleaning for ${location.city} homes and businesses.`,
    },
    {
      q: `What areas around ${location.city} do you serve?`,
      a: `We serve ${location.city} and the surrounding Champaign County and Central Illinois communities, including Champaign, Urbana, Savoy, Mahomet, Rantoul, St. Joseph, Danville and Westville.`,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-cyan-200 selection:text-cyan-900 font-sans flex flex-col">
      <JsonLd
        data={[
          locationBusinessSchema({
            city: location.city,
            region: location.state,
            title: location.title,
            description: location.description,
            slug,
          }),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: `${location.city}, ${location.state}`, path: `/locations/${slug}` },
          ]),
          faqSchema(locationFaqs),
        ]}
      />
      {/* Navigation */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          <Link href="/" className="flex items-center gap-3 group">
            <ArrowLeft className="text-cyan-600 group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-cyan-900 hidden sm:inline">Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Call Rob & Ray</span>
              <a href="tel:2175526182" className="text-sm font-bold text-cyan-900 hover:text-cyan-600 transition-colors">
                (217) 552-6182
              </a>
            </div>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
              Book Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Header - SEO Heavy */}
      <section className="pt-32 pb-20 bg-[#F0F9FF] border-b border-cyan-100 flex-grow-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-2 mb-6 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-bold text-xs tracking-wider uppercase shadow-sm">
            <MapPin className="w-4 h-4" /> Locally Owned & Operated in {location.city}, {location.state}
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-tight">
             Looking for Private or Commercial <span className="text-cyan-600 border-b-4 border-cyan-200 block sm:inline">{location.seoTarget}</span>?
          </h1>
          <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
            {location.description} Rob & Ray are your certified specialists here to eradicate filthy bacteria, grease stains, and lingering odors.
          </p>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#contact-local" className="bg-cyan-600 hover:bg-cyan-700 text-white font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-cyan-600/20 hover:-translate-y-0.5">
              Get Free Estimate
            </a>
            <a href="#services-local" className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 font-bold px-8 py-3.5 rounded-xl text-sm uppercase tracking-wider transition-all hover:border-slate-300">
              Explore Local Services
            </a>
          </div>
        </div>
      </section>

      {/* Local Spotlight Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs uppercase font-bold tracking-widest text-cyan-600 mb-3 block">Expert Local Property Care</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight mb-6">
                Keeping {location.city} Clean, Odor-Free and Protected
              </h2>
              
              <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                <p>{location.longText}</p>
                <p>
                  Having started originally out of the trunk of our family sedan with a simple 30-gallon water tank and Sun Joe electric tools, we have refined our processes to deliver premier quality concrete power washing, gutter clearance, home soft-washing, and trash container sterilization. Today, we handle residential trash bins, food court dumpsters, loading dock bays, and home exteriors with unmatched precision.
                </p>
              </div>

              {/* Trust elements */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <UserCheck className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Rob & Ray Guarantee</h4>
                    <p className="text-xs text-slate-500 font-medium font-sans">We won&apos;t leave until you are 100% satisfied with our wash quality.</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <ShieldCheck className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Fully Insured & Certified</h4>
                    <p className="text-xs text-slate-500 font-medium font-sans">Rest easy knowing your local property is covered by professional liability insurance.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* highlights box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#F0F9FF] to-cyan-50/20 p-8 rounded-[36px] border border-cyan-100/80 shadow-md flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="text-cyan-600 w-5 h-5" />
                  <span className="font-bold text-slate-900 uppercase text-xs tracking-wider">Features in your area</span>
                </div>
                
                <h3 className="font-display text-xl font-black text-slate-900 uppercase mb-4">Why Local Clients Choose Us:</h3>
                
                <ul className="space-y-3 mb-6">
                  {location.highlights.map((highlight, index) => (
                    <li key={index} className="flex gap-3 items-start text-slate-700 text-sm font-semibold">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-white/80 rounded-2xl border border-cyan-100/50">
                <Quote className="w-5 h-5 text-cyan-500 mb-2" />
                <p className="text-xs text-slate-600 font-medium italic">
                  "No more flies, maggots or persistent rancid odor. Rob & Ray disinfected our trash bins in no time. Amazing service in {location.city}!"
                </p>
                <div className="mt-2 flex items-center justify-between">
                   <span className="text-[10px] font-bold text-slate-500">— Happy Local Customer</span>
                   <div className="flex text-amber-400 gap-0.5"><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /><Star className="w-3 h-3 fill-current" /></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Map Section */}
      <section id="services-local" className="py-20 bg-slate-50 border-t border-b border-cyan-50 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0891B2] bg-cyan-100/50 px-3 py-1 rounded-full">Explore Catalog</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mt-3 mb-4">
              Local Service Offerings in {location.city}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
              We offer full eco-friendly sanitization layouts for homes, commercial complexes, and industrial dumpster yards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, idx) => (
              <Link href={`/services/${service.slug}`} key={service.slug} className="bg-white p-6 rounded-[28px] border border-slate-100 hover:border-cyan-200 hover:shadow-xl transition-all group flex flex-col hover:-translate-y-1">
                 <div className="bg-cyan-50 w-10 h-10 rounded-xl flex items-center justify-center text-cyan-600 mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                   <Sparkles className="w-5 h-5" />
                 </div>
                 <h3 className="text-lg font-black text-slate-900 mb-2 group-hover:text-cyan-600 uppercase tracking-tight transition-colors">{service.title}</h3>
                 <p className="text-slate-500 mb-6 flex-grow text-sm font-medium leading-relaxed">{service.description}</p>
                 <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-cyan-600 mt-auto border-t border-slate-50 pt-4">
                   <span>Details & Pricing</span>
                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQ — mirrors the FAQPage schema above and targets "{service}
          {city} IL" long-tail searches with locally worded answers. */}
      <section className="py-20 bg-white border-t border-cyan-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs uppercase font-bold tracking-widest text-[#0891B2] bg-cyan-100/50 px-3 py-1 rounded-full">Local Questions</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight uppercase mt-3">
              {location.city} Cleaning FAQ
            </h2>
          </div>
          <div className="space-y-4">
            {locationFaqs.map((faq, idx) => (
              <div key={idx} className="bg-[#F0F9FF] rounded-2xl p-6 border border-cyan-100 shadow-sm">
                <h3 className="font-bold text-slate-900 text-lg mb-2">{faq.q}</h3>
                <p className="text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Estimates / Lead Form */}
      <section id="contact-local" className="py-20 bg-white relative scroll-mt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[40px] overflow-hidden shadow-2xl relative border-4 border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="p-8 md:p-16 relative z-10 text-center max-w-3xl mx-auto">
              <span className="text-xs uppercase font-extrabold tracking-widest text-cyan-400">Save Your Curb Appeal</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-3 mb-6 leading-tight">
                Get a Custom Quote for {location.city}
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed font-medium">
                Do not wait for nasty bugs or foul-smelling bacteria to ruin your yard or storefront. Call us directly, book on our calendar, or mail us to arrange a swift wash appointment.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
                <a href="tel:2175526182" className="flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-950 font-black uppercase text-sm tracking-wider py-4 rounded-xl transition-all shadow-md">
                  <Phone className="w-5 h-5 text-cyan-600" /> (217) 552-6182
                </a>
                <a href="mailto:funkaway_gcs@yahoo.com" className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-700 text-white font-black uppercase text-sm tracking-wider py-4 rounded-xl transition-all border border-slate-700">
                  <Mail className="w-5 h-5 text-cyan-400" /> Mail Rob & Ray
                </a>
              </div>
              
              <div className="mt-8 flex justify-center gap-6 text-xs text-slate-400 font-semibold font-sans">
                <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-cyan-400" /> Fully Insured</div>
                <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-cyan-400" /> 100% Satisfaction</div>
                <div className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-cyan-400" /> Local Crew</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* City Directory / Footer Map */}
      <footer className="bg-slate-950 py-16 text-center text-slate-400 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-display font-black text-2xl tracking-tight text-white uppercase">
              Funk Away <span className="text-cyan-500">GCS</span>
            </span>
          </div>
          <p className="text-sm font-medium max-w-md mx-auto mb-8 text-slate-500">
            Professional high-pressure power washing, delicate soft home exterior washers, gutters, windows, and trash can sanitizers in central Illinois.
          </p>

          <SocialLinks className="mb-10" />

          <div className="border-t border-slate-900 my-8 pt-8 max-w-4xl mx-auto text-center">
            <h4 className="font-bold text-slate-400 uppercase tracking-widest text-xs mb-4">Our Complete Central Illinois Service Counties</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs font-semibold">
               {Object.entries(locationsData).map(([locSlug, loc]) => (
                  <Link key={locSlug} href={`/locations/${locSlug}`} className="hover:text-cyan-400 text-slate-500 transition-colors">
                    {loc.city}, {loc.state} {loc.city === location.city && '•'}
                  </Link>
               ))}
            </div>
          </div>
          
          <p className="text-xs text-slate-700 whitespace-nowrap pt-8">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
