import React, { useState } from 'react';
import { X, TrendingUp, CheckCircle2, Map, Activity, BarChart3, Lock, ArrowRight, Loader2, Phone, Mail } from 'lucide-react';
import { Button } from '../ui/Button';

interface OnePagerProps {
  isOpen: boolean;
  onClose: () => void;
}

// Endpoint de Formspree (Mismo que contacto)
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjklggnl"; 

export const OnePager: React.FC<OnePagerProps> = ({ isOpen, onClose }) => {
  // Estado del flujo: 'gate' (formulario) o 'document' (pdf visible)
  const [step, setStep] = useState<'gate' | 'document'>('gate');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Datos del usuario para personalizar el PDF
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

    // 1. Enviar lead a Formspree
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          origen: 'Descarga OnePager PDF', // Etiqueta para identificar de dónde vino el lead
          mensaje: `Lead capturado mediante descarga de ficha técnica. Empresa: ${formData.company}`
        })
      });
    } catch (error) {
      console.error("Error enviando lead", error);
    }

    // 2. Desbloquear documento (incluso si falla el fetch para no frustrar al usuario)
    setTimeout(() => {
        setIsSubmitting(false);
        setStep('document');
    }, 800); // Pequeño delay para sensación de "Generando..."
  };

  // --- VISTA 1: EL CERROJO (Formulario) ---
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
                Ingresa tus datos para generar un reporte de valor personalizado para tu gasera.
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
                <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">WhatsApp</label>
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
                   <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> Generando reporte...</span>
                ) : (
                   <span className="flex items-center gap-2">Descargar PDF Personalizado <ArrowRight size={16}/></span>
                )}
              </Button>
              
              <p className="text-[10px] text-center text-gray-400 mt-4">
                Tus datos son confidenciales. Se enviará una copia a tu equipo de ventas.
              </p>
            </form>
         </div>
      </div>
    );
  }

  // --- VISTA 2: EL DOCUMENTO (PDF) ---
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

      {/* The Document (A4/Letter Optimized) */}
      <div 
        id="printable-area"
        className="bg-white w-full max-w-[800px] min-h-[1000px] shadow-2xl relative print:shadow-none print:w-full print:max-w-none print:h-auto overflow-hidden"
      >
        {/* HEADER */}
        <div className="bg-brand-accent text-white p-8 relative overflow-hidden print:p-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand rounded-full -mr-16 -mt-16 opacity-20 blur-2xl print:opacity-10"></div>
          
          <div className="flex justify-between items-start relative z-10 mb-4">
             <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white text-brand-accent flex items-center justify-center font-bold text-lg print:border print:border-gray-300">UQ</div>
                <div>
                  <div className="font-bold uppercase tracking-widest text-sm text-brand">UBI-SMART GAS LP</div>
                  {/* Personalización Dinámica */}
                  <div className="text-[10px] text-gray-300 print:text-gray-400 mt-0.5">
                    Reporte de Valor preparado para: <span className="text-white font-bold text-xs border-b border-brand/50 pb-0.5">{formData.company}</span>
                  </div>
                </div>
             </div>
             <div className="text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand/20 border border-brand/50 rounded-full text-brand-light text-[10px] font-bold uppercase print:border-gray-400 print:text-white">
                   <TrendingUp size={12} /> Ficha de Valor 2025
                </div>
             </div>
          </div>

          <h1 className="text-3xl font-extrabold leading-tight mb-2 print:text-2xl">
            Cumplir con la CNE es el piso.<br/>
            <span className="text-brand">La Rentabilidad es la meta.</span>
          </h1>
          <p className="text-base text-gray-300 mt-1 print:text-sm print:text-gray-400">
            No busques solo un GPS para evitar multas. Usa la tecnología para auditar tus rutas, cerrar fugas de dinero y vender más.
          </p>
        </div>

        {/* BODY */}
        <div className="p-8 print:p-6 print:pt-4">
          
          {/* THE CONFLICT: COST CENTER VS PROFIT CENTER */}
          <div className="grid md:grid-cols-2 gap-6 mb-8 print:gap-4 print:mb-6">
             <div className="bg-slate-50 rounded-xl p-5 border border-gray-200 print:border-gray-300">
                <div className="flex items-center gap-2 mb-3 text-gray-500 font-bold text-base">
                   <Map size={20} />
                   GPS Tradicional (Gasto)
                </div>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">
                   Se limita a decirte "dónde está el camión". Es un requisito que solo genera costo operativo.
                </p>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-gray-400 font-bold text-base leading-none">•</span>
                      <span>Solo ves puntos en un mapa.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-gray-400 font-bold text-base leading-none">•</span>
                      <span>No cruza datos con ventas.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-500">
                      <span className="text-gray-400 font-bold text-base leading-none">•</span>
                      <span>Cumplimiento CNE manual y riesgoso.</span>
                   </li>
                </ul>
             </div>

             <div className="bg-green-50 rounded-xl p-5 border border-green-100 print:bg-white print:border-brand/30">
                <div className="flex items-center gap-2 mb-3 text-brand-dark font-bold text-base">
                   <Activity size={20} />
                   Inteligencia UBI-SMART
                </div>
                <p className="text-xs text-green-800/70 mb-3 leading-relaxed print:text-gray-600">
                   Convierte cada recorrido en datos financieros. Detecta dónde ganas dinero y dónde lo pierdes.
                </p>
                <ul className="space-y-2">
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Telemetría de Válvulas:</strong> Auditoría física de cada litro despachado vs notas.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>Mapas de Calor:</strong> Identifica zonas de alta demanda real.</span>
                   </li>
                   <li className="flex items-start gap-2 text-xs text-gray-700">
                      <CheckCircle2 size={14} className="text-brand mt-0.5 shrink-0" />
                      <span><strong>CNE Automático:</strong> Histórico y trazabilidad sin esfuerzo humano.</span>
                   </li>
                </ul>
             </div>
          </div>

          {/* THE OFFER */}
          <div className="border-t border-b border-gray-100 py-6 mb-6 text-center print:py-4 print:mb-4">
             <div className="inline-block p-2 bg-brand/10 rounded-full text-brand mb-3">
                <BarChart3 size={20} fill="currentColor" />
             </div>
             <h2 className="text-xl font-bold text-brand-accent mb-1">La "Capa Extra" de Valor</h2>
             <p className="text-gray-500 max-w-lg mx-auto text-xs mb-4">
                Más allá del rastreo, entregamos las herramientas para la toma de decisiones directivas.
             </p>
             
             <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-base">100%</div>
                    <div className="text-[9px] uppercase font-bold text-gray-400">Cumplimiento</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-base">Anti</div>
                    <div className="text-[9px] uppercase font-bold text-gray-400">Fraude</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-base">API</div>
                    <div className="text-[9px] uppercase font-bold text-gray-400">Integración</div>
                </div>
                <div className="p-2 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="text-brand font-bold text-base">ROI</div>
                    <div className="text-[9px] uppercase font-bold text-gray-400">Inmediato</div>
                </div>
             </div>
          </div>

          {/* FOOTER / CTA */}
          <div className="bg-slate-900 rounded-xl p-5 text-white flex flex-col md:flex-row items-center justify-between gap-4 print:bg-slate-900 print:text-white">
             <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Prueba la diferencia</div>
                <div className="text-lg font-bold">Diagnóstico de Flota sin Costo</div>
                <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-2">
                   <span>Habla con un ingeniero experto</span>
                </div>
             </div>
             <div className="text-right">
                <div className="text-brand font-bold text-base flex items-center justify-end gap-2">
                   <Phone size={14} className="text-brand" /> (442) 391-1129
                </div>
                <div className="text-xs text-gray-400 flex items-center justify-end gap-2 mt-0.5">
                   <Mail size={12} /> ventas@integrador.pro
                </div>
             </div>
          </div>

          <div className="mt-6 text-center print:mt-4">
             <p className="text-[9px] text-gray-400 uppercase tracking-wider">
                Documento generado por UBI-SMART Gas LP para {formData.company} · {new Date().getFullYear()}
             </p>
          </div>

        </div>
      </div>
    </div>
  );
};