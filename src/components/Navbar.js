'use client';
import React from 'react';

export default function Navbar({ lang, setLang }) {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700 rounded-full p-1 pointer-events-auto shadow-xl">
         <button onClick={() => setLang('id')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'id' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>IND</button>
         <button onClick={() => setLang('en')} className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white'}`}>ENG</button>
      </div>
    </nav>
  );
}