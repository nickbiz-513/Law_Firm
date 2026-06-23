import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck, Scale, Lock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activeView: string;
  onNavigate: (view: string) => void;
  onOpenDPDP: () => void;
  consentState: {
    hasAcceptedDPDP: boolean;
  };
}

export default function Navbar({ activeView, onNavigate, onOpenDPDP, consentState }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Brief' },
    { id: 'practice-areas', label: 'Practice Sectors' },
    { id: 'team', label: 'Our Professionals' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Inquiries' }
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 font-sans border-b ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-gray-100' 
        : 'bg-white py-6 border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center" id="nav-container-id">
        {/* Brand Identity / Firm Crest representation */}
        <div 
          onClick={() => onNavigate('home')} 
          className="flex items-center space-x-3 cursor-pointer group"
          id="brand-logo-btn-id"
        >
          <div className="p-1.5 border border-[#C5A880] group-hover:bg-[#C5A880]/10 transition-colors">
            <Scale className="text-[#C5A880] w-5 h-5" />
          </div>
          <div>
            <span className="font-serif text-xl font-semibold tracking-widest text-[#111827] uppercase block leading-none">
              APEX LEGAL PARTNERS
            </span>
            <span className="text-[9px] font-mono tracking-[0.25em] text-[#C5A880] uppercase mt-0.5 block leading-none">
              ESTD 1999 | Attorneys &amp; Counsel
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-xs font-mono uppercase tracking-widest transition-colors pb-1 relative cursor-pointer ${
                activeView === item.id 
                  ? 'text-[#C5A880] font-semibold border-b border-[#C5A880]' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              type="button"
            >
              {item.label}
            </button>
          ))}

          {/* Persistent security button for compliance */}
          <button
            onClick={onOpenDPDP}
            className={`py-1.5 px-3 rounded-full text-[10px] font-mono uppercase tracking-wider flex items-center transition-all cursor-pointer ${
              consentState.hasAcceptedDPDP
                ? 'bg-[#E5C494]/15 border border-[#C5A880]/30 text-[#8F6B38] hover:bg-[#E5C494]/35'
                : 'bg-gray-50 border border-gray-200 text-gray-500 hover:bg-gray-100'
            }`}
            type="button"
          >
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#C5A880]" /> Privacy Hub
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center space-x-3 md:hidden">
          <button
            onClick={onOpenDPDP}
            className="p-1.5 bg-gray-50 border border-gray-200 rounded text-gray-500 hover:bg-gray-100"
            title="Privacy Center"
            type="button"
          >
            <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 border border-gray-200 text-gray-700 rounded-md focus:outline-none focus:ring-1 focus:ring-[#C5A880]"
            type="button"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 mt-4 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col items-stretch">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left text-xs font-mono uppercase tracking-widest py-2 transition-colors cursor-pointer ${
                    activeView === item.id ? 'text-[#C5A880] font-bold' : 'text-gray-600'
                  }`}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="border-t border-gray-100 pt-4 pb-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenDPDP();
                  }}
                  className="w-full py-2.5 px-4 bg-[#FAF9F6] border border-[#C5A880]/30 hover:bg-gray-100 rounded text-[11px] font-mono uppercase tracking-widest text-[#8F6B38] flex items-center justify-center cursor-pointer"
                  type="button"
                >
                  <ShieldCheck className="w-4 h-4 mr-2 text-[#C5A880]" /> Open Privacy Compliance Hub
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
