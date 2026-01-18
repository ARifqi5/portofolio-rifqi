'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero({ t, setSelectedImage }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-8">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] opacity-40" />
      </div>
      
      <div className="max-w-4xl w-full z-10 flex flex-col items-center text-center gap-6 mt-10">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="relative w-32 h-32 md:w-44 md:h-44 rounded-full border-4 border-blue-500/30 shadow-2xl overflow-hidden mb-2 cursor-pointer" onClick={() => setSelectedImage('/profile.png')}>
          <Image src="/profile.png" alt="Andifa Rifqi Aquila" fill className="object-cover" priority />
        </motion.div>
        
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span> {t.badge}
        </motion.div>
        
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-7xl font-bold tracking-tight leading-tight">
          {t.hero_title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Andifa Rifqi Aquila</span>
        </motion.h1>
        
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg text-slate-400 max-w-2xl mx-auto">{t.hero_desc}</motion.p>
        
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link href="https://github.com/ARifqi5/sales-force-automation-portofolio" target="_blank" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105"><Github size={18} /> {t.btn_github}</Link>
          <Link href="https://www.linkedin.com/in/andifa-rifqi-aquila" target="_blank" className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-full font-medium transition-all border border-slate-700 hover:scale-105"><Linkedin size={18} /> LinkedIn</Link>
          <Link href="mailto:andifarifqi67@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full border border-slate-700 hover:text-white transition-all hover:scale-105"><Mail size={20} /></Link>
          <Link href="https://wa.me/6282117937747" target="_blank" className="p-3 bg-green-600/20 hover:bg-green-600 text-green-500 hover:text-white rounded-full border border-green-600/50 transition-all hover:scale-105"><Phone size={20} /></Link>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }} className="absolute bottom-8 animate-bounce text-slate-500"><ChevronDown size={24} /></motion.div>
    </section>
  );
}