import React from 'react';
import { CTAFinalData } from '../types/landing';
import { ShieldCheck } from 'lucide-react';
import { useCheckoutUrl } from '../utils/tracking';

export interface CTAFinalProps {
  data?: Partial<CTAFinalData>;
}

const defaultData: CTAFinalData = {
  tag: 'DECISÃO ESTRATÉGICA',
  title: 'Sua empresa pode estar mais perto de conquistar novos clientes do que você imagina.',
  subtitle: 'Descubra primeiro onde estão as oportunidades. Depois decida onde investir.',
  ctaText: 'EU QUERO A MINHA',
  reassuranceNote: 'Análise Estratégica + Orientação Prática com Especialista • Garantia de 7 dias',
};

export const CTAFinal: React.FC<CTAFinalProps> = ({ data = {} }) => {
  const ctaData = { ...defaultData, ...data };
  const checkoutUrl = useCheckoutUrl();

  return (
    <section
      id="cta-final"
      className="w-full py-20 sm:py-28 bg-neutral-900 dark:bg-neutral-950 text-white border-b border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-xs font-mono text-neutral-300 mb-6 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
          <span className="font-semibold uppercase tracking-wide">{ctaData.tag}</span>
        </div>

        {/* Title / Headline */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight font-sans">
          {ctaData.title}
        </h2>

        {/* Subtitle / Text */}
        <div className="mt-6 text-base sm:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed font-sans space-y-1">
          <p>Descubra primeiro onde estão as oportunidades.</p>
          <p className="font-semibold text-white">Depois decida onde investir.</p>
        </div>

        {/* CTA Button */}
        <div className="mt-10 flex justify-center">
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
            {ctaData.ctaText}
          </a>
        </div>

        {/* Reassurance */}
        <div className="mt-6 flex items-center justify-center gap-2 text-xs font-mono text-neutral-400">
          <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
          <span>{ctaData.reassuranceNote}</span>
        </div>
      </div>
    </section>
  );
};


