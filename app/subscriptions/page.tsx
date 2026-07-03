'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Star,
  Home,
  Building2,
  Gift,
  Repeat,
  Sparkles,
  Leaf,
  Sun,
  Wind,
  Snowflake,
  UtensilsCrossed,
} from 'lucide-react';
import Link from 'next/link';
import { BOOKING_URL } from '@/lib/servicesData';
import { SocialLinks } from '@/components/SocialLinks';

type Plan = {
  name: string;
  price: string;
  priceNote?: string;
  frequency: string;
  features: string[];
  bestFor: string[];
  recommended?: boolean;
};

const residentialPlans: Plan[] = [
  {
    name: 'Basic Fresh Plan',
    price: '$39',
    priceNote: 'per month',
    frequency: '1 Visit Per Month',
    features: [
      'One full garbage bin cleaning per month',
      'Sanitizing & disinfecting',
      'Deodorizing treatment',
      'Odor control spray',
      'Pest prevention treatment',
    ],
    bestFor: ['Average households', 'Customers with standard trash volume'],
  },
  {
    name: 'Premium Clean Plan',
    price: '$69',
    priceNote: 'per month',
    frequency: '2 Visits Per Month (Every 2 Weeks)',
    recommended: true,
    features: [
      'Up to 2 garbage bins',
      'Two service visits monthly',
      'Deep cleaning treatment',
      'Lid and exterior wash',
      'Priority scheduling',
    ],
    bestFor: [
      'Larger families',
      'Homes with pets',
      'Customers wanting stronger odor control',
    ],
  },
  {
    name: 'Elite Home Care Plan',
    price: '$109',
    priceNote: 'per month',
    frequency: '4 Visits Per Month (Weekly)',
    features: [
      'Up to 4 bins',
      'Weekly service visits',
      'Premium sanitization',
      'Driveway / bin area rinse',
      'Emergency priority service',
      'Quarterly pressure wash touch-up',
      'Free pest guard strips included',
    ],
    bestFor: ['Luxury homes', 'HOAs', 'Heavy trash usage households'],
  },
];

const commercialPlans: Plan[] = [
  {
    name: 'Commercial Essential',
    price: 'Starting at $149',
    priceNote: 'per month',
    frequency: '1 Visit Per Month',
    features: [],
    bestFor: ['Small offices', 'Retail stores', 'Low-volume commercial properties'],
  },
  {
    name: 'Commercial Pro',
    price: 'Starting at $349',
    priceNote: 'per month',
    frequency: '2 Visits Per Month',
    recommended: true,
    features: [],
    bestFor: ['Restaurants', 'Medical facilities', 'Apartment complexes'],
  },
  {
    name: 'Commercial Elite',
    price: 'Starting at $699+',
    priceNote: 'per month',
    frequency: 'Weekly or Biweekly',
    features: [],
    bestFor: ['High-traffic commercial properties', 'Large facilities'],
  },
];

const seasons = [
  { name: 'Spring', icon: Leaf, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { name: 'Summer', icon: Sun, color: 'text-orange-500', bg: 'bg-orange-50' },
  { name: 'Fall', icon: Wind, color: 'text-amber-600', bg: 'bg-amber-50' },
  { name: 'Winter', icon: Snowflake, color: 'text-cyan-500', bg: 'bg-cyan-50' },
];

function PlanCard({ plan, accent }: { plan: Plan; accent: 'cyan' | 'slate' }) {
  const isCyan = accent === 'cyan';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative bg-white rounded-[40px] p-8 pt-10 flex flex-col border shadow-[0_10px_25px_-5px_rgba(8,145,178,0.1)] ${
        plan.recommended
          ? 'border-orange-300 ring-2 ring-orange-200'
          : 'border-cyan-50'
      }`}
    >
      {plan.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-orange-500/30 whitespace-nowrap">
          Recommended
        </div>
      )}

      <h3 className="font-display text-2xl font-black text-slate-900 mb-4 tracking-tight mt-2">
        {plan.name}
      </h3>

      <div className="mb-6 p-4 bg-cyan-50 rounded-2xl border border-cyan-100">
        <div className="font-display text-3xl font-black text-cyan-600">
          {plan.price}
          {plan.priceNote && (
            <span className="text-base font-bold text-slate-400"> / {plan.priceNote.replace('per ', '')}</span>
          )}
        </div>
        <div className="text-xs text-slate-500 font-bold uppercase tracking-tight mt-2 flex items-center gap-1.5">
          <Repeat className="w-3.5 h-3.5 text-cyan-500" />
          {plan.frequency}
        </div>
      </div>

      {plan.features.length > 0 && (
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
              <CheckCircle className="w-5 h-5 text-cyan-500 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6 border-t border-slate-100">
        <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
          Best For
        </div>
        <ul className="space-y-2 mb-6">
          {plan.bestFor.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600 text-sm font-semibold">
              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full block text-center py-4 font-bold rounded-2xl transition-colors tracking-wider uppercase text-sm shadow-md ${
            isCyan
              ? 'bg-cyan-600 hover:bg-cyan-700 text-white'
              : 'bg-slate-800 hover:bg-slate-900 text-white'
          }`}
        >
          Enroll in Plan
        </a>
      </div>
    </motion.div>
  );
}

export default function SubscriptionsPage() {
  const [planType, setPlanType] = useState<'residential' | 'commercial'>('residential');
  const isResidential = planType === 'residential';

  return (
    <div className="min-h-screen bg-[#F0F9FF] relative selection:bg-cyan-200 selection:text-cyan-900 font-sans">
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
              Enroll Now
            </a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-cyan-950 to-cyan-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-cyan-100 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-4 h-4 text-yellow-400" /> Funk Away Monthly Subscriptions
          </motion.div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-white mb-6 tracking-tight uppercase leading-[0.95]">
            Never Deal With a <span className="text-cyan-400">Dirty Bin</span> Again
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-cyan-100 font-medium">
            Set it and forget it. Our subscription plans keep your garbage bins and dumpsters clean, sanitized, and odor-free all year long — plus exclusive loyalty rewards for our members.
          </p>
        </div>
      </section>

      {/* Plan Selector Section */}
      <section id="plans" className="py-20 bg-[#F0F9FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Residential / Commercial Toggle */}
          <div className="text-center mb-10">
            <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
              Who are we cleaning for?
            </p>
            <div className="inline-flex items-center gap-1 p-1.5 bg-white rounded-2xl border border-cyan-100 shadow-[0_10px_25px_-5px_rgba(8,145,178,0.12)]">
              <button
                type="button"
                onClick={() => setPlanType('residential')}
                aria-pressed={isResidential}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs sm:text-sm transition-all ${
                  isResidential
                    ? 'bg-cyan-600 text-white shadow-md shadow-cyan-600/30'
                    : 'text-slate-500 hover:text-cyan-700'
                }`}
              >
                <Home className="w-4 h-4" /> Residential
              </button>
              <button
                type="button"
                onClick={() => setPlanType('commercial')}
                aria-pressed={!isResidential}
                className={`flex items-center gap-2 px-6 sm:px-8 py-3 rounded-xl font-black uppercase tracking-wider text-xs sm:text-sm transition-all ${
                  !isResidential
                    ? 'bg-slate-800 text-white shadow-md shadow-slate-800/30'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                <Building2 className="w-4 h-4" /> Commercial
              </button>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={planType}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center max-w-3xl mx-auto mb-14">
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4 ${
                    isResidential ? 'bg-cyan-100 text-cyan-700' : 'bg-slate-100 text-slate-700'
                  }`}
                >
                  {isResidential ? <Home className="w-4 h-4" /> : <Building2 className="w-4 h-4" />}
                  {isResidential ? 'Residential Plans' : 'Commercial Plans'}
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight uppercase">
                  For Your <span className="text-cyan-600">{isResidential ? 'Home' : 'Business'}</span>
                </h2>
                <p className="text-lg text-slate-500 font-medium">
                  {isResidential
                    ? 'Choose the level of fresh that fits your household. Every residential plan includes sanitizing, deodorizing, and pest prevention.'
                    : 'Keep your property clean, compliant, and odor-free. Commercial plans are fully customizable with contracts tailored to your volume and schedule.'}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-start pt-4">
                {(isResidential ? residentialPlans : commercialPlans).map((plan) => (
                  <PlanCard key={plan.name} plan={plan} accent={isResidential ? 'cyan' : 'slate'} />
                ))}
              </div>

              {!isResidential && (
                <p className="text-center text-slate-500 font-medium mt-10 text-sm">
                  Pricing starts at the listed rates and is customized based on the number of dumpsters, bin sizes, and service frequency. Contact us for a tailored commercial quote.
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Value framing banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 max-w-4xl mx-auto bg-gradient-to-br from-orange-400 to-orange-600 rounded-[40px] p-8 md:p-12 flex flex-col sm:flex-row items-center gap-6 md:gap-8 text-center sm:text-left relative overflow-hidden shadow-xl shadow-orange-500/20"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
            <div className="w-16 h-16 flex-shrink-0 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center relative z-10">
              <UtensilsCrossed className="w-8 h-8 text-white" />
            </div>
            <p className="font-display text-xl md:text-2xl font-black text-white tracking-tight leading-snug relative z-10">
              For less than the cost of one dinner out each month, we keep your bins sanitized, odor-free, pest-free, and bacteria-free year-round.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Loyalty Reward Program Graphic */}
      <section className="py-20 bg-cyan-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-br from-orange-400 to-orange-600 text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-orange-500/30">
              <Gift className="w-4 h-4" /> Members-Only Perk
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-black mb-4 tracking-tight uppercase">
              The <span className="text-cyan-400">Loyalty Reward</span> Program
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-cyan-100 font-medium">
              Every <strong className="text-white">3 months</strong> on any subscription plan, you unlock a{' '}
              <strong className="text-white">FREE surprise seasonal service</strong> — a special extra hand-picked to match the current season. Our way of saying thanks for staying fresh with us.
            </p>
          </div>

          {/* Seasonal cycle graphic */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {seasons.map((season, idx) => {
              const Icon = season.icon;
              return (
                <motion.div
                  key={season.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 text-center flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-2xl ${season.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-8 h-8 ${season.color}`} />
                  </div>
                  <div className="text-[11px] font-black uppercase tracking-widest text-cyan-300 mb-1">
                    Month {(idx + 1) * 3}
                  </div>
                  <h3 className="font-display text-xl font-black text-white mb-1">{season.name}</h3>
                  <p className="text-sm text-cyan-100 font-medium">Surprise seasonal service</p>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center gap-3 text-cyan-200 text-sm font-semibold">
            <Repeat className="w-5 h-5 text-cyan-400" />
            The cycle repeats all year — stay subscribed, keep getting rewarded.
          </div>
        </div>
      </section>

      {/* Enroll / CTA */}
      <section id="enroll" className="py-20 bg-[#F0F9FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-[40px] p-10 md:p-14 text-center text-white relative overflow-hidden shadow-xl shadow-cyan-500/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <h2 className="font-display text-3xl md:text-4xl font-black mb-4 tracking-tight uppercase relative z-10">
              Ready to Sign Up?
            </h2>
            <p className="text-cyan-50 font-medium mb-8 max-w-lg mx-auto relative z-10">
              Book your plan online in seconds and lock in your loyalty rewards — or reach out to Rob & Ray directly to get started today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-cyan-700 hover:scale-105 active:scale-95 px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Book Online <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="tel:2175526182"
                className="bg-cyan-950/30 hover:bg-cyan-950/50 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-2xl font-bold text-lg uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                Call (217) 552-6182
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Simplified) */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800 relative z-30">
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
