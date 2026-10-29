import React from 'react';
import { useCheckoutUrl } from '../utils/tracking';

export const Hero: React.FC = () => {
  const checkoutUrl = useCheckoutUrl('https://pay.hotmart.com/V106938201T');

  const handleCheckoutClick = () => {
    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
      (window as any).fbq('trackCustom', 'ClickCheckout');
    }
  };

  return (
    <section
      id="hero"
      aria-label="Análise Estratégica da Empresa - Nanet Digital"
      className="w-full py-10 sm:py-12 lg:pt-7 lg:pb-10 xl:pt-8 xl:pb-12 bg-[#121318] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================================================ */}
        {/* FORMATO DESKTOP: Layout de duas colunas (>= 1024px)          */}
        {/* ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[55%_45%] xl:grid-cols-[56%_44%] gap-8 xl:gap-12 items-center">
          
          {/* COLUNA ESQUERDA (DESKTOP) */}
          <div className="flex flex-col justify-start space-y-3.5 xl:space-y-4 text-left">
            
            {/* 1. Identificação do público */}
            <div className="flex justify-start">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-xs font-mono font-bold text-[#4ade80] tracking-wider uppercase w-fit">
                PARA EMPRESAS COM PERFIL NO GOOGLE MEU NEGÓCIO
              </span>
            </div>

            {/* 2. Headline Principal */}
            <div>
              <h1 className="text-[32px] xl:text-[36px] font-bold tracking-tight text-white leading-[1.2] font-sans text-left">
                Clientes que procuram o que você vende no Google podem encontrar seu concorrente primeiro
              </h1>
            </div>

            {/* 3. Nova Subheadline */}
            <p className="text-[19px] xl:text-[20px] text-gray-300 font-sans leading-relaxed max-w-xl">
              Veja sua <strong className="font-bold text-white">posição diante dos concorrentes</strong> da sua região, conheça a <strong className="font-bold text-white">nota de saúde do seu Perfil do Google</strong>, de 0 a 100, e saiba <strong className="font-bold text-white">o que melhorar primeiro</strong>.
            </p>

            {/* 4. Nome da Oferta e Oferta Resumida (com divider ---) */}
            <div className="pt-3 border-t border-white/10 space-y-0.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
                ANÁLISE ESTRATÉGICA DA EMPRESA
              </span>
              <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                2 relatórios personalizados + 30 minutos com especialista
              </p>
            </div>

            {/* 5. Preço e Pagamento único */}
            <div className="text-left">
              <div className="flex items-baseline gap-2.5">
                <span className="text-3xl xl:text-[38px] font-black text-white tracking-tight font-sans leading-none">
                  R$ 97
                </span>
                <span className="text-xs font-sans text-neutral-400">
                  Pagamento único
                </span>
              </div>
            </div>

            {/* 6. Botão CTA */}
            <div className="w-full text-left">
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCheckoutClick}
                className="w-full sm:w-[320px] inline-flex items-center justify-center min-h-[50px] py-3.5 px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-normal leading-snug"
              >
                QUERO RECEBER MINHA ANÁLISE
              </a>
            </div>
          </div>

          {/* COLUNA DIREITA (DESKTOP) — Imagem Ilustrativa de Pesquisa no Google */}
          <div className="flex flex-col items-center justify-center">
            <div className="w-full max-w-[358px] md:max-w-[392px] lg:max-w-[395px] mx-auto flex items-center justify-center">
              <div className="w-full aspect-square drop-shadow-2xl flex items-center justify-center">
                <div className="hero-image-wrapper w-full h-full rounded-2xl overflow-hidden">
                  <img
                    src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_600/v1792609276/Design_sem_nome_9_dhkgb6.png"
                    srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1792609276/Design_sem_nome_9_dhkgb6.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_600/v1792609276/Design_sem_nome_9_dhkgb6.png 600w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1792609276/Design_sem_nome_9_dhkgb6.png 800w"
                    sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 420px"
                    alt="Pesquisa de empresa no Google Maps no celular"
                    width={500}
                    height={500}
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                    className="hero-image-el w-full h-full object-contain rounded-2xl block"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ============================================================ */}
        {/* FORMATO MOBILE: Apresentação Centralizada (< 1024px)         */}
        {/* ============================================================ */}
        <div className="block lg:hidden space-y-5 sm:space-y-6">
          
          {/* 1. IDENTIFICAÇÃO DO PÚBLICO CENTRALIZADA */}
          <div className="text-center">
            <span className="inline-flex items-center px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#16A34A]/20 border border-[#16A34A]/40 text-[11px] sm:text-xs font-mono font-bold text-[#4ade80] tracking-wider uppercase w-fit mx-auto">
              PARA EMPRESAS COM PERFIL NO GOOGLE MEU NEGÓCIO
            </span>
          </div>

          {/* 2. HEADLINE PRINCIPAL CENTRALIZADA */}
          <div className="text-center px-1">
            <h1 className="text-[25px] sm:text-[28px] font-bold tracking-tight text-white leading-[1.2] font-sans">
              Clientes que procuram o que você vende no Google podem encontrar seu concorrente primeiro
            </h1>
          </div>

          {/* 3. Nova Subheadline Centralizada */}
          <div className="text-center px-2 max-w-[440px] mx-auto">
            <p className="text-[18px] text-gray-300 font-sans leading-[1.45] sm:leading-relaxed">
              Veja sua <strong className="font-bold text-white">posição diante dos concorrentes</strong> da sua região, conheça a <strong className="font-bold text-white">nota de saúde do seu Perfil do Google</strong>, de 0 a 100, e saiba <strong className="font-bold text-white">o que melhorar primeiro</strong>.
            </p>
          </div>

          {/* 4. IMAGEM ILUSTRATIVA DO CELULAR */}
          <div className="w-full max-w-[358px] md:max-w-[392px] lg:max-w-[395px] mx-auto flex justify-center py-1">
            <div className="w-full aspect-square drop-shadow-xl flex items-center justify-center">
              <div className="hero-image-wrapper w-full h-full rounded-2xl overflow-hidden">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_600/v1792609276/Design_sem_nome_9_dhkgb6.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1792609276/Design_sem_nome_9_dhkgb6.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_600/v1792609276/Design_sem_nome_9_dhkgb6.png 600w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1792609276/Design_sem_nome_9_dhkgb6.png 800w"
                  sizes="(max-width: 640px) 300px, (max-width: 1024px) 340px, 420px"
                  alt="Pesquisa de empresa no Google Maps no celular"
                  width={500}
                  height={500}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="hero-image-el w-full h-full object-contain rounded-2xl block"
                />
              </div>
            </div>
          </div>

          {/* 5 e 6. NOME DA OFERTA E OFERTA RESUMIDA */}
          <div className="text-center max-w-[400px] mx-auto space-y-1 px-2 pt-3 border-t border-white/10">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-white block">
              ANÁLISE ESTRATÉGICA DA EMPRESA
            </span>
            <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
              2 relatórios personalizados + 30 minutos com especialista
            </p>
          </div>

          {/* 7, 8, 9 e 10. PREÇO, PAGAMENTO ÚNICO, BOTÃO CTA E TEXTO DE APOIO */}
          <div className="text-center max-w-[360px] mx-auto px-2 !mt-3.5 sm:!mt-4 space-y-3.5">
            {/* Bloco de Preço Centralizado em Coluna */}
            <div className="flex flex-col items-center justify-center">
              <span className="text-3xl sm:text-[36px] font-black text-white tracking-tight font-sans leading-none whitespace-nowrap">
                R$ 97
              </span>
              <span className="text-xs font-sans text-neutral-400 mt-1">
                Pagamento único
              </span>
            </div>

            {/* Botão CTA */}
            <a
              href={checkoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleCheckoutClick}
              className="w-full inline-flex items-center justify-center min-h-[50px] py-3.5 px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-normal leading-snug"
            >
              QUERO RECEBER MINHA ANÁLISE
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
