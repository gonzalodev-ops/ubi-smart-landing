import React, { useState } from 'react';
import { X, TrendingUp, CheckCircle2, Map, Activity, BarChart3, Phone, Mail, ArrowRight, Loader2, Lock } from 'lucide-react';
import { Button } from '../ui/Button';

interface OnePagerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Endpoint de Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjklggnl"; 

export const OnePager: React.FC<OnePagerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'gate' | 'document'>('gate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: ''
  });

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!formData.name || !formData.company || !formData.phone) return;

    setIsSubmitting(true);

    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          origen: 'Descarga Ficha Técnica PDF',
          mensaje: `Lead capturado. Empresa: ${formData.company}`
        })
      });
    } catch (error) {
      console.error("Error enviando lead", error);
    }

    // Simular proceso de generación
    setTimeout(() => {
        setIsSubmitting(false);
        setStep('document');
    }, 1000);
  };

  // --- VISTA 1: FORMULARIO (CERROJO) ---
  if (step === 'gate') {
    return (
      <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-5">
         <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-6 mx-auto">
              <Lock size={24} />
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-brand-accent mb-2">Desbloquear Ficha Técnica</h3>
              <p className="text-sm text-gray-500">
                Ingresa tus datos para generar un reporte de valor <strong>personalizado para tu gasera</strong>.
              </p>
            </div>

            <form onSubmit={handleGateSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Tu Nombre</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand outline-none text-sm"
                  placeholder="Ej. Roberto Martínez"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Nombre de tu Gasera / Empresa</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand outline-none text-sm"
                  placeholder="Ej. Gas del Norte"
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">WhatsApp de Contacto</label>
                <input 
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand outline-none text-sm"
                  placeholder="(442) ..."
                  value={formData.phone}
                  onChange={e => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <Button fullWidth disabled={isSubmitting} className="mt-4">
                {isSubmitting ? (
                   <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> Personalizando PDF...</span>
                ) : (
                   <span className="flex items-center gap-2">Generar Documento <ArrowRight size={16}/></span>
                )}
              </Button>
            </form>
         </div>
      </div>
    );
  }

  // --- VISTA 2: DOCUMENTO ---
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/90 backdrop-blur-sm flex items-start justify-center p-0 md:p-4 print:p-0 print:bg-white print:static print:overflow-visible">
      
      {/* Controles de UI (No se imprimen) */}
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

      {/* DOCUMENTO A4/CARTA */}
      <div 
        id="printable-area"
        className="bg-white w-full max-w-[800px] min-h-[1000px] shadow-2xl relative print:shadow-none print:w-full print:max-w-none print:h-auto overflow-hidden flex flex-col"
      >
        {/* HEADER */}
        <div 
            className="bg-brand-accent text-white p-8 relative overflow-hidden print:p-6"
            style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }} // FORZAR IMPRESIÓN DE FONDO
        >
          {/* Marca de agua decorativa */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full -mr-16 -mt-16 opacity-20 blur-2xl print:opacity-10"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-6">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white text-brand-accent flex items-center justify-center font-bold text-lg border border-white">UQ</div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm text-brand">UBI-SMART GAS LP</div>
                  <div className="text-xs text-gray-300 mt-0.5">Tecnología de Rentabilidad Operativa</div>
                </div>
             </div>
             
             {/* PERSONALIZACIÓN DESTACADA */}
             <div className="text-right bg-white/10 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm">
                <div className="text-[10px] text-gray-300 uppercase tracking-wider mb-0.5">Documento preparado para:</div>
                <div className="font-bold text-white text-sm md:text-base">{formData.company || "Tu Empresa"}</div>
                <div className="text-[9px] text-brand-light">{formData.name}</div>
             </div>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight mb-2 print:text-2xl">
            Cumplir con la CNE es el piso.<br/>
            <span className="text-brand">La Rentabilidad es la meta.</span>
          </h1>
        </div>

        {/* BODY */}
        <div className="p-8 print:p-6 flex-grow">
          
          {/* COMPARATIVA */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 print:gap-4 print:mb-6">
             {/* Lado Gasto */}
             <div className="bg-slate-50 rounded-xl p-5 border border-gray-200 print:bg-slate-50" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                <div className="flex items-center gap-2 mb-3 text-gray-500 font-bold text-base">
                   <Map size={20} />
                   GPS Tradicional (Gasto)
                </div>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                   Se limita a decirte "dónde está el camión". Es un requisito que solo genera costo.
                </p>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2 text-xs text-gray-500"><span>•</span><span>Solo ves puntos en un mapa.</span></li>
                   <li className="flex items-start gap-2 text-xs text-gray-500"><span>•</span><span>No cruza datos con ventas.</span></li>
                   <li className="flex items-start gap-2 text-xs text-gray-500"><span>•</span><span>Cumplimiento manual y riesgoso.</span></li>
                </ul>
             </div>

             {/* Lado Inversión */}
             <div className="bg-green-50 rounded-xl p-5 border border-green-100 print:bg-green-50" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                <div className="flex items-center gap-2 mb-3 text-brand-dark font-bold text-base">
                   <Activity size={20} />
                   Inteligencia UBI-SMART
                </div>
                <p className="text-xs text-green-800/70 mb-3 leading-relaxed">
                   Convierte cada recorrido en datos financieros.
                </p>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Válvulas:</strong> Auditoría de litros vs notas.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Mapas de Calor:</strong> Demanda real.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>CNE Auto:</strong> Trazabilidad sin esfuerzo.</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* CAPA DE VALOR */}
          <div className="border-t border-b border-gray-100 py-6 mb-6 text-center print:py-4 print:mb-4">
             <div className="inline-block p-2 bg-brand/10 rounded-full text-brand mb-3" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                <BarChart3 size={20} fill="currentColor" />
             </div>
             <h2 className="text-xl font-bold text-brand-accent mb-1">La "Capa Extra" de Valor</h2>
             <p className="text-gray-500 max-w-lg mx-auto text-xs mb-4">
                Más allá del rastreo, entregamos herramientas para decisiones directivas.
             </p>
             
             <div className="grid grid-cols-4 gap-3 text-center">
                {['100% Cumplimiento', 'Anti Fraude', 'API Integración', 'ROI Inmediato'].map((item, i) => (
                    <div key={i} className="p-2 bg-gray-50 rounded-lg border border-gray-100" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
                        <div className="text-brand-dark font-bold text-xs md:text-sm">{item.split(' ')[0]}</div>
                        <div className="text-[9px] uppercase font-bold text-gray-400">{item.split(' ').slice(1).join(' ')}</div>
                    </div>
                ))}
             </div>
          </div>
        </div>

        {/* FOOTER CONTACTO */}
        <div 
            className="bg-slate-900 text-white p-6 print:bg-slate-900 print:text-white"
            style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }} // FORZAR IMPRESIÓN DE FONDO
        >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">¿Dudas sobre tu cumplimiento?</div>
                    <div className="text-lg font-bold text-white">Solicita tu diagnóstico sin costo</div>
                </div>
                
                <div className="flex flex-col gap-2 text-right">
                    <div className="flex items-center justify-end gap-3">
                        <div className="w-8 h-8 rounded-full bg-brand flex items-center justify-center text-white">
                            <Phone size={16} fill="currentColor" />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Llámanos / WhatsApp</div>
                            <div className="font-bold text-lg leading-none tracking-wide">442 391 1129</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <Mail size={16} />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Correo de Soporte</div>
                            <div className="font-bold text-sm leading-none">ventas@integrador.pro</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        {/* Legal Footer */}
        <div className="bg-slate-950 p-3 text-center" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact' }}>
            <p className="text-[9px] text-gray-500 uppercase tracking-wider">
                UBI-SMART Gas LP · Soluciones Ubiqo · Documento ID: {new Date().getTime().toString().slice(-6)}
            </p>
        </div>

      </div>
    </div>
  );
};