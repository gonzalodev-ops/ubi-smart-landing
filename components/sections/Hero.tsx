import React from 'react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Map, Truck, FileText, Bell, Search, Menu, Navigation, AlertTriangle, CheckCircle2, Radio } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToFeatures = () => {
    // Llevamos al usuario a ver el "producto" (Mapa de calor) en lugar del formulario directo
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-24 px-5 overflow-hidden">
      {/* Ambient Background Mesh */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand/5 blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1.3fr] gap-16 items-center">
        
        {/* Left Content */}
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand-dark text-[10px] font-bold tracking-widest uppercase mb-6 border border-brand/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
            </span>
            Tecnología CNE Ready
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-accent leading-[1.1] mb-6">
            Control total de tu gasera,<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-dark">sin sorpresas.</span>
          </h1>
          
          <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-lg">
            GPS, telemetría y lectura de válvulas diseñados para cumplir con la CNE hoy y proteger tu margen operativo siempre.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <Badge strong>Cumplimiento CNE</Badge>
            <Badge>Integración SIRACP</Badge>
            <Badge>Anti-fraude Válvulas</Badge>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Button icon="play" className="shadow-xl shadow-brand/20" onClick={scrollToFeatures}>
              Conocer la plataforma
            </Button>
            <button onClick={scrollToContact} className="text-xs text-gray-500 pl-4 border-l border-gray-200 hover:text-brand-dark transition-colors text-left">
              <div className="font-bold text-brand-accent">¿Tienes prisa?</div>
              Solicitar diagnóstico directo
            </button>
          </div>
        </div>

        {/* Right: High Fidelity SaaS Mockup */}
        <div className="relative">
            {/* Glow effect behind the dashboard */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-brand/20 to-blue-600/20 rounded-[40px] blur-2xl opacity-60"></div>
            
            {/* The Dashboard Container */}
            <div className="relative bg-white rounded-[24px] shadow-2xl shadow-slate-200/50 border border-slate-200/60 overflow-hidden flex aspect-[16/10]">
              
              {/* Sidebar */}
              <div className="w-16 bg-brand-accent flex flex-col items-center py-6 gap-6 border-r border-slate-700">
                <div className="w-8 h-8 rounded-lg bg-brand flex items-center justify-center text-white font-bold text-xs mb-4">U</div>
                <div className="p-2 bg-white/10 rounded-lg text-white"><Map size={20} /></div>
                <div className="p-2 text-slate-400 hover:text-white transition-colors"><Truck size={20} /></div>
                <div className="p-2 text-slate-400 hover:text-white transition-colors"><FileText size={20} /></div>
                <div className="mt-auto p-2 text-slate-400"><Bell size={20} /></div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-slate-50">
                
                {/* Top Bar */}
                <div className="h-14 bg-white border-b border-slate-200 flex items-center justify-between px-6">
                  <div className="flex items-center gap-4 text-slate-400 text-sm">
                     <Menu size={18} />
                     <div className="flex items-center gap-2 bg-slate-100 px-3 py-1.5 rounded-full w-48">
                        <Search size={14} />
                        <span className="text-xs">Buscar unidad...</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 px-2 py-1 bg-green-50 border border-green-100 rounded-full">
                       <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                       <span className="text-[10px] font-bold text-green-700">CNE Conectado</span>
                    </div>
                    <div className="w-8 h-8 bg-slate-200 rounded-full"></div>
                  </div>
                </div>

                {/* Map View Simulation */}
                <div className="flex-1 relative overflow-hidden">
                   {/* Abstract Map Background */}
                   <div className="absolute inset-0 bg-[#e8ebed]">
                      {/* Streets (SVG Pattern) */}
                      <svg className="absolute w-full h-full opacity-30" width="100%" height="100%">
                        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#cbd5e1" strokeWidth="1"/>
                        </pattern>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        {/* Route Line */}
                        <path d="M 100 300 Q 250 100 400 250 T 700 200" fill="none" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round" strokeDasharray="8 4" />
                      </svg>
                   </div>

                   {/* Unit Pin 1 (Idle) */}
                   <div className="absolute top-[40%] left-[30%] transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer">
                      <div className="relative">
                         <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-white shadow-lg flex items-center justify-center text-white z-10 relative">
                            <Truck size={14} />
                         </div>
                         <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 px-2 py-0.5 bg-slate-800 text-white text-[10px] rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                            Unidad 204 (Detenido)
                         </div>
                      </div>
                   </div>

                   {/* Unit Pin 2 (Active Event) */}
                   <div className="absolute top-[35%] left-[60%] transform -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="relative">
                         <div className="absolute -inset-4 bg-brand/30 rounded-full animate-ping"></div>
                         <div className="absolute -inset-2 bg-brand/50 rounded-full"></div>
                         <div className="w-10 h-10 bg-brand rounded-full border-2 border-white shadow-xl flex items-center justify-center text-white relative z-10">
                            <Navigation size={18} className="transform rotate-45" />
                         </div>
                      </div>

                      {/* Floating Info Card (The "Magic") */}
                      <div className="absolute top-full left-1/2 ml-4 -mt-8 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-gray-100 w-64 animate-in fade-in slide-in-from-bottom-4 duration-700">
                         <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Evento detectado</span>
                            <span className="text-[10px] font-mono text-gray-400">12:42 PM</span>
                         </div>
                         <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 bg-orange-50 text-orange-500 rounded-lg">
                               <AlertTriangle size={18} />
                            </div>
                            <div>
                               <div className="font-bold text-gray-800 text-sm">Válvula Abierta</div>
                               <div className="text-[10px] text-gray-500">Unidad A-402 • En Ruta</div>
                            </div>
                         </div>
                         
                         {/* Mini Progress / Status */}
                         <div className="space-y-2">
                           <div className="flex justify-between text-[10px]">
                              <span className="text-gray-500">Geocerca Cliente</span>
                              <span className="text-green-600 font-bold flex items-center gap-1"><CheckCircle2 size={10}/> Coincide</span>
                           </div>
                           <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                              <div className="bg-brand h-full w-[85%] rounded-full"></div>
                           </div>
                           <div className="flex justify-between text-[10px] text-gray-400">
                              <span>Duración: 4m 12s</span>
                              <span>Vol: ~45L</span>
                           </div>
                         </div>
                      </div>
                   </div>

                   {/* SIRACP Status Overlay */}
                   <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-gray-200 shadow-sm flex items-center gap-3">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 uppercase">Estado SIRACP</span>
                        <span className="text-xs font-bold text-brand-accent flex items-center gap-1">
                          <Radio size={12} className="text-brand" />
                          Listo para integrar
                        </span>
                      </div>
                   </div>
                   
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};