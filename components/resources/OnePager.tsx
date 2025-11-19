import React from 'react';
import { X, TrendingUp, CheckCircle2, Zap, Map, Activity, BarChart3 } from 'lucide-react';
import { Button } from '../ui/Button';

interface OnePagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OnePager: React.FC<OnePagerProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/90 backdrop-blur-sm flex items-start justify-center p-0 md:p-4 print:p-0 print:bg-white print:static print:overflow-visible">
      
      {/* Controls (Hidden when printing) */}
      <div className="fixed top-4 right-4 flex gap-3 print:hidden z-50 no-print">
        <Button variant="secondary" icon="arrow" onClick={handlePrint}>
          Imprimir / Guardar PDF
        </Button>
        <button 
          onClick={onClose}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* The Document (A4 Aspect Ratioish) */}
      <div 
        id="printable-area"
        className="bg-white w-full max-w-[800px] min-h-[1100px] shadow-2xl relative print:shadow-none print:w-full print:max-w-none"
      >
        {/* HEADER */}
        <div className="bg-brand-accent text-white p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full -mr-16 -mt-16 opacity-20 blur-2xl"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white text-brand-accent flex items-center justify-center font-bold text-lg">UQ</div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm text-brand">UBI-SMART Gas LP</div>
                  <div className="text-[10px] text-gray-300">Tecnología de Rentabilidad Operativa</div>
                </div>
             </div>
             <div className="text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand/20 border border-brand/50 rounded-full text-brand-light text-[10px] font-bold uppercase">
                   <TrendingUp size={12} /> Ficha de Valor 2025
                </div>
             </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
            Cumplir con la CNE es el piso.<br/>
            <span className="text-brand">La Rentabilidad es la meta.</span>
          </h1>
          <p className="text-lg text-gray-300 mt-2">
            No busques solo un GPS para evitar multas. Usa la tecnología para auditar tus rutas, cerrar fugas de dinero y vender más.
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 md:p-10">
          
          {/* THE CONFLICT: COST CENTER VS PROFIT CENTER */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
             <div className="bg-slate-50 rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-2 mb-4 text-gray-500 font-bold text-lg">
                   <Map size={24} />
                   GPS Tradicional (Gasto)
                </div>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                   Se limita a decirte "dónde está el camión". Es un requisito que solo genera costo operativo.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="text-gray-400 font-bold text-lg leading-none">•</span>
                      <span>Solo ves puntos en un mapa.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="text-gray-400 font-bold text-lg leading-none">•</span>
                      <span>No cruza datos con ventas.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-500">
                      <span className="text-gray-400 font-bold text-lg leading-none">•</span>
                      <span>Cumplimiento CNE manual y riesgoso.</span>
                   </li>
                </ul>
             </div>

             <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-4 text-brand-dark font-bold text-lg">
                   <Activity size={24} />
                   Inteligencia UBI-SMART
                </div>
                <p className="text-sm text-green-800/70 mb-4 leading-relaxed">
                   Convierte cada recorrido en datos financieros. Detecta dónde ganas dinero y dónde lo pierdes.
                </p>
                <ul className="space-y-3">
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Telemetría de Válvulas:</strong> Auditoría física de cada litro despachado vs notas.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Mapas de Calor Comercial:</strong> Identifica zonas de alta demanda real.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>CNE Automático:</strong> Histórico y trazabilidad sin esfuerzo humano.</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* THE OFFER */}
          <div className="border-t border-b border-gray-100 py-8 mb-8 text-center">
             <div className="inline-block p-3 bg-brand/10 rounded-full text-brand mb-4">
                <BarChart3 size={24} fill="currentColor" />
             </div>
             <h2 className="text-2xl font-bold text-brand-accent mb-2">La "Capa Extra" de Valor</h2>
             <p className="text-gray-500 max-w-lg mx-auto text-sm mb-6">
                Más allá del rastreo, entregamos las herramientas para la toma de decisiones directivas.
             </p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-lg">100%</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Cumplimiento</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-lg">Anti</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Fraude</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-lg">API</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Integración</div>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-lg">ROI</div>
                    <div className="text-[10px] uppercase font-bold text-gray-400">Inmediato</div>
                </div>
             </div>
          </div>

          {/* FOOTER / CTA */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">Prueba la diferencia</div>
                <div className="text-xl font-bold">Diagnóstico de Flota sin Costo</div>
                <div className="text-sm text-gray-400 mt-1">Compara tu tecnología actual vs UBI-SMART</div>
             </div>
             <div className="text-right">
                <div className="text-brand font-bold text-lg">ubiqo.net/ubi-smart</div>
                <div className="text-sm text-gray-400">Solicita demo al whatsapp</div>
             </div>
          </div>

          <div className="mt-8 text-center">
             <p className="text-[10px] text-gray-400 uppercase tracking-wider">
                Documento generado por UBI-SMART Gas LP · {new Date().getFullYear()}
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};