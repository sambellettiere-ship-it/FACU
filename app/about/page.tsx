import { ArrowLeft, Home, Phone, Mail, CheckCircle, ArrowRight, Star, Heart, ShieldCheck, MapPin, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Our Story - Rob & Ray | Funk Away GCS',
  description: 'Learn how Rob & Ray started Funk Away from the trunk of a sedan with a Sun Joe pressure washer to keeping Central Illinois clean and odor-free.',
};

export default function AboutPage() {
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

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-[#F0F9FF] border-b border-cyan-100 flex-grow-0">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6 bg-cyan-100/50 text-cyan-800 px-4 py-2 rounded-full font-bold text-sm tracking-wider uppercase">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" /> Meet Rob & Ray
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-tight">
             Our <span className="text-cyan-600 border-b-4 border-cyan-200">Story</span>
          </h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto">
            From humble beginnings to a pristine community vision. Read how we started and where we are heading.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white relative flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16">
            
            {/* Visual Column - Double Photo Layout */}
            <div className="w-full lg:w-1/2 space-y-8 flex flex-col items-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl">
                {/* Photo 1: Vertical aboutus.png */}
                <div className="flex flex-col items-center">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">Rob & Ray ON THE JOB</span>
                  <div className="w-full aspect-[9/16] relative rounded-[32px] overflow-hidden shadow-xl border-4 border-cyan-50">
                    <Image 
                      src="/aboutus.png" 
                      alt="Rob and Ray On the Job" 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Photo 2: robray.png */}
                <div className="flex flex-col items-center justify-start sm:mt-12">
                  <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2">At Your Service</span>
                  <div className="w-full aspect-[4/5] sm:aspect-[3/4] relative rounded-[32px] overflow-hidden shadow-xl border-4 border-orange-50">
                    <Image 
                      src="/robray.png" 
                      alt="Rob & Ray" 
                      fill 
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm font-bold text-slate-800">Rob & Ray</p>
                    <p className="text-xs text-slate-500 font-medium">Founders, Funk Away GCS</p>
                  </div>
                </div>
              </div>

              {/* Milestones badge */}
              <div className="bg-[#F0F9FF] p-6 rounded-3xl border border-cyan-100 max-w-md w-full text-center">
                <div className="flex items-center justify-center gap-1 text-orange-500 text-lg font-black uppercase tracking-wider mb-2">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-slate-800 font-bold text-sm">"Let us wash that STANK the FUNK AWAY!"</p>
              </div>
            </div>

            {/* Heartfelt Story Column */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tight uppercase">
                ONE thing for certain and TWO things for sure...
              </h2>
              
              <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
                <p>
                  Nobody likes to clean their garbage bins especially when they are full of maggots, annoying flies, and that trifling odor that lingers around your driveway or garage. Our homes are our safe spaces, and the last thing any family wants is to deal with foul, health-threatening waste build-up.
                </p>
                
                <h3 className="text-2xl font-black text-cyan-600 pt-4 uppercase tracking-tight">
                  Started Out of the Trunk
                </h3>
                <p>
                  We didn&apos;t start with high-end customized trucks or complex machinery. In the very beginning, it was just the two of us, a vision, and sheer determination. 
                </p>
                <p className="border-l-4 border-cyan-500 pl-4 italic text-slate-700 bg-slate-50 py-3 pr-2 rounded-r-2xl font-semibold">
                  "We literally started out the trunk of our sedan with just that Sun Joe electric pressure washing equipment and a 30-gallon water tank."
                </p>
                <p>
                  We drove from house to house, working long hours manual-washing every bin and dumpster, learning what worked, and building solid, trust-based relationships with our neighbors. Every client we earned was a step forward, and every bin we cleaned helped validate our mission.
                </p>

                <h3 className="text-2xl font-black text-cyan-600 pt-4 uppercase tracking-tight">
                  Keeping Our Communities Clean
                </h3>
                <p>
                  Our primary mission has always been simple: to protect our local community and keep it clean, hygienic, and completely odor-free. Whether it&apos;s a residential roll-off bin or a large commercial dumpster, we put 100% of our heart and energy into disinfecting and blasting away the grime. We even have our special <strong>garbage guard pest strips</strong> to get rid of those disgusting little critters permanently.
                </p>
                <p>
                  We appreciate yall for stopping by and letting us inform you on what we offer. We promise that when you work with Rob & Ray, you won&apos;t be disappointed.
                </p>

                <h3 className="text-2xl font-black text-orange-600 pt-4 uppercase tracking-tight flex items-center gap-2">
                  Coming From the Bottom & Scaling Up
                </h3>
                <p>
                  We are proud to say we have truly worked our way up from the very bottom. From a sedan trunk to professional utility setups, we are continually hitting new milestones. With many more milestones to come and complete, we are hard at work scaling our operations, introducing more advanced equipment, and developing additional home styling services like window cleaning, gutters, decks, and siding.
                </p>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-br from-orange-400 to-orange-600 text-white px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all shadow-lg shadow-orange-500/30 hover:scale-105 active:scale-95"
                >
                  Book Appointments <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/additional-services" 
                  className="inline-flex items-center justify-center gap-2 bg-[#F0F9FF] border border-cyan-100 text-cyan-800 px-8 py-4 rounded-2xl font-black text-lg uppercase tracking-wider transition-all hover:bg-cyan-100/50"
                >
                  See Additional Services
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 text-center text-slate-400 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://www.facebook.com/FunkAwayGCS7434" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-colors" title="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://nextdoor.com/page/funk-away-garbage-cleaning-service-llc-westville-il?init_source=search&query=funk+away+gcs&referrer=nextdoor" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#8ED081] hover:text-white transition-colors" title="Nextdoor">
              <span className="font-bold text-xs tracking-tighter">ND</span>
            </a>
          </div>
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Funk Away Garbage Cleaning Service. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
