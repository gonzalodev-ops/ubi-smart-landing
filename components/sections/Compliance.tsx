import React, { useState } from 'react';
import { CheckCircle2, Circle, AlertTriangle, ShieldCheck, RefreshCw, Lock, BookOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { CNEGuide } from '../resources/CNEGuide';

interface ComplianceItem {
  id: string;
  text: string;
  desc: string;
}

const cneItems: ComplianceItem[] = [
  { id: 'cne-1', text: "GPS activo en 100% de unidades", desc: "Sin unidades 'fantasma' o desconectadas por más de 24h." },
  { id: 'cne-2', text: "Histórico de rutas (Trazabilidad)", desc: "Capacidad de reconstruir viajes pasados para auditoría." },
  { id: 'cne-3', text: "Acceso Espejo para Autoridad", desc: "Usuario y contraseña listos para entregar a la CRE/CNE si lo solicitan." },
  { id: 'cne-4', text: "Reporte de paradas y geocercas", desc: "Evidencia de dónde se detuvo la unidad y por cuánto tiempo." },
  { id: 'cne-5', text: "Soporte a Balizado QR", desc: "Vinculación digital entre el vehículo físico y la plataforma." },
];

const siracpItems: ComplianceItem[] = [
  { id: 'sir-1', text: "API Abierta y Documentada", desc: "Capacidad de enviar datos sin intervención humana (System-to-System)." },
  { id: 'sir-2', text: "Seguridad y Cifrado (TLS 1.2)", desc: "Canales seguros para evitar intercepción de datos fiscales/operativos." },
  { id: 'sir-3', text: "Buffer de Memoria Local", desc: "La unidad guarda datos si pierde señal y los envía al reconectar." },
  { id: 'sir-4', text: "Estructura de Datos JSON", desc: "Formato estandarizado compatible con los webservices del SAT/CRE." },
  { id: 'sir-5', text: "Autenticación por Tokens", desc: "Accesos seguros y rotativos, no solo usuario/password estáticos." },
];

export const Compliance: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cne' | 'siracp'>('cne');
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});
  const [showGuide, setShowGuide] = useState(false);

  const currentItems = activeTab === 'cne' ? cneItems : siracpItems;
  
  const toggleItem = (id: string) => {
    setCheckedState(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const checkedCount = currentItems.filter(item => checkedState[item.id]).length;
  const totalItems = currentItems.length;
  const progress = (checkedCount / totalItems) * 100;

  const getStatusColor = () => {
    if (progress === 100) return 'text-green-600 bg-green-50 border-green-200';
    if (progress > 40) return 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return 'text-red-600 bg-red-50 border-red-200';
  };

  const getStatusMessage = () => {
    if (progress === 100) return 'Cumplimiento Total';
    if (progress > 40) return 'Cumplimiento Parcial';
    return 'Riesgo Operativo Alto';
  };

  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cumplimiento" className="py-20 px-5 bg-slate-50 border-y border-gray-200">
      <CNEGuide isOpen={showGuide} onClose={() => setShowGuide(false)} />
      
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Autodiagnóstico</div>
          <h2 className="text-3xl font-bold text-brand-accent mb-4">Auditoría Rápida de Cumplimiento</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Selecciona los puntos que tu operación actual ya cubre para ver tu nivel de preparación.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1.5 rounded-full border border-gray-200 shadow-sm inline-flex relative z-0">
            <button 
              onClick={() => setActiveTab('cne')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'cne' 
                ? 'bg-brand text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <ShieldCheck size={16} />
              Normativa CNE (Hoy)
            </button>
            <button 
              onClick={() => setActiveTab('siracp')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'siracp' 
                ? 'bg-brand-accent text-white shadow-md' 
                : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <RefreshCw size={16} />
              Futuro SIRACP
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-start">
          {/* Interactive List */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
             <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
               <h3 className="font-bold text-brand-accent text-lg">Lista de Verificación</h3>
               <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Click para marcar</span>
             </div>
             <div className="divide-y divide-gray-100">
               {currentItems.map((item) => {
                 const isChecked = !!checkedState[item.id];
                 return (
                   <button 
                     key={item.id}
                     onClick={() => toggleItem(item.id)}
                     className={`w-full text-left p-5 flex items-start gap-4 transition-colors hover:bg-slate-50 group ${isChecked ? 'bg-brand/5' : ''}`}
                   >
                     <div className={`mt-0.5 transition-colors duration-300 ${isChecked ? 'text-brand' : 'text-gray-300 group-hover:text-gray-400'}`}>
                       {isChecked ? <CheckCircle2 className="fill-brand/10" size={24} /> : <Circle size={24} />}
                     </div>
                     <div>
                       <div className={`font-bold text-sm mb-1 transition-colors ${isChecked ? 'text-brand-dark' : 'text-gray-700'}`}>
                         {item.text}
                       </div>
                       <p className="text-xs text-gray-400 leading-relaxed">
                         {item.desc}
                       </p>
                     </div>
                   </button>
                 );
               })}
             </div>
          </div>

          {/* Results Card (Sticky only on large screens) */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:sticky lg:top-24">
            <div className="text-center">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Tu estatus actual</div>
              
              {/* Donut Chart Simulation or Score */}
              <div className="relative w-32 h-32 mx-auto mb-6 flex items-center justify-center">
                 {/* Background Circle */}
                 <svg className="w-full h-full transform -rotate-90">
                   <circle
                     cx="64"
                     cy="64"
                     r="56"
                     stroke="currentColor"
                     strokeWidth="12"
                     fill="transparent"
                     className="text-gray-100"
                   />
                   {/* Progress Circle */}
                   <circle
                     cx="64"
                     cy="64"
                     r="56"
                     stroke="currentColor"
                     strokeWidth="12"
                     fill="transparent"
                     strokeDasharray={351} // 2 * PI * 56
                     strokeDashoffset={351 - (351 * progress) / 100}
                     strokeLinecap="round"
                     className={`transition-all duration-1000 ease-out ${
                       progress === 100 ? 'text-brand' : 
                       progress > 40 ? 'text-yellow-500' : 'text-red-500'
                     }`}
                   />
                 </svg>
                 <div className="absolute inset-0 flex flex-col items-center justify-center">
                   <span className="text-3xl font-extrabold text-brand-accent">{Math.round(progress)}%</span>
                 </div>
              </div>

              <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-6 border ${getStatusColor()}`}>
                {getStatusMessage()}
              </div>

              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                {progress === 100 
                  ? "¡Excelente! Tu operación está blindada. Asegúrate de mantener este estándar con auditorías periódicas."
                  : "Detectamos brechas importantes que podrían resultar en sanciones o problemas de integración futura."
                }
              </p>

              {progress < 100 && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 mb-6 text-left">
                  <div className="flex items-start gap-3">
                    <Lock className="text-brand shrink-0 mt-0.5" size={16} />
                    <div className="text-xs text-gray-600">
                      <span className="font-bold block text-brand-accent mb-1">Solución UBI-SMART:</span>
                      Cubrimos el {100 - Math.round(progress)}% restante automáticamente al migrar tu flota.
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <Button fullWidth onClick={scrollToContact}>
                  {progress === 100 ? 'Solicitar Auditoría Preventiva' : 'Cerrar brechas de cumplimiento'}
                </Button>
                
                <button 
                  onClick={() => setShowGuide(true)}
                  className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-500 hover:text-brand transition-colors"
                >
                   <BookOpen size={16} />
                   Leer Guía de Implementación
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};