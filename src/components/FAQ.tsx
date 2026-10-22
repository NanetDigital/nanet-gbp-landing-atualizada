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
    question: 'Eu já tenho um Perfil da Empresa no Google. Essa análise ainda faz sentido?',
    answer: (
      <>
        Sim. Ter um perfil não garante visibilidade nem bom posicionamento nas buscas da sua região. A análise{' '}
        <strong className="font-bold text-[#171717]">
          revela onde sua empresa aparece no Google Maps em relação aos concorrentes e avalia 20 critérios do seu Perfil
        </strong>
        , indicando exatamente o que merece atenção.
      </>
    ),
  },
  {
    id: 'faq-2',
    question: 'Preciso entender de Google ou de marketing?',
    answer: (
      <>
        Não. Os relatórios são{' '}
        <strong className="font-bold text-[#171717]">
          interpretados e explicados de forma clara e acessível durante a orientação de 30 minutos com o especialista
        </strong>
        , indicando as melhorias prioritárias sem complicação técnica.
      </>
    ),
  },
  {
    id: 'faq-3',
    question: 'A análise é automática ou feita por um especialista?',
    answer: (
      <>
        Os dados e relatórios são gerados por ferramentas especializadas e{' '}
        <strong className="font-bold text-[#171717]">
          interpretados por um especialista da Nanet Digital
        </strong>
        , que conduz a orientação e responde às suas dúvidas.
      </>
    ),
  },
  {
    id: 'faq-4',
    question: 'Quando vou receber minha análise?',
    answer: (
      <>
        Após a confirmação da compra, você acessa a área de membros na Hotmart para enviar os dados da empresa e agendar a orientação.{' '}
        <strong className="font-bold text-[#171717]">
          A entrega dos relatórios e a realização da orientação acontecem em até 7 dias úteis
        </strong>{' '}
        após o envio das informações.
      </>
    ),
  },
  {
    id: 'faq-5',
    question: 'Vocês também fazem os ajustes identificados na análise?',
    answer: (
      <>
        A Análise Estratégica é um serviço de diagnóstico e orientação.{' '}
        <strong className="font-bold text-[#171717]">
          A implementação das melhorias fica a critério da sua empresa
        </strong>
        , orientada pelo Checklist de Implementação incluído como bônus.
      </>
    ),
  },
  {
    id: 'faq-6',
    question: 'E se eu comprar e mudar de ideia?',
    answer: (
      <>
        Você tem{' '}
        <strong className="font-bold text-[#171717]">
          7 dias de garantia a partir da compra
        </strong>
        . Se dentro desse prazo decidir que a Análise Estratégica não faz sentido para você, poderá solicitar o reembolso.
      </>
    ),
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
                    ? 'border-[#2563EB]/40 shadow-xs'
                    : 'border-neutral-200/80 hover:border-neutral-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-4 sm:py-4.5 px-5 sm:px-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer group"
                >
                  <span className="font-sans text-base sm:text-[17px] font-semibold text-[#171717] group-hover:text-[#2563EB] transition-colors leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition-all duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-blue-50 text-[#2563EB] border border-[#2563EB]/40 rotate-180'
                        : 'bg-white text-[#2563EB] border border-neutral-200/80 shadow-xs group-hover:border-[#2563EB]/40'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 text-[#2563EB] stroke-[2.5]" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 border-t border-neutral-200/60">
                    <p className="pt-3.5 sm:pt-4 text-sm sm:text-[15px] font-sans text-[#6B7280] leading-relaxed">
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
