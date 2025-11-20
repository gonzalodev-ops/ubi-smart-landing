import React from 'react';
import { ShieldCheck, Gauge, TrendingUp } from 'lucide-react';

const pillars = [
  {
    title: "Cumplimiento Técnico CNE",
    description: "No es un GPS genérico. Es un sistema certificado que guarda los 12 meses de histórico obligatorios, cifra la información y tiene la API lista para conectar con SIRACP cuando la autoridad lo requiera.",
    icon: ShieldCheck,
    tag: "El Blindaje"
  },
  {
    title: "Inteligencia de Válvulas",
    description: "Saber dónde está el camión es básico; saber dónde abrió la válvula es negocio. Convierte el mapa en una radiografía de ventas reales, detecta fugas de producto y valida que cada litro despachado se cobre.",
    icon: Gauge,
    tag: "El Negocio"
  },
  {
    title: "Control Operativo (ROI)",
    description: "El sistema se paga solo. Nuestros clientes reducen entre 3-5% el consumo de combustible al eliminar rutas inútiles y mantenimientos correctivos. Deja de operar por 'corazonadas' y usa datos reales.",
    icon: TrendingUp,
    tag: "La Rentabilidad"
  }
];

export const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-20 px-5 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Propuesta de Valor</div>
          <h2 className="text-3xl font-bold text-brand-accent mb-4">Tres pilares para tu margen</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Una sola plataforma diseñada para gaseras, transformando una obligación regulatoria en una ventaja competitiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 bg-brand/5 px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-[10px] font-bold tracking-widest text-brand-dark uppercase border-b border-l border-brand/10">
                {p.tag}
              </div>
              
              <div className="w-14 h-14 rounded-2xl bg-brand/5 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-brand/30">
                <p.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-accent mb-3">{p.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};