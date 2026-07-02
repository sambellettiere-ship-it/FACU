import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, ShieldCheck, Mail, Phone, MapPin, ArrowRight, Star, Quote, Sparkles, Building2, UserCheck, ShieldAlert, Facebook, Home } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

interface LocationInfo {
  city: string;
  state: string;
  title: string;
  description: string;
  longText: string;
  seoTarget: string;
  highlights: string[];
}

const locationsData: Record<string, LocationInfo> = {
  'champaign-il': {
    city: 'Champaign',
    state: 'IL',
    title: 'Champaign Pressure Washing & Garbage Can Sanitization',
    description: 'Expert residential and commercial power washing, soft-wash house cleaning, and automatic garbage bin sanitation in Champaign, IL.',
    longText: 'For top-tier Champaign pressure washing and professional exterior cleaning services, homeowners and business managers choose Rob & Ray at Funk Away GCS. From the lively student neighborhoods near the University of Illinois campus to quiet residential streets in Southwest Champaign, our high-temperature hot vapor washing removes grease, rust, algae, and mold from siding, driveways, decks, and fences. We also eliminate the foul stink, maggots, and harmful bacteria from your residential trash cans and commercial dumpsters, keeping your environment perfectly pleasant and sanitized.',
    seoTarget: 'Champaign Pressure Washing',
    highlights: [
      'Eco-friendly hot water extraction',
      'Soft washing for sensitive vinyl siding',
      'Deep oil-stain concrete power washing',
      'Elimination of flies, maggots, and odors with Garbage Guard strips'
    ]
  },
  'urbana-il': {
    city: 'Urbana',
    state: 'IL',
    title: 'Urbana Pressure Washing, Gutter Cleaning & Bin Washing',
    description: 'Top-rated Urbana pressure washing, roof & solar cleaning, gutter clearing, and garbage can disinfection.',
    longText: 'Keep your property clean and beautiful with our dedicated Urbana pressure washing and exterior restoration services. Urbana’s beautiful historic homes and wood decks require gentle, expert care. Our soft-wash siding and roof cleaning technologies safely peel away black streaks and organic algae without damaging paint or finishes. Meanwhile, our high-power driveway pressure cleaning restores concrete walkways. We also sanitize residential roll-off garbage bins and commercial dumpsters across Urbana to eliminate maggots, disease-spreading pests, and foul odors.',
    seoTarget: 'Urbana Pressure Washing',
    highlights: [
      'Gentle soft washing for historic homes',
      'Downspout flushing & gutter cleaning',
      'Wood & composite fence staining and sealing',
      'High-temperature hot vapor bin sanitization'
    ]
  },
  'savoy-il': {
    city: 'Savoy',
    state: 'IL',
    title: 'Savoy Pressure Washing & Trash Can Cleaning Services',
    description: 'Professional power washing and high-pressure steam garbage bin sanitizing for Savoy homeowners and businesses.',
    longText: 'In Savoy, IL, local homeowners trust Funk Away to prevent HOA violations, maintain remarkable curb appeal, and sanitize foul-smelling garbage bins. Our high-pressure hot water systems clean dirty concrete pathways, remove mold from deck surfaces, and restore vinyl siding to like-new condition. With our commercial-grade equipment and specialized pest deterrence treatments, we ensure your outdoor bins remain completely odor-free and safe from pests.',
    seoTarget: 'Savoy Pressure Washing & Bin Cleaning',
    highlights: [
      'HOA-approved exterior house washing',
      'Driveway, sidewalk, and patio pressure washing',
      'Garbage can sanitizing with natural antibacterial agents',
      'Commercial dumpster pad deep cleanings'
    ]
  },
  'mahomet-il': {
    city: 'Mahomet',
    state: 'IL',
    title: 'Mahomet Pressure Washing & Siding Restoration',
    description: 'Residential soft wash house cleaning, deck restoration, and trash container sanitizing in Mahomet, IL.',
    longText: 'Keeping Mahomet, IL properties clean, safe, and hygienic is our primary mission at Funk Away. We provide premium power washing for composite decks, wooden fences, and concrete driveways. Our low-pressure soft washing technique is perfect for Mahomet roofs, solar panels, and residential siding, removing organic stains gently. We also offer our signature garbage can cleaning subscription to rid your garage of flies and rotten odors.',
    seoTarget: 'Mahomet Pressure Washing',
    highlights: [
      'Safe solar panel and roof cleaning',
      'Driveway and brick patio power washing',
      'Bacterial disinfection of home garbage cans',
      'Premium deck and fence painting/staining'
    ]
  },
  'danville-il': {
    city: 'Danville',
    state: 'IL',
    title: 'Danville Commercial Dumpster & Pressure Washing Services',
    description: 'High-power commercial dumpster pad washing and house painting/soft washing in Danville, IL.',
    longText: 'Funk Away GCS is proud to offer Danville, Illinois homeowners and commercial enterprises unmatched exterior cleaning and heavy-duty sanitation. We specialize in high-pressure steam cleaning of dumpster pads, concrete walkways, storefront sidings, and brick building facades. Danville businesses look their absolute best and maintain peak sanitization with our customized commercial-grade bin wash services.',
    seoTarget: 'Danville Pressure Washing & Dumpster Sanitizing',
    highlights: [
      'Large commercial dumpster pad cleaning (3-8 yard or roll-off)',
      'High-volume steam and vapor power washing',
      'Walkway gum and grease spot removal',
      'Garbage guard pest protection strips'
    ]
  },
  'westville-il': {
    city: 'Westville',
    state: 'IL',
    title: 'Westville Pressure Washing & Garbage Bin Sanitization',
    description: 'Your local Westville partners for thorough pressure washing, home soft wash, and trash can deodorization.',
    longText: 'Operating close to our roots, Funk Away provides friendly, expert Westville pressure washing and bin sanitization services. If your wooden fence is turning gray, or your concrete patio has dark mold patches, Rob & Ray will restore and stain them to perfection. We handle dirty, maggot-ridden garbage cans with high-heat vapor wash tools and optional pest guard strips to keep bugs completely out of your yard.',
    seoTarget: 'Westville Pressure Washing',
    highlights: [
      'Complete wood restoration & protective staining',
      'High-pressure hot steam garage bin cleaning',
      'Local family-owned customer care',
      'Gutters and windows detail cleaning'
    ]
  },
  'st-joseph-il': {
    city: 'St. Joseph',
    state: 'IL',
    title: 'St. Joseph Power Washing & Residential Bin Cleaning',
    description: 'Expert soft-wash exterior house cleaning, gutter clearing, and garbage can washing in St. Joseph, IL.',
    longText: 'Funk Away is the premier choice for power washing and residential bin cleaning services in St. Joseph, Illinois. We restore dirty driveways, patios, siding, and roofs back to pristine condition using state-of-the-art power wash equipment. Our professional hot vapor sanitation completely sterilizes household waste canisters, removing health-threatening bacteria, viral microorganisms, and terrible odors.',
    seoTarget: 'St. Joseph Power Washing',
    highlights: [
      'High-temperature sanitization',
      'Residential window and screen clearing',
      'Low-pressure soft-wash vinyl siding cleaning',
      'Downspout and gutter clearing'
    ]
  },
  'rantoul-il': {
    city: 'Rantoul',
    state: 'IL',
    title: 'Rantoul Pressure Washing & Dumpster Pad Sanitation',
    description: 'Deep residential/commercial power washing, soft wash siding, and trash bin disinfection in Rantoul, IL.',
    longText: 'Maintain exceptional sanitation standards and outstanding curb appeal in Rantoul, IL, with help from Rob & Ray. Our advanced mobile washing units handle stubborn mold, stains on driveways, dirty commercial dumpsters, and clogged rain gutters. We bring heavy industrial hot water power washers directly to your location, melting away grime and sterilizing surfaces in record time.',
    seoTarget: 'Rantoul Pressure Washing & Bin Care',
    highlights: [
      'Fast, reliable scheduled service visits',
      'Industrial-strength power washing equipment',
      'Complete home exterior, siding, and deck cleaning',
      'Biodegradable chemical-free disinfection formulas'
    ]
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

  const seoTitle = `${location.title} | Funk Away GCS`;
  const seoDescription = `${location.description} Serving the local communities of ${location.city}, IL. Get your free custom quote or book online today!`;
  
  return {
    title: seoTitle,
    description: seoDescription,
    keywords: `${location.seoTarget}, exterior cleaning ${location.city}, pressure washer ${location.city} IL, power wash house ${location.city}, trash can sanitization ${location.city}, commercial dumpster cleaning ${location.city}`,
    openGraph: {
      title: seoTitle,
      description: seoDescription,
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

  // Map services
  const allServices = Object.entries(servicesData).map(([serviceSlug, s]) => ({
     slug: serviceSlug,
     ...s
  }));

  return (
    <div className="min-h-screen bg-slate-50 relative selection:bg-cyan-200 selection:text-cyan-900 font-sans flex flex-col">
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
            <Link href="/#contact" className="bg-gradient-to-br from-orange-400 to-orange-600 text-white px-6 py-2 rounded-xl font-bold uppercase tracking-wider text-xs hover:scale-105 active:scale-95 transition-all shadow-md shadow-orange-500/20">
              Book Now
            </Link>
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

          <div className="flex justify-center gap-4 mb-10">
            <a href="https://www.facebook.com/FunkAwayGCS7434" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#8ED081] hover:text-white transition-colors" title="Nextdoor">
              <Home className="w-5 h-5 absolute opacity-20" />
              <span className="font-bold text-xs z-10 text-slate-400 tracking-tighter">ND</span>
            </a>
          </div>

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
