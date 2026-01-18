'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Calculator, CheckCircle2, Smartphone, LayoutDashboard, MapPin, ZoomIn, ChevronDownCircle, ChevronUpCircle } from 'lucide-react';
import { webGalleryData, mobileGalleryData } from '@/data/galleryData';

export default function SFAProject({ t, setSelectedItem, lang }) {
  const [activeFeature, setActiveFeature] = useState(0);
  const [showAllWeb, setShowAllWeb] = useState(false);
  const [showAllMobile, setShowAllMobile] = useState(false);

  const visibleWeb = showAllWeb ? webGalleryData : webGalleryData.slice(0, 3);
  const visibleMobile = showAllMobile ? mobileGalleryData : mobileGalleryData.slice(0, 4);

  const features = [
    { id: "realisasi", title: t.feat_realisasi, video: "/demo-realisasi.mp4", icon: <Calculator size={18} />, desc: t.feat_realisasi_desc },
    { id: "titip", title: t.feat_titip, video: "/demo-titip.mp4", icon: <CheckCircle2 size={18} />, desc: t.feat_titip_desc },
    { id: "tunai", title: t.feat_tunai, video: "/demo-tunai.mp4", icon: <Smartphone size={18} />, desc: t.feat_tunai_desc },
    { id: "tunggakan", title: t.feat_tunggakan, video: "/demo-tunggakan.mp4", icon: <LayoutDashboard size={18} />, desc: t.feat_tunggakan_desc },
    { id: "gps", title: t.feat_gps, video: "/demo-gps.mp4", icon: <MapPin size={18} />, desc: t.feat_gps_desc }
  ];

  return (
    <section id="sfa-section" className="py-24 px-4 md:px-8 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <div className="inline-block px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-xs font-bold uppercase tracking-wider mb-4">{t.sfa_label}</div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">{t.sfa_title}</h2>
            <p className="text-slate-400 max-w-3xl mx-auto text-lg leading-relaxed">{t.sfa_desc}</p>
          </div>

          {/* VIDEO PLAYER */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row h-auto lg:h-[600px] backdrop-blur-sm mb-16">
            <div className="lg:w-1/3 border-r border-slate-800 flex flex-col">
              <div className="p-4 border-b border-slate-800"><h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider">{t.sfa_select}</h3></div>
              <div className="overflow-y-auto flex-1 p-2 space-y-1">
                {features.map((feature, index) => (
                  <button key={index} onClick={() => setActiveFeature(index)} className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start gap-4 ${activeFeature === index ? "bg-blue-600 text-white shadow-lg" : "hover:bg-slate-800 text-slate-400 hover:text-white"}`}>
                    <div className={`mt-0.5 p-1 rounded-lg ${activeFeature === index ? "text-white" : "text-slate-500"}`}>{feature.icon}</div>
                    <div><h4 className="font-bold text-sm">{feature.title}</h4><p className={`text-xs mt-1 ${activeFeature === index ? "text-blue-100" : "text-slate-500"}`}>{activeFeature === index && feature.desc}</p></div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:w-2/3 bg-black relative flex items-center justify-center">
               <AnimatePresence mode='wait'>
                  <motion.div key={activeFeature} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="w-full h-full p-4 lg:p-0 flex items-center justify-center">
                    <div className="relative w-full h-full max-h-[550px] aspect-video lg:aspect-auto bg-zinc-900 rounded-lg overflow-hidden border border-slate-800">
                      <video key={features[activeFeature].id} className="w-full h-full object-contain" controls autoPlay muted loop playsInline>
                        <source src={features[activeFeature].video} type="video/mp4" />
                      </video>
                    </div>
                  </motion.div>
                </AnimatePresence>
            </div>
          </div>

          {/* WEB GALLERY (ANIMATED) */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><LayoutDashboard className="text-blue-500" /> {t.sfa_web_gallery}</h3>
            
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <AnimatePresence mode='popLayout'>
                {visibleWeb.map((item) => (
                    <motion.div 
                        layout 
                        key={item.id} 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.8 }} 
                        transition={{ duration: 0.4 }}
                        className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 group cursor-pointer hover:border-blue-500/50 transition-all"
                        onClick={() => setSelectedItem(item)}
                    >
                        <Image src={item.src} alt={item[`title_${lang}`]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                            <ZoomIn className="text-blue-400 mb-2" size={32} />
                            <p className="text-white font-bold text-sm">{item[`title_${lang}`]}</p>
                        </div>
                    </motion.div>
                ))}
               </AnimatePresence>
            </motion.div>
            
            <div className="mt-6 text-center">
                <button onClick={() => setShowAllWeb(!showAllWeb)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all text-slate-300 hover:text-white font-medium">
                    {showAllWeb ? <>{t.view_less} <ChevronUpCircle size={20}/></> : <>{t.view_all} ({webGalleryData.length}) <ChevronDownCircle size={20}/></>}
                </button>
            </div>
          </div>

          {/* MOBILE GALLERY (ANIMATED) */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Smartphone className="text-blue-500" /> {t.sfa_mob_gallery}</h3>
            
            <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
               <AnimatePresence mode='popLayout'>
                {visibleMobile.map((item) => (
                    <motion.div 
                        layout 
                        key={item.id} 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        exit={{ opacity: 0, scale: 0.8 }} 
                        transition={{ duration: 0.4 }}
                        className="relative aspect-[9/18] rounded-xl overflow-hidden border border-slate-800 group cursor-pointer hover:border-blue-500/50 transition-all"
                        onClick={() => setSelectedItem(item)}
                    >
                        <Image src={item.src} alt={item[`title_${lang}`]} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                            <ZoomIn className="text-blue-400 mb-2" size={32} />
                            <p className="text-white font-bold text-xs">{item[`title_${lang}`]}</p>
                        </div>
                    </motion.div>
                ))}
               </AnimatePresence>
            </motion.div>
            
             <div className="mt-6 text-center">
                <button onClick={() => setShowAllMobile(!showAllMobile)} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-700 hover:bg-slate-800 hover:border-blue-500 transition-all text-slate-300 hover:text-white font-medium">
                    {showAllMobile ? <>{t.view_less} <ChevronUpCircle size={20}/></> : <>{t.view_all} ({mobileGalleryData.length}) <ChevronDownCircle size={20}/></>}
                </button>
            </div>
          </div>

        </div>
      </section>
  );
}