import React from 'react';
import { X, Check } from 'lucide-react';

const ANTES_ITEMS = [
  'Não sabe onde sua empresa aparece nas buscas locais.',
  'Não sabe como se compara aos concorrentes.',
  'Não sabe quais pontos do perfil precisam de atenção.',
  'Perde tempo fazendo ajustes sem saber o que priorizar.',
];

const DEPOIS_ITEMS = [
  {
    bold: 'Veja onde sua empresa aparece',
    rest: ' para uma busca local analisada.',
  },
  {
    bold: 'Compare sua posição',
    rest: ' com a dos concorrentes da região.',
  },
  {
    bold: 'Descubra o que precisa melhorar',
    rest: ' com uma avaliação de 20 critérios.',
  },
  {
    bold: 'Saiba o que priorizar primeiro',
    rest: ' com checklist e orientação de um especialista.',
  },
];

export const AntesDepois: React.FC = () => {
  return (
    <section
      id="antes-depois"
      aria-label="Antes e Depois da Análise Estratégica"
      className="w-full pt-10 sm:pt-14 lg:pt-16 pb-16 sm:pb-20 lg:pb-24 bg-[#F6F3EF] border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline definitiva sem subtítulo */}
        <div className="text-center max-w-[880px] mx-auto mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-[24px] lg:text-[32px] font-bold tracking-tight font-sans leading-[1.25]">
            <span className="text-[#171717]">Pare de perder tempo no escuro. </span>
            <span className="text-[#16A34A]">Saiba o que melhorar no seu Perfil da Empresa no Google.</span>
          </h2>
        </div>

        {/* Grade comparativa ANTES × DEPOIS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* CARD ANTES */}
          <div className="bg-white border border-neutral-200/90 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#DC2626] font-sans uppercase mb-6 sm:mb-8">
                ANTES
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {ANTES_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-[#DC2626]" strokeWidth={3} />
                    </div>
                    <span className="text-[17px] sm:text-[18px] text-[#262626] font-sans leading-[1.5]">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CARD DEPOIS */}
          <div className="bg-[#121318] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#4ADE80] font-sans uppercase mb-6 sm:mb-8">
                DEPOIS
              </h3>
              <ul className="space-y-4 sm:space-y-5">
                {DEPOIS_ITEMS.map((item, index) => (
                  <li key={index} className="flex items-start gap-3.5 sm:gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#16A34A]/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#4ADE80]" strokeWidth={3} />
                    </div>
                    <span className="text-[17px] sm:text-[18px] text-neutral-100 font-sans leading-[1.5]">
                      <strong className="font-bold text-white">{item.bold}</strong>
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
