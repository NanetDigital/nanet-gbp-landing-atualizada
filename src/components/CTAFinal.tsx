import React from 'react';
import { CTAFinalData } from '../types/landing';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export interface CTAFinalProps {
  data?: Partial<CTAFinalData>;
}

const defaultData: CTAFinalData = {
  tag: 'DECISÃO ESTRATÉGICA',
  title: 'Sua empresa pode estar mais perto de conquistar novos clientes do que você imagina.',
  subtitle: 'Descubra primeiro onde estão as oportunidades. Depois decida onde investir.',
  ctaText: 'Quero receber minha análise estratégica',
  reassuranceNote: 'Análise Estratégica + Sessão Individual • Garantia de 7 dias',
};

export const CTAFinal: React.FC<CTAFinalProps> = ({ data = {} }) => {
  const ctaData = { ...defaultData, ...data };

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
        <div className="mt-10 max-w-md mx-auto">
          <a
            href="https://pay.hotmart.com/V106938201T"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'InitiateCheckout');
              }
            }}
            className="w-full py-4 px-8 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-sm sm:text-base font-bold transition-all shadow-md hover:shadow-lg cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{ctaData.ctaText}</span>
            <ArrowRight className="w-4 h-4" />
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


