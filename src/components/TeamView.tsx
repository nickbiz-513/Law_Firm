import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data';
import { TeamMember } from '../types';
import { Scale, Mail, Linkedin, GraduationCap, Award, X, Search, ChevronRight, FileText, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function TeamView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProfile, setSelectedProfile] = useState<TeamMember | null>(null);

  // Filter members based on search parameter or expertise items
  const filteredMembers = TEAM_MEMBERS.filter(member => {
    const textStr = (member.name + ' ' + member.role + ' ' + member.expertise.join(' ')).toLowerCase();
    return textStr.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="font-sans text-[#1A1A1A] bg-white pt-28 pb-20 min-h-screen" id="team-list-view-id">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Responsive Header Row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl space-y-3">
            <span className="text-[#C5A880] font-mono text-xs uppercase tracking-[0.25em] block">
              Academic Roster
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
              Our Key Professionals
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Biographical credentials of attorneys, partners, and counsel. All credentials listed reflect factual scholastic completions and jurisdictional admissions.
            </p>
            <div className="w-16 h-0.5 bg-[#C5A880] mt-3"></div>
          </div>

          {/* Search Box */}
          <div className="relative w-full max-w-sm shrink-0">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or expertise..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] rounded-md text-xs text-gray-700 font-mono transition-all outline-none"
              id="expert-search-input-id"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')} 
                className="absolute right-3 top-1/2 -translate-y-1/2 font-mono text-[10px] text-gray-400 hover:text-gray-700"
                type="button"
              >
                CLEAR
              </button>
            )}
          </div>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="pro-roster-grid-id">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group border border-gray-100 hover:border-[#C5A880]/30 rounded-lg bg-[#FAF9F6] hover:bg-white overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-64 overflow-hidden border-b border-gray-100">
                  <img 
                    src={member.avatarUrl} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale brightness-95 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span className="text-white font-mono text-[10px] uppercase tracking-widest bg-[#C5A880] px-2 py-1 rounded">
                      Examine Dossier
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-gray-900 group-hover:text-[#C5A880] transition-colors leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mt-1 block">
                      {member.role}
                    </p>
                  </div>

                  {/* Fact Bullet */}
                  <div className="space-y-1">
                    <span className="text-[9px] font-mono text-gray-400 uppercase tracking-widest block">BAR ADMISSIONS</span>
                    <p className="text-[11px] text-gray-600 line-clamp-1">{member.bars[0]}</p>
                  </div>

                  {/* Small Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {member.expertise.slice(0, 2).map((item, i) => (
                      <span key={i} className="px-2 py-0.5 bg-white border border-gray-200 rounded-full text-[9px] font-mono text-gray-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="px-6 pb-6 pt-2 border-t border-gray-100/40">
                <button
                  onClick={() => setSelectedProfile(member)}
                  className="w-full py-2 bg-white hover:bg-[#0F172A] border border-[#C5A880]/30 hover:border-transparent text-[#8F6B38] hover:text-[#E5C494] rounded text-[10px] font-mono uppercase tracking-[0.15em] transition-all cursor-pointer flex items-center justify-center"
                  type="button"
                >
                  View Scholastic Biography
                </button>
              </div>
            </motion.div>
          ))}

          {filteredMembers.length === 0 && (
            <div className="col-span-full py-16 text-center border border-dashed border-gray-200 rounded-lg">
              <p className="text-sm font-mono text-gray-500">
                No matching professional credentials found. Please adjust parameters.
              </p>
            </div>
          )}
        </div>

        {/* Detailed Scholastic Profile Modal */}
        <AnimatePresence>
          {selectedProfile && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs px-4"
              onClick={() => setSelectedProfile(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                className="relative w-full max-w-3xl bg-white rounded-lg shadow-2xl p-6 md:p-10 overflow-y-auto max-h-[85vh] border border-[#C5A880]/20 flex flex-col md:flex-row gap-8"
                onClick={(e) => e.stopPropagation()}
                id="profile-dossiers-id"
              >
                <button
                  onClick={() => setSelectedProfile(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 focus:outline-none p-1 bg-gray-50 hover:bg-gray-100 rounded-full"
                  type="button"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Left col - Photo and Contact */}
                <div className="w-full md:w-1/3 space-y-6 flex flex-col items-center border-b md:border-b-0 md:border-r border-gray-100 pb-6 md:pb-0 md:pr-8">
                  <div className="w-40 h-40 overflow-hidden border border-gray-150 rounded">
                    <img
                      src={selectedProfile.avatarUrl}
                      alt={selectedProfile.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="text-center md:text-left space-y-3.5 w-full">
                    <div>
                      <h2 className="font-serif text-xl font-bold text-gray-900 leading-tight">
                        {selectedProfile.name}
                      </h2>
                      <p className="text-[#C5A880] font-mono text-[10px] tracking-wide uppercase mt-1">
                        {selectedProfile.role}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs font-mono">
                      <a 
                        href={`mailto:${selectedProfile.email}`}
                        className="flex items-center text-gray-500 hover:text-[#111827] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 mr-2 shrink-0 text-[#C5A880]" />
                        <span className="truncate block">{selectedProfile.email}</span>
                      </a>
                      {selectedProfile.linkedin && (
                        <a 
                          href="#"
                          onClick={(e) => e.preventDefault()}
                          className="flex items-center text-gray-500 hover:text-[#111827] transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5 mr-2 shrink-0 text-[#C5A880]" />
                          <span>Professional Profile</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right col - Detailed Academics */}
                <div className="w-full md:w-2/3 space-y-6 overflow-y-auto max-h-[50vh] pr-2 custom-scrollbar">
                  <div>
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-2">BIOGRAPHY</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-sans font-normal">
                      {selectedProfile.biography}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1.5 text-[#C5A880]" /> SCHOLASTIC CREDENTIALS
                    </h4>
                    <div className="space-y-2 text-xs text-gray-700 leading-relaxed font-sans">
                      {selectedProfile.education.map((edu, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                          <span>{edu}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center">
                      <Award className="w-4 h-4 mr-1.5 text-[#C5A880]" /> JURISDICTIONAL ADMISSIONS
                    </h4>
                    <div className="space-y-1.5 text-xs text-gray-700 font-sans">
                      {selectedProfile.bars.map((bar, idx) => (
                        <p key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full mr-2.5"></span>
                          <span>{bar}</span>
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest">PRACTICE DOMAINS</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProfile.expertise.map((expert, idx) => (
                        <span key={idx} className="px-2.5 py-1 bg-gray-50 border border-gray-150 text-gray-700 text-[10px] font-mono rounded">
                          {expert}
                        </span>
                      ))}
                    </div>
                  </div>

                  {selectedProfile.keyPublications && (
                    <div className="space-y-4 pt-4 border-t border-gray-100">
                      <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center">
                        <FileText className="w-4 h-4 mr-2 text-[#C5A880]" /> REPRESENTATIVE SCHOLARLY WRITING
                      </h4>
                      <div className="space-y-3.5 text-xs text-gray-600 leading-relaxed">
                        {selectedProfile.keyPublications.map((pub, idx) => (
                          <div key={idx} className="bg-gray-50 border-l border-[#C5A880] p-2.5 rounded">
                            {pub}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
