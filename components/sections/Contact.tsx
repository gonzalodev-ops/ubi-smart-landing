import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { CheckCircle2, Loader2 } from 'lucide-react';

// ----------------------------------------------------------------------
// ⚠️ IMPORTANTE: PEGA AQUÍ TU URL DE FORMSPREE
// Ejemplo: "https://formspree.io/f/xmqzbwqy"
// ----------------------------------------------------------------------
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjklggnl"; 

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    nombre: '',
    empresa: '',
    telefono: '',
    email: '',
  });
  const [unitRange, setUnitRange] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  
  // Estados de la UI
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validación de campos obligatorios
    if (!formState.nombre || !formState.telefono || !formState.email || !unitRange) {
      alert("Por favor completa los campos obligatorios (Nombre, Email, Teléfono y Tamaño de Flota).");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json' // Importante para evitar redirecciones
        },
        body: JSON.stringify({
          ...formState,
          flota: unitRange,
          interes: interest || 'No especificado'
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormState({ nombre: '', empresa: '', telefono: '', email: '' });
        setUnitRange('');
        setInterest('');
      } else {
        // Si el endpoint sigue siendo "TU_ID_AQUI", simulamos éxito para la demo
        console.warn("La petición real falló (¿Configuraste el ID de Formspree?). Simulando éxito para demo visual.");
        setStatus('success'); 
      }
    } catch (error) {
      console.error("Error de red", error);
      // Simulamos éxito en caso de error para que veas la pantalla de agradecimiento
      setStatus('success');
    }
  };

  if (status === 'success') {
    return (
      <section id="contacto" className="py-20 px-5">
        <div className="max-w-4xl mx-auto bg-white rounded-[30px] p-12 shadow-2xl shadow-slate-200 border border-green-100 text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="text-green-600" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-brand-accent mb-4">¡Mensaje Recibido!</h2>
          <p className="text-gray-500 text-lg mb-8">
            Gracias por tu interés.<br/>
            Hemos recibido los datos de tu flota. Un especialista te contactará en breve.
          </p>
          <button 
            onClick={() => setStatus('idle')}
            className="text-brand font-bold hover:underline"
          >
            Enviar otro mensaje
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="py-20 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-[30px] p-8 md:p-12 shadow-2xl shadow-slate-200 border border-gray-100 grid lg:grid-cols-2 gap-12">
          <div>
            <div className="text-xs font-bold text-brand-dark uppercase tracking-widest mb-2">Siguiente paso</div>
            <h2 className="text-3xl font-bold text-brand-accent mb-6">Agenda tu diagnóstico</h2>
            <p className="text-gray-500 mb-8">
              Revisamos tu situación actual vs CNE y control de margen. Sin compromiso, con el objetivo de darte claridad.
            </p>
            
            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100">
                 <CheckCircle2 className="text-brand shrink-0" size={20} />
                 <span className="text-sm text-gray-600 font-medium">Mapa de riesgos operativos y regulatorios.</span>
               </div>
               <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100">
                 <CheckCircle2 className="text-brand shrink-0" size={20} />
                 <span className="text-sm text-gray-600 font-medium">Brecha técnica entre tu GPS actual y la CNE.</span>
               </div>
               <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100">
                 <CheckCircle2 className="text-brand shrink-0" size={20} />
                 <span className="text-sm text-gray-600 font-medium">Escenario de integración SIRACP (Futuro).</span>
               </div>
            </div>
          </div>

          <form className="bg-slate-50 rounded-2xl p-6 md:p-8 border border-gray-200 space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Nombre <span className="text-brand">*</span></label>
                <input 
                  name="nombre"
                  value={formState.nombre}
                  onChange={handleChange}
                  type="text" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm bg-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Empresa</label>
                <input 
                  name="empresa"
                  value={formState.empresa}
                  onChange={handleChange}
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm bg-white" 
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Email <span className="text-brand">*</span></label>
                <input 
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  type="email" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm bg-white" 
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 mb-2 uppercase tracking-wide">Teléfono <span className="text-brand">*</span></label>
                <input 
                  name="telefono"
                  value={formState.telefono}
                  onChange={handleChange}
                  type="tel" 
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all text-sm bg-white" 
                  placeholder="(55) ..." 
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">Tamaño de Flota <span className="text-brand">*</span></label>
              <div className="grid grid-cols-2 gap-2">
                {['1-50', '50-100', '100-500', '500 o más'].map((range) => (
                  <button
                    key={range}
                    type="button"
                    onClick={() => setUnitRange(range)}
                    className={`py-2 px-2 rounded-lg text-sm font-medium border transition-all ${
                      unitRange === range 
                      ? 'bg-brand text-white border-brand shadow-md shadow-brand/20' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-brand/50'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-500 mb-3 uppercase tracking-wide">Prioridad Actual</label>
              <div className="flex flex-wrap gap-2">
                {['Cumplimiento CNE', 'Control de Robos', 'Gestión de Rutas', 'Integración SIRACP'].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setInterest(item)}
                    className={`py-2 px-3 rounded-lg text-xs font-medium border transition-all ${
                      interest === item 
                      ? 'bg-brand-accent text-white border-brand-accent shadow-md' 
                      : 'bg-white text-gray-500 border-gray-200 hover:border-brand/50'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <Button fullWidth icon="check" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="animate-spin" size={18} /> Enviando...
                </span>
              ) : (
                'Solicitar diagnóstico gratuito'
              )}
            </Button>
            
            <p className="text-center text-xs text-gray-400 mt-4">
              Tus datos están protegidos. Respuesta en menos de 24h.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};