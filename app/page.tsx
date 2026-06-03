'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ShieldCheck, Mail, Droplets, Trash2, Home, Star, ChevronRight, Menu, X, CheckCircle, ArrowRight, MapPin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Script from 'next/script';

import { BubbleOverlay } from '@/components/BubbleOverlay';
import { TiktokCarousel } from '@/components/TiktokCarousel';

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Residential Bin Cleaning',
      icon: <Trash2 className="w-8 h-8 text-emerald-500" />,
      description: 'Disinfect and power wash your home garbage bins to eliminate odors and bacteria.',
      price: '$48 first bin',
      subPrice: '+$14.99 per additional bin',
      features: ['Deep penetrating vapor wash', 'Odor elimination', 'Bacteria and germ removal', 'Optional pest strips ($10)'],
      url: 'https://FunkAwayGCS.as.me/?appointmentType=45588183',
      learnMoreUrl: '/services/residential-bin-cleaning'
    },
    {
      title: 'Commercial Dumpsters',
      icon: <Trash2 className="w-8 h-8 text-blue-500" />,
      description: 'Keep your business clean and smelling fresh with our commercial dumpster sanitization.',
      price: 'From $175',
      subPrice: '3-8 yard commercial or roll-off',
      features: ['3-8 yard dumpsters ($175)', 'Roll-off commercial ($250)', 'Dumpster pad cleaning available', 'Custom contracts available'],
      url: 'https://FunkAwayGCS.as.me/?appointmentType=45596308',
      learnMoreUrl: '/services/commercial-dumpsters'
    },
    {
      title: 'Power Washing',
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      description: 'Soft wash and power wash for homes, pavement areas, side panels, and more.',
      price: 'Custom Quote',
      subPrice: 'Depends on area size',
      features: ['Home exterior soft wash', 'Driveways & pavements', 'Dumpster pad areas ($145-$400)', 'Siding and decks'],
      url: '#contact',
      learnMoreUrl: '/services/power-washing'
    }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      <BubbleOverlay />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-white py-6 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative">
          <div className="flex items-center pointer-events-none">
            <div className="relative w-72 h-20 sm:w-80 sm:h-24 md:w-96 md:h-28 flex items-center justify-start">
              <Image src="/funkawaytext.png" alt="Funk Away Logo" fill className="object-contain object-left scale-[3] sm:scale-[3.5] md:scale-[4] lg:scale-[4.5] origin-left" priority />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8 relative z-10">
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">About Us</a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">Services</a>
            <Link href="/additional-services" className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">Additional Services</Link>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">Contact</a>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Call Rob & Ray</span>
                <a href="tel:2175526182" className="text-sm font-bold text-cyan-900">
                  (217) 552-6182
                </a>
              </div>
            </div>
          </div>

          <button className="md:hidden text-cyan-600 relative z-10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu className="text-cyan-900" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F0F9FF] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-lg">
              <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">About Us</a>
              <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">Services</a>
              <Link href="/additional-services" className="font-medium text-slate-900 border-b border-cyan-100 pb-4">Additional Services</Link>
              <a href="#faq" onClick={(e) => scrollToSection(e, 'faq')} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">FAQ</a>
              <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">Contact</a>
              <a href="tel:2175526182" className="flex items-center gap-3 font-bold text-cyan-700 mt-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                (217) 552-6182
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 lg:pt-32 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-cyan-900">
          <Image 
            src="/hero-background.jpg" 
            alt="Power washing background" 
            fill 
            className="object-cover opacity-60"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/80 via-cyan-900/60 to-cyan-950/90" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="-mt-8 md:-mt-16 w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] relative flex items-center justify-center -mb-8 lg:-mb-12 drop-shadow-2xl"
          >
            <Image src="/funkawaymascots.png" alt="Funk Away Mascots" fill className="object-contain" priority />
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-black tracking-tight text-white mb-6 leading-[0.95] uppercase"
          >
        
            <span className="text-cyan-400">Commercial & Residential Pressure Washing</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 font-medium mb-10"
          >
            Professional garbage bin, dumpster, and power washing services. We keep your residential and commercial spaces clean, safe, and odor-free in Champaign-Urbana, IL and surrounding areas.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="w-full sm:w-auto bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all flex items-center justify-center shadow-lg shadow-orange-500/30">
              Book Now
            </a>
            <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center">
              View Services
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner */}
      <div className="bg-cyan-900 border-b border-cyan-950">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-cyan-200 divide-y md:divide-y-0 md:divide-x divide-cyan-800">
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <Star className="w-8 h-8 text-yellow-400 mb-2" />
              <h3 className="text-white font-black text-lg tracking-tight uppercase">Customer Satisfaction</h3>
              <p className="text-sm font-medium">We focus on exceeding your expectations with every single job.</p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-2" />
              <h3 className="text-white font-black text-lg tracking-tight uppercase">Fully Insured</h3>
              <p className="text-sm font-medium">$1,000,000 General liability coverage for peace of mind.</p>
            </div>
            <div className="flex flex-col items-center gap-2 pt-4 md:pt-0">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
              <h3 className="text-white font-black text-lg tracking-tight uppercase">Experienced Team</h3>
              <p className="text-sm font-medium">Our seasoned professionals can tackle any cleaning challenge.</p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative flex justify-center"
            >
              <div className="w-full max-w-sm aspect-[9/16] relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-cyan-50">
                <Image src="/aboutus.png" alt="Rob and Ray" fill className="object-cover" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                Hey yall, we're <span className="text-cyan-600">ROB & RAY</span>
              </h2>
              
              <div className="space-y-4 text-lg text-slate-600 font-medium">
                <p>
                  ONE thing for certain and TWO things for sure. Nobody likes to clean their Garbage bins especially with maggots and those annoying flies.
                </p>
                <p>
                  But have no fear ROB & RAY are here, we have garbage guard pest strips to get rid of those disgusting little critters. Also, nobody likes that trifling smell that lingers around.
                </p>
                <p className="text-xl font-bold text-slate-900 italic py-2">
                  "Let us wash that STANK the FUNK AWAY"
                </p>
                <p>
                  By cleaning and disinfecting your dumpsters and bins. We also clean and disinfect dumpster pad areas as well. We appreciate yall for stopping by and letting us inform you on what we offer, we can promise that you won't be disappointed.
                </p>
                <p className="font-bold text-cyan-800">
                  Please book your appointment now and we will stop by and get the job done ASAP.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a 
                  href="#contact" 
                  onClick={(e) => scrollToSection(e, 'contact')} 
                  className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-400 to-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95"
                >
                  Book Appointment Now <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">Our <span className="text-cyan-600">Services</span></h2>
            <p className="text-lg text-slate-500 font-medium">
              At Funk Away Garbage Cleaning Service, we provide a variety of cleaning solutions. Our team is committed to making your space clean, safe, and odorless-free.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-[40px] p-8 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] border border-cyan-50 relative overflow-hidden group flex flex-col"
              >
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <div className="w-16 h-16 rounded-2xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 min-h-[48px]">{service.description}</p>
                
                <div className="mb-8 p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
                  <div className="font-display text-3xl font-black text-cyan-600">{service.price}</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-tighter mt-1">{service.subPrice}</div>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto space-y-3">
                  <a 
                    href={service.url} 
                    target={service.url.startsWith('http') ? '_blank' : '_self'} 
                    rel={service.url.startsWith('http') ? 'noopener noreferrer' : ''} 
                    onClick={(e) => {
                      if (service.url.startsWith('#')) {
                        scrollToSection(e, service.url.substring(1));
                      }
                    }}
                    className="w-full block text-center py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-bold rounded-2xl transition-colors tracking-wider uppercase text-sm shadow-md"
                  >
                    Book Now
                  </a>
                  <Link 
                    href={service.learnMoreUrl} 
                    className="w-full block text-center py-4 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 font-bold rounded-2xl transition-colors tracking-wider uppercase text-sm"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 bg-orange-50 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between border border-orange-100 gap-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-orange-200/50">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Garbage Guard Pest Strips</h4>
                <p className="text-slate-600 text-sm">Prevents infestation with a deep penetrating vapor. Add to any bin cleaning for just <strong className="text-slate-900">$10 per bin</strong>.</p>
              </div>
            </div>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-colors">
              Request Add-on
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white relative z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight uppercase"><span className="text-cyan-600">Frequently</span> Asked Questions</h2>
            <p className="text-lg text-slate-500 font-medium">
              Have questions about our service? Here are some of the most common answers.
            </p>
          </div>
          <div className="space-y-6">
            {[
              {
                q: "Do I need to be home for the cleaning?",
                a: "No, you do not need to be home. Just leave your bins or dumpster out and accessible on your scheduled cleaning day."
              },
              {
                q: "What if there is trash in my bin on cleaning day?",
                a: "Bins must be completely empty of all trash bags and debris before we can clean them. If they are not empty, we may have to reschedule your service."
              },
              {
                q: "Do you use eco-friendly products?",
                a: "Yes! Our cleaning process uses eco-friendly, biodegradable solutions that are safe for the environment, your family, and pets."
              },
              {
                q: "How often should I have my bins cleaned?",
                a: "We recommend a monthly cleaning to keep odors, bacteria, and pests away. We offer maintenance plans to make this easy and affordable."
              }
            ].map((faq, i) => (
              <div key={i} className="bg-[#F0F9FF] rounded-3xl p-8 border border-cyan-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-slate-900 text-lg mb-3">{faq.q}</h3>
                <p className="text-slate-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TikTok Showcase Carousel & Socials */}
      <section className="py-24 bg-cyan-950 text-white border-t border-cyan-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 px-4">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase"><span className="text-cyan-400">The Proof</span> is in the Wash</h2>
            <p className="text-lg text-cyan-200 font-medium mb-10">
              Check out our recent work! We don&apos;t stop at just power washing garbage bins and dumpsters. We power wash pavement areas, home siding, and anything else you need.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12">
              <a href="https://www.facebook.com/FunkAwayGCS7434" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#1877F2] text-white hover:scale-105 active:scale-95 transition-all font-bold text-lg uppercase tracking-wider shadow-lg shadow-blue-500/20">
                <Facebook className="w-6 h-6" />
                <span>Follow on Facebook</span>
              </a>
              <a href="https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-[#8ED081] hover:bg-[#7cc170] text-slate-900 hover:scale-105 active:scale-95 transition-all font-bold text-lg uppercase tracking-wider shadow-lg shadow-green-500/20">
                <div className="relative w-6 h-6 flex items-center justify-center">
                  <Home className="w-6 h-6 absolute opacity-30" />
                  <span className="font-bold text-[10px] z-10 tracking-tighter">ND</span>
                </div>
                <span>Find on Nextdoor</span>
              </a>
            </div>
          </div>

          <TiktokCarousel />
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] overflow-hidden border border-cyan-50 flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-gradient-to-br from-cyan-500 to-blue-500 text-white p-12 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
              <h2 className="font-display text-4xl font-black mb-6 tracking-tight uppercase relative z-10">Ready to Book?</h2>
              <p className="text-cyan-50 font-medium mb-8 max-w-sm relative z-10">
                Get in touch for a quote or to schedule your first cleaning. We accommodate customized business contracts.
              </p>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-xs font-bold uppercase tracking-wider">Call or Text Us</div>
                    <a href="tel:2175526182" className="text-2xl font-black text-white hover:text-cyan-100 transition-colors">(217) 552-6182</a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-cyan-100 text-xs font-bold uppercase tracking-wider">Email Us</div>
                    <a href="mailto:funkaway_gcs@yahoo.com" className="text-lg font-bold text-white hover:text-cyan-100 transition-colors">funkaway_gcs@yahoo.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 relative z-10">
                <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" /> Subscription Plans
                </h4>
                <p className="text-cyan-50 text-sm leading-relaxed">
                  Interested in regular maintenance? Contact us via text message, email, or any of our social media accounts to sign up for a subscription plan!
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2 p-8 md:p-12 bg-white flex flex-col justify-center">
              <h3 className="font-display text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase tracking-wide">Book Direct & Pay Securely</h3>
              <p className="text-slate-500 mb-8 max-w-sm text-sm md:text-base font-medium">Select your service type below to continue to our secure booking and payment portal via Acuity / Square.</p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="https://FunkAwayGCS.as.me/?appointmentType=45588183"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-cyan-50 hover:bg-cyan-100 border-2 border-cyan-100 hover:border-cyan-300 rounded-2xl transition-all group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-cyan-100 shadow-sm text-cyan-600 group-hover:scale-110 transition-transform">
                      <Home className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">Residential Booking</h4>
                      <p className="text-sm text-cyan-700 font-bold tracking-wide">Bin Cleaning & Maintenance</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-cyan-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
                </a>

                <a 
                  href="https://FunkAwayGCS.as.me/?appointmentType=45596308"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 border-2 border-slate-100 hover:border-slate-300 rounded-2xl transition-all group shadow-sm hover:shadow-md cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center border border-slate-200 shadow-sm text-slate-600 group-hover:scale-110 transition-transform">
                      <Trash2 className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-black text-slate-900 text-lg uppercase tracking-tight">Commercial Booking</h4>
                      <p className="text-sm text-slate-500 font-bold tracking-wide">Dumpsters & Fleet Washing</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 mb-6 opacity-80 hover:opacity-100 transition-all cursor-pointer">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <Image src="/funkawaymascots.png" alt="Company Logo" fill className="object-contain" />
            </div>
            <span className="font-display font-black text-2xl tracking-tight text-white uppercase">
              Funk Away <span className="text-cyan-500">GCS</span>
            </span>
          </div>
          <p className="max-w-md mx-auto mb-8 font-medium">Hello, We&apos;re ROB & RAY. Thanks for visiting our booking site. Proudly serving Champaign-Urbana, IL, and the surrounding Central Illinois communities.</p>
          <div className="flex justify-center gap-6 mb-8 text-sm font-bold tracking-wider">
            <a href="mailto:funkaway_gcs@yahoo.com" className="hover:text-cyan-400 transition-colors">funkaway_gcs@yahoo.com</a>
            <span className="text-slate-700">|</span>
            <a href="tel:2175526182" className="hover:text-cyan-400 transition-colors">(217) 552-6182</a>
          </div>
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.facebook.com/FunkAwayGCS7434" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#8ED081] hover:text-white transition-colors" title="Nextdoor">
              <Home className="w-5 h-5 absolute opacity-20" />
              <span className="font-bold text-xs z-10 text-slate-400 group-hover:text-white tracking-tighter">ND</span>
            </a>
          </div>
          <div className="max-w-4xl mx-auto border-t border-slate-800 my-8 pt-8 text-center text-xs text-slate-500">
            <h4 className="font-bold text-slate-400 uppercase tracking-widest mb-4">Service Areas</h4>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
              {[
                { slug: 'champaign-il', name: 'Champaign, IL' },
                { slug: 'urbana-il', name: 'Urbana, IL' },
                { slug: 'savoy-il', name: 'Savoy, IL' },
                { slug: 'mahomet-il', name: 'Mahomet, IL' },
                { slug: 'danville-il', name: 'Danville, IL' },
                { slug: 'westville-il', name: 'Westville, IL' },
                { slug: 'st-joseph-il', name: 'St. Joseph, IL' },
                { slug: 'rantoul-il', name: 'Rantoul, IL' }
              ].map(loc => (
                <Link key={loc.slug} href={`/locations/${loc.slug}`} className="hover:text-cyan-400 transition-colors">
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
          
          <p className="text-xs text-slate-600 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
