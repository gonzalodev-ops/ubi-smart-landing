
import React from 'react';
import { MapPin, TrendingUp, Target, PieChart, ArrowRight, Navigation, DollarSign, Layers, Activity } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 px-5 space-y-24 bg-white">
      {/* Market Intelligence Section */}
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Content Side */}
          <div className="order-2 md:order-1">
            <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Inteligencia de Mercado</div>
            <h2 className="text-3xl font-bold text-brand-accent mb-6">La realidad física vs. la realidad comercial</h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Tú tienes las notas de venta en tu sistema. Nosotros tenemos la <strong>verdad física en la calle</strong> (dónde y cuándo se abrieron las válvulas).
              UBI-SMART te permite visualizar la densidad de tus operaciones para que tú hagas el cruce: ¿Todo lo que se abrió se facturó? ¿Estás gastando ruta en zonas de baja densidad?
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-brand/10 text-brand rounded-lg flex items-center justify-center">
                    <Layers size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent text-sm">El mapa de densidad de suministro</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Visualiza "Zonas de Calor" basadas en aperturas reales de válvula. Detecta colonias donde tu presencia física es altísima pero tus reportes de venta no lo reflejan (posible fuga o mercado informal).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <Target size={18} />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-brand-accent text-sm">Optimización basada en hechos</h4>
                  <p className="text-xs text-gray-500 mt-1">
                    Al identificar zonas de "Baja Densidad" (donde la unidad pasa mucho pero abre poco la válvula), obtienes la evidencia necesaria para reestructurar rutas, iniciar campañas de cambaceo o recortar tramos muertos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual Side: Density Map (Honest Data) */}
          <div className="order-1 md:order-2 relative">
             {/* Map Container */}
             <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden aspect-square md:aspect-[4/3] relative group">
                
                {/* Map Grid Background */}
                <div className="absolute inset-0 bg-slate-50">
                   <svg className="w-full h-full opacity-40" width="100%" height="100%">
                      <pattern id="grid-map" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="0.5"/>
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#grid-map)" />
                   </svg>
                </div>

                {/* Route Path */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <path 
                    d="M 40 80 Q 150 60 180 150 T 280 220 T 380 180" 
                    fill="none" 
                    stroke="#cbd5e1" 
                    strokeWidth="3" 
                    strokeDasharray="6 4"
                  />
                </svg>

                {/* ZONE A: HIGH PHYSICAL DENSITY (The "Heat") */}
                <div className="absolute bottom-[25%] right-[15%]">
                    {/* Concentrated Activity (Heatmap simulation) */}
                    <div className="absolute w-24 h-24 bg-brand/20 rounded-full -top-8 -left-8 blur-xl"></div>
                    
                    {/* Physical Valve Points */}
                    <div className="relative">
                        <div className="absolute w-3 h-3 bg-brand rounded-full top-0 left-0 border border-white"></div>
                        <div className="absolute w-3 h-3 bg-brand rounded-full top-4 left-4 border border-white"></div>
                        <div className="absolute w-3 h-3 bg-brand rounded-full -top-2 left-6 border border-white"></div>
                        <div className="absolute w-3 h-3 bg-brand rounded-full top-6 -left-2 border border-white"></div>
                        <div className="absolute w-3 h-3 bg-brand rounded-full top-0 left-8 border border-white"></div>
                    </div>

                    <div className="absolute -bottom-12 right-0 bg-white/90 px-3 py-2 rounded border border-green-100 shadow-sm z-20 w-32">
                        <div className="flex items-center gap-1.5 mb-1">
                            <Activity size={12} className="text-brand" />
                            <span className="text-[10px] font-bold text-brand-dark uppercase">Alta Actividad</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1 rounded-full mb-1">
                            <div className="bg-brand w-[90%] h-full rounded-full"></div>
                        </div>
                        <span className="text-[9px] text-gray-500 leading-tight block">
                            24 aperturas en 1 hora. 
                            <span className="font-medium text-slate-700 block mt-0.5">¿Coincide con ventas?</span>
                        </span>
                    </div>
                </div>

                {/* ZONE B: LOW DENSITY (The "Waste") */}
                <div className="absolute top-[20%] left-[15%]">
                     <div className="w-3 h-3 bg-slate-300 rounded-full border border-white"></div>
                     
                     <div className="absolute top-6 -left-4 bg-white/90 px-2 py-1 rounded border border-slate-200 shadow-sm opacity-80 hover:opacity-100 transition-opacity">
                        <span className="text-[9px] font-bold text-slate-500 uppercase block">Baja Densidad</span>
                        <span className="text-[8px] text-gray-400">1 apertura / 5km</span>
                    </div>
                </div>

                {/* Legend / Filter Card */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm p-2.5 rounded-lg shadow-md border border-gray-100 flex flex-col gap-2">
                   <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Capas del Mapa</div>
                   
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-brand"></div>
                      <span className="text-[10px] font-medium text-gray-700">Aperturas Reales (Válvula)</span>
                   </div>
                   <div className="flex items-center gap-2 opacity-50">
                      <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                      <span className="text-[10px] font-medium text-gray-500 italic">Notas de Venta (Opcional)</span>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </div>

      {/* Margin/Risk Section */}
      <div className="max-w-6xl mx-auto pt-10 border-t border-gray-100">
         <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-brand-accent">Control Operativo y Riesgo</h2>
            <p className="text-sm text-gray-500 mt-2">Lo que necesitas para proteger el margen día a día.</p>
         </div>
         
         <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 relative overflow-hidden hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand/5 rounded-bl-full -mr-4 -mt-4"></div>
               <h3 className="text-lg font-bold text-brand-accent mb-4 flex items-center gap-2">
                 <DollarSign className="text-brand" size={20} />
                 Control de Costos
               </h3>
               <ul className="space-y-3 text-sm text-gray-600 relative z-10">
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Control de kilómetros vs presupuesto.</span></li>
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Alertas de desvíos y paradas no autorizadas.</span></li>
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Rendimiento real de combustible.</span></li>
               </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-gray-200 relative overflow-hidden hover:shadow-md transition-shadow">
               <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-bl-full -mr-4 -mt-4"></div>
               <h3 className="text-lg font-bold text-brand-accent mb-4 flex items-center gap-2">
                 <MapPin className="text-brand" size={20} />
                 Evidencia (Caja Negra)
               </h3>
               <ul className="space-y-3 text-sm text-gray-600 relative z-10">
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Reconstrucción de hechos para aseguradoras.</span></li>
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Detalle de velocidades y tiempos muertos.</span></li>
                 <li className="flex items-start gap-2"><ArrowRight size={14} className="text-brand mt-1 shrink-0"/> <span>Histórico inalterable para auditorías.</span></li>
               </ul>
            </div>
         </div>
      </div>
    </section>
  );
};
