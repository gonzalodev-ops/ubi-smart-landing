import React from 'react';
import { ShieldCheck, Gauge, AlertTriangle } from 'lucide-react';

const pillars = [
  {
    title: "Cumplimiento CNE",
    description: "GPS 4G alineado a requerimientos técnicos: API abierta, protocolos seguros, reporte en tiempo real y trazabilidad histórica.",
    icon: ShieldCheck,
    tag: "Pilar 1"
  },
  {
    title: "Inteligencia de Válvulas",
    description: "Lectura precisa de válvulas de llenado y descarga. Sabes dónde se abrió, cuánto tiempo y si coincide con el cliente.",
    icon: Gauge,
    tag: "Pilar 2"
  },
  {
    title: "Control de Riesgo",
    description: "Alertas configuradas para taller, rutas, excesos de velocidad y paradas anómalas que impactan tu margen y seguridad.",
    icon: AlertTriangle,
    tag: "Pilar 3"
  }
];

export const Pillars: React.FC = () => {
  return (
    <section id="pilares" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Propuesta de Valor</div>
          <h2 className="text-3xl font-bold text-brand-accent mb-4">Tres pilares para tu margen</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Una sola plataforma diseñada para gaseras, combinando cumplimiento regulatorio e inteligencia operativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-gray-100 relative group hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-6 right-6 text-[10px] font-bold tracking-widest text-gray-300 uppercase">{p.tag}</div>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6 group-hover:bg-brand group-hover:text-white transition-colors">
                <p.icon size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-accent mb-3">{p.title}</h3>
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