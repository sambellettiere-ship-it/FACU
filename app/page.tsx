'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, ShieldCheck, Mail, Droplets, Trash2, Home, Star, ChevronRight, Menu, X, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { BubbleOverlay } from '@/components/BubbleOverlay';

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
      price: '$40 first bin',
      subPrice: '+$12.99 per additional bin',
      features: ['Deep penetrating vapor wash', 'Odor elimination', 'Bacteria and germ removal', 'Optional pest strips ($10)']
    },
    {
      title: 'Commercial Dumpsters',
      icon: <Trash2 className="w-8 h-8 text-blue-500" />,
      description: 'Keep your business clean and smelling fresh with our commercial dumpster sanitization.',
      price: 'From $175',
      subPrice: '3-8 yard commercial or roll-off',
      features: ['3-8 yard dumpsters ($175)', 'Roll-off commercial ($250)', 'Dumpster pad cleaning available', 'Custom contracts available']
    },
    {
      title: 'Power Washing',
      icon: <Droplets className="w-8 h-8 text-cyan-500" />,
      description: 'Soft wash and power wash for homes, pavement areas, side panels, and more.',
      price: 'Custom Quote',
      subPrice: 'Depends on area size',
      features: ['Home exterior soft wash', 'Driveways & pavements', 'Dumpster pad areas ($145-$400)', 'Siding and decks']
    }
  ];

  const plans = [
    {
      name: 'Basic Plan',
      price: '$55',
      frequency: '/ month',
      description: 'Keep your bins fresh and odor-free.',
      features: [
        'One cleaning per month',
        'Disinfect & deodorize',
        'Exterior & interior spray'
      ],
      popular: false,
    },
    {
      name: 'Premium Plan',
      price: '$70',
      frequency: '/ month',
      description: 'Ideal for large families or frequent odor issues.',
      features: [
        'Two cleanings per month',
        'Disinfect & deodorize',
        '10% off soft/power washing for home',
        'Priority scheduling'
      ],
      popular: true,
    },
    {
      name: 'VIP Plan',
      price: '$100',
      frequency: '/ month',
      description: 'The ultimate cleanliness standard.',
      features: [
        'Four cleanings per month',
        'Disinfect & deodorize',
        'One FREE soft wash per year*',
        'Includes garbage guard pest strips'
      ],
      note: '*Requires active subscription for 150 days.',
      popular: false,
    }
  ];

  return (
    <div className="min-h-screen bg-[#F0F9FF]">
      <BubbleOverlay />
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-white py-6 shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center">
            <div className="relative w-64 h-16 md:w-80 md:h-20 flex items-center justify-start">
              <Image src="/funkawaytext.png" alt="Funk Away Logo" fill className="object-contain object-left scale-[2] md:scale-[3] lg:scale-[4] origin-left" priority />
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#services" className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">Services</Link>
            <Link href="#pricing" className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">Plans</Link>
            <Link href="#about" className="text-sm font-medium hover:text-cyan-600 transition-colors text-slate-600">About</Link>
            
            <div className="flex items-center gap-4">
              <div className="flex flex-col items-end">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Call Rob & Ray</span>
                <a href="tel:2175526182" className="text-sm font-bold text-cyan-900">
                  (217) 552-6182
                </a>
              </div>
              <Link href="#contact" className="bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-200/50 hover:scale-105 active:scale-95 text-white px-5 py-2.5 rounded-2xl font-bold transition-all text-sm uppercase tracking-wider">
                Book Quote
              </Link>
            </div>
          </div>

          <button className="md:hidden text-cyan-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
              <Link href="#services" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">Services</Link>
              <Link href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">Plans & Pricing</Link>
              <Link href="#about" onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-slate-900 border-b border-cyan-100 pb-4">About Us</Link>
              <a href="tel:2175526182" className="flex items-center gap-3 font-bold text-cyan-700 mt-4">
                <div className="w-10 h-10 bg-cyan-100 rounded-2xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                (217) 552-6182
              </a>
              <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="bg-gradient-to-br from-orange-400 to-orange-600 shadow-lg shadow-orange-200 text-white text-center py-4 rounded-2xl font-black mt-4 uppercase tracking-wider">
                Book an Appointment
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
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
            className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative flex items-center justify-center mb-4 drop-shadow-2xl"
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
            <Link href="#contact" className="w-full sm:w-auto bg-gradient-to-br from-orange-400 to-orange-600 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all flex items-center justify-center shadow-lg shadow-orange-500/30">
              Book Now
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center">
              View Pricing
            </Link>
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
                className="bg-white rounded-[40px] p-8 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] border border-cyan-50 relative overflow-hidden group"
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

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                      <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
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
            <Link href="#contact" className="bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-100 hover:border-orange-300 px-6 py-3 rounded-2xl font-bold whitespace-nowrap transition-colors">
              Request Add-on
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase">Maintenance <span className="text-cyan-600">Plans</span></h2>
            <p className="text-lg text-slate-500 font-medium">
              Save money and never worry about dirty bins again. Choose a monthly plan that fits your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-[40px] p-8 transition-transform duration-300 ${plan.popular ? 'bg-cyan-900 text-white shadow-2xl shadow-cyan-900/20 scale-105 z-10' : 'bg-white border border-cyan-100 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] hover:scale-[1.02]'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1.5 rounded-2xl text-xs font-black tracking-wider uppercase shadow-md rotate-3">
                    Most Popular
                  </div>
                )}
                
                <h3 className={`font-display text-2xl font-black mb-2 ${plan.popular ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                <p className={`text-sm mb-6 min-h-[40px] font-medium ${plan.popular ? 'text-cyan-200' : 'text-slate-500'}`}>{plan.description}</p>
                
                <div className="flex items-baseline gap-1 mb-8">
                  <span className={`font-display text-5xl font-black ${plan.popular ? 'text-white' : 'text-cyan-600'}`}>{plan.price}</span>
                  <span className={`font-bold text-xs uppercase tracking-widest ${plan.popular ? 'text-cyan-400' : 'text-slate-400'}`}>{plan.frequency}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-cyan-400' : 'text-cyan-500'}`} />
                      <span className={`text-sm font-medium ${plan.popular ? 'text-slate-200' : 'text-slate-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>

                {plan.note && (
                  <p className={`text-xs mt-4 mb-6 italic ${plan.popular ? 'text-cyan-400' : 'text-slate-500'}`}>{plan.note}</p>
                )}

                <Link 
                  href="#contact" 
                  className={`w-full block text-center py-4 rounded-2xl font-black transition-all mt-auto tracking-wider uppercase text-sm ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95' 
                      : 'bg-cyan-50 hover:bg-cyan-100 text-cyan-700'
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
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

      {/* Before / After Gallery (Placeholder) */}
      <section className="py-24 bg-cyan-950 text-white border-t border-cyan-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-black mb-6 tracking-tight uppercase"><span className="text-cyan-400">The Proof</span> is in the Wash</h2>
            <p className="text-lg text-cyan-200 font-medium">
              But wait! We don&apos;t stop there at just power washing garbage bins and dumpsters. We power wash pavement areas, home siding, and anything else you need.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Gallery Images using high quality unsplash images representing cleaning/power washing */}
            {[
              "https://images.unsplash.com/photo-1558227691-41ea78d1f631?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1563453392212-326f5e854473?q=80&w=600&auto=format&fit=crop"
            ].map((src, i) => (
              <div key={i} className="relative aspect-square rounded-[40px] overflow-hidden group border border-cyan-800">
                <Image src={src} alt="Cleaning results" fill className="object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-black tracking-wider uppercase">Sparkling Clean</span>
                </div>
              </div>
            ))}
          </div>
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
            </div>
            
            <div className="md:w-1/2 p-2 sm:p-8 md:p-12 bg-white">
              <h3 className="font-display text-2xl font-black text-slate-900 mb-2 uppercase tracking-wide">Book Direct & Pay Securely</h3>
              <p className="text-slate-500 mb-6 text-sm font-medium">Select your service, choose a time, and pay securely via Square directly through our booking calendar below.</p>
              
              <div className="w-full h-full min-h-[600px] rounded-2xl overflow-hidden border border-cyan-100 shadow-inner bg-slate-50 relative">
                {/* INSTRUCTIONS: Replace the src below with your actual Acuity Scheduling URL */}
                {mounted ? (
                  <iframe 
                    src="https://app.acuityscheduling.com/schedule.php?owner=YOUR_ACUITY_OWNER_ID" 
                    title="Schedule Appointment" 
                    width="100%" 
                    height="100%" 
                    frameBorder="0"
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100">
                    <span className="text-slate-400 font-medium">Loading booking portal...</span>
                  </div>
                )}
                
                {/* Fallback overlay in case of missing ID, to make it look good in preview */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white/80 backdrop-blur-sm z-10 border-2 border-dashed border-cyan-300 rounded-2xl">
                  <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-4">
                    <Trash2 className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h4 className="font-bold text-slate-900 text-lg mb-2">Acuity Scheduling Portal</h4>
                  <p className="text-slate-500 text-sm mb-4">Your interactive scheduling calendar will appear here.</p>
                  <div className="bg-orange-100 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-lg border border-orange-200">
                    Replace 'YOUR_ACUITY_OWNER_ID' with your Acuity ID in the code!
                  </div>
                </div>
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
          <p className="text-xs text-slate-600 whitespace-nowrap">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
