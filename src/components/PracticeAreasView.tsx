import React, { useState } from 'react';
import { PRACTICE_AREAS } from '../data';
import { PracticeArea } from '../types';
import { Scale, Building2, Coins, ShieldAlert, ArrowRight, X, Sparkles, Check, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Maps string name from data.ts to Lucide Icon React Components
const IconMapper = ({ name, className }: { name: string; className?: string }) => {
  switch (name) {
    case 'Building2':
      return <Building2 className={className} />;
    case 'Scale':
      return <Scale className={className} />;
    case 'Coins':
      return <Coins className={className} />;
    case 'ShieldAlert':
      return <ShieldAlert className={className} />;
    default:
      return <Scale className={className} />;
  }
};

export default function PracticeAreasView() {
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);

  return (
    <div className="font-sans text-[#1A1A1A] bg-white pt-28 pb-20 min-h-screen" id="practices-sect-view-id">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Editorial Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[#C5A880] font-mono text-xs uppercase tracking-[0.25em] block">
            Practice Sectors
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Professional Advisory Portfolios
          </h1>
          <p className="text-gray-600 text-sm max-w-xl leading-relaxed">
            Advocating for institutional stakeholders through focused compliance audits, dispute resolution strategies, and structured capital reallocations under global regulatory guidelines.
          </p>
          <div className="w-20 h-0.5 bg-[#C5A880] mt-4"></div>
        </div>

        {/* Practice Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="practice-grid-id">
          {PRACTICE_AREAS.map((practice, index) => (
            <motion.div
              key={practice.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              onClick={() => setSelectedPractice(practice)}
              className="group p-8 bg-[#FAF9F6] hover:bg-white border border-[#C5A880]/15 hover:border-[#C5A880]/40 shadow-sm transition-all duration-300 rounded-lg cursor-pointer flex flex-col justify-between"
            >
              <div className="space-y-6">
                <div className="p-3.5 bg-white border border-[#C5A880]/20 rounded-lg w-14 h-14 flex items-center justify-center group-hover:bg-[#0F172A] group-hover:border-transparent transition-all">
                  <IconMapper 
                    name={practice.iconName} 
                    className="w-7 h-7 text-[#8F6B38] group-hover:text-[#E5C494] transition-colors" 
                  />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif font-bold text-xl text-gray-900 group-hover:text-[#C5A880] transition-colors">
                    {practice.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed font-mono uppercase tracking-wider">
                    REGULATION GROUP
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {practice.brief}
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-[#C5A880]/10 flex items-center text-xs font-mono text-[#8F6B38] tracking-widest uppercase group-hover:text-gray-900 transition-colors">
                <span>View Domain Dossier</span> 
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Informative legal guideline footer card */}
        <div className="mt-16 bg-[#FAF9F6]/50 border border-dashed border-gray-200 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="leading-relaxed max-w-4xl">
            <strong>Analytical Reference Statement:</strong> Specific cases, transactional boundaries, or advisory items referenced in details represent generic scenarios developed in academic literature to serve legal understanding. These references do not suggest guaranteed results for prospective participants.
          </p>
          <div className="px-3 py-1 bg-white border border-gray-200 text-[10px] font-mono tracking-wider rounded uppercase shrink-0">
            SEC. IV Rule 36 compliant
          </div>
        </div>

        {/* Core Practice Detail Modal (Slick Cabinet-Overlay) */}
        <AnimatePresence>
          {selectedPractice && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-end bg-black/40 backdrop-blur-xs"
              onClick={() => setSelectedPractice(null)}
            >
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 180 }}
                className="w-full max-w-2xl bg-white h-screen shadow-2xl p-6 md:p-10 overflow-y-auto flex flex-col justify-between"
                onClick={(e) => e.stopPropagation()}
                id="practice-slideout-id"
              >
                {/* Modal Top */}
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-100">
                    <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                      Practice Dossier
                    </span>
                    <button
                      onClick={() => setSelectedPractice(null)}
                      className="p-1.5 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
                      type="button"
                    >
                      <X className="w-5 h-5 text-gray-500 hover:text-gray-900" />
                    </button>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-[#FAF9F6] border border-[#C5A880]/30 rounded-lg">
                      <IconMapper name={selectedPractice.iconName} className="w-8 h-8 text-[#8F6B38]" />
                    </div>
                    <div>
                      <h2 className="font-serif text-2xl font-bold text-gray-900">{selectedPractice.title}</h2>
                      <span className="text-xs font-mono text-[#C5A880] uppercase tracking-wider block">
                        Apex Legal Partners Ltd
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mt-6">
                    <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line border-l-2 border-[#C5A880]/30 pl-4 py-1 italic">
                      "{selectedPractice.brief}"
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed font-sans">
                      {selectedPractice.description}
                    </p>
                  </div>

                  {/* Core Sub-disciplines */}
                  <div className="pt-6 space-y-4">
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400">
                      Primary Advisory Domains
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {selectedPractice.focusAreas.map((area, i) => (
                        <div 
                          key={i} 
                          className="p-3 bg-gray-50 border border-gray-100 rounded-md text-xs text-gray-800 flex items-start space-x-2.5"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#8F6B38] shrink-0 mt-0.5" />
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Bottom */}
                <div className="mt-12 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-gray-400 gap-4">
                  <div>
                    <span className="block font-mono text-[9px] uppercase tracking-widest">Standard Compliance Board Clearance</span>
                    <span className="text-gray-500 font-sans">Strictly Educational Academic Reference Only</span>
                  </div>
                  <button
                    onClick={() => setSelectedPractice(null)}
                    className="py-2.5 px-6 bg-[#0F172A] hover:bg-neutral-800 text-[#C5A880] rounded text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                    type="button"
                  >
                    Close Dossier
                  </button>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
