import React, { useState } from 'react';
import { COMPLIANCE_NOTICE } from '../data';
import { Scale, ShieldCheck, Lock, ChevronRight, AlertTriangle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DisclaimerModalProps {
  onAccept: (agreeDPDP: boolean) => void;
}

export default function DisclaimerModal({ onAccept }: DisclaimerModalProps) {
  const [agreedBCI, setAgreedBCI] = useState(false);
  const [agreedDPDP, setAgreedDPDP] = useState(false);
  const [showDPDPLink, setShowDPDPLink] = useState(false);

  const handleEnterPortal = () => {
    if (agreedBCI) {
      onAccept(agreedDPDP);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A] text-white overflow-y-auto px-4 py-8 md:p-6 font-sans">
      {/* Visual background lines to enhance high-end aesthetic */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#C5A880_1px,transparent_1px),linear-gradient(to_bottom,#C5A880_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-3xl bg-[#1A202C] border border-[#C5A880]/30 rounded-lg p-6 md:p-10 shadow-2xl z-10"
        id="bci-disclaimer-portal-id"
      >
        <div className="flex flex-col items-center text-center pb-6 border-b border-[#C5A880]/20">
          <Scale className="text-[#C5A880] w-12 h-12 mb-3" />
          <h1 className="font-serif text-3xl font-bold tracking-wide text-white uppercase sm:text-4xl">
            APEX LEGAL PARTNERS
          </h1>
          <p className="text-[#C5A880] font-mono text-xs tracking-widest mt-1 uppercase">
            Attorneys &amp; Legal Counsel
          </p>
        </div>

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-gray-300 overflow-y-auto max-h-[35vh] pr-2 custom-scrollbar">
          <div className="bg-[#111827] border-l-2 border-[#C5A880] p-4 rounded mb-4">
            <span className="flex items-center text-[#C5A880] font-semibold uppercase tracking-wider text-xs font-mono mb-1">
              <AlertTriangle className="w-4 h-4 mr-1.5" /> Standard Legal Compliance Board Rule 36 Disclaimer
            </span>
            <p className="text-gray-300 text-xs leading-relaxed">
              {COMPLIANCE_NOTICE.bciRule36Text}
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-white font-serif font-semibold text-base">User Declaration &amp; Undertaking:</h3>
            <p className="text-xs text-gray-400 whitespace-pre-line leading-relaxed">
              {COMPLIANCE_NOTICE.bciUndertakingText}
            </p>
          </div>

          <div className="border-t border-[#C5A880]/10 pt-4 mt-4">
            <button 
              onClick={() => setShowDPDPLink(!showDPDPLink)}
              className="text-xs font-mono text-[#C5A880] underline hover:text-[#D4AF37] focus:outline-none flex items-center"
              type="button"
            >
              View International Data Privacy Framework Consent Notice {showDPDPLink ? '▼' : '►'}
            </button>

            <AnimatePresence>
              {showDPDPLink && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-[#111827]/80 rounded p-4 mt-3 border border-gray-800 text-xs space-y-2 overflow-hidden"
                >
                  <p className="text-[#C5A880] font-serif font-medium">{COMPLIANCE_NOTICE.dpdpNoticeTitle}</p>
                  <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {COMPLIANCE_NOTICE.dpdpNoticeText}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Interaction checkboxes */}
        <div className="mt-8 space-y-4 border-t border-[#C5A880]/20 pt-6">
          <label className="flex items-start cursor-pointer group">
            <input 
              type="checkbox"
              checked={agreedBCI}
              onChange={(e) => setAgreedBCI(e.target.checked)}
              className="mt-1 h-4 w-4 text-[#C5A880] rounded border-gray-700 bg-[#111827] focus:ring-[#C5A880]"
            />
            <span className="ml-3 text-xs text-gray-300 select-none group-hover:text-white transition-colors">
              I have read, understood, and accept the Standard Legal Compliance Board under-taking above. I am searching for info solely of my own initiative.
            </span>
          </label>

          <label className="flex items-start cursor-pointer group">
            <input 
              type="checkbox"
              checked={agreedDPDP}
              onChange={(e) => setAgreedDPDP(e.target.checked)}
              className="mt-1 h-4 w-4 text-[#C5A880] rounded border-gray-700 bg-[#111827] focus:ring-[#C5A880]"
            />
            <span className="ml-3 text-xs text-gray-300 select-none group-hover:text-white transition-colors">
              <span className="text-[#C5A880] font-bold font-mono text-[10px] bg-[#C5A880]/10 px-1 border border-[#C5A880]/20 rounded mr-1">OPTIONAL PRIVACY CONSENT</span> 
              I authorize Apex Legal Partners to securely store my data-fiduciary authorization logs in accordance with the International Data Privacy Framework, allowing me to voluntarily request newsletter and legal publications.
            </span>
          </label>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleEnterPortal}
            disabled={!agreedBCI}
            className={`flex-1 py-3 px-6 rounded text-xs font-mono font-bold uppercase tracking-wider text-center transition-all ${
              agreedBCI 
                ? 'bg-gradient-to-r from-[#C5A880] to-[#E5C494] text-[#0F172A] hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] cursor-pointer' 
                : 'bg-gray-800 text-gray-600 border border-gray-700 cursor-not-allowed'
            }`}
            id="accept-decl-submit-id"
          >
            Enter Firm Portal
          </button>
          
          <button
            onClick={() => window.location.href = 'https://www.google.com'}
            className="px-6 py-3 bg-transparent border border-gray-700 hover:text-white hover:border-gray-500 rounded text-xs font-mono text-gray-400 uppercase tracking-widest transition-all"
            type="button"
          >
            Decline &amp; Exit
          </button>
        </div>

        <div className="mt-6 flex justify-center items-center text-[10px] text-gray-500 font-mono space-x-4">
          <span className="flex items-center"><Lock className="w-3 h-3 mr-1 text-[#C5A880]/70" /> SSL SECURED</span>
          <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1 text-[#C5A880]/70" /> PRIVACY FRAMEWORK COMPLIANT</span>
        </div>
      </motion.div>
    </div>
  );
}
