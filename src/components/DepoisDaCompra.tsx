import React from 'react';
import { Mail, Calendar, FileText } from 'lucide-react';

export const DepoisDaCompra: React.FC = () => {
  return (
    <section
      id="depois-da-compra"
      aria-label="Como funciona após a compra da Análise Estratégica"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da Seção Centralizado */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Depois da compra, funciona assim:
          </h2>
        </div>

        {/* Grade com 3 Cards Lado a Lado (Desktop) e Coluna Única (Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* CARD 01 — PASSO 01 — Confira seu e-mail */}
          <div className="bg-[#F6F3EF] border border-neutral-200/80 rounded-2xl p-7 sm:p-8 lg:p-9 shadow-none flex flex-col items-center text-center justify-start">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#16A34A]/25 shadow-xs flex items-center justify-center shrink-0 mb-5 sm:mb-6">
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#16A34A]" strokeWidth={2} />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#16A34A] uppercase mb-1">
              PASSO 01
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] font-sans mb-2 tracking-tight">
              Confira seu e-mail
            </h3>
            <p className="text-sm sm:text-[15px] text-[#6B7280] font-sans leading-relaxed max-w-[280px]">
              Receba as instruções para agendar sua análise e começar.
            </p>
          </div>

          {/* CARD 02 — PASSO 02 — Escolha seu horário */}
          <div className="bg-[#F6F3EF] border border-neutral-200/80 rounded-2xl p-7 sm:p-8 lg:p-9 shadow-none flex flex-col items-center text-center justify-start">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#16A34A]/25 shadow-xs flex items-center justify-center shrink-0 mb-5 sm:mb-6">
              <Calendar className="w-6 h-6 sm:w-7 sm:h-7 text-[#16A34A]" strokeWidth={2} />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#16A34A] uppercase mb-1">
              PASSO 02
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] font-sans mb-2 tracking-tight">
              Escolha seu horário
            </h3>
            <p className="text-sm sm:text-[15px] text-[#6B7280] font-sans leading-relaxed max-w-[280px]">
              Agende sua orientação prática e envie os dados da empresa. Nossa equipe cuida da análise.
            </p>
          </div>

          {/* CARD 03 — PASSO 03 — Saiba o que melhorar */}
          <div className="bg-[#F6F3EF] border border-neutral-200/80 rounded-2xl p-7 sm:p-8 lg:p-9 shadow-none flex flex-col items-center text-center justify-start">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white border border-[#16A34A]/25 shadow-xs flex items-center justify-center shrink-0 mb-5 sm:mb-6">
              <FileText className="w-6 h-6 sm:w-7 sm:h-7 text-[#16A34A]" strokeWidth={2} />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-[#16A34A] uppercase mb-1">
              PASSO 03
            </span>
            <h3 className="text-base sm:text-lg font-bold text-[#171717] font-sans mb-2 tracking-tight">
              Saiba o que melhorar
            </h3>
            <p className="text-sm sm:text-[15px] text-[#6B7280] font-sans leading-relaxed max-w-[280px]">
              Receba sua análise, entenda os ajustes prioritários com o especialista e tire dúvidas no grupo de WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
