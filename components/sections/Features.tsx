import React from 'react';
import { MapPin, TrendingUp, Target, PieChart, ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-5 space-y-24 bg-white">
      {/* Market Intelligence Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 md:order-1">
            <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Inteligencia de Mercado</div>
            <h2 className="text-3xl font-bold text-brand-accent mb-6">Tu marca existe donde abres la válvula</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Saber dónde están tus camiones es seguridad. Saber <strong>dónde y cuánto venden</strong> es estrategia.
              UBI-SMART transforma las aperturas de válvula en un mapa de densidad comercial.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-brand/10 text-brand rounded-lg flex items-center justify-center">
                    <Target size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent text-sm">Detecta Oportunidades de Crecimiento</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Identifica "zonas frías" dentro de tus rutas actuales donde tu competencia está vendiendo y tú solo estás transitando.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <PieChart size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent text-sm">Market Share Real por Colonia</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Cruza los litros despachados vs. el potencial de la zona. Deja de medir por "rutas" y empieza a medir por penetración de mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Side: Commercial Heatmap */}
          <div className="order-1 md:order-2 relative">
             {/* Map Container */}
             <div className="bg-slate-50 rounded-2xl border border-gray-200 shadow-xl overflow-hidden aspect-square md:aspect-[4/3] relative group">
                
                {/* Map Background Pattern */}
                <div className="absolute inset-0 opacity-40">
                   <svg className="w-full h-full" width="100%" height="100%">
                      <pattern id="grid-map" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#94a3b8" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid-map)" />
                   </svg>
                </div>

                {/* Heatmap Blobs (The "Brand Presence") */}
                {/* Strong Presence Zone */}
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-brand/40 rounded-full blur-2xl mix-blend-multiply animate-pulse"></div>
                <div className="absolute top-1/3 left-1/3 w-16 h-16 bg-brand/60 rounded-full blur-xl mix-blend-multiply"></div>
                
                {/* Secondary Zone */}
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-brand/30 rounded-full blur-2xl mix-blend-multiply delay-700"></div>

                {/* Opportunity Zone (Empty/Cold) */}
                <div className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] font-bold text-gray-400 bg-white px-2 py-1 rounded shadow-sm">Oportunidad</span>
                </div>

                {/* Interface Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-gray-100 max-w-[140px]">
                   <div className="text-[10px] text-gray-400 uppercase mb-1">Densidad de Ventas</div>
                   <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-brand-accent">Zona Norte</span>
                      <span className="text-xs font-bold text-green-600">+12%</span>
                   </div>
                   <div className="w-full bg-gray-100 h-1.5 rounded-full">
                      <div className="bg-brand h-full w-[70%] rounded-full"></div>
                   </div>
                </div>

                {/* Tooltip on Hover */}
                <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-gray-100 max-w-xs">
                   <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                         <TrendingUp size={16} />
                      </div>
                      <div>
                         <div className="text-xs font-bold text-brand-accent">Insight Automático</div>
                         <p className="text-[10px] text-gray-500 mt-1 leading-tight">
                            La Ruta 4 pasa 3 veces por semana por "Colonia del Valle" pero solo tiene 2% de penetración. Oportunidad de cambaceo detectada.
                         </p>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Margin/Risk Section (Kept as is, just adding background separation) */}
      <div className="max-w-6xl mx-auto pt-10 border-t border-gray-100">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-accent">Control Operativo y Riesgo</h2>
            <p className="text-sm text-gray-500 mt-2">Lo que necesitas para proteger el margen día a día.</p>
         </div>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 relative overflow-hidden">
               <h3 className="text-lg font-bold text-brand-accent mb-4">Control de Costos</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Control de kilómetros vs presupuesto.</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Alertas de desvíos y paradas no autorizadas.</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Rendimiento real de combustible.</li>
               </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 relative overflow-hidden">
               <h3 className="text-lg font-bold text-brand-accent mb-4">Evidencia (Caja Negra)</h3>
               <ul className="space-y-3 text-sm text-gray-600">
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Reconstrucción de hechos para aseguradoras.</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Detalle de velocidades y tiempos muertos.</li>
                 <li className="flex items-center gap-2"><ArrowRight size={14} className="text-brand"/> Histórico inalterable para auditorías.</li>
               </ul>
            </div>
         </div>
      </div>
    </section>
  );
};