import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
}

const faqItems: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Já tenho perfil no Google. Essa análise serve para mim?',
    answer:
      'Sim. Você descobre como sua empresa aparece nas buscas da região e o que pode melhorar para ganhar mais visibilidade, clientes e vendas.',
  },
  {
    id: 'faq-2',
    question: 'Vou conseguir entender os relatórios?',
    answer:
      'Sim. Os relatórios são visuais e fáceis de entender. Um especialista explica os resultados e mostra o que ajustar primeiro.',
  },
  {
    id: 'faq-3',
    question: 'A análise é automática ou feita por um especialista?',
    answer:
      'Usamos ferramentas para gerar os relatórios. Depois, um especialista analisa os resultados e orienta você sobre as melhorias.',
  },
  {
    id: 'faq-4',
    question: 'Quando recebo meus relatórios?',
    answer:
      'Em até 48 horas úteis após o envio completo dos dados da empresa. A orientação acontece no horário agendado.',
  },
  {
    id: 'faq-5',
    question: 'A Nanet faz as melhorias no meu perfil?',
    answer:
      'A análise mostra o que melhorar e entrega um checklist de prioridades. A execução das melhorias é um serviço à parte.',
  },
  {
    id: 'faq-6',
    question: 'E se eu não gostar da análise?',
    answer:
      'Você tem 7 dias de garantia para solicitar o reembolso, conforme as condições da compra pela Hotmart.',
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-label="Perguntas Frequentes"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título Centralizado */}
        <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans text-center mb-8 sm:mb-12 leading-tight">
          Perguntas Frequentes
        </h2>

        {/* Accordion List em Coluna Única */}
        <div className="space-y-3 sm:space-y-3.5">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-[#F6F3EF] border rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#16A34A]/45 shadow-xs'
                    : 'border-neutral-200/80 hover:border-[#16A34A]/35'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#16A34A]/60 focus-visible:ring-inset cursor-pointer group"
                >
                  <span
                    className={`font-sans text-[22px] lg:text-[23px] font-semibold transition-colors leading-[1.35] ${
                      isOpen
                        ? 'text-[#16A34A]'
                        : 'text-[#171717] group-hover:text-[#16A34A]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/45 rotate-180'
                        : 'bg-white text-[#16A34A] border border-neutral-200/80 shadow-xs group-hover:border-[#16A34A]/45'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-neutral-200/60">
                    <p className="pt-3.5 sm:pt-4 text-[18px] font-normal font-sans text-[#6B7280] leading-[1.5] sm:leading-[1.55]">
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
