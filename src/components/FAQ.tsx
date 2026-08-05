import React, { useState } from 'react';
import { FAQData } from '../types/landing';
import { ChevronDown, HelpCircle } from 'lucide-react';

export interface FAQProps {
  data?: Partial<FAQData>;
}

const defaultData: FAQData = {
  tag: 'PERGUNTAS FREQUENTES',
  title: 'Perguntas Frequentes (FAQ)',
  description: 'Tire suas dúvidas e entenda todos os detalhes sobre a Análise Estratégica.',
  items: [
    {
      id: 'faq-1',
      question: 'Para quem é esta análise?',
      answer: 'Empresas locais que desejam conquistar mais clientes através das pesquisas realizadas no Google.',
    },
    {
      id: 'faq-2',
      question: 'Quanto tempo demora?',
      answer: 'Todo o processo é concluído em até 7 dias. Nesse período, realizamos o diagnóstico completo da sua empresa e conduzimos a Sessão Estratégica para apresentar todas as descobertas e entregar o relatório.',
    },
    {
      id: 'faq-3',
      question: 'Quando acontece a Sessão Estratégica?',
      answer: 'Após o envio das informações da sua empresa, você escolhe o melhor horário para agendar a reunião dentro do prazo de até 7 dias, garantindo o tempo necessário para nosso estudo aprofundado.',
    },
    {
      id: 'faq-4',
      question: 'Preciso entender de marketing?',
      answer: 'Não. A análise foi criada para empresários. Todo o conteúdo é explicado de forma simples e prática.',
    },
    {
      id: 'faq-5',
      question: 'Receberei um relatório?',
      answer: 'Sim. Você recebe uma análise personalizada acompanhada da Sessão Estratégica.',
    },
  ],
};

export const FAQ: React.FC<FAQProps> = ({ data = {} }) => {
  const faqData = { ...defaultData, ...data };
  const items = faqData.items && faqData.items.length > 0 ? faqData.items : defaultData.items;
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="w-full py-16 sm:py-24 md:py-32 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">{faqData.tag}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-tight">
            {faqData.title}
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans">
            {faqData.description}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {items.map((item, idx) => {
            const itemId = item.id || `faq-${idx}`;
            const isOpen = openId === itemId;
            return (
              <div
                key={itemId}
                className="bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl overflow-hidden transition-all shadow-2xs"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(itemId)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-base sm:text-lg font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-[#16A34A] transition-colors">
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 bg-emerald-50 text-[#16A34A]' : 'text-neutral-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-neutral-200/60 dark:border-neutral-800/80">
                    <p className="mt-4 text-sm sm:text-base font-sans text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};


