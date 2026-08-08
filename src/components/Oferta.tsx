import React from 'react';
import { OfertaData } from '../types/landing';
import { ShieldCheck, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export interface OfertaProps {
  data?: Partial<OfertaData>;
}

const defaultData: OfertaData = {
  tag: 'OFERTA ESPECIAL',
  title: 'Descubra onde sua empresa pode estar perdendo clientes.',
  subtitle:
    'Receba uma Análise Estratégica personalizada, participe de uma Sessão Estratégica individual e saiba exatamente quais ações priorizar para conquistar mais clientes.',
  packageName: 'Análise Estratégica da Empresa',
  anchorPrice: 'De: R$297',
  currentPrice: 'Por: R$147',
  paymentDetails: 'Pagamento único • Acesso imediato ao formulário',
  features: [
    { id: 'f-1', text: 'Aplicação do Método Algoritmo+' },
    { id: 'f-2', text: 'Diagnóstico Estratégico personalizado' },
    { id: 'f-3', text: 'Plano de Ação priorizado' },
    { id: 'f-4', text: 'Sessão Estratégica Individual' },
    { id: 'f-5', text: 'Análise e Sessão entregues em até 7 dias' },
    { id: 'f-6', text: 'Garantia de 7 dias' },
  ],
  guaranteeBadge: 'Garantia de 7 dias',
  ctaText: 'Quero receber minha análise estratégica',
  disclaimer: 'Pagamento 100% seguro e ambiente criptografado',
};

export const Oferta: React.FC<OfertaProps> = ({ data = {} }) => {
  const ofData = { ...defaultData, ...data };
  const features = ofData.features && ofData.features.length > 0 ? ofData.features : defaultData.features;

  return (
    <section
      id="oferta"
      className="w-full py-16 sm:py-24 md:py-32 bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">{ofData.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-tight">
            {ofData.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed font-sans">
            {ofData.subtitle}
          </p>
        </div>

        {/* Premium Offer Box */}
        <div className="bg-white dark:bg-neutral-950 border border-neutral-300 dark:border-neutral-800 rounded-3xl p-8 sm:p-12 text-center relative shadow-lg">
          {/* Package Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 text-[#16A34A] text-xs font-mono font-bold mb-8">
            <CheckCircle2 className="w-4 h-4" />
            <span>{ofData.packageName}</span>
          </div>

          {/* Highlights Box */}
          <div className="text-left max-w-md mx-auto space-y-3.5 bg-neutral-50 dark:bg-neutral-900/60 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 mb-8">
            {features.map((feat) => (
              <div key={feat.id} className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                <span className="text-sm font-semibold font-sans text-neutral-800 dark:text-neutral-200">
                  {feat.text}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Stack */}
          <div className="mb-8">
            <span className="block text-sm sm:text-base font-mono text-neutral-400 line-through mb-1 font-semibold">
              {ofData.anchorPrice}
            </span>
            <span className="block text-4xl sm:text-6xl font-extrabold font-mono text-neutral-900 dark:text-neutral-100 tracking-tight">
              {ofData.currentPrice}
            </span>
            <span className="block text-xs font-mono text-neutral-500 mt-2">
              {ofData.paymentDetails}
            </span>
          </div>

          {/* CTA Button */}
          <div className="max-w-md mx-auto">
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
              <span>{ofData.ctaText}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Post-purchase details */}
            <div className="mt-6 text-left p-4 bg-neutral-50 dark:bg-neutral-900/40 rounded-xl border border-neutral-200/80 dark:border-neutral-800 space-y-1.5 text-xs font-sans text-neutral-600 dark:text-neutral-400">
              <span className="block font-mono font-bold text-neutral-800 dark:text-neutral-200 mb-1">
                Após a confirmação da compra:
              </span>
              <p>• Você preenche o formulário da empresa.</p>
              <p>• Agenda sua Sessão Estratégica.</p>
              <p>• Nossa equipe inicia a preparação da sua análise.</p>
            </div>
          </div>
        </div>

        {/* Garantia Section Block */}
        <div className="mt-12 p-8 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-3xl flex flex-col sm:flex-row items-center gap-6 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-8 h-8 text-[#16A34A]" />
          </div>
          <div className="text-center sm:text-left space-y-2">
            <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 font-sans">
              Garantia de 7 dias
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
              Se você entender que a Análise Estratégica não faz sentido para sua empresa, basta solicitar o cancelamento dentro do prazo de 7 dias e devolveremos 100% do valor pago.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


