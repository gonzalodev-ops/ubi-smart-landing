import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../../types';

const faqs: FaqItem[] = [
  {
    question: "¿Qué exige el acuerdo de la CNE respecto al GPS?",
    answer: "Exige GPS activo, trazabilidad de rutas y capacidad de compartir información confiable con la autoridad. UBI-SMART cumple con hardware y plataforma."
  },
  {
    question: "¿Cómo ayuda UBI-SMART con SIRACP?",
    answer: "Utilizamos GPS 4G y API abierta para enviar datos estructurados, facilitando la integración futura sin cambiar de proveedor."
  },
  {
    question: "¿Qué pasa si ya tengo otro proveedor?",
    answer: "Hacemos un diagnóstico para ver si conviene migrar o integrar. El objetivo es cumplir la normativa con el menor costo de cambio."
  },
  {
    question: "¿En cuánto tiempo se implementa?",
    answer: "Depende del tamaño de la flota. Planeamos despliegues por fases para cubrir unidades críticas en semanas."
  },
  {
    question: "¿Qué unidades se pueden integrar?",
    answer: "Autotanques, camionetas de reparto y vehículos de supervisión. El kit se ajusta al rol de la unidad."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-20 px-5 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Preguntas Frecuentes</div>
          <h2 className="text-3xl font-bold text-brand-accent mb-4">Dudas de directores</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-brand-accent text-sm md:text-base">{faq.question}</span>
                {openIndex === idx ? <ChevronUp className="text-brand" size={20}/> : <ChevronDown className="text-gray-400" size={20}/>}
              </button>
              
              <div className={`px-6 transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 py-4 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};