import React from 'react';
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

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#f5f7fa]">
      <Header />
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
    </div>
  );
};

export default App;