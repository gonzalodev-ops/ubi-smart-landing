import React from 'react';
import { X, Printer, AlertTriangle, CheckCircle2, ShieldAlert, Zap } from 'lucide-react';
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
      <div className="fixed top-4 right-4 flex gap-3 print:hidden z-50">
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
                  <div className="text-[10px] text-gray-300">Tecnología de Cumplimiento</div>
                </div>
             </div>
             <div className="text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-500/20 border border-red-500/50 rounded-full text-red-200 text-[10px] font-bold uppercase">
                   <AlertTriangle size={12} /> Alerta Regulatoria 2025
                </div>
             </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-2">
            ¿Tu GPS actual protege tu Permiso<br/>o solo ubica tu camión?
          </h1>
          <p className="text-lg text-gray-300">
            El acuerdo de la CNE cambió las reglas. Lo que antes era "monitoreo", hoy es obligación legal.
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 md:p-10">
          
          {/* THE CONFLICT */}
          <div className="grid md:grid-cols-2 gap-8 mb-10">
             <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                <div className="flex items-center gap-2 mb-4 text-red-700 font-bold text-lg">
                   <ShieldAlert size={24} />
                   El Riesgo (GPS Genérico)
                </div>
                <p className="text-sm text-red-800/70 mb-4 leading-relaxed">
                   Si tu proveedor actual falla en esto, estás en riesgo de sanción o revocación de permisos según la nueva normativa:
                </p>
                <ul className="space-y-3">
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-red-500 font-bold text-lg leading-none">×</span>
                      <span>No guarda histórico de 12 meses.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-red-500 font-bold text-lg leading-none">×</span>
                      <span>Sin API para conectar con SIRACP.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="text-red-500 font-bold text-lg leading-none">×</span>
                      <span>Reporte inestable (zonas muertas).</span>
                   </li>
                </ul>
             </div>

             <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-2 mb-4 text-brand-dark font-bold text-lg">
                   <CheckCircle2 size={24} />
                   La Solución (UBI-SMART)
                </div>
                <p className="text-sm text-green-800/70 mb-4 leading-relaxed">
                   Diseñado desde la operación de un Grupo Gasero Top 4 nacional para blindar tu operación:
                </p>
                <ul className="space-y-3">
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>CNE Ready:</strong> Trazabilidad histórica 12 meses y exportación auditada.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>SIRACP Ready:</strong> API abierta y cifrado TLS bancario.</span>
                   </li>
                   <li className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle2 size={16} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Anti-Fraude:</strong> Telemetría de válvulas (sabemos dónde y cuánto abrieron).</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* THE OFFER */}
          <div className="border-t border-b border-gray-100 py-8 mb-8 text-center">
             <div className="inline-block p-3 bg-brand/10 rounded-full text-brand mb-4">
                <Zap size={24} fill="currentColor" />
             </div>
             <h2 className="text-2xl font-bold text-brand-accent mb-2">Modelo de Renta Todo Incluido</h2>
             <p className="text-gray-500 max-w-lg mx-auto text-sm mb-6">
                Olvídate de inversiones fuertes en hardware (CAPEX). Pagas una renta mensual operativa (OPEX) que incluye todo.
             </p>
             
             <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
                <span className="px-4 py-2 bg-gray-100 rounded-lg">Hardware 4G Certificado</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg">Sensores de Válvula</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg">Plataforma Web/App</span>
                <span className="px-4 py-2 bg-gray-100 rounded-lg">Asesoría Regulatoria</span>
             </div>
          </div>

          {/* FOOTER / CTA */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6">
             <div>
                <div className="text-xs uppercase tracking-widest text-gray-400 mb-1">¿Dudas sobre tu cumplimiento?</div>
                <div className="text-xl font-bold">Agenda un diagnóstico gratuito</div>
                <div className="text-sm text-gray-400 mt-1">+1,300 Unidades Monitoreadas en México</div>
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