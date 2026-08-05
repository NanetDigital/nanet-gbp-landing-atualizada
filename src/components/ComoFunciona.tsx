import React from 'react';
import { ComoFuncionaData } from '../types/landing';
import { ClipboardList, Cpu, Presentation, FileText } from 'lucide-react';

export interface ComoFuncionaProps {
  data?: Partial<ComoFuncionaData>;
}

const defaultData: ComoFuncionaData = {
  tag: 'PASSO A PASSO',
  title: 'Como transformamos dados do Google em um plano de ação para sua empresa',
  description:
    'Em até 7 dias realizamos a análise completa da sua empresa e agendamos a Sessão Estratégica para apresentar todas as descobertas. Ao final da reunião, você recebe o Relatório Executivo em PDF.',
  steps: [
    {
      stepNumber: '01',
      title: 'Solicitação da análise',
      description:
        'Informe apenas o nome da empresa, cidade e segmento de atuação. A partir dessas informações iniciamos toda a coleta e processamento dos dados.',
      detail: 'Etapa 01',
    },
    {
      stepNumber: '02',
      title: 'Aplicação do Método Algoritmo+',
      description:
        'Nossa equipe realiza a análise utilizando o Método Algoritmo+, dados públicos e a API oficial do Google Business Profile, combinados com critérios próprios desenvolvidos pela Nanet para identificar oportunidades reais de crescimento.',
      detail: 'Etapa 02',
    },
    {
      stepNumber: '03',
      title: 'Sessão Estratégica Online',
      description:
        'Apresentamos todas as descobertas, explicamos os indicadores, mostramos onde estão as oportunidades e definimos quais ações devem ser priorizadas para gerar maior impacto.',
      detail: 'Etapa 03',
    },
    {
      stepNumber: '04',
      title: 'Entrega do Relatório Executivo',
      description:
        'Após a Sessão Estratégica, você recebe seu Relatório Executivo completo em PDF para consulta futura, compartilhamento com sua equipe e acompanhamento da implementação das melhorias recomendadas.',
      detail: 'Etapa 04',
    },
  ],
};

export const ComoFunciona: React.FC<ComoFuncionaProps> = ({ data = {} }) => {
  const cfData = { ...defaultData, ...data };

  return (
    <section
      id="como-funciona"
      className="w-full py-16 sm:py-24 lg:py-32 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">{cfData.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
            {cfData.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            {cfData.description}
          </p>
        </div>

        {/* 4 Cards Flow with subtle connecting line */}
        <div className="relative space-y-8 sm:space-y-12">
          {/* Connecting Line (Desktop) */}
          <div
            className="hidden sm:block absolute left-[39px] top-12 bottom-12 w-0.5 bg-neutral-200 dark:bg-neutral-800 z-0"
            aria-hidden="true"
          />

          {/* CARD 1 */}
          <div className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Step Number & Icon Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                  01
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <ClipboardList className="w-5 h-5 text-[#16A34A]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 flex-1 pt-0.5">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Solicitação da análise
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Informe apenas o nome da empresa, cidade e segmento de atuação. A partir dessas informações iniciamos toda a coleta e processamento dos dados.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Step Number & Icon Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                  02
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <Cpu className="w-5 h-5 text-[#16A34A]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 flex-1 pt-0.5">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Aplicação do Método Algoritmo+
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Nossa equipe realiza a análise utilizando o Método Algoritmo+, dados públicos e a API oficial do Google Business Profile, combinados com critérios próprios desenvolvidos pela Nanet para identificar oportunidades reais de crescimento.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Step Number & Icon Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                  03
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <Presentation className="w-5 h-5 text-[#16A34A]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 flex-1 pt-0.5">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Sessão Estratégica Online
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Apresentamos todas as descobertas, explicamos os indicadores, mostramos onde estão as oportunidades e definimos quais ações devem ser priorizadas para gerar maior impacto.
                </p>
              </div>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              {/* Step Number & Icon Badge */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                  04
                </div>
                <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                  <FileText className="w-5 h-5 text-[#16A34A]" />
                </div>
              </div>

              {/* Text Content */}
              <div className="space-y-2 flex-1 pt-0.5">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Entrega do Relatório Executivo
                </h3>
                <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Após a Sessão Estratégica, você recebe seu Relatório Executivo completo em PDF para consulta futura, compartilhamento com sua equipe e acompanhamento da implementação das melhorias recomendadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



