import React from 'react';
import { CheckCircle2, Truck, MapPin, Users } from 'lucide-react';
//
export const Experience: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5">
        
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left Column: The Personal Narrative */}
          <div>
            <div className="inline-block px-3 py-1 bg-brand-accent text-white text-[10px] font-bold uppercase tracking-widest mb-6">
              Visión Operativa
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-accent mb-6 leading-tight">
              Nacido para cubrir la necesidad real de una gasera de Gas LP
            </h2>
            <div className="prose prose-gray text-gray-500 leading-relaxed">
              <p className="mb-4">
                Durante años, el corazón de UBI-SMART se fue construyendo para cubrir la necesidad real de una gasera de Gas LP: rutas que se caen a media mañana, clientes marcando porque “la pipa no ha llegado”, unidades sin señal y auditorías pidiendo explicaciones con un Excel en la mano.
              </p>
              <p className="mb-4">
                El proyecto arrancó justo ahí: en la operación de <strong>uno de los cuatro grupos de Gas LP más grandes del país</strong>, necesitando algo más que un mapa con puntitos y un reporte histórico que llega cuando el daño ya está hecho.
              </p>
              <p className="font-bold text-brand-accent mb-4">
                La pregunta era simple: ¿Cómo usamos el GPS para tomar decisiones hoy, antes de perder la ruta, el cliente y el margen?
              </p>
              <p>
                De esa experiencia nace UBI-SMART: una solución pensada para que el GPS deje de ser un gasto “para cumplir” y se convierta en una herramienta diaria para cumplir con la CNE, cuidar cada litro y reducir el riesgo en la calle.
              </p>
              <blockquote className="pl-4 border-l-4 border-brand text-brand-accent font-medium italic mt-8 mb-2">
                "El valor de la tecnología no está en la data acumulada, está en la decisión que tomas a las 10:00 a. m. para salvar la ruta del día."
              </blockquote>
              <div className="text-xs text-gray-400 pl-4 font-medium">
                Responsable de proyecto GPS en una de las cuatro gaseras más grandes del país
              </div>
            </div>
          </div>

          {/* Right Column: The Proof/Results */}
          <div className="bg-slate-50 rounded-3xl p-8 md:p-10 border border-gray-100">
            <h3 className="font-bold text-brand-accent text-lg mb-6">
              Experiencia probada en campo
            </h3>
            
            {/* Visual Stats Bar - NEW OPTIMIZATION */}
            <div className="grid grid-cols-3 gap-4 mb-8 border-b border-gray-200 pb-8">
               <div className="text-center">
                 <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mx-auto mb-2 text-brand">
                   <Truck size={20} />
                 </div>
                 <div className="font-bold text-xl text-brand-accent">+2,200</div>
                 <div className="text-[10px] uppercase font-bold text-gray-400">Unidades</div>
               </div>
               <div className="text-center">
                 <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mx-auto mb-2 text-brand">
                   <MapPin size={20} />
                 </div>
                 <div className="font-bold text-xl text-brand-accent">Nacional</div>
                 <div className="text-[10px] uppercase font-bold text-gray-400">Cobertura</div>
               </div>
               <div className="text-center">
                 <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-sm mx-auto mb-2 text-brand">
                   <Users size={20} />
                 </div>
                 <div className="font-bold text-xl text-brand-accent">TOP 4</div>
                 <div className="text-[10px] uppercase font-bold text-gray-400">Grupo Gasero</div>
               </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="text-brand" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Origen en necesidades operativas reales</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    UBI-SMART no nació en un laboratorio de software, sino para resolver problemas muy concretos de una gasera de escala nacional.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="text-brand" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Gaseras nacionales y regionales</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Autotanques, reparto urbano y unidades de supervisión conviven en la misma plataforma, respetando la lógica operativa de cada tipo de unidad.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 shrink-0">
                  <CheckCircle2 className="text-brand" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Cumplimiento, margen y riesgo</h4>
                  <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                    Acompañamos a las gaseras a cumplir el acuerdo de la CNE, prepararse para SIRACP y mejorar su margen. Generamos la evidencia que piden las aseguradoras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );