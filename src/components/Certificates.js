'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, FileCheck, ZoomIn, ChevronDownCircle, ChevronUpCircle, Calendar } from 'lucide-react';
import { internshipData, certificatesData } from '@/data/certificateData';
import FadeIn from './FadeIn'; // Pastikan file FadeIn.js sudah ada

export default function Certificates({ t, setSelectedImage }) {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const visibleCerts = showAllCerts ? certificatesData : certificatesData.slice(0, 3);

  return (
    <section className="py-20 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-6xl mx-auto">
        
        {/* JUDUL - Animasi Fade Up */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-12 justify-center">
            <Award className="text-yellow-500" size={32} />
            <h2 className="text-3xl font-bold text-white">{t.cert_title}</h2>
          </div>
        </FadeIn>

        {/* --- FEATURED: INTERNSHIP CERTIFICATE - Animasi Fade Up (Delay dikit) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <div className="lg:col-span-3">
            <FadeIn delay={0.2}>
              <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <FileCheck size={16} className="text-blue-500" /> {t.cert_feat_label}
              </h3>
              
              <div 
                  className="relative aspect-[16/9] lg:aspect-[21/9] bg-slate-950 rounded-3xl border-2 border-yellow-500/30 overflow-hidden group shadow-[0_0_50px_rgba(234,179,8,0.15)] hover:border-yellow-500/60 transition-all cursor-pointer"
                  onClick={() => setSelectedImage(internshipData.src)}
              >
                  <div className="absolute top-6 right-6 bg-yellow-500 text-black text-xs font-bold px-4 py-1.5 rounded-full z-10 flex items-center gap-2 shadow-lg">
                    <Award size={14} /> BRI INTERNSHIP
                  </div>
                  
                  <Image src={internshipData.src} alt="Internship Certificate" fill className="object-contain p-4" />
                  
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <div className="bg-black/50 p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                          <ZoomIn className="text-white" />
                      </div>
                  </div>
              </div>
              
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mt-4 px-2">
                  <div className="text-left">
                      <h3 className="text-xl font-bold text-white">{internshipData.desc_id}</h3>
                      <p className="text-slate-400 text-sm">Microecosystem & Legal Department Internship</p>
                  </div>
                  
                  <div className="mt-3 md:mt-0 flex items-center gap-2 text-yellow-500 bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20 shadow-sm">
                      <Calendar size={16} />
                      <span className="text-sm font-bold">{internshipData.date}</span>
                  </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* --- GRID SERTIFIKAT LAINNYA --- */}
        <div>
          <FadeIn delay={0.4}>
            <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                {t.cert_other_label}
            </h3>
          </FadeIn>
          
          {/* PENTING: Tambahkan prop 'layout' pada container grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {visibleCerts.map((cert) => (
                <motion.div 
                  layout  // INI KUNCI ANIMASI SMOOTH SAAT LOAD MORE
                  key={cert.id} 
                  initial={{ opacity: 0, scale: 0.8 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.8 }} 
                  transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 15 }} // Efek membal halus
                  
                  className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden group hover:border-blue-500/50 transition-all flex flex-col shadow-lg"
                >
                  {/* Bagian Gambar */}
                  <div 
                    className="relative aspect-[4/3] w-full bg-slate-900 cursor-pointer overflow-hidden border-b border-slate-800"
                    onClick={() => setSelectedImage(cert.src)}
                  >
                    <Image src={cert.src} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                         <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Bagian Info */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div className="mb-3">
                        <h4 className="text-white font-bold text-sm leading-snug line-clamp-2 mb-1" title={cert.title}>
                            {cert.title}
                        </h4>
                        <p className="text-blue-400 text-xs font-medium line-clamp-1" title={cert.issuer}>
                            {cert.issuer}
                        </p>
                    </div>
                    
                    <div className="flex justify-end pt-2 border-t border-slate-800/50">
                        <span className="text-slate-300 text-[11px] font-mono flex items-center gap-1.5 bg-slate-800/80 px-2 py-1 rounded border border-slate-700">
                            <Calendar size={11} className="text-blue-400" /> {cert.date}
                        </span>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowAllCerts(!showAllCerts)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all text-slate-300 hover:text-white font-medium"
            >
              {showAllCerts ? (
                <> {t.cert_show_less} <ChevronUpCircle size={20} /> </>
              ) : (
                <> {t.cert_show_more} <ChevronDownCircle size={20} /> </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}