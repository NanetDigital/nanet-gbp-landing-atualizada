import React from 'react';
import { BrandLogo } from './BrandLogo';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="Análise Estratégica da Empresa - Nanet Digital"
      className="w-full pt-7 pb-10 sm:pt-8 sm:pb-12 lg:pt-8 lg:pb-10 xl:pt-9 xl:pb-12 bg-[#121318] border-b border-white/10 overflow-hidden"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* LOGO OFICIAL CENTRALIZADA DENTRO DA SEÇÃO ESCURA */}
        <div className="flex justify-center mb-6 sm:mb-7 lg:mb-8">
          <BrandLogo
            variant="light-text"
            eager
            className="w-[195px] sm:w-[225px] lg:w-[252px]"
          />
        </div>

        {/* ============================================================ */}
        {/* FORMATO DESKTOP: Layout de duas colunas (>= 1024px)          */}
        {/* ============================================================ */}
        <div className="hidden lg:grid lg:grid-cols-[55%_45%] xl:grid-cols-[56%_44%] gap-8 xl:gap-12 items-center">
          
          {/* COLUNA ESQUERDA (DESKTOP) */}
          <div className="flex flex-col justify-center space-y-4 xl:space-y-5 text-left">
            
            {/* 1. Headline Principal */}
            <div>
              <h1 className="text-[32px] xl:text-[36px] font-bold tracking-tight text-white leading-[1.2] font-sans text-left">
                Sua empresa pode estar perdendo clientes para concorrentes no Google
              </h1>
            </div>

            {/* 2. Subheadline */}
            <p className="text-[19px] xl:text-[20px] text-gray-300 font-sans leading-relaxed max-w-xl">
              Descubra o que melhorar no seu Google Meu Negócio para <strong className="font-bold text-white">aumentar sua visibilidade</strong>, <strong className="font-bold text-white">atrair mais clientes</strong> e <strong className="font-bold text-white">vender mais</strong>, sem depender de anúncios pagos
            </p>
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
        <div className="block lg:hidden space-y-6">
          
          <div className="space-y-3.5 sm:space-y-4">
            {/* 1. HEADLINE PRINCIPAL CENTRALIZADA */}
            <div className="text-center px-1">
              <h1 className="text-[25px] sm:text-[28px] font-bold tracking-tight text-white leading-[1.2] font-sans">
                Sua empresa pode estar perdendo clientes para concorrentes no Google
              </h1>
            </div>

            {/* 2. Subheadline Centralizada */}
            <div className="text-center px-2 max-w-[440px] mx-auto">
              <p className="text-[18px] text-gray-300 font-sans leading-[1.45] sm:leading-relaxed">
                Descubra o que melhorar no seu Google Meu Negócio para <strong className="font-bold text-white">aumentar sua visibilidade</strong>, <strong className="font-bold text-white">atrair mais clientes</strong> e <strong className="font-bold text-white">vender mais</strong>, sem depender de anúncios pagos
              </p>
            </div>
          </div>

          {/* 3. IMAGEM ILUSTRATIVA DO CELULAR */}
          <div className="w-full max-w-[358px] md:max-w-[392px] lg:max-w-[395px] mx-auto flex justify-center">
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

        </div>

      </div>
    </section>
  );
};
