import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Experiencia', href: '#experiencia' },
  { label: 'Pilares', href: '#pilares' },
  { label: 'CNE / SIRACP', href: '#cumplimiento' },
  { label: 'Recursos', href: '#recursos-cne' }, // New Link
  { label: 'FAQs', href: '#faqs' },
  { label: 'Modelo', href: '#modelo' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled ? 'bg-white/90 backdrop-blur-md border-gray-200 py-3' : 'bg-white border-transparent py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4df3c2] to-brand flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-brand/40">
            UQ
          </div>
          <div>
            <div className="font-bold text-brand-accent tracking-wide uppercase leading-none">UBI-SMART</div>
            <div className="text-xs text-gray-500 mt-0.5">Soluciones Ubiqo</div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium text-gray-600 hover:text-brand transition-colors cursor-pointer"
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="px-4 py-2 rounded-full bg-brand text-white text-sm font-semibold shadow-md shadow-brand/30 hover:shadow-lg hover:bg-brand-dark transition-all"
          >
            Solicitar diagnóstico
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-200 py-4 px-5 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-base font-medium text-gray-700"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavClick(e, '#contacto')}
            className="text-center px-4 py-3 rounded-lg bg-brand text-white font-semibold w-full"
          >
            Solicitar diagnóstico
          </button>
        </div>
      )}
    </header>
  );
};