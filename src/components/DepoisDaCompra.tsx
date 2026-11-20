import React from 'react';
import { Mail, FileText, CheckCircle2 } from 'lucide-react';

const STEPS = [
  {
    title: 'Confira seu e-mail',
    description:
      'Após a aprovação da compra, você recebe seu acesso e as instruções.',
    Icon: Mail,
  },
  {
    title: 'Receba seus relatórios',
    description:
      'Agende sua orientação com o nome da empresa. Receba seus relatórios em até 48 horas úteis.',
    Icon: FileText,
  },
  {
    title: 'Tudo pronto',
    description:
      'Em 30 minutos, receba uma direção prática para saber o que ajustar primeiro de forma rápida.',
    Icon: CheckCircle2,
  },
] as const;

export const DepoisDaCompra: React.FC = () => {
  return (
    <section
      id="depois-da-compra"
      aria-label="Como funciona após a compra da Análise Estratégica"
      className="w-full py-12 sm:py-16 lg:py-[72px] bg-[#F5F5F5] border-b border-neutral-200/80"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título da Seção Centralizado */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="max-w-[660px] mx-auto text-[26px] sm:text-[32px] lg:text-[38px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
            Compre agora e receba seu acesso no e-mail imediatamente!
          </h2>
        </div>

        {/* Grade com 3 Cards Brancos Compactos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-[1025px] mx-auto">
          {STEPS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="bg-white border border-neutral-200/90 rounded-2xl p-6 flex flex-col items-center text-center justify-start"
            >
              <Icon
                className="w-9 h-9 text-[#16A34A] shrink-0"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-[19px] sm:text-[20px] font-bold text-[#171717] font-sans leading-snug tracking-tight">
                {title}
              </h3>
              <p className="mt-2 text-[14.5px] sm:text-[15px] text-[#262626] font-sans leading-[1.5]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
