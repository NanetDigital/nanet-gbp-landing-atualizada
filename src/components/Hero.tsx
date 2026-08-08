import React from 'react';
import { HeroData } from '../types/landing';
import { useCheckoutUrl } from '../utils/tracking';

export interface HeroProps {
  data?: Partial<HeroData>;
}

const defaultHeroData: HeroData = {
  badge: 'ANÁLISE ESTRATÉGICA DA EMPRESA',
  headline: 'Todos os dias existem clientes em potencial pesquisando no Google exatamente pelo que sua empresa vende.',
  subheadline:
    'As oportunidades já existem nas pesquisas. A questão é se a sua empresa está visível no exato momento em que essa busca é realizada.',
  primaryCta: 'Quero receber minha análise estratégica',
  secondaryCta: '',
  mockupPlaceholder: 'Relatório da Análise Estratégica da Empresa',
  socialProofNote: 'Empresas locais já utilizam o Método Algoritmo+ para aumentar oportunidades através do Google.',
};

export const Hero: React.FC<HeroProps> = ({ data = {} }) => {
  const heroData: HeroData = { ...defaultHeroData, ...data };
  const checkoutUrl = useCheckoutUrl();

  return (
    <section
      id="hero"
      className="w-full pt-16 sm:pt-20 lg:pt-24 pb-12 sm:pb-20 lg:pb-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Coluna Esquerda (~55% da largura) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Identidade da Marca integrada ao Hero (Substitui o Header) */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-2">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_300/v1785814782/Design_sem_nome_3_esxy36.png"
                alt="Nanet Logo"
                width={130}
                height={35}
                decoding="async"
                className="w-[105px] sm:w-[120px] lg:w-[130px] h-auto object-contain block"
              />
              <p className="mt-3 text-xs sm:text-sm font-mono text-neutral-500 dark:text-neutral-400 tracking-wide font-medium">
                Especialistas em Google Business Profile
              </p>
            </div>

            {/* 1. Badge Discreta e Premium */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs font-mono font-medium text-neutral-700 dark:text-neutral-300 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse"></span>
                <span className="tracking-wide uppercase font-semibold">{heroData.badge}</span>
              </div>
            </div>

            {/* 2. Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 leading-[1.15] font-sans">
              {heroData.headline}
            </h1>

            {/* 3. Subheadline */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed font-sans max-w-2xl mx-auto lg:mx-0">
              {heroData.subheadline}
            </p>

            {/* 4. Botão Principal & 5. Três Bullets de Benefícios & 6. Micro Prova Social */}
            <div className="pt-2 space-y-5">
              <div>
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                      (window as any).fbq('track', 'InitiateCheckout');
                    }
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center h-[56px] px-8 sm:px-10 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-base font-semibold border border-[#16A34A] transition-all duration-250 ease-out hover:-translate-y-[2px] shadow-sm hover:shadow-md active:translate-y-0 cursor-pointer"
                >
                  {heroData.primaryCta}
                </a>
              </div>

              {/* Três Bullets de Benefícios */}
              <div className="flex flex-col sm:flex-row lg:flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-xs sm:text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300">
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[#16A34A] font-bold font-mono">✓</span> Diagnóstico baseado em dados reais do Google
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[#16A34A] font-bold font-mono">✓</span> Sessão Estratégica individual
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="text-[#16A34A] font-bold font-mono">✓</span> Plano de ação personalizado para sua empresa
                </span>
              </div>

              {/* Micro Prova Social Discreta */}
              <div className="pt-1">
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans italic">
                  {heroData.socialProofNote}
                </p>
              </div>
            </div>
          </div>

          {/* Coluna Direita com Brilho Discreto e Selo no Mockup */}
          <div className="lg:col-span-5 flex items-center justify-center w-[88%] lg:w-full mx-auto relative group">
            {/* Brilho sutil atrás do mockup */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#16A34A]/20 via-[#16A34A]/10 to-transparent blur-2xl rounded-3xl opacity-75 pointer-events-none -z-10" />

            <div className="relative w-full rounded-2xl overflow-hidden shadow-md border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
              {/* Selo discreto no mockup */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 px-2.5 py-1 rounded-md bg-neutral-900/90 text-white border border-neutral-700/80 text-[10px] sm:text-[11px] font-mono tracking-wider font-semibold uppercase shadow-xs backdrop-blur-xs">
                RELATÓRIO PERSONALIZADO
              </div>

              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785767365/Report_refinement_instructions_2K_202608021538_yjdhkd.jpg"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1785767365/Report_refinement_instructions_2K_202608021538_yjdhkd.jpg 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_768/v1785767365/Report_refinement_instructions_2K_202608021538_yjdhkd.jpg 768w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1024/v1785767365/Report_refinement_instructions_2K_202608021538_yjdhkd.jpg 1024w"
                sizes="(max-width: 768px) 88vw, 500px"
                alt="Análise Estratégica da Empresa - Relatório Executivo"
                width={600}
                height={450}
                fetchPriority="high"
                decoding="sync"
                className="w-full h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};




