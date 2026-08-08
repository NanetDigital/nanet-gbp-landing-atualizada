import React from 'react';
import { OportunidadeData } from '../types/landing';

export interface OportunidadeProps {
  data?: Partial<OportunidadeData>;
}

const defaultData: OportunidadeData = {
  tag: 'OPORTUNIDADE DE MERCADO',
  title: 'Existem clientes procurando exatamente o que sua empresa vende.',
  description: 'Todos os dias, pessoas pesquisam por serviços como os seus. A questão não é a falta de demanda, mas como sua empresa se posiciona diante dessas buscas.',
  items: [],
};

export const Oportunidade: React.FC<OportunidadeProps> = ({ data = {} }) => {
  const opData = { ...defaultData, ...data };

  return (
    <section
      id="oportunidade"
      className="w-full py-16 sm:py-24 lg:py-32 bg-neutral-50 dark:bg-neutral-900/40 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">{opData.tag}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
            {opData.title}
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            {opData.description}
          </p>
        </div>

        {/* Três Blocos Visuais */}
        <div className="space-y-16 sm:space-y-20">
          {/* BLOCO 1 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785778723/Gemini_Generated_Image_1warzv1warzv1war_penhvb.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1785778723/Gemini_Generated_Image_1warzv1warzv1war_penhvb.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785778723/Gemini_Generated_Image_1warzv1warzv1war_penhvb.png 800w"
                sizes="(max-width: 768px) 92vw, 800px"
                alt="Pesquisa no Google"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full md:w-[90%] lg:w-[80%] h-auto object-contain rounded-[24px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
            
            <p className="mt-6 text-center text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
              Todos os dias existem pessoas pesquisando exatamente esse serviço.
            </p>

            {/* Três Cards Horizontais */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-5 bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xs hover:shadow-sm transition-shadow">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans mb-2">
                  Pessoas pesquisam diariamente
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Todos os dias potenciais clientes pesquisam exatamente os serviços que sua empresa oferece.
                </p>
              </div>

              <div className="p-5 bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xs hover:shadow-sm transition-shadow">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans mb-2">
                  Concorrentes recebem essas oportunidades
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  Empresas melhor posicionadas tendem a receber mais cliques, contatos e visitas.
                </p>
              </div>

              <div className="p-5 bg-neutral-50/80 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl shadow-xs hover:shadow-sm transition-shadow">
                <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 font-sans mb-2">
                  Decisões baseadas em dados
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  A Análise Estratégica identifica oportunidades e prioridades para melhorar sua presença nas pesquisas.
                </p>
              </div>
            </div>
          </div>

          {/* BLOCO 2 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900 flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785780207/Ranking_of_GTR_EBIKES_Mobilidade_Eletrica_on_Google_2.pdf_nu8uew.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1785780207/Ranking_of_GTR_EBIKES_Mobilidade_Eletrica_on_Google_2.pdf_nu8uew.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785780207/Ranking_of_GTR_EBIKES_Mobilidade_Eletrica_on_Google_2.pdf_nu8uew.png 800w"
                sizes="(max-width: 768px) 92vw, 800px"
                alt="Mapa de Concorrentes"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full md:w-[92%] lg:w-[90%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
            <p className="mt-6 text-center text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
              Descubra onde estão os concorrentes que aparecem primeiro e como sua empresa está posicionada.
            </p>
          </div>

          {/* BLOCO 3 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full overflow-hidden rounded-2xl bg-neutral-100 dark:bg-neutral-900">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785768000/5_osvsye.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1785768000/5_osvsye.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1785768000/5_osvsye.png 800w"
                sizes="(max-width: 768px) 92vw, 800px"
                alt="Mapa de Calor de Oportunidades"
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
              />
            </div>
            <p className="mt-6 text-center text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
              O mapa de calor revela onde existe maior concentração de concorrentes e onde podem existir oportunidades estratégicas.
            </p>
          </div>
        </div>

        {/* Frase de Transição no Final da Seção */}
        <div className="mt-16 sm:mt-20 text-center max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 shadow-sm">
          <p className="text-lg sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed">
            "Mas existir demanda é apenas o começo. O verdadeiro desafio é entender como sua empresa está posicionada diante dessa oportunidade."
          </p>
        </div>
      </div>
    </section>
  );
};



