import React, { useState } from 'react';
import { X, BookOpen, Download, ArrowRight, ShieldAlert, CheckSquare, Map, Lock, Loader2, Phone, Mail, TrendingUp, PieChart } from 'lucide-react';
import { Button } from '../ui/Button';

interface CNEGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

// Endpoint de Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjklggnl"; 

export const CNEGuide: React.FC<CNEGuideProps> = ({ isOpen, onClose }) => {
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
          origen: 'Descarga Guía CNE Completa (E-Book)',
          mensaje: `Lead capturado para Guía. Empresa: ${formData.company}`
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
              <h3 className="text-xl font-bold text-brand-accent mb-2">Desbloquear Guía Completa</h3>
              <p className="text-sm text-gray-500">
                Accede al manual de implementación CNE de 10 puntos. <br/>
                <strong>Personalizado para tu gasera.</strong>
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
                   <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> Preparando Guía...</span>
                ) : (
                   <span className="flex items-center gap-2">Abrir Guía Ahora <ArrowRight size={16}/></span>
                )}
              </Button>
            </form>
         </div>
      </div>
    );
  }

  // --- VISTA 2: DOCUMENTO ---
  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-900/95 backdrop-blur-sm flex justify-center p-0 md:p-4 print:p-0 print:bg-white print:static print:overflow-visible">
      
      {/* UI Controls (No Print) */}
      <div className="fixed top-4 right-4 flex gap-3 z-50 no-print">
        <Button variant="secondary" icon="arrow" onClick={handlePrint}>
          Guardar como PDF
        </Button>
        <button 
          onClick={onClose}
          className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-gray-500 hover:text-red-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* BOOK CONTAINER */}
      <div 
        id="printable-guide"
        className="bg-white w-full max-w-[800px] shadow-2xl min-h-screen relative print:shadow-none print:w-full print:max-w-none"
      >
        
        {/* --- PORTADA --- */}
        <div className="chapter-break min-h-[900px] flex flex-col justify-between p-12 bg-slate-900 text-white relative overflow-hidden" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#0f172a' }}>
           {/* Decoración de fondo */}
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
           
           <div className="relative z-10">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-white/30 text-xs font-bold tracking-widest uppercase mb-8">
                <BookOpen size={14} />
                Guía Técnica 2025
             </div>
             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
               Guía práctica para <span className="text-brand">cumplir el acuerdo de la CNE</span>
             </h1>
             <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
               Balizado, QR y GPS en Gas LP: Cómo evitar multas, preparar tu flota para SIRACP y no perder el margen en el intento.
             </p>
           </div>

           <div className="relative z-10 border-t border-white/20 pt-8 flex justify-between items-end">
              <div>
                 <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Documento preparado para:</div>
                 <div className="text-2xl font-bold">{formData.company || "Tu Gasera"}</div>
                 <div className="text-brand">{formData.name}</div>
              </div>
              <div className="text-right hidden print:block">
                 <div className="text-xs text-gray-500">www.ubiqo.net</div>
              </div>
           </div>
        </div>

        {/* --- CONTENIDO --- */}
        <div className="p-12 md:p-16 print:p-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
          
          {/* INTRO */}
          <div className="chapter-break">
            <h2 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm print-color-adjust-exact">1</span>
              Qué pasó el 23 de septiembre
            </h2>
            <p className="mb-4 text-sm">
              El 23 de septiembre de 2025 se publicó en el Diario Oficial el acuerdo de la CNE que fija las nuevas reglas del juego para el transporte de petrolíferos y Gas LP. No es solo un trámite más: cambia cómo monitoreas y justificas tu operación.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand mb-6" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#f8fafc' }}>
              <h3 className="font-bold text-brand-dark mb-2 text-sm">Traducción al idioma director:</h3>
              <p className="text-sm">Si tienes pipas o autotanques vinculados a un permiso, ahora estás obligado a:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-sm">
                <li>Balizarlas con código QR único emitido por la CNE.</li>
                <li>Equiparlas con <strong>GPS activo certificado</strong> que guarde histórico de 12 meses.</li>
                <li>Reportar mediante el SIRACP (la nueva plataforma central de la autoridad).</li>
              </ul>
            </div>
          </div>

          {/* A QUIEN APLICA */}
          <div className="chapter-break">
            <h2 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm print-color-adjust-exact">2</span>
              ¿A quién aplica realmente?
            </h2>
            <p className="mb-4 text-sm">
              Aplica a todas las unidades vehiculares asociadas al permiso de transporte o distribución:
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-6">
               {['Pipas / Autotanques', 'Tractocamiones', 'Semirremolques', 'Unidades de Reparto'].map(item => (
                 <li key={item} className="flex items-center gap-2 text-xs font-medium bg-gray-50 p-2 rounded" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#f9fafb' }}>
                    <CheckSquare size={16} className="text-brand" /> {item}
                 </li>
               ))}
            </ul>
            <p className="text-sm italic text-gray-500">
              Si eres una gasera con flota propia o subrogada, estás en el centro de la diana.
            </p>
          </div>

          {/* REQUISITOS TÉCNICOS */}
          <div className="chapter-break">
            <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm print-color-adjust-exact">3</span>
              Los 3 Bloques de la Norma
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">3.1. Balizado y QR</h3>
                <p className="text-sm mb-2">El QR debe ser impreso en material retroreflectante y resistente. Al escanearlo, la autoridad puede ver la vigencia del permiso, producto transportado y seguros. Es tu "placa de identidad" digital.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">3.2. GPS Obligatorio (El punto crítico)</h3>
                <p className="text-sm mb-3">No sirve cualquier GPS barato. La norma exige:</p>
                <ul className="space-y-2 text-sm">
                   <li className="flex gap-2"><Map size={16} className="text-brand shrink-0"/> <span>Transmisión en tiempo real (~30 seg).</span></li>
                   <li className="flex gap-2"><Map size={16} className="text-brand shrink-0"/> <span><strong>Histórico de 12 meses</strong> (La mayoría de los GPS estándar solo guardan 3).</span></li>
                   <li className="flex gap-2"><Map size={16} className="text-brand shrink-0"/> <span>Cifrado TLS y ciberseguridad bancaria.</span></li>
                </ul>
                <div className="mt-3 p-3 bg-red-50 text-red-700 text-xs font-bold rounded flex items-center gap-2" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#fef2f2' }}>
                   <ShieldAlert size={16} />
                   La desconexión o manipulación se considera falta grave (Riesgo de revocación).
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">3.3. SIRACP</h3>
                <p className="text-sm">Es el "SAT operativo". Aquí se gestionan altas, bajas y códigos QR. Tu plataforma de GPS debe poder hablar con SIRACP vía API para no tener que capturar datos manualmente.</p>
              </div>

              {/* NUEVO CAPÍTULO AGREGADO */}
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#eff6ff' }}>
                <h3 className="text-lg font-bold text-brand-dark mb-2 flex items-center gap-2">
                  <TrendingUp size={18} className="text-brand" />
                  3.4. El Bonus: Inteligencia de Mercado Real
                </h3>
                <p className="text-sm mb-3 italic text-gray-600">
                  La mayoría cumple por miedo, pero pocos usan la data para vender más.
                </p>
                <ul className="space-y-3 text-sm text-gray-700">
                   <li className="flex gap-3 items-start">
                      <div className="mt-1 shrink-0"><PieChart size={14} className="text-brand"/></div>
                      <span><strong>Detectar rutas "invisibles":</strong> Si tienes muchas aperturas en lugares no registrados, hay un mercado potencial que no estás atendiendo formalmente.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                      <div className="mt-1 shrink-0"><PieChart size={14} className="text-brand"/></div>
                      <span><strong>Ver colonias de alto consumo:</strong> El mapa de calor te dice dónde está realmente el dinero, no solo dónde "crees" que está.</span>
                   </li>
                   <li className="flex gap-3 items-start">
                      <div className="mt-1 shrink-0"><PieChart size={14} className="text-brand"/></div>
                      <span><strong>Auditoría comercial:</strong> Identifica rutas "muy trabajadas" (muchos km, muchas paradas) pero "poco cobradas" (bajo ticket promedio). Ahí está la fuga de margen.</span>
                   </li>
                </ul>
              </div>

            </div>
          </div>

          {/* CHECKLIST */}
          <div className="chapter-break mt-8">
             <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm print-color-adjust-exact">4</span>
              Checklist de Acción (Semanas 1-4)
            </h2>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden">
               <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-sm text-gray-700" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#f9fafb' }}>Semana 1: Diagnóstico</div>
               <div className="p-4 text-sm space-y-3">
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Inventario fino: ¿Qué unidad corresponde a qué permiso exacto?</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Auditoría GPS: ¿Mi proveedor actual guarda 12 meses de histórico?</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Balizado: ¿Tengo espacio físico en la unidad para el nuevo QR?</span>
                  </label>
               </div>

               <div className="bg-gray-50 p-4 border-y border-gray-200 font-bold text-sm text-gray-700" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#f9fafb' }}>Semanas 2-4: Ejecución</div>
               <div className="p-4 text-sm space-y-3">
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Solicitar códigos QR vía SIRACP.</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Migrar o actualizar GPS a tecnología 4G con API abierta.</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <div className="w-4 h-4 border border-gray-300 rounded mt-0.5"></div>
                     <span>Definir perfiles de usuario: ¿Quién dará de baja las unidades siniestradas?</span>
                  </label>
               </div>
            </div>
          </div>

          {/* ERRORES COMUNES */}
          <div className="chapter-break mt-8">
            <h2 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm print-color-adjust-exact">5</span>
              Errores que te costarán dinero
            </h2>
            <ul className="space-y-4">
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#fff7ed' }}>
                  <div className="font-bold text-orange-800 text-sm mb-1">Error 1: "Compro cualquier GPS barato"</div>
                  <p className="text-xs text-orange-700">Cuando venga una verificación y te pidan el histórico de hace 6 meses, el sistema barato (que solo guarda 3) no dará la talla. Eso es multa segura.</p>
               </li>
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#fff7ed' }}>
                  <div className="font-bold text-orange-800 text-sm mb-1">Error 2: Olvidar la integración</div>
                  <p className="text-xs text-orange-700">Enfocarse solo en la pegatina del QR y olvidar que SIRACP es una plataforma digital. Necesitas un software que "hable" con la autoridad automáticamente.</p>
               </li>
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#fff7ed' }}>
                  <div className="font-bold text-orange-800 text-sm mb-1">Error 3: No aprovechar el cambio</div>
                  <p className="text-xs text-orange-700">Implementar todo "a fuerza" sin usar esa misma tecnología para controlar combustible y rutas. Si ya vas a pagar el GPS, úsalo para mejorar tu margen.</p>
               </li>
            </ul>
          </div>

        </div>
        
        {/* --- CONTRAPORTADA / CIERRE --- */}
        <div className="chapter-break bg-slate-900 text-white p-12 print:p-12 mt-auto" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: '#0f172a', color: 'white' }}>
           <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Próximo paso: Del diagnóstico a la acción</h2>
              <p className="text-gray-400 mb-8 text-sm leading-relaxed">
                 Cortar la conversación de "supuestos" y tener un mapa claro de cómo estás versus el acuerdo. 
                 UBI-SMART Gas LP es la solución diseñada para cumplir hoy y protegerte siempre.
              </p>
              
              <div className="inline-block p-6 border border-white/20 rounded-xl bg-white/5" style={{ printColorAdjust: 'exact', WebkitPrintColorAdjust: 'exact', backgroundColor: 'rgba(255,255,255,0.05)' }}>
                 <div className="text-sm font-bold uppercase tracking-widest mb-4 text-brand">Contacto Directo</div>
                 
                 <div className="flex flex-col md:flex-row gap-8 justify-center text-left">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center text-white">
                            <Phone size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Llámanos / WhatsApp</div>
                            <div className="font-bold text-xl">442 391 1129</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
                            <Mail size={20} />
                        </div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Correo</div>
                            <div className="font-bold text-lg">ventas@integrador.pro</div>
                        </div>
                    </div>
                 </div>

              </div>
           </div>
        </div>

      </div>
    </div>
  );
};