'use client';
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

// Import Data & Komponen
import { translations } from '@/data/translations';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Timeline from '@/components/Timeline';
import SFAProject from '@/components/SFAProject';
import IoTProject from '@/components/IoTProject';
import Certificates from '@/components/Certificates';

export default function Home() {
  const [lang, setLang] = useState('id');
  const [selectedItem, setSelectedItem] = useState(null); 
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-slate-950 text-white font-sans overflow-x-hidden">
      
      <Navbar lang={lang} setLang={setLang} />
      
      {/* Hero: Mengirim gambar profil (tanpa deskripsi) */}
      <Hero t={t} setSelectedImage={(src) => setSelectedItem({ src })} />
      
      <Timeline t={t} lang={lang} scrollToSFA={() => document.getElementById('sfa-section')?.scrollIntoView({ behavior: 'smooth' })} />
      
      {/* SFA Project: Mengirim object lengkap (gambar + deskripsi) */}
      <SFAProject t={t} setSelectedItem={setSelectedItem} lang={lang} />
      
      {/* --- PERBAIKAN DI SINI --- */}
      {/* Kita tambahkan prop 'setSelectedItem' dan 'lang' agar fitur klik & zoom IoT berfungsi */}
      <IoTProject t={t} setSelectedItem={setSelectedItem} lang={lang} />
      
      {/* Certificates: Mengirim gambar sertifikat (tanpa deskripsi panjang) */}
      <Certificates t={t} setSelectedImage={(src) => setSelectedItem({ src })} />

      <footer className="py-8 text-center text-slate-600 text-sm bg-slate-950 border-t border-slate-900">
        <p>&copy; {new Date().getFullYear()} Andifa Rifqi Aquila. {t.footer}</p>
      </footer>

      {/* GLOBAL LIGHTBOX DENGAN PENJELASAN */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 p-2 rounded-full z-[110] transition-colors">
               <X size={28} />
            </button>
            
            {/* Container Modal: Menyesuaikan jika ada teks (title_id) atau tidak */}
            <motion.div 
              initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} 
              className={`relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col lg:flex-row w-full max-h-[90vh] ${selectedItem.title_id ? 'max-w-6xl' : 'max-w-4xl'}`}
              onClick={(e) => e.stopPropagation()}
            >
               {/* 1. Area Gambar */}
               <div className={`relative bg-black flex items-center justify-center ${selectedItem.title_id ? 'lg:w-3/4 h-[50vh] lg:h-[80vh]' : 'w-full h-[80vh]'}`}>
                  <Image 
                    src={selectedItem.src} 
                    alt="Zoom" 
                    fill 
                    className="object-contain" 
                  />
               </div>

               {/* 2. Area Penjelasan (Hanya muncul jika ada Data Title seperti di SFA & IoT) */}
               {selectedItem[`title_${lang}`] && (
                 <div className="lg:w-1/4 p-6 lg:p-8 flex flex-col justify-center bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-800 overflow-y-auto">
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 text-blue-400">
                      {selectedItem[`title_${lang}`]}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                      {selectedItem[`desc_${lang}`]}
                    </p>
                 </div>
               )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}