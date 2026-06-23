import React, { useState, useEffect } from 'react';
import { COMPLIANCE_NOTICE } from '../data';
import { ShieldCheck, Download, Trash2, Lock, User, CheckSquare, Info, X, FileText, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DPDPConsentCenterProps {
  isOpen: boolean;
  onClose: () => void;
  consentState: {
    hasAcceptedDisclaimer: boolean;
    hasAcceptedDPDP: boolean;
    consentTimestamp: string | null;
  };
  onRevokeConsent: () => void;
}

export default function DPDPConsentCenter({ isOpen, onClose, consentState, onRevokeConsent }: DPDPConsentCenterProps) {
  const [localStorageLogs, setLocalStorageLogs] = useState<any[]>([]);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  // Read stored inquiries from localstorage to show user what personal data we have
  const refreshLogs = () => {
    const rawInquiries = localStorage.getItem('apex_legal_inquiries');
    const logs = rawInquiries ? JSON.parse(rawInquiries) : [];
    setLocalStorageLogs(logs);
  };

  useEffect(() => {
    if (isOpen) {
      refreshLogs();
    }
  }, [isOpen, consentState]);

  const handleExportDataForDPDP = () => {
    const dataExportPayload = {
      dataSubject: {
        consentGranted: consentState.hasAcceptedDPDP,
        consentTimestamp: consentState.consentTimestamp,
        acceptedGeneralDisclaimer: consentState.hasAcceptedDisclaimer,
        legalJurisdiction: "Global - International Data Privacy Framework Jurisdiction",
        dataFiduciary: "Apex Legal Partners Ltd"
      },
      submittedInquiries: localStorageLogs,
      complianceAuditor: "DPO: Mr. Rohan Vance (privacy@legal-demo.com)"
    };

    const blob = new Blob([JSON.stringify(dataExportPayload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Apex_Legal_Privacy_Subject_Record_${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSuccessMsg("Audit Log generated and downloaded successfully. You have exercised your Section 11 Right to Information Rights!");
    setTimeout(() => setSuccessMsg(null), 5000);
  };

  const handleFullPurge = () => {
    // Purge inquiries
    localStorage.removeItem('apex_legal_inquiries');
    // Call props to reset root consent
    onRevokeConsent();
    
    setLocalStorageLogs([]);
    setSuccessMsg("Absolute Purge Complete! All personal data entries and consent records have been systematically erased under the International Data Privacy Framework guidelines.");
    setTimeout(() => {
      setSuccessMsg(null);
      onClose(); // Close console after quick delay
    }, 4000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4 font-sans">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-2xl bg-white border border-[#C5A880]/30 rounded-lg shadow-2xl p-6 md:p-8 overflow-y-auto max-h-[90vh]"
        id="dpdp-compliance-hub-id"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors"
          type="button"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
          <div className="p-2 bg-[#FAF9F6] border border-[#C5A880]/30 rounded-full">
            <ShieldCheck className="w-6 h-6 text-[#C5A880]" />
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold text-gray-900">International Data Privacy Framework Compliance Center</h2>
            <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
              Interactive Data-Subject Control Panel
            </p>
          </div>
        </div>

        {/* Info notice explaining DPDP rights */}
        <div className="mt-5 bg-[#FAF9F6] border border-[#C5A880]/20 rounded-lg p-4 text-xs text-gray-700 leading-relaxed">
          <span className="flex items-center font-bold text-[#0F172A] mb-1.5 uppercase tracking-wider font-mono text-[10px]">
            <Info className="w-3.5 h-3.5 mr-1.5 text-[#C5A880]" /> Your Rights Under the International Data Privacy Framework
          </span>
          Under these guidelines, users possess the legal authority to request summaries, edit details, or completely erase personal identity records from active data stores.
        </div>

        {/* Success Msg Banner */}
        <AnimatePresence>
          {successMsg && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 p-3.5 bg-neutral-900 border border-[#C5A880]/40 text-[#E5C494] text-xs h-auto rounded flex items-start space-x-2 shadow-md"
            >
              <ShieldCheck className="w-4 h-4 mt-0.5 shrink-0" />
              <span>{successMsg}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Active Consent State Box */}
        <div className="mt-6 border border-gray-100 rounded-lg p-5 bg-white">
          <h3 className="font-serif font-semibold text-sm text-gray-900 mb-4 flex items-center">
            <Lock className="w-4 h-4 mr-2 text-[#C5A880]" /> Stored Consent &amp; Log Credentials
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <span className="text-gray-500 block text-[10px] uppercase font-mono tracking-wider">Standard Compliance Board Status</span>
              <span className="font-semibold text-emerald-700 flex items-center mt-1">
                <CheckSquare className="w-4 h-4 mr-1.5" /> ACTIVE &amp; ACKNOWLEDGED
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded border border-gray-100">
              <span className="text-gray-500 block text-[10px] uppercase font-mono tracking-wider">Privacy Consent Status</span>
              <span className={`font-semibold mt-1 flex items-center ${consentState.hasAcceptedDPDP ? 'text-emerald-700' : 'text-gray-500'}`}>
                {consentState.hasAcceptedDPDP ? (
                  <>
                    <CheckSquare className="w-4 h-4 mr-1.5" /> GRANTED &amp; LOGGED
                  </>
                ) : (
                  <>
                    <X className="w-4 h-4 mr-1.5" /> OPTED OUT / DECLINED
                  </>
                )}
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded border border-gray-100 md:col-span-2">
              <span className="text-gray-500 block text-[10px] uppercase font-mono tracking-wider">Active System Record Identifier</span>
              <span className="font-mono text-[10px] text-gray-800 break-all select-all block mt-1">
                {consentState.consentTimestamp ? `apex-privacy-${consentState.consentTimestamp}` : 'No logged token (visitor only)'}
              </span>
            </div>
          </div>
        </div>

        {/* Current Personal Data Records segment */}
        <div className="mt-6 border border-gray-100 rounded-lg p-5 bg-white">
          <h3 className="font-serif font-semibold text-sm text-gray-900 mb-3 flex items-center">
            <User className="w-4 h-4 mr-2 text-[#C5A880]" /> Stored Data Structures ({localStorageLogs.length})
          </h3>
          {localStorageLogs.length === 0 ? (
            <p className="text-xs text-gray-500 italic py-2">
              No advisory or contact inquiries have been recorded. No local browser trackers are hosted.
            </p>
          ) : (
            <div className="space-y-3 max-h-[22vh] overflow-y-auto pr-1">
              {localStorageLogs.map((log) => (
                <div key={log.id} className="p-3 bg-[#FAF9F6] border border-gray-200/60 rounded text-xs">
                  <div className="flex justify-between font-mono text-[9px] text-gray-400">
                    <span>RECORD ID: {log.id}</span>
                    <span>{new Date(log.submittedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="mt-1 grid grid-cols-2 gap-2">
                    <div>
                      <span className="text-gray-400 block text-[9px] font-mono">Full Name:</span>
                      <span className="font-semibold text-gray-900">{log.fullName}</span>
                    </div>
                    <div>
                      <span className="text-gray-400 block text-[9px] font-mono">Email Address:</span>
                      <span className="text-gray-950 font-mono text-[11px]">{log.emailAddress}</span>
                    </div>
                  </div>
                  <div className="mt-1">
                    <span className="text-gray-400 block text-[9px] font-mono">Inquiry Text Excerpt:</span>
                    <span className="text-gray-700 italic block truncate mt-0.5">"{log.detailedRequest}"</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Actions under Section 11 & 12 */}
        <div className="mt-8 border-t border-gray-100 pt-6 flex flex-col sm:flex-row justify-between space-y-3 sm:space-y-0 sm:space-x-3">
          <button
            onClick={handleExportDataForDPDP}
            className="flex-1 py-2.5 px-4 bg-[#0F172A] hover:bg-neutral-800 text-[#C5A880] rounded text-xs font-mono font-medium uppercase tracking-wide transition-all border border-[#C5A880]/30 hover:border-[#C5A880] flex items-center justify-center cursor-pointer"
            id="dpdp-export-btn-id"
            type="button"
          >
            <Download className="w-4 h-4 mr-2" /> Export Structured Data Subject Record
          </button>

          <button
            onClick={handleFullPurge}
            className="py-2.5 px-4 bg-rose-50 hover:bg-rose-100 text-rose-700 rounded text-xs font-mono font-medium uppercase tracking-wide transition-all border border-rose-200 flex items-center justify-center cursor-pointer"
            id="dpdp-purge-btn-id"
            type="button"
          >
            <Trash2 className="w-4 h-4 mr-2" /> Revoke Consent &amp; Purge
          </button>
        </div>

        <div className="mt-6 flex justify-between items-center text-[9px] text-gray-400 border-t border-gray-100 pt-4">
          <span>DPO Officer: Mr. Rohan Vance</span>
          <span>Compliant with the International Data Privacy Framework</span>
        </div>
      </motion.div>
    </div>
  );
}
