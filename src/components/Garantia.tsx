import React from 'react';

export const Garantia: React.FC = () => {
  return (
    <section
      id="garantia-incondicional"
      aria-label="Garantia Incondicional de 7 Dias"
      className="w-full py-14 sm:py-16 lg:py-20 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-[800px] mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 lg:gap-8 text-center sm:text-left">
          
          {/* Coluna Esquerda: Selo Circular com Contorno Verde */}
          <div className="shrink-0 flex items-center justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-[#16A34A] bg-[#F6F3EF] flex flex-col items-center justify-center shadow-xs">
              <span className="text-4xl sm:text-[46px] font-black font-mono text-[#16A34A] leading-none tracking-tight">
                7
              </span>
              <span className="text-[10px] sm:text-[11px] font-bold font-sans tracking-wider uppercase text-[#16A34A] text-center leading-[1.15] mt-1">
                DIAS DE<br />GARANTIA
              </span>
            </div>
          </div>

          {/* Coluna Direita: Título e Textos Explicativos */}
          <div className="flex-1 space-y-3 sm:space-y-3.5">
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
              Sua Análise Estratégica sem risco
            </h2>

            <p className="text-sm sm:text-[15px] lg:text-base text-[#6B7280] font-sans leading-relaxed">
              Você tem <strong className="font-bold text-[#171717]">7 dias após a compra</strong> para avaliar sua decisão. Se achar que a Análise Estratégica não é para você, basta solicitar o reembolso dentro desse prazo e <strong className="font-bold text-[#171717]">receber 100% do valor pago de volta</strong>. Sem precisar justificar.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
