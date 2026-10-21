import React from 'react';
import { useCheckoutUrl } from '../utils/tracking';

export const Hero: React.FC = () => {
  const checkoutUrl = useCheckoutUrl('https://pay.hotmart.com/V106938201T');

  return (
    <section
      id="hero"
      className="w-full py-12 sm:py-14 lg:py-16 bg-[#121318] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[57%_1fr] gap-y-0 lg:gap-x-10 xl:gap-x-12 items-center">
          
          {/* Coluna Esquerda: Filtro -> Headline -> Subheadline -> Preço -> CTA */}
          <div className="flex flex-col justify-center space-y-3 sm:space-y-3.5 lg:space-y-4 max-w-[620px]">
            
            {/* 1. Filtro / Eyebrow */}
            <div className="flex justify-start">
              <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[11px] sm:text-xs font-mono font-bold text-[#4ade80] tracking-wider uppercase w-fit">
                PARA EMPRESAS COM PERFIL NO GOOGLE MEU NEGÓCIO
              </span>
            </div>

            {/* 2. Headline */}
            <div>
              <h1 className="text-[28px] sm:text-[34px] lg:text-[42px] xl:text-[44px] font-semibold tracking-tight text-white leading-[1.12] lg:leading-[1.14] font-sans text-left">
                O pior não é faltar cliente. É ter cliente procurando pelo que você vende e{' '}
                <strong className="font-bold text-white">comprar do seu concorrente primeiro.</strong>
              </h1>
            </div>

            {/* 3. Subheadline */}
            <p className="text-base sm:text-[17px] text-gray-300 font-normal leading-relaxed font-sans text-left max-w-[560px]">
              Descubra como sua empresa aparece no Google, quais concorrentes estão na sua frente e{' '}
              <strong className="font-semibold text-white">o que ajustar para atrair mais clientes.</strong>
            </p>

            {/* 4. Preço */}
            <div className="text-left pt-0.5">
              <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold block">
                INVESTIMENTO ÚNICO
              </span>
              <div className="mt-0.5 flex items-baseline">
                <span className="text-3xl sm:text-[38px] lg:text-[40px] font-black text-white tracking-tight font-sans leading-none">
                  R$ 97
                </span>
              </div>
            </div>

            {/* 5. CTA */}
            <div className="w-full text-left pt-0.5 sm:pt-1">
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
                QUERO ATRAIR MAIS CLIENTES
              </a>
            </div>

          </div>

          {/* Coluna Direita: Imagem Original Restaurada */}
          <div className="w-full flex items-center justify-center self-center mt-[26px] sm:mt-7 lg:mt-0 mb-0">
            <div className="w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[440px] xl:max-w-[460px] overflow-hidden rounded-2xl border border-white/10 shadow-lg bg-[#1A1D24] mx-auto">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1791294877/Customer_searching_local_busines__20260923152333_dgf4fi.jpg"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791294877/Customer_searching_local_busines__20260923152333_dgf4fi.jpg 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1791294877/Customer_searching_local_busines__20260923152333_dgf4fi.jpg 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1791294877/Customer_searching_local_busines__20260923152333_dgf4fi.jpg 1000w"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 460px"
                alt="Clientes pesquisando empresas locais no Google"
                width={500}
                height={500}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="w-full h-auto object-cover rounded-2xl block"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

