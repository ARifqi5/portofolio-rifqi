'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Cpu, ZoomIn, ChevronDownCircle, ChevronUpCircle, Database, CircuitBoard } from 'lucide-react';

// Import Data Galeri
import { iotGalleryData } from '@/data/iotData';

export default function IoTProject({ t, setSelectedItem, lang }) {
  const [showGallery, setShowGallery] = useState(false);

  // --- DATA FOTO UTAMA (THUMBNAIL) ---
  // Kita buat object khusus untuk iot-7.jpeg agar bisa di-klik dan muncul penjelasannya
  const mainImage = {
    src: '/iot-7.jpeg', // Pastikan nama file ini sesuai di folder public
    title_en: "Smart Parking System Prototype",
    title_id: "Prototipe Sistem Smart Parking",
    desc_en: "Complete view of the hardware implementation including gate mechanism and sensors.",
    desc_id: "Tampilan lengkap implementasi perangkat keras termasuk mekanisme gerbang dan sensor."
  };

  return (
    <section className="py-20 px-6 bg-slate-950 border-t border-slate-900">
      <div className="max-w-5xl mx-auto">
          
          {/* JUDUL SECTION */}
          <div className="flex items-center gap-3 mb-10">
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
                <Cpu className="text-purple-500" size={24} />
            </div>
            <h2 className="text-3xl font-bold text-white">{t.iot_title}</h2>
          </div>

          {/* MAIN CARD (Ringkasan) */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 flex flex-col lg:flex-row gap-10 items-center shadow-2xl relative overflow-hidden">
             {/* Hiasan Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 rounded-full blur-[80px] pointer-events-none" />

             {/* Kiri: Teks */}
             <div className="flex-1 space-y-6 relative z-10">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Smart Parking System (IoT)</h3>
                    <p className="text-purple-400 font-mono text-sm">Undergraduate Thesis Project</p>
                </div>
                
                <p className="text-slate-300 leading-relaxed text-lg">
                    {t.iot_desc}
                </p>

                <div className="flex flex-wrap gap-3">
                   <span className="px-3 py-1.5 bg-slate-800 text-purple-300 text-sm font-medium rounded-lg border border-purple-500/20 flex items-center gap-2">
                      <CircuitBoard size={16} /> ESP32 / Arduino
                   </span>
                   <span className="px-3 py-1.5 bg-slate-800 text-blue-300 text-sm font-medium rounded-lg border border-blue-500/20 flex items-center gap-2">
                      <Database size={16} /> C++ & MQTT
                   </span>
                   <span className="px-3 py-1.5 bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700">
                      Ultrasonic Sensors
                   </span>
                </div>

                {/* Tombol Buka Galeri */}
                <div className="pt-4">
                    <button 
                        onClick={() => setShowGallery(!showGallery)}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-bold transition-all shadow-lg hover:shadow-purple-600/25"
                    >
                        {showGallery ? (
                            <>Tutup Dokumentasi <ChevronUpCircle size={20} /></>
                        ) : (
                            <>Lihat Dokumentasi Teknis <ChevronDownCircle size={20} /></>
                        )}
                    </button>
                </div>
             </div>

             {/* Kanan: FOTO UTAMA (iot-7.jpeg) */}
             {/* Sudah diganti dari Icon CPU menjadi Image */}
             <div 
                className="w-full lg:w-1/3 aspect-video lg:aspect-square bg-slate-900 rounded-2xl overflow-hidden border-2 border-slate-800 border-dashed group hover:border-purple-500/50 transition-all cursor-pointer relative"
                onClick={() => setSelectedItem(mainImage)} // Klik untuk Zoom
             >
                <Image 
                    src={mainImage.src} 
                    alt="Main Prototype" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                
                {/* Overlay Zoom Icon */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <ZoomIn size={48} className="text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
             </div>
          </div>

          {/* GALLERY GRID (Expandable) */}
          <AnimatePresence>
            {showGallery && (
                <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pt-8 border-t border-slate-800/50">
                        {iotGalleryData.map((item) => (
                            <motion.div 
                                layout
                                key={item.id}
                                className="group relative aspect-video bg-slate-900 rounded-xl overflow-hidden border border-slate-800 cursor-pointer hover:border-purple-500/50 transition-all shadow-lg"
                                onClick={() => setSelectedItem(item)} // Mengirim data ke Lightbox
                            >
                                <Image 
                                    src={item.src} 
                                    alt={item[`title_${lang}`]} 
                                    fill 
                                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                                />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-4">
                                    <ZoomIn className="text-purple-400 mb-2" size={28} />
                                    <p className="text-white font-bold text-sm">{item[`title_${lang}`]}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
          </AnimatePresence>

      </div>
    </section>
  );
}