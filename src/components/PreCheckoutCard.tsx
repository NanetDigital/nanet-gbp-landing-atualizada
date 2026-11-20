import React from 'react';
import { Lock, ShieldCheck, BadgeCheck } from 'lucide-react';
import { useCheckoutUrl } from '../utils/tracking';
import { BrandLogo } from './BrandLogo';

export const PreCheckoutCard: React.FC = () => {
  const checkoutUrl = useCheckoutUrl();

  return (
    <div className="max-w-[1025px] mx-auto bg-white border border-neutral-200/90 rounded-[24px] p-5 sm:p-6 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
      <div className="grid grid-cols-1 md:grid-cols-[54fr_46fr] gap-6 md:gap-8 lg:gap-10 items-center">
        {/* COLUNA ESQUERDA: Nova composição digital da Nanet */}
        <div className="w-full flex items-center justify-center">
          <img
            src="https://res.cloudinary.com/nds7zozp/image/upload/v1795149108/Redistribuir_dispositivos_capa_f__a1f2751b_djglkc.jpg"
            alt="Análise Algoritmo Mais - Notebook, tablet, monitor do Google Meet e smartphone"
            width={1200}
            height={896}
            className="w-full h-auto aspect-[4/3] object-cover object-center rounded-[14px] block"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* COLUNA DIREITA: Identidade, Divisória, Preço, Divisória, Botão e Confiança */}
        <div className="w-full flex flex-col items-center text-center py-1 md:py-2">
          {/* Identidade do Produto (logo oficial completa, sem texto duplicado) */}
          <BrandLogo
            variant="dark-text"
            className="w-[225px] sm:w-[250px] md:w-[260px] lg:w-[272px]"
          />

          {/* Primeira Divisória */}
          <div className="w-full max-w-[360px] h-px bg-neutral-200/90 my-4 sm:my-5" />

          {/* Ancoragem de Preço no formato VTSD */}
          <div className="flex flex-col items-center">
            <span className="text-[32px] sm:text-[36px] md:text-[38px] lg:text-[42px] font-bold text-[#16A34A] tracking-tight leading-none font-sans whitespace-nowrap">
              7x de R$ 15,86
            </span>
            <span className="mt-1.5 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#171717] tracking-tight leading-snug font-sans whitespace-nowrap">
              ou R$ 97,00 à vista
            </span>
          </div>

          {/* Segunda Divisória */}
          <div className="w-full max-w-[360px] h-px bg-neutral-200/90 my-4 sm:my-5" />

          {/* Botão Principal */}
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                (window as any).fbq('trackCustom', 'ClickCheckout');
              }
            }}
            className="w-full max-w-[280px] sm:w-auto sm:min-w-[235px] min-h-[52px] inline-flex items-center justify-center py-3.5 px-8 sm:px-10 rounded-[14px] bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[15px] sm:text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-nowrap leading-none"
          >
            EU QUERO A MINHA
          </a>

          {/* Três informações discretas abaixo do botão */}
          <div className="mt-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-x-3.5 gap-y-1.5 text-[11.5px] sm:text-[12px] text-[#525252] font-sans font-medium">
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <Lock className="w-3.5 h-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
              <span>Compra segura</span>
            </span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
              <span>Pagamento Hotmart</span>
            </span>
            <span className="inline-flex items-center gap-1 whitespace-nowrap">
              <BadgeCheck className="w-3.5 h-3.5 text-neutral-500 shrink-0" aria-hidden="true" />
              <span>Garantia de 7 dias</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
