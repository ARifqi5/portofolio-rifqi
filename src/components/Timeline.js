'use client';
import React from 'react';
import { Building2, Users, BarChart3, ArrowDown } from 'lucide-react';
import FadeIn from './FadeIn'; // Pastikan file FadeIn.js sudah ada

export default function Timeline({ t, lang, scrollToSFA }) {
  const experiences = [
    {
      id: 1,
      role: t.role_intern,
      company: "PT. Bank Rakyat Indonesia (Persero) Tbk",
      period: "Aug 2024 - Sep 2024",
      icon: <Building2 size={20} />,
      achievements_en: ["Automated creation of 50,000+ demand letters using scripts.", "Performed Data Cleansing for KUR & KUP loan products.", "Digital transaction data analysis for management reporting."],
      achievements_id: ["Otomatisasi pembuatan 50.000+ surat tuntutan menggunakan script.", "Melakukan Data Cleansing untuk produk pinjaman KUR & KUP.", "Analisis data transaksi digital untuk pelaporan manajemen."]
    },
    {
      id: 2,
      role: t.role_micro, 
      company: "PT. Bank Rakyat Indonesia (Persero) Tbk", 
      period: "Jul 2024 - Aug 2024", 
      icon: <BarChart3 size={20} />,
      achievements_en: ["Mapped and developed the QRIS digital transaction ecosystem.", "Collaborated with the team to analyze digital transaction data."],
      achievements_id: ["Mengembangkan dan memetakan bisnis transaksi digital (QRIS).", "Bekerja sama dengan tim untuk menganalisis data transaksi digital."]
    },
    {
      id: 3,
      role: t.role_humas,
      company: "Himpunan Mahasiswa Teknik Komputer",
      period: "Nov 2023 - Jun 2024",
      icon: <Users size={20} />,
      achievements_en: ["Coordinated Community Service Programs with external parties.", "Main liaison between Lecturers, Association Board, and Students."],
      achievements_id: ["Mengkoordinasi Program Pelayanan Masyarakat dengan pihak luar.", "Menjadi penghubung utama antara Dosen, Himpunan, dan Mahasiswa."]
    }
  ];

  return (
    <section className="py-20 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-4xl mx-auto">
        
        {/* JUDUL - Fade Up */}
        <FadeIn>
            <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">{t.timeline_title}</h2>
            <p className="text-slate-400 mt-2">{t.timeline_subtitle}</p>
            </div>
        </FadeIn>
        
        <div className="relative space-y-12">
          {/* Garis Tengah */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform md:-translate-x-1/2"></div>
           
           {/* PENDIDIKAN - Fade Up */}
           <FadeIn delay={0.2} fullWidth>
            <div className="relative flex flex-col md:flex-row gap-8">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-900 border-4 border-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:text-right md:pr-8">
                    <h3 className="text-xl font-bold text-white">Telkom University</h3>
                    <span className="text-slate-500 text-sm font-mono">{t.edu_degree}</span>
                </div>
                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-8">
                    <p className="text-slate-400 text-sm bg-slate-950 p-4 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-colors">{t.edu_thesis}</p>
                </div>
            </div>
           </FadeIn>

          {/* PENGALAMAN - Staggered Fade Up (Muncul satu per satu) */}
          {experiences.map((exp, idx) => (
            <FadeIn key={exp.id} delay={idx * 0.2} fullWidth> 
                <div className={`relative flex flex-col md:flex-row gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-slate-900 border-4 border-slate-600 group-hover:border-blue-500 rounded-full transform -translate-x-1/2 mt-1.5 z-10"></div>
                <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className={`bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-blue-500/30 transition-all shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 duration-300 ${idx % 2 !== 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">{exp.icon}</div>
                            <span className="text-slate-500 text-xs font-mono">{exp.period}</span>
                        </div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <h4 className="text-blue-400 text-sm font-semibold mb-4">{exp.company}</h4>
                        <ul className="space-y-2">
                            {(lang === 'en' ? exp.achievements_en : exp.achievements_id).map((item, i) => (
                                <li key={i} className="text-slate-400 text-sm flex items-start gap-2">
                                    <span className="mt-1.5 w-1.5 h-1.5 bg-slate-600 rounded-full flex-shrink-0"></span>{item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </FadeIn>
          ))}
        </div>
        
        {/* TOMBOL NEXT - Fade Up Terakhir */}
        <FadeIn delay={0.6}>
            <div className="mt-24 text-center">
            <p className="text-slate-500 mb-4 text-sm uppercase tracking-widest">{t.cta_sfa_pre}</p>
            <h3 className="text-3xl font-bold text-white mb-8">{t.cta_sfa_title}</h3>
            <button onClick={scrollToSFA} className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] hover:scale-105">
                {t.cta_sfa_btn} <ArrowDown className="group-hover:translate-y-1 transition-transform" />
            </button>
            </div>
        </FadeIn>
      </div>
    </section>
  );
}