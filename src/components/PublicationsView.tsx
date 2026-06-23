import React, { useState } from 'react';
import { PUBLICATIONS } from '../data';
import { Publication } from '../types';
import { BookOpen, Calendar, User, Clock, ChevronRight, X, ArrowLeft, Search, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function PublicationsView() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePub, setActivePub] = useState<Publication | null>(null);

  const categories = ['All', 'Regulatory Update', 'Corporate Advisory', 'Treaty & Tax'];

  const filteredPubs = selectedCategory === 'All'
    ? PUBLICATIONS
    : PUBLICATIONS.filter(p => p.category === selectedCategory);

  return (
    <div className="font-sans text-[#1A1A1A] bg-white pt-28 pb-20 min-h-screen" id="publications-sect-id">
      <div className="max-w-7xl mx-auto px-6">

        {/* Dynamic header toggles based on nested view state */}
        <AnimatePresence mode="wait">
          {!activePub ? (
            <motion.div
              key="list-header"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Heading */}
              <div className="max-w-2xl space-y-3">
                <span className="text-[#C5A880] font-mono text-xs uppercase tracking-[0.25em] block">
                  Knowledge Exchange
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-gray-900">
                  Legal Science Publications
                </h1>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Scholarly briefings, analyses of federal precedents, and legislative bulletins compiled by our advisory partners to regularize corporate legal research.
                </p>
                <div className="w-16 h-0.5 bg-[#C5A880] mt-3"></div>
              </div>

              {/* Toggles */}
              <div className="flex flex-wrap gap-2.5 border-b border-gray-100 pb-5" id="topic-tags-row-id">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 border rounded-full text-xs font-mono transition-all uppercase tracking-wider cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#0F172A] border-[#0F172A] text-[#E5C494] font-semibold'
                        : 'bg-[#FAF9F6] border-gray-200 text-gray-600 hover:border-gray-400'
                    }`}
                    type="button"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Publications Row list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="articles-row-id">
                {filteredPubs.map((pub, idx) => (
                  <motion.div
                    key={pub.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                    onClick={() => setActivePub(pub)}
                    className="group flex flex-col justify-between p-8 bg-[#FAF9F6] border border-gray-150 hover:border-[#C5A880]/30 rounded-lg shadow-xs cursor-pointer hover:bg-white transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 tracking-wider">
                        <span className="text-[#8F6B38] font-bold bg-[#8F6B38]/5 border border-[#8F6B38]/10 px-2 py-0.5 rounded">
                          {pub.category}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" /> {pub.readTime}
                        </span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-gray-900 group-hover:text-[#C5A880] transition-colors leading-snug">
                        {pub.title}
                      </h3>

                      <p className="text-xs text-gray-500 leading-relaxed font-sans line-clamp-3">
                        {pub.summary}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-mono font-medium tracking-widest text-[#8F6B38] uppercase group-hover:text-gray-900 transition-colors">
                      <span>Examine Briefing</span>
                      <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Journal Styled Academic Reader */
            <motion.div
              key="academic-reader"
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 15 }}
              className="max-w-4xl mx-auto space-y-10"
              id="editorial-reader-hub"
            >
              <button
                onClick={() => setActivePub(null)}
                className="inline-flex items-center text-xs font-mono text-[#8F6B38] hover:text-gray-950 uppercase tracking-widest gap-2 pb-2 focus:outline-none"
                type="button"
              >
                <ArrowLeft className="w-4 h-4 shrink-0" /> <span>Back to publications library</span>
              </button>

              <article className="bg-[#FAF9F6] border border-[#C5A880]/20 rounded-xl p-6 md:p-12 shadow-sm space-y-8">
                {/* Journal meta column */}
                <div className="space-y-4 pb-6 border-b border-gray-200/60">
                  <span className="px-3 py-1 bg-[#8F6B38]/10 text-[#8F6B38] font-mono text-[10px] tracking-widest rounded border border-[#8F6B38]/20 uppercase inline-block">
                    {activePub.category}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-4xl font-semibold leading-tight text-gray-900">
                    {activePub.title}
                  </h2>

                  <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-gray-500 font-mono pt-2">
                    <span className="flex items-center">
                      <User className="w-3.5 h-3.5 mr-2 text-[#C5A880]" /> {activePub.author}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-2 text-[#C5A880]" /> Issued: {activePub.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-2 text-[#C5A880]" /> Reading timeline: {activePub.readTime}
                    </span>
                  </div>
                </div>

                {/* Journal Contents */}
                <div className="space-y-6 text-[#1A1A1A] font-serif leading-relaxed text-sm sm:text-base pr-2 select-text">
                  {activePub.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="indent-8 text-justify font-sans leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Citation Credentials Footer banner */}
                <div className="mt-12 p-6 bg-white border-l-4 border-[#C5A880] rounded-r-lg space-y-2 text-xs">
                  <div className="flex items-center text-[#8F6B38] font-mono font-bold tracking-wider uppercase text-[10px]">
                    <Bookmark className="w-3.5 h-3.5 mr-2" /> Academic Citation Record
                  </div>
                  <p className="text-gray-500 font-mono text-[11px] leading-relaxed">
                    Source citation: Vance, R. &amp; Apex Legal Partners Ltd. (2026). "{activePub.title}". Global Legal Research Series, Volume XXII, Issue {activePub.id === 'pub-dpdp' ? '4' : '2'}. Compliant under Standard Compliance Board Guidelines.
                  </p>
                </div>
              </article>

              <div className="flex justify-between items-center bg-gray-50 p-4 border border-gray-200/50 rounded-lg text-xs">
                <span className="text-gray-500 font-sans">Are you researching custom board structures?</span>
                <button
                  onClick={() => setActivePub(null)}
                  className="py-2.5 px-6 bg-[#0F172A] hover:bg-neutral-800 text-[#C5A880] rounded text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                  type="button"
                >
                  Return to library
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
