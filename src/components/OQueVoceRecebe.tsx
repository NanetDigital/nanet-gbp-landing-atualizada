import React from 'react';
import { FileText, MapPin, UserCheck, Check } from 'lucide-react';

interface DeliverableCard {
  id: string;
  icon: React.ReactNode;
  title: string;
  highlight: string;
  description: React.ReactNode;
  checklist: string[];
}

const deliverables: DeliverableCard[] = [
  {
    id: 'card-1',
    icon: <FileText className="w-5 h-5 text-[#16A34A]" aria-hidden="true" />,
    title: 'Relatório de Saúde do Perfil',
    highlight: 'Descubra o que precisa de atenção no seu Google.',
    description: (
      <span>
        Analisamos seu Perfil da Empresa para identificar os pontos que podem estar prejudicando sua presença nas buscas e o que merece ser corrigido primeiro.
      </span>
    ),
    checklist: [
      'Saúde geral do perfil',
      'Pontos que precisam de ajustes',
      'Erros e oportunidades encontrados',
      'Prioridades de melhoria',
    ],
  },
  {
    id: 'card-2',
    icon: <MapPin className="w-5 h-5 text-[#16A34A]" aria-hidden="true" />,
    title: 'Relatório de Posição nas Buscas Locais',
    highlight: 'Veja onde sua empresa aparece e quem está na sua frente.',
    description: (
      <span>
        Descubra sua posição quando clientes próximos pesquisam o que você vende e quais concorrentes estão ocupando posições melhores na sua região.
      </span>
    ),
    checklist: [
      'Sua posição nas buscas',
      'Principais concorrentes',
      'Comparação no mapa da região',
      'Onde você está perdendo espaço',
    ],
  },
  {
    id: 'card-3',
    icon: <UserCheck className="w-5 h-5 text-[#16A34A]" aria-hidden="true" />,
    title: 'Consultoria Prática com Especialista',
    highlight: 'Saiba exatamente o que fazer depois da análise.',
    description: (
      <span>
        Um especialista da nossa equipe apresenta seus resultados e mostra, de forma simples e prática,{' '}
        <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
          o que priorizar, onde clicar e como fazer os principais ajustes.
        </strong>
      </span>
    ),
    checklist: [
      'Análise humana do seu cenário',
      'O que ajustar primeiro',
      'Onde clicar para fazer os ajustes',
      'Orientação prática',
    ],
  },
];

export const OQueVoceRecebe: React.FC = () => {
  return (
    <section
      id="o-que-voce-recebe"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-200/80 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Principal da Seção & Subtítulo */}
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.2]">
            O Que Você Vai Receber na Sua Análise
          </h2>

          <p className="text-base sm:text-lg lg:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans leading-relaxed max-w-3xl mx-auto">
            Você não recebe apenas relatórios. Recebe clareza sobre onde sua empresa está e orientação prática sobre o que ajustar.
          </p>
        </div>

        {/* Respiro e Chamada Introdutória aos Entregáveis */}
        <div className="mt-10 sm:mt-12 mb-10 sm:mb-12 max-w-3xl mx-auto text-center space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200 font-sans">
            Veja Exatamente o Que Você Vai Receber
          </h3>

          <p className="text-sm sm:text-base lg:text-lg font-bold text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed max-w-2xl mx-auto">
            Você não recebe apenas relatórios. Descobre como sua empresa está no Google, quem está aparecendo na sua frente e o que fazer para melhorar.
          </p>
        </div>

        {/* 3 Cards Lado a Lado no Desktop / Empilhados no Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {deliverables.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-neutral-900/80 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              {/* Top Section: Icon, Title, Highlight, Description */}
              <div className="space-y-4">
                {/* Ícone */}
                <div className="w-11 h-11 rounded-2xl bg-[#16A34A]/10 dark:bg-[#16A34A]/20 flex items-center justify-center">
                  {card.icon}
                </div>

                {/* Título do Card */}
                <h4 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans tracking-tight leading-snug">
                  {card.title}
                </h4>

                {/* Chamada em Destaque */}
                <p className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 font-sans leading-snug">
                  {card.highlight}
                </p>

                {/* Descrição */}
                <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Checklist no rodapé do Card */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800/80 space-y-3">
                {card.checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                    <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 font-sans leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};




