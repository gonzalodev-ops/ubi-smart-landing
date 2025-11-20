import React, { useState } from 'react';
import { X, Lock, ArrowRight, Loader2, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { CNEPdfDocument } from './CNEPdfDocument';

interface CNEGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

// Endpoint
// de Formspree
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjklggnl"; 

export const CNEGuide: React.FC<CNEGuideProps> = ({ isOpen, onClose }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    phone: ''
  });

  if (!isOpen) return null;

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', phone: '' };

    // Regex simple para email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Ingresa un correo válido.';
      isValid = false;
    }

    // Validación simple de teléfono (10 dígitos)
    const phoneRegex = /^\d{10}$/;
    // Limpiar caracteres no numéricos para la validación
    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'El teléfono debe tener 10 dígitos.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

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
          origen: 'Descarga Guía CNE (PDF Real)',
          mensaje: `Lead cualificado descargó PDF. Empresa: ${formData.company}`
        })
      });
    } catch (error) {
      console.error("Error enviando lead", error);
    }

    // Simular pequeño delay y desbloquear
    setTimeout(() => {
        setIsSubmitting(false);
        setIsUnlocked(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-5">
       <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 relative animate-in zoom-in-95 duration-300">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X size={20} />
          </button>

          {!isUnlocked ? (
            <>
              <div className="w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mb-6 mx-auto">
                <Lock size={24} />
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-brand-accent mb-2">Desbloquear Guía CNE 2025</h3>
                <p className="text-sm text-gray-500">
                  Accede al manual técnico completo.<br/>
                  <strong>Formato PDF Profesional.</strong>
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
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Gasera / Empresa</label>
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
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">Email Profesional</label>
                  <input 
                    type="email" 
                    required
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand'}`}
                    placeholder="nombre@empresa.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-500 mb-1.5 uppercase">WhatsApp (10 Dígitos)</label>
                  <input 
                    type="tel" 
                    required
                    className={`w-full px-4 py-3 rounded-xl border outline-none text-sm ${errors.phone ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-brand'}`}
                    placeholder="442 123 4567"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>

                <Button fullWidth disabled={isSubmitting} className="mt-4">
                  {isSubmitting ? (
                     <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={16}/> Validando...</span>
                  ) : (
                     <span className="flex items-center gap-2">Generar PDF <ArrowRight size={16}/></span>
                  )}
                </Button>
              </form>
            </>
          ) : (
            <div className="text-center py-8">
               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto animate-in zoom-in duration-300">
                  <Download size={32} />
               </div>
               <h3 className="text-2xl font-bold text-brand-accent mb-2">¡Tu guía está lista!</h3>
               <p className="text-sm text-gray-500 mb-8">
                 Hemos personalizado el documento para <strong>{formData.company}</strong>.
               </p>
               
               <PDFDownloadLink 
                 document={<CNEPdfDocument name={formData.name} company={formData.company} />} 
                 fileName={`Guia_CNE_2025_${formData.company.replace(/\s+/g, '_')}.pdf`}
               >
                 {({ loading }) => (
                    <button 
                      disabled={loading}
                      className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-brand/30 transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                    >
                      {loading ? 'Preparando archivo...' : 'DESCARGAR PDF AHORA'}
                    </button>
                 )}
               </PDFDownloadLink>
               
               <button onClick={onClose} className="mt-6 text-sm text-gray-400 hover:text-gray-600 underline">
                 Cerrar ventana
               </button>
            </div>
          )}
       </div>
    </div>
  );
};