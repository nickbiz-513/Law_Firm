import React from 'react';
import { Scale, Award, ShieldCheck, ChevronRight, BookOpen, AlertCircle, Building, Users } from 'lucide-react';
import { motion } from 'motion/react';

interface HomeViewProps {
  onNavigate: (viewId: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="font-sans text-[#1A1A1A] bg-white min-h-screen pt-24" id="home-view-container-id">
      {/* Luxury Hero Banner */}
      <section className="relative overflow-hidden py-16 md:py-28 bg-[#FAF9F6]">
        {/* Subtle grid accent markings */}
        <div className="absolute inset-0 opacity-[0.03] bg-[size:3rem_3rem] bg-[linear-gradient(to_right,#0F172A_1px,transparent_1px),linear-gradient(to_bottom,#0F172A_1px,transparent_1px)]"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="inline-flex items-center space-x-2 px-3 py-1 bg-[#C5A880]/10 border border-[#C5A880]/30 rounded text-[10px] font-mono tracking-widest text-[#8F6B38] uppercase">
              <Scale className="w-3 h-3" /> <span>Attorneys &amp; Legal Counsel</span>
            </span>
            
            <h1 className="font-serif text-4xl sm:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
              A Legacy of <br />
              <span className="text-[#C5A880] underline decoration-[#C5A880]/30 underline-offset-8">Precision</span> &amp; Integrity.
            </h1>
            
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-xl">
              Apex Legal Partners counsels global corporations, institutional boards, and specialized agencies through high-stakes commercial litigation, cross-border transactional restructurings, and deep technical regulatory compliance.
            </p>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <button
                onClick={() => onNavigate('practice-areas')}
                className="py-3 px-6 bg-[#0F172A] hover:bg-neutral-800 text-white hover:text-[#C5A880] rounded text-xs font-mono uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center text-center"
                type="button"
              >
                Practice Sectors <ChevronRight className="w-3.5 h-3.5 ml-2 text-[#C5A880]" />
              </button>
              <button
                onClick={() => onNavigate('team')}
                className="py-3 px-6 bg-transparent border border-gray-300 hover:border-gray-500 text-gray-700 rounded text-xs font-mono uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center text-center"
                type="button"
              >
                Our Professionals
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Elegant luxury framing */}
            <div className="absolute inset-4 border border-[#C5A880]/40 -m-4 rounded"></div>
            <img 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
              alt="Apex Legal Partners Law Library"
              className="w-full h-80 object-cover shadow-lg border border-gray-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur shadow-md p-4 text-xs font-serif border-l-4 border-[#C5A880]">
              <span className="font-mono text-[9px] uppercase tracking-wider text-gray-500 block mb-1">PRESTIGE STATEMENT</span>
              "To preserve the rule of justice with structural clarity, compliance, and unmatched legal excellence."
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strict BCI Regulation Informative Bar */}
      <section className="bg-white border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-lg p-5 border border-gray-200/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start md:items-center space-x-3 max-w-4xl">
              <AlertCircle className="w-5 h-5 text-[#C5A880] mt-0.5 md:mt-0 shrink-0" />
              <p className="text-xs text-gray-500 leading-relaxed font-sans">
                <strong>Statutory Notice (Standard Legal Compliance Board Rule 36):</strong> This website is strictly academic and informational. The content displayed herein (including practice areas and attorney biographies) is produced solely on request of the user for general reference, and does not constitute advertising, a legal offer, or an attorney-client relationship.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="text-[#C5A880] hover:text-[#111827] font-mono text-[10px] tracking-wider uppercase underline shrink-0 hover:no-underline transition-colors focus:outline-none"
              type="button"
            >
              Verify Legal Terms
            </button>
          </div>
        </div>
      </section>

      {/* Fine-Spaced Grid of Firm Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-[#C5A880] font-mono text-[10px] uppercase tracking-[0.25em] block">
              Professional Credenda
            </span>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Constructed Under Standards of Distinction
            </h2>
            <div className="w-16 h-0.5 bg-[#C5A880] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 bg-white border border-gray-100 hover:border-[#C5A880]/30 shadow-sm transition-all rounded-lg space-y-4"
            >
              <div className="p-3 bg-[#FAF9F6] border border-[#C5A880]/20 rounded-lg w-12 h-12 flex items-center justify-center">
                <Building className="w-5 h-5 text-[#8F6B38]" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gray-900">Elite Practice Domains</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Advising on intricate M&amp;A integration pathways, compliance structuring under antitrust standards, and securing critical assets during liquidations.
              </p>
              <button 
                onClick={() => onNavigate('practice-areas')}
                className="text-xs font-mono text-[#C5A880] hover:text-[#111827] flex items-center space-x-1 uppercase tracking-wider"
                type="button"
              >
                <span>Read practices</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 bg-white border border-gray-100 hover:border-[#C5A880]/30 shadow-sm transition-all rounded-lg space-y-4"
            >
              <div className="p-3 bg-[#FAF9F6] border border-[#C5A880]/20 rounded-lg w-12 h-12 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#8F6B38]" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gray-900">Distinguished Academics</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Our advisors possess premium qualifications from elite global institutions (Oxford, Harvard, and other elite global law schools), providing rigorous depth to complex litigation.
              </p>
              <button 
                onClick={() => onNavigate('team')}
                className="text-xs font-mono text-[#C5A880] hover:text-[#111827] flex items-center space-x-1 uppercase tracking-wider"
                type="button"
              >
                <span>Examine Bios</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>

            <motion.div 
              whileHover={{ y: -4 }}
              className="p-8 bg-white border border-gray-100 hover:border-[#C5A880]/30 shadow-sm transition-all rounded-lg space-y-4"
            >
              <div className="p-3 bg-[#FAF9F6] border border-[#C5A880]/20 rounded-lg w-12 h-12 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-[#8F6B38]" />
              </div>
              <h3 className="font-serif font-semibold text-lg text-gray-900">Compliance &amp; Research</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Pioneering active regulatory briefings on corporate liability, double tax mitigation MLI treaties, and data sovereignty compliance reports.
              </p>
              <button 
                onClick={() => onNavigate('publications')}
                className="text-xs font-mono text-[#C5A880] hover:text-[#111827] flex items-center space-x-1 uppercase tracking-wider"
                type="button"
              >
                <span>Read Articles</span> <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Firm Stats Section */}
      <section className="bg-neutral-900 text-white py-16 relative">
        <div className="absolute inset-0 opacity-[0.02] bg-[size:2rem_2rem] bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)]"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
          <div className="space-y-1.5">
            <span className="block font-serif text-3xl md:text-5xl font-bold text-[#E5C494]">1999</span>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-400">Established Globally</span>
          </div>
          <div className="space-y-1.5">
            <span className="block font-serif text-3xl md:text-5xl font-bold text-[#E5C494]">Tier-1</span>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-400">Corporate Standing</span>
          </div>
          <div className="space-y-1.5">
            <span className="block font-serif text-3xl md:text-5xl font-bold text-[#E5C494]">100%</span>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-400">Privacy Framework Compliant</span>
          </div>
          <div className="space-y-1.5">
            <span className="block font-serif text-3xl md:text-5xl font-bold text-[#E5C494]">Supreme</span>
            <span className="block font-mono text-[9px] uppercase tracking-widest text-gray-400">Court Practice</span>
          </div>
        </div>
      </section>

      {/* Footer Credentials Info */}
      <footer className="bg-gray-50 border-t border-gray-100 py-12 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-6 space-y-4">
          <p className="font-serif italic font-medium">Apex Legal Partners — Distinguished Legal Excellence</p>
          <p className="max-w-3xl mx-auto text-[11px] leading-relaxed">
            Registered Offices: New York, NY &amp; London, UK. <br />
            Data Protection Officer contact: privacy@legal-demo.com
          </p>
          <div className="flex justify-center items-center space-x-6 pt-3 text-[10px] font-mono">
            <span className="flex items-center text-emerald-700">
              <ShieldCheck className="w-3.5 h-3.5 mr-1" /> DATA PRIVACY RECKONER
            </span>
            <span className="text-gray-400 font-serif">|</span>
            <span className="text-gray-600">STANDARD BOARD RULE 36 REVIEWED</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
