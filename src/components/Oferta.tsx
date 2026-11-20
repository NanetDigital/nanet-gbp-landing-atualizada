import React from 'react';
import { Check } from 'lucide-react';
import { PreCheckoutCard } from './PreCheckoutCard';

export interface OfertaProps {
  [key: string]: any;
}

const RECAP_ITEMS = [
  {
    label: 'Rank Local: mais visibilidade no Google',
    price: 'R$ 97,00',
  },
  {
    label: 'Saúde do Perfil: melhorias para atrair clientes',
    price: 'R$ 97,00',
  },
  {
    label: 'Orientação de 30 minutos: prioridades para vender mais',
    price: 'R$ 147,00',
  },
  {
    label: 'Checklist personalizado: melhorias na ordem certa',
    price: 'R$ 47,00',
  },
  {
    label: 'Comparação com concorrentes: veja quem aparece à frente',
    price: 'R$ 67,00',
  },
  {
    label: 'Grupo no WhatsApp: troca de experiências',
    price: 'R$ 47,00',
  },
];

export const Oferta: React.FC<OfertaProps> = () => {
  return (
    <section
      id="oferta"
      aria-label="Sua Análise Estratégica Completa"
      className="w-full py-14 sm:py-16 lg:py-20 bg-[#F5F5F5] border-b border-neutral-200/80"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================== */}
        {/* PARTE 1 — RECAPITULAÇÃO NO FORMATO VTSD                    */}
        {/* ========================================================== */}
        <div className="w-full">
          {/* Card Branco Principal Centralizado (~800px, cantos ~36px) */}
          <div className="max-w-[800px] mx-auto bg-white border border-neutral-200/90 rounded-[28px] sm:rounded-[36px] px-5 py-7 sm:px-10 sm:py-10 lg:px-12 lg:py-11 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
            <h2 className="text-center max-w-[660px] mx-auto text-[22px] sm:text-[27px] lg:text-[31px] font-bold tracking-tight text-[#171717] font-sans leading-[1.25]">
              Recapitulando tudo que você vai receber com a Análise Algoritmo Mais
            </h2>

            {/* 6 Linhas de Entregáveis sem bordas divisórias */}
            <ul className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4">
              {RECAP_ITEMS.map((item) => (
                <li
                  key={item.label}
                  className="flex items-start sm:items-center justify-between gap-3 sm:gap-6 text-left"
                >
                  <div className="flex items-start sm:items-center gap-2.5 sm:gap-3 min-w-0 flex-1">
                    <Check
                      className="w-[18px] h-[18px] sm:w-5 sm:h-5 text-[#16A34A] shrink-0 mt-0.5 sm:mt-0"
                      strokeWidth={2.75}
                      aria-hidden="true"
                    />
                    <span className="text-[15.5px] sm:text-[17px] lg:text-[18px] font-medium text-[#262626] font-sans leading-[1.4]">
                      {item.label}
                    </span>
                  </div>

                  <span className="shrink-0 whitespace-nowrap text-right text-[15.5px] sm:text-[17px] lg:text-[18px] font-bold text-[#DC2626] line-through decoration-[#DC2626] font-sans leading-[1.4] pt-0.5 sm:pt-0">
                    {item.price}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Faixa Branca do Valor Total */}
          <div className="mt-5 sm:mt-6 flex justify-center">
            <div className="inline-flex flex-wrap items-center justify-center gap-x-1.5 bg-white border border-neutral-200/90 rounded-2xl sm:rounded-full px-6 py-3 sm:px-9 sm:py-3.5 text-center shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
              <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#171717] font-sans leading-snug">
                Tudo isso deveria custar:{' '}
              </span>
              <span className="text-[16px] sm:text-[18px] lg:text-[20px] font-bold text-[#DC2626] line-through decoration-[#DC2626] font-sans leading-snug whitespace-nowrap">
                R$ 502,00
              </span>
            </div>
          </div>

          {/* Texto de Transição Centralizado */}
          <div className="text-center max-w-[740px] mx-auto mt-7 sm:mt-9 mb-8 sm:mb-11 px-1">
            <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#171717] font-sans tracking-tight leading-[1.3] m-0">
              Mas hoje você pode receber a Análise Algoritmo Mais por um valor muito mais acessível:
            </h3>
          </div>
        </div>

        {/* ========================================================== */}
        {/* PARTE 2 — PRÉ-CHECKOUT ÚNICO NO FORMATO VTSD               */}
        {/* ========================================================== */}
        <PreCheckoutCard />
      </div>
    </section>
  );
};

