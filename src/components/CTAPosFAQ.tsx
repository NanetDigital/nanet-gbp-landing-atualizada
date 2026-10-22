import React from 'react';
import { useCheckoutUrl } from '../utils/tracking';

export const CTAPosFAQ: React.FC = () => {
  const checkoutUrl = useCheckoutUrl();

  return (
    <section
      id="cta-fechamento"
      aria-label="Sua Análise Estratégica Completa"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F6F3EF] border-b border-neutral-300/70"
    >
      <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Card Único de Oferta Centralizado em Branco de Alto Contraste */}
        <div className="max-w-[440px] mx-auto bg-white border border-neutral-200/80 rounded-2xl p-7 sm:p-8 shadow-xl flex flex-col items-center text-center text-[#171717]">
          
          {/* 1. Título centralizado */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] font-sans">
            Sua Análise Estratégica Completa
          </h3>

          {/* 2. Valor de Referência */}
          <div className="text-xs sm:text-sm font-sans text-neutral-500 mt-2">
            De <span className="line-through decoration-red-500 font-bold text-[15px] sm:text-[16px] text-red-600">R$ 441</span> em entregas por apenas
          </div>

          {/* 3. Preço: R$ com mesma proporção, alinhamento e fonte */}
          <div className="mt-3 mb-1 flex justify-center">
            <div className="inline-flex items-start justify-center gap-[3px] leading-none">
              <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-neutral-800 select-none leading-none pt-2 sm:pt-2.5 lg:pt-3">
                R$
              </span>
              <span className="text-6xl sm:text-7xl lg:text-[80px] font-black text-[#171717] tracking-tight leading-none">
                97
              </span>
            </div>
          </div>

          {/* 4. Pagamento único / Investimento Único */}
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
            INVESTIMENTO ÚNICO
          </span>

          {/* 5. Botão verde largo */}
          <div className="w-full mt-6 flex flex-col items-center">
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                  (window as any).fbq('trackCustom', 'ClickCheckout');
                }
              }}
              className="w-full sm:w-[290px] inline-flex items-center justify-center min-h-[52px] sm:min-h-[50px] py-3.5 px-4 sm:px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[15px] max-[350px]:text-[14px] sm:text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-normal sm:whitespace-nowrap leading-snug sm:leading-normal"
            >
              QUERO RECEBER MINHA ANÁLISE
            </a>

            {/* 6. Linha discreta de segurança e garantia */}
            <p className="text-xs text-neutral-500 font-sans mt-3 flex items-center justify-center gap-1.5">
              <span>🔒 Pagamento seguro · 7 dias de garantia</span>
            </p>
          </div>

        </div>

        {/* Frase curta e discreta abaixo do card */}
        <p className="text-[13px] sm:text-sm text-neutral-600 font-sans mt-5 sm:mt-6 text-center max-w-[500px] mx-auto leading-relaxed sm:leading-normal px-2 sm:px-0">
          Entenda como sua empresa aparece nas buscas locais, conheça os pontos de atenção do seu Perfil do Google e descubra quais melhorias priorizar.
        </p>

      </div>
    </section>
  );
};
