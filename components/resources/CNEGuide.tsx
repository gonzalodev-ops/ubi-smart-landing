import React from 'react';
import { X, BookOpen, Download, ArrowRight, ShieldAlert, CheckSquare, Map } from 'lucide-react';
import { Button } from '../ui/Button';

interface CNEGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CNEGuide: React.FC<CNEGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

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
                 <div className="text-sm text-gray-400 uppercase tracking-widest mb-1">Preparado por</div>
                 <div className="text-2xl font-bold">UBI-SMART Gas LP</div>
                 <div className="text-brand">Soluciones Ubiqo</div>
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
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">1</span>
              Qué pasó el 23 de septiembre
            </h2>
            <p className="mb-4">
              El 23 de septiembre de 2025 se publicó en el Diario Oficial el acuerdo de la CNE que fija las nuevas reglas del juego para el transporte de petrolíferos y Gas LP. No es solo un trámite más: cambia cómo monitoreas y justificas tu operación.
            </p>
            <div className="bg-slate-50 p-6 rounded-xl border-l-4 border-brand mb-6">
              <h3 className="font-bold text-brand-dark mb-2">Traducción al idioma director:</h3>
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
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">2</span>
              ¿A quién aplica realmente?
            </h2>
            <p className="mb-4">
              Aplica a todas las unidades vehiculares asociadas al permiso de transporte o distribución:
            </p>
            <ul className="grid grid-cols-2 gap-3 mb-6">
               {['Pipas / Autotanques', 'Tractocamiones', 'Semirremolques', 'Unidades de Reparto'].map(item => (
                 <li key={item} className="flex items-center gap-2 text-sm font-medium bg-gray-50 p-2 rounded">
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
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">3</span>
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
                <div className="mt-3 p-3 bg-red-50 text-red-700 text-xs font-bold rounded flex items-center gap-2">
                   <ShieldAlert size={16} />
                   La desconexión o manipulación se considera falta grave (Riesgo de revocación).
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-dark mb-2">3.3. SIRACP</h3>
                <p className="text-sm">Es el "SAT operativo". Aquí se gestionan altas, bajas y códigos QR. Tu plataforma de GPS debe poder hablar con SIRACP vía API para no tener que capturar datos manualmente.</p>
              </div>
            </div>
          </div>

          {/* CHECKLIST */}
          <div className="chapter-break mt-8">
             <h2 className="text-2xl font-bold text-brand-accent mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">4</span>
              Checklist de Acción (Semanas 1-4)
            </h2>
            
            <div className="border border-gray-200 rounded-xl overflow-hidden">
               <div className="bg-gray-50 p-4 border-b border-gray-200 font-bold text-sm text-gray-700">Semana 1: Diagnóstico</div>
               <div className="p-4 text-sm space-y-3">
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Inventario fino: ¿Qué unidad corresponde a qué permiso exacto?</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Auditoría GPS: ¿Mi proveedor actual guarda 12 meses de histórico?</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Balizado: ¿Tengo espacio físico en la unidad para el nuevo QR?</span>
                  </label>
               </div>

               <div className="bg-gray-50 p-4 border-y border-gray-200 font-bold text-sm text-gray-700">Semanas 2-4: Ejecución</div>
               <div className="p-4 text-sm space-y-3">
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Solicitar códigos QR vía SIRACP.</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Migrar o actualizar GPS a tecnología 4G con API abierta.</span>
                  </label>
                  <label className="flex gap-3 items-start cursor-pointer">
                     <input type="checkbox" className="mt-1 accent-brand" />
                     <span>Definir perfiles de usuario: ¿Quién dará de baja las unidades siniestradas?</span>
                  </label>
               </div>
            </div>
          </div>

          {/* ERRORES COMUNES */}
          <div className="chapter-break mt-8">
            <h2 className="text-2xl font-bold text-brand-accent mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brand text-white flex items-center justify-center text-sm">5</span>
              Errores que te costarán dinero
            </h2>
            <ul className="space-y-4">
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <div className="font-bold text-orange-800 text-sm mb-1">Error 1: "Compro cualquier GPS barato"</div>
                  <p className="text-xs text-orange-700">Cuando venga una verificación y te pidan el histórico de hace 6 meses, el sistema barato (que solo guarda 3) no dará la talla. Eso es multa segura.</p>
               </li>
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100">
                  <div className="font-bold text-orange-800 text-sm mb-1">Error 2: Olvidar la integración</div>
                  <p className="text-xs text-orange-700">Enfocarse solo en la pegatina del QR y olvidar que SIRACP es una plataforma digital. Necesitas un software que "hable" con la autoridad automáticamente.</p>
               </li>
               <li className="bg-orange-50 p-4 rounded-lg border border-orange-100">
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
              
              <div className="inline-block p-6 border border-white/20 rounded-xl bg-white/5">
                 <div className="text-sm font-bold uppercase tracking-widest mb-2 text-brand">Contacto Directo</div>
                 <div className="text-2xl font-bold mb-1">442 391 1129</div>
                 <div className="text-sm text-gray-400">ventas@integrador.pro</div>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};