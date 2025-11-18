import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';

export const CommercialModel: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="modelo" className="py-20 px-5 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Modelo Comercial</div>
          <h2 className="text-3xl font-bold text-brand-accent mb-6">Renta mensual, bundle completo</h2>
          <p className="text-lg font-medium text-brand-accent mb-4">
            Todo lo que esperas de un GPS, más lo que la CNE espera de ti.
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "Renta mensual por unidad, clara y predecible.",
              "Hardware 4G y lector de válvulas incluido.",
              "Plataforma de monitoreo y tableros ejecutivos.",
              "Soporte técnico y acompañamiento regulatorio."
            ].map((item, i) => (
               <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                 <div className="w-5 h-5 rounded-full bg-brand/20 text-brand-dark flex items-center justify-center"><Check size={12} strokeWidth={3} /></div>
                 {item}
               </li>
            ))}
          </ul>
          <p className="text-brand font-medium">
            Objetivo: Cumplir, controlar y vender más.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 text-center relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-2 bg-brand"></div>
           <div className="text-xs font-bold tracking-widest text-brand uppercase mb-4">Bundle UBI-SMART</div>
           <h3 className="text-2xl font-bold text-brand-accent mb-6">Control + Cumplimiento</h3>
           
           <div className="space-y-4 text-sm text-gray-600 mb-8">
             <div className="py-2 border-b border-gray-100">GPS 4G CNE-ready</div>
             <div className="py-2 border-b border-gray-100">Lector de Válvulas</div>
             <div className="py-2 border-b border-gray-100">Plataforma Web y Móvil</div>
             <div className="py-2 border-b border-gray-100">Tableros Ejecutivos</div>
             <div className="py-2">Soporte Especializado</div>
           </div>

           <div className="text-xs text-gray-400 mb-6">
             Un solo proveedor, una sola factura.
           </div>

           <Button fullWidth onClick={scrollToContact} className="shadow-lg shadow-brand/20">
             Solicitar cotización para mi flota
           </Button>
        </div>
      </div>
    </section>
  );
};