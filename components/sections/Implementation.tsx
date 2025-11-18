import React from 'react';

const steps = [
  { label: "Paso 1", title: "Diagnóstico", desc: "Revisamos permisos, parque vehicular y GPS actual. Mapa claro de situación." },
  { label: "Paso 2", title: "Diseño", desc: "Definimos hardware, instalación y reportes clave para dirección y operación." },
  { label: "Paso 3", title: "Despliegue", desc: "Instalación por oleadas priorizando unidades críticas. Mínimo tiempo fuera." },
  { label: "Paso 4", title: "Optimización", desc: "Ajuste de alertas y reglas. El sistema se adapta a tu operación." }
];

export const Implementation: React.FC = () => {
  return (
    <section className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Implementación</div>
        <h2 className="text-3xl font-bold text-brand-accent mb-4">De diagnóstico a control total</h2>
        <p className="text-gray-500 max-w-2xl mb-12">
          El objetivo es cumplir y mejorar margen sin frenar la operación diaria.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-all">
              <div className="text-[10px] uppercase tracking-widest text-brand font-bold mb-2">{s.label}</div>
              <h3 className="font-bold text-brand-accent mb-3">{s.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};