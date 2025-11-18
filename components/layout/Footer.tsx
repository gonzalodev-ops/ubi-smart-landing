import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-5 text-xs text-gray-500">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          © {new Date().getFullYear()} UBI-SMART Gas LP · Soluciones Ubiqo
        </div>
        <div className="flex gap-6">
          <span>Cumplimiento CNE / SIRACP</span>
          <span>Control Operativo</span>
          <span>Protección de Margen</span>
        </div>
      </div>
    </footer>
  );
};