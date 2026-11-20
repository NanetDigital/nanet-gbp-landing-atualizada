import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface EntregavelItem {
  id: string;
  containerId: string;
  title: string;
  description: string;
  image: string;
  srcSet: string;
  alt: string;
  desktopReversed?: boolean;
}

const entregaveis: EntregavelItem[] = [
  {
    id: 'rank-local',
    containerId: 'entregavel-posicao',
    title: 'Rank Local: descubra onde ganhar mais visibilidade',
    description:
      'Veja em quais posições sua empresa aparece no Google em diferentes pontos da região e identifique onde precisa aumentar sua visibilidade.',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742871/2_of6tif.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742871/2_of6tif.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742871/2_of6tif.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742871/2_of6tif.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742871/2_of6tif.png 1000w',
    alt: 'Posição nas Buscas Locais',
    desktopReversed: false,
  },
  {
    id: 'saude-perfil',
    containerId: 'entregavel-diagnostico',
    title: 'Melhorias para atrair mais clientes',
    description:
      'Receba uma avaliação de 20 critérios, com pontuação diagnóstica de 0 a 100, para identificar o que corrigir e evitar ajustes aleatórios.',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/1_kn2sua.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/1_kn2sua.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/1_kn2sua.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/1_kn2sua.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/1_kn2sua.png 1000w',
    alt: 'Diagnóstico e Ajustes do Perfil',
    desktopReversed: true,
  },
  {
    id: 'orientacao',
    containerId: 'entregavel-sessao',
    title: 'Orientação de 30 minutos: agilize os ajustes',
    description:
      'Um especialista da Nanet mostra onde fazer os ajustes, esclarece suas dúvidas e indica quais melhorias priorizar para vender mais.',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/4_tb3hmk.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/4_tb3hmk.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/4_tb3hmk.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/4_tb3hmk.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/4_tb3hmk.png 1000w',
    alt: 'Orientação Prática com Especialista',
    desktopReversed: false,
  },
];

export const EntregaveisAnalise: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleScrollToTitle = () => {
    if (!titleRef.current) return;
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    titleRef.current.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section
      id="entregaveis-analise"
      aria-label="Veja tudo que você vai receber com a Análise Algoritmo Mais"
      className="relative w-full pt-16 sm:pt-20 pb-7 sm:pb-8 md:pb-10 bg-white"
    >
      {/* Seta circular centralizada na divisão entre Antes/Depois e Entregáveis */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          type="button"
          onClick={handleScrollToTitle}
          aria-label="Ir para: Veja tudo que você vai receber com a Análise Algoritmo Mais"
          className="transition-arrow-float w-14 h-14 rounded-full bg-[#16A34A] hover:bg-[#15803D] active:scale-95 text-white flex items-center justify-center border-[8px] border-white box-content shadow-xs cursor-pointer touch-manipulation focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A] focus-visible:ring-offset-2 transition-colors duration-200"
        >
          <ChevronDown className="w-7 h-7 stroke-[2.5]" aria-hidden="true" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12">
        {/* ========================================================== */}
        {/* CABEÇALHO DA SEÇÃO                                         */}
        {/* ========================================================== */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-5 sm:mb-6">
            <span className="inline-flex items-center justify-center rounded-full bg-neutral-100 border border-neutral-200 px-5 py-2 text-[16px] lg:text-[18px] font-medium text-[#171717] font-sans leading-none">
              E tem mais!
            </span>
          </div>

          <h2
            ref={titleRef}
            className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight scroll-mt-10"
          >
            Veja tudo que você vai receber com a Análise Algoritmo Mais
          </h2>
        </div>

        {/* ========================================================== */}
        {/* CARDS HORIZONTAIS CONTÍNUOS DOS 3 ENTREGÁVEIS              */}
        {/* ========================================================== */}
        <div className="max-w-[1024px] mx-auto space-y-5 md:space-y-6">
          {entregaveis.map((item) => (
            <div
              key={item.id}
              className="w-full bg-[#F5F5F5] rounded-[24px] overflow-hidden flex flex-col md:grid md:grid-cols-12 items-stretch"
            >
              {/* Área da Imagem (Mobile: Sempre no topo | Desktop: Alternado) */}
              <div
                className={`p-3 sm:p-4 lg:p-5 flex items-center justify-center md:col-span-6 lg:col-span-7 ${
                  item.desktopReversed ? 'md:order-2' : 'md:order-1'
                }`}
              >
                <div
                  id={item.containerId}
                  data-container={item.containerId}
                  className="w-full overflow-hidden rounded-2xl flex items-center justify-center"
                >
                  <img
                    src={item.image}
                    srcSet={item.srcSet}
                    sizes="(max-width: 767px) 100vw, 560px"
                    alt={item.alt}
                    width={640}
                    height={360}
                    className="w-full h-auto object-contain block mx-auto rounded-2xl"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Área do Texto (Mobile: Sempre abaixo | Desktop: Alternado) */}
              <div
                className={`px-6 pt-2 pb-6 sm:px-7 sm:pt-3 sm:pb-7 md:p-8 lg:p-10 flex flex-col justify-center text-left space-y-3.5 lg:space-y-4 md:col-span-6 lg:col-span-5 ${
                  item.desktopReversed ? 'md:order-1' : 'md:order-2'
                }`}
              >
                <h3 className="text-[22px] sm:text-[24px] lg:text-[26px] xl:text-[28px] font-bold tracking-tight text-[#171717] font-sans leading-[1.25]">
                  {item.title}
                </h3>

                <p className="text-[16px] sm:text-[17px] lg:text-[18px] font-normal text-[#374151] font-sans leading-[1.5]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
