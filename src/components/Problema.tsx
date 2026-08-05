import React from 'react';
import { ProblemaData } from '../types/landing';

export interface ProblemaProps {
  data?: Partial<ProblemaData>;
}

const defaultData: ProblemaData = {
  tag: 'O PROBLEMA',
  title: 'Sua empresa pode estar perdendo oportunidades sem que você perceba.',
  description:
    'A maioria dos empresários acompanha apenas os resultados finais.\n\nMas as verdadeiras oportunidades normalmente estão escondidas em indicadores que quase ninguém analisa.',
  problems: [],
};

export const Problema: React.FC<ProblemaProps> = ({ data = {} }) => {
  const probData = { ...defaultData, ...data };

  return (
    <section
      id="problema"
      className="w-full py-16 sm:py-24 lg:py-32 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <span className="font-semibold uppercase tracking-wide">{probData.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
            {probData.title}
          </h2>

          <div className="space-y-2 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            <p>A maioria dos empresários acompanha apenas os resultados finais.</p>
            <p className="font-medium text-neutral-800 dark:text-neutral-200">
              Mas as verdadeiras oportunidades normalmente estão escondidas em indicadores que quase ninguém analisa.
            </p>
          </div>
        </div>

        {/* Blocos de Imagem */}
        <div className="space-y-16 sm:space-y-20">
          {/* BLOCO 1 - Análise de Saúde */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/v1785785662/Gemini_Generated_Image_dqm223dqm223dqm2_xejyis.png"
                alt="Análise de Saúde da Empresa"
                className="w-full md:w-[95%] lg:w-[91%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
            <p className="mt-6 text-center text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
              A pontuação geral mostra rapidamente quais áreas exigem atenção e quais já apresentam bom desempenho.
            </p>
          </div>

          {/* BLOCO 2 - Dashboard de Indicadores */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/v1785793152/Gemini_Generated_Image_yj7g7uyj7g7uyj7g_z5spgs.png"
                alt="Dashboard de Indicadores"
                className="w-full md:w-[96%] lg:w-[92%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
            <p className="mt-6 text-center text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
              Visualize os principais indicadores do seu negócio e descubra exatamente quais fatores precisam ser melhorados para aumentar sua visibilidade e conquistar mais clientes.
            </p>
          </div>

          {/* BLOCO 3 - Três Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {/* CARD 1 */}
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-sans">
                  Decisões baseadas em achismo
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Sem dados confiáveis, é difícil saber onde investir primeiro.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-sans">
                  Concorrentes avançando
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Enquanto você não mede, outras empresas continuam conquistando espaço.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="p-6 sm:p-8 bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl flex flex-col justify-between shadow-xs hover:shadow-sm transition-shadow">
              <div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-sans">
                  Prioridades pouco claras
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
                  Entender o cenário permite direcionar esforços para ações com maior potencial de impacto.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200/90 dark:border-neutral-800 shadow-sm">
          <p className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed">
            É exatamente para transformar dados em decisões que criamos a Análise Estratégica da Empresa.
          </p>
        </div>
      </div>
    </section>
  );
};



