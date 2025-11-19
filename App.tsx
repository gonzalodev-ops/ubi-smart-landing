import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Hero } from './components/sections/Hero';
import { Experience } from './components/sections/Experience';
import { Pillars } from './components/sections/Pillars';
import { Features } from './components/sections/Features';
import { Compliance } from './components/sections/Compliance';
import { Implementation } from './components/sections/Implementation';
import { CommercialModel } from './components/sections/CommercialModel';
import { FAQ } from './components/sections/FAQ';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/layout/Footer';
import { CNEGuide } from './components/resources/CNEGuide';
import { BookOpen } from 'lucide-react';

const App: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const [showFab, setShowFab] = useState(false);

  // Mostrar el botón flotante solo después de hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowFab(window.scrollY > 500); // Aparece después de 500px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f7fa]">
      <Header />
      
      <CNEGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />

      <main className="flex-grow">
        <Hero />
        <Experience />
        <Pillars />
        <Features />
        <Compliance />
        <Implementation />
        <CommercialModel />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />

      {/* Floating Action Button (FAB) - Acceso Rápido a la Guía */}
      <button
        id="floating-badge"
        onClick={() => setShowGuide(true)}
        className={`fixed bottom-6 right-6 z-40 bg-brand-accent text-white px-5 py-3 rounded-full shadow-2xl shadow-brand/40 flex items-center gap-3 font-bold transition-all duration-500 hover:scale-105 hover:bg-slate-800 group ${
          showFab ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
      >
        <div className="relative">
           <BookOpen size={20} />
           <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-brand-accent"></span>
        </div>
        <span className="pr-1">Guía CNE 2025</span>
        
        {/* Tooltip */}
        <div className="absolute right-0 bottom-full mb-3 w-48 bg-white text-slate-700 text-xs p-3 rounded-xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-gray-100">
           Descarga el manual de implementación y evita multas.
           <div className="absolute bottom-[-6px] right-8 w-3 h-3 bg-white transform rotate-45 border-r border-b border-gray-100"></div>
        </div>
      </button>

    </div>
  );
};

export default App;