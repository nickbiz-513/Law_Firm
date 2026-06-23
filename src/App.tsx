import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import DisclaimerModal from './components/DisclaimerModal';
import DPDPConsentCenter from './components/DPDPConsentCenter';
import HomeView from './components/HomeView';
import PracticeAreasView from './components/PracticeAreasView';
import TeamView from './components/TeamView';
import PublicationsView from './components/PublicationsView';
import ContactView from './components/ContactView';
import { DPDPConsentState } from './types';
import { ShieldCheck, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [consentState, setConsentState] = useState<DPDPConsentState>({
    hasAcceptedDisclaimer: false,
    hasAcceptedDPDP: false,
    consentTimestamp: null
  });
  
  const [activeView, setActiveView] = useState<string>('home');
  const [showDPDPHub, setShowDPDPHub] = useState<boolean>(false);
  const [isInitializing, setIsInitializing] = useState<boolean>(true);

  // Load initial cookies/localstorage states
  useEffect(() => {
    try {
      const storedConsent = localStorage.getItem('apex_legal_consent');
      if (storedConsent) {
        setConsentState(JSON.parse(storedConsent));
      }
    } catch (e) {
      console.error("Failed to parse consent logs", e);
    } finally {
      setIsInitializing(false);
    }
  }, []);

  // Scroll reset on view transitions
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const handleAcceptDisclaimer = (agreeDPDP: boolean) => {
    const freshState: DPDPConsentState = {
      hasAcceptedDisclaimer: true,
      hasAcceptedDPDP: agreeDPDP,
      consentTimestamp: new Date().toISOString()
    };
    setConsentState(freshState);
    localStorage.setItem('apex_legal_consent', JSON.stringify(freshState));
  };

  const handleRevokeConsent = () => {
    const blankState: DPDPConsentState = {
      hasAcceptedDisclaimer: false,
      hasAcceptedDPDP: false,
      consentTimestamp: null
    };
    setConsentState(blankState);
    localStorage.removeItem('apex_legal_consent');
    setActiveView('home'); // Reset back to root page
  };

  const handleRenewConsent = () => {
    const renewedState: DPDPConsentState = {
      hasAcceptedDisclaimer: true,
      hasAcceptedDPDP: true,
      consentTimestamp: new Date().toISOString()
    };
    setConsentState(renewedState);
    localStorage.setItem('apex_legal_consent', JSON.stringify(renewedState));
  };

  const renderActiveView = () => {
    switch (activeView) {
      case 'home':
        return <HomeView onNavigate={setActiveView} />;
      case 'practice-areas':
        return <PracticeAreasView />;
      case 'team':
        return <TeamView />;
      case 'publications':
        return <PublicationsView />;
      case 'contact':
        return <ContactView onRenewConsent={handleRenewConsent} />;
      default:
        return <HomeView onNavigate={setActiveView} />;
    }
  };

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center font-mono text-xs text-gray-500">
        INITIALIZING COMPLIANCE CREDENTIALS...
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white text-[#1A1A1A] flex flex-col font-sans" id="apex-app-root">
      
      {/* Standard Legal Compliance Board Disclaimer Block Modal */}
      <AnimatePresence>
        {!consentState.hasAcceptedDisclaimer && (
          <DisclaimerModal onAccept={handleAcceptDisclaimer} />
        )}
      </AnimatePresence>

      {/* Main App Layout */}
      {consentState.hasAcceptedDisclaimer && (
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <Navbar 
            activeView={activeView} 
            onNavigate={setActiveView} 
            onOpenDPDP={() => setShowDPDPHub(true)}
            consentState={consentState}
          />

          {/* Core Content Body with motion transition wrapper */}
          <main className="flex-1 relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeView}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="w-full"
              >
                {renderActiveView()}
              </motion.div>
            </AnimatePresence>
          </main>

          {/* Interactive Compliance Center Modal Overlay */}
          <AnimatePresence>
            {showDPDPHub && (
              <DPDPConsentCenter 
                isOpen={showDPDPHub}
                onClose={() => setShowDPDPHub(false)}
                consentState={consentState}
                onRevokeConsent={handleRevokeConsent}
              />
            )}
          </AnimatePresence>

          {/* Static minimal security floating controller block */}
          <div className="fixed bottom-4 right-4 z-30 hidden sm:block">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setShowDPDPHub(true)}
              className="py-2.5 px-4 bg-[#0F172A] hover:bg-neutral-800 text-[#C5A880] rounded-full text-xs font-mono tracking-wider shadow-xl border border-[#C5A880]/30 transition-all flex items-center space-x-2 cursor-pointer"
              type="button"
            >
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>Data Privacy Center</span>
            </motion.button>
          </div>
        </div>
      )}
    </div>
  );
}
