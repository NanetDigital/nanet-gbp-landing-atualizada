import React from 'react';
import { Eye, Users, TrendingUp, Target } from 'lucide-react';

interface BeneficioCard {
  id: string;
  text: string;
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: boolean }>;
}

const beneficiosCards: BeneficioCard[] = [
  {
    id: 'visibilidade',
    text: 'Descobrir onde sua empresa pode ganhar mais visibilidade',
    icon: Eye,
  },
  {
    id: 'clientes',
    text: 'Identificar melhorias para atrair mais clientes da região',
    icon: Users,
  },
  {
    id: 'vendas',
    text: 'Saber o que priorizar para buscar mais vendas',
    icon: TrendingUp,
  },
  {
    id: 'foco',
    text: 'Evitar perder tempo e dinheiro com ajustes aleatórios',
    icon: Target,
  },
];

export const DemonstracaoAnalise: React.FC = () => {
  return (
    <section
      id="demonstracao"
      aria-label="Benefícios da Análise Algoritmo Mais"
      className="w-full pt-14 sm:pt-16 lg:pt-[72px] pb-16 sm:pb-20 lg:pb-24 bg-[#F6F3EF] border-b border-neutral-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção de Benefícios */}
        <h2 className="text-[24px] lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-[1.25] text-center max-w-2xl mx-auto">
          Com a Análise Algoritmo Mais você vai:
        </h2>

        {/* Grade 2x2 de Cards Centralizados */}
        <div className="mt-[30px] grid grid-cols-1 md:grid-cols-[repeat(2,minmax(0,350px))] justify-center gap-[20px] max-w-[760px] mx-auto">
          {beneficiosCards.map((card) => (
            <div
              key={card.id}
              className="w-full min-h-[165px] bg-white border border-neutral-200 rounded-[16px] p-6 shadow-none flex flex-col items-center justify-center text-center gap-3.5"
            >
              <card.icon
                className="w-8 h-8 text-[#16A34A] stroke-[1.75] shrink-0"
                aria-hidden={true}
              />
              <p className="text-[17px] md:text-[18px] font-bold text-[#171717] font-sans leading-[1.4]">
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
