import React, { useState } from 'react';

const sections = [
  { id: 'hero', name: '1. Hero' },
  { id: 'oportunidade', name: '2. Oportunidade' },
  { id: 'problema', name: '3. Problema' },
  { id: 'solucao', name: '4. Solução' },
  { id: 'como-funciona', name: '5. Como Funciona' },
  { id: 'o-que-voce-recebe', name: '6. O que Você Recebe' },
  { id: 'provas', name: '7. Provas' },
  { id: 'oferta', name: '8. Oferta' },
  { id: 'faq', name: '9. FAQ' },
  { id: 'cta-final', name: '10. CTA Final' },
  { id: 'rodape', name: '11. Rodapé' },
];

export const StructureInspector: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed bottom-4 right-4 z-50 font-mono text-xs">
      <div className="bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 border border-neutral-700 dark:border-neutral-300 rounded-xl p-3 shadow-xl max-w-xs">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="font-bold text-[11px] uppercase tracking-wider">
              Arquitetura Wireframe
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-2 py-0.5 rounded bg-neutral-800 dark:bg-neutral-200 text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black font-semibold text-[10px]"
          >
            {isExpanded ? 'Ocultar NAVEGAÇÃO' : 'VER 11 SEÇÕES'}
          </button>
        </div>

        {isExpanded && (
          <div className="mt-3 pt-3 border-t border-neutral-800 dark:border-neutral-200 space-y-1 max-h-60 overflow-y-auto">
            <div className="text-[10px] text-neutral-400 mb-2">
              Clique para navegar diretamente entre as seções:
            </div>
            {sections.map((sec) => (
              <button
                key={sec.id}
                type="button"
                onClick={() => scrollTo(sec.id)}
                className="w-full text-left px-2 py-1 rounded hover:bg-neutral-800 dark:hover:bg-neutral-200 text-neutral-300 dark:text-neutral-700 hover:text-white dark:hover:text-black transition-none block text-[11px]"
              >
                {sec.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </aside>
  );
};
