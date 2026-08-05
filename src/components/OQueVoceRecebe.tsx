import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface CardItem {
  id: string;
  image: string;
  title: string;
  description: string;
}

const cardsData: CardItem[] = [
  {
    id: 'card-1',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/v1785768000/5_osvsye.png',
    title: 'Descubra onde existem clientes procurando seu serviço',
    description:
      'Visualize as regiões com maior demanda e identifique onde sua empresa possui mais oportunidades para conquistar novos clientes.',
  },
  {
    id: 'card-2',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/v1785780207/Ranking_of_GTR_EBIKES_Mobilidade_Eletrica_on_Google_2.pdf_nu8uew.png',
    title: 'Compare sua empresa com os concorrentes',
    description:
      'Veja quem aparece primeiro nas pesquisas, onde você está perdendo espaço e quais oportunidades podem ser aproveitadas.',
  },
  {
    id: 'card-3',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/v1785785662/Gemini_Generated_Image_dqm223dqm223dqm2_xejyis.png',
    title: 'Entenda sua posição no mercado',
    description:
      'Visualize como sua empresa está distribuída em relação aos concorrentes e identifique regiões estratégicas.',
  },
  {
    id: 'card-4',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/v1785793152/Gemini_Generated_Image_yj7g7uyj7g7uyj7g_z5spgs.png',
    title: 'Descubra onde estão suas maiores oportunidades',
    description:
      'Receba um diagnóstico claro mostrando quais fatores precisam ser melhorados para aumentar sua geração de clientes.',
  },
];

export const OQueVoceRecebe: React.FC = () => {
  return (
    <section
      id="o-que-voce-recebe"
      className="w-full py-16 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">ENTREGÁVEIS DA ANÁLISE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
            Tudo o que você recebe na sua Análise Estratégica
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            Você recebe um diagnóstico completo, uma análise estratégica personalizada e um plano claro para conquistar mais clientes utilizando dados oficiais do Google.
          </p>
        </div>

        {/* 4 Cards Grid (Desktop: 2 Columns, 2 Rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all flex flex-col h-full"
            >
              <div className="flex flex-col h-full space-y-6">
                {/* Print Real / Imagem do Relatório */}
                <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-3 sm:p-4 flex items-center justify-center">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[80%] h-auto max-h-[260px] sm:max-h-[300px] object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                  />
                </div>

                {/* Content */}
                <div className="space-y-2 flex-1 flex flex-col justify-start">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    {card.title}
                  </h3>
                  <p className="text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bloco Final de Destaque */}
        <div className="mt-16 sm:mt-20 p-8 sm:p-12 rounded-3xl bg-neutral-900 text-white dark:bg-neutral-900 border border-neutral-800 shadow-xl text-center relative overflow-hidden">
          {/* Subtle Decorative Glow */}
          <div
            className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white font-sans">
              Mais do que um relatório. Um plano para conquistar mais clientes.
            </h3>

            <p className="text-base sm:text-lg text-neutral-300 font-sans leading-relaxed">
              Você não recebe apenas gráficos e indicadores. Recebe uma análise estratégica baseada em dados oficiais do Google, mostrando exatamente onde estão as maiores oportunidades e quais ações devem gerar o maior retorno para sua empresa.
            </p>

            {/* Linha de Destaque com Checkmarks */}
            <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-mono font-medium text-neutral-300">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Dados Oficiais do Google
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Método Algoritmo+
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Sessão Estratégica
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A]" />
                Plano de Ação Priorizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



