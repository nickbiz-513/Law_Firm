import React, { useState } from 'react';
import { COMPLIANCE_NOTICE } from '../data';
import { SupportInquiry } from '../types';
import { Mail, Phone, Clock, ShieldCheck, FileText, CheckCircle2, Lock, ArrowRight, UserPlus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactViewProps {
  onRenewConsent: () => void;
}

export default function ContactView({ onRenewConsent }: ContactViewProps) {
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [organization, setOrganization] = useState('');
  const [sector, setSector] = useState('Corporate Board Advisory');
  const [requestDetails, setRequestDetails] = useState('');
  
  const [dpdpChecked, setDpdpChecked] = useState(false);
  const [successInquiry, setSuccessInquiry] = useState<SupportInquiry | null>(null);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!dpdpChecked) return;

    const newInquiry: SupportInquiry = {
      id: `APEX-PRIVACY-INQ-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName,
      emailAddress,
      phoneNumber,
      organization,
      regulatorySector: sector,
      detailedRequest: requestDetails,
      submittedAt: new Date().toISOString(),
      consentHash: `sha256-dpdp-token-${Math.random().toString(36).substring(2, 10)}${Date.now().toString(36)}`
    };

    // Save to localstorage simulating secure cloud DB ingestion
    const rawInquiries = localStorage.getItem('apex_legal_inquiries');
    const records = rawInquiries ? JSON.parse(rawInquiries) : [];
    records.push(newInquiry);
    localStorage.setItem('apex_legal_inquiries', JSON.stringify(records));

    // Retrace and enforce consent metadata state
    onRenewConsent();

    setSuccessInquiry(newInquiry);

    // Reset fields
    setFullName('');
    setEmailAddress('');
    setPhoneNumber('');
    setOrganization('');
    setSector('Corporate Board Advisory');
    setRequestDetails('');
    setDpdpChecked(false);
  };

  return (
    <div className="font-sans text-[#1A1A1A] bg-white pt-28 pb-20 min-h-screen" id="contactview-form-container">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Academic Editorial headers */}
        <div className="max-w-3xl mb-12 space-y-3">
          <span className="text-[#C5A880] font-mono text-xs uppercase tracking-[0.25em] block">
            Client Inquiries
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
            Voluntary Consultation Intake
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xl">
            In compliance with rule parameters, corporate legal counsel can voluntarily initiate informational queries. Substantive reviews are managed in strict adherence to data privacy locks.
          </p>
          <div className="w-16 h-0.5 bg-[#C5A880] mt-3"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contacts-row-split-id">
          
          {/* Informational left col */}
          <div className="lg:col-span-5 space-y-8 bg-[#FAF9F6] border border-[#C5A880]/15 rounded-lg p-6 md:p-8">
            <h3 className="font-serif font-bold text-xl text-gray-900 flex items-center">
              Offices &amp; Coordinates
            </h3>
            
            <div className="space-y-6 text-sm">
              <div className="space-y-1">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#8F6B38]">Global Head Office</span>
                <p className="text-gray-700 leading-relaxed font-sans">
                  123 Financial District, Suite 500, <br />
                  New York, NY 10005 <br />
                  <span className="font-medium text-gray-900">Tel: +1 555 0100</span>
                </p>
              </div>

              <div className="space-y-1">
                <span className="block font-mono text-[9px] uppercase tracking-widest text-[#8F6B38]">London Office</span>
                <p className="text-gray-700 leading-relaxed font-sans">
                  45 Canary Wharf, Level 20, <br />
                  London, E14 5AB <br />
                  <span className="font-medium text-gray-900">Tel: +44 20 7946 0192</span>
                </p>
              </div>

              <div className="border-t border-[#C5A880]/15 pt-6 space-y-3 font-mono text-xs text-gray-600">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-4 h-4 mr-2.5 text-[#C5A880]" />
                  <span>contact@legal-demo.com</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Clock className="w-4 h-4 mr-2.5 text-[#C5A880]" />
                  <span>Mon - Fri | 09:00 AM - 06:00 PM (EST)</span>
                </div>
              </div>
            </div>

            {/* Privacy DPO Alert card */}
            <div className="bg-white border-l-2 border-[#C5A880] p-4 text-xs space-y-2 rounded shadow-sm">
              <span className="flex items-center text-[#8F6B38] font-bold font-mono uppercase text-[9px] tracking-wider">
                <ShieldCheck className="w-4 h-4 mr-1.5" /> Privacy Fiduciary Auditing
              </span>
              <p className="text-gray-600 leading-relaxed">
                Representative enquiries are locked into local system records. Under standard frameworks, users can instantly remove any records with a simple click using our **Privacy Hub**.
              </p>
              <div className="pt-1.5 font-mono text-[9px] text-gray-500 flex justify-between">
                <span>DPO: Mr. Robert Vance</span>
                <span className="underline">privacy@legal-demo.com</span>
              </div>
            </div>
          </div>

          {/* Form / Success Alert Right col */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {successInquiry ? (
                /* Success Case Panel (Statutory Compliance Logging) */
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-emerald-50 border border-emerald-200 rounded-lg p-6 md:p-10 space-y-6"
                  id="intake-validated-panel"
                >
                  <div className="flex items-center space-x-3 pb-3 border-b border-emerald-200/50">
                    <CheckCircle2 className="w-7 h-7 text-emerald-600 shrink-0" />
                    <div>
                      <h3 className="font-serif font-bold text-lg text-emerald-900">Inquiry Logged &amp; Locked</h3>
                      <span className="font-mono text-[9px] tracking-widest text-[#8F6B38] uppercase">
                        Privacy Framework Consent Authorized
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-emerald-800 leading-relaxed font-sans">
                    Greetings, {successInquiry.fullName}. Your advisory request was mapped successfully under our compliance protocols. Our partners will evaluate the informational query within 24 operational hours.
                  </p>

                  {/* Cryptographic style receipt card */}
                  <div className="p-4 bg-white border border-emerald-150 rounded space-y-3 font-mono text-[11px] text-gray-600">
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">RECORD RECEIPT ID:</span>
                      <span className="font-bold text-gray-900 select-all">{successInquiry.id}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">REGULATORY SECTOR:</span>
                      <span className="text-gray-800">{successInquiry.regulatorySector}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-2">
                      <span className="text-gray-400">LOG DATE / TIMESTAMP:</span>
                      <span className="text-gray-800">{new Date(successInquiry.submittedAt).toLocaleString()}</span>
                    </div>
                    <div className="pt-2">
                      <span className="text-gray-400 block pb-1">COMPLIANCE CONSENT HASH:</span>
                      <span className="text-[10px] text-gray-500 break-all bg-gray-50 p-2 rounded block border border-gray-100 select-all font-mono leading-relaxed">
                        {successInquiry.consentHash}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3.5">
                    <button
                      onClick={() => setSuccessInquiry(null)}
                      className="py-3 px-6 bg-[#0F172A] hover:bg-neutral-800 text-white hover:text-[#C5A880] rounded text-xs font-mono uppercase tracking-[0.15em] transition-all cursor-pointer text-center flex-1"
                      type="button"
                    >
                      File another Inquiry
                    </button>
                    <button
                      onClick={() => {
                        // Simulates custom download of the receipt JSON
                        const blob = new Blob([JSON.stringify(successInquiry, null, 2)], { type: 'application/json' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `APEX_RECEIPT_${successInquiry.id}.json`;
                        link.click();
                      }}
                      className="py-3 px-4 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded text-xs font-mono uppercase tracking-[0.15em] transition-all text-center"
                      type="button"
                    >
                      Download Receipt
                    </button>
                  </div>
                </motion.div>
              ) : (
                /* Dynamic Custom Intake Form */
                <motion.form
                  key="intake-form"
                  onSubmit={handleInquirySubmit}
                  className="space-y-6"
                  id="voluntary-client-intake-id"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Full Legal Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Mr. Alex Mercer"
                        className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#C5A880] rounded-md outline-none transition-all font-mono text-xs text-gray-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={emailAddress}
                        onChange={(e) => setEmailAddress(e.target.value)}
                        placeholder="e.g. alex@corporate.com"
                        className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#C5A880] rounded-md outline-none transition-all font-mono text-xs text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Phone Coordinates *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="e.g. +1 555 0100"
                        className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#C5A880] rounded-md outline-none transition-all font-mono text-xs text-gray-800"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                        Corporate Entity / Organization
                      </label>
                      <input
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Apex Corporation"
                        className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#C5A880] rounded-md outline-none transition-all font-mono text-xs text-gray-800"
                      />
                    </div>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Target Practice / Sector Area
                    </label>
                    <select
                      value={sector}
                      onChange={(e) => setSector(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 focus:border-[#C5A880] rounded-md outline-none transition-all font-mono text-xs text-gray-700"
                    >
                      <option value="Corporate Board Advisory">Corporate &amp; M&amp;A Advisory</option>
                      <option value="Disputes &amp; High-Value Litigations">Disputes &amp; Supreme Court Litigation</option>
                      <option value="Distressed Recovery &amp; Insolvency">Insolvency &amp; Restructuring IBC</option>
                      <option value="Technology &amp; Privacy Regulatory Auditing">Technology &amp; Privacy Regulatory Auditing</option>
                      <option value="Private Treaty Taxation Accords">Private Treaty &amp; Double Tax Accords</option>
                    </select>
                  </div>

                  <div className="text-xs space-y-1.5">
                    <label className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      Detailed Academic Inquiry / Request Parameters *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder="Clearly define your informational inquiry or scholarly reference targets here..."
                      className="w-full p-3 bg-gray-50 border border-gray-100 focus:border-[#C5A880] rounded-md outline-none transition-all font-sans text-xs text-gray-800 leading-relaxed"
                    ></textarea>
                  </div>

                  {/* DPDP Enforced authorization checkbox */}
                  <div className="p-4 bg-[#FAF9F6] border border-[#C5A880]/15 rounded-lg text-xs">
                    <label className="flex items-start cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={dpdpChecked}
                        onChange={(e) => setDpdpChecked(e.target.checked)}
                        className="mt-1 h-4 w-4 text-[#C5A880] border-gray-300 rounded focus:ring-[#C5A880]"
                      />
                      <span className="ml-3 text-gray-600 group-hover:text-gray-900 transition-colors leading-relaxed select-none">
                        <strong className="text-gray-900">MANDATORY PRIVACY CONSENT:</strong> I hereby declare that this inquiry is filed voluntarily. I authorize Apex Legal Partners (the Fiduciary) to analyze my credentials and record my identity log inside local tracking systems under International Data Privacy Framework guidelines. I appreciate I can withdraw this at any time.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={!dpdpChecked}
                    className={`w-full py-4.5 rounded text-xs font-mono font-bold uppercase tracking-widest transition-all text-center flex items-center justify-center ${
                      dpdpChecked
                        ? 'bg-[#0F172A] text-white hover:text-[#E5C494] hover:shadow-lg hover:scale-[1.01] cursor-pointer'
                        : 'bg-gray-100 text-gray-400 border border-gray-200 cursor-not-allowed'
                    }`}
                    id="intake-form-btn-id"
                  >
                    <span>Submit Inquiry Record</span> <ArrowRight className="w-4 h-4 ml-2.5" />
                  </button>

                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </div>
  );
}
