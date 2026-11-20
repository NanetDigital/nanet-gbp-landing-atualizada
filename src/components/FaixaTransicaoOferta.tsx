import React from 'react';

export const FaixaTransicaoOferta: React.FC = () => {
  return (
    <section
      aria-label="Transição para a oferta da Análise Algoritmo Mais"
      className="w-full bg-[#121212] bg-gradient-to-b from-[#111216] via-[#17181E] to-[#111215] py-9 md:py-10 px-5 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-[800px] mx-auto flex flex-col items-center text-center">
        <span className="inline-flex items-center justify-center bg-[#18191F] border border-neutral-500/80 text-white rounded-2xl px-7 py-2.5 text-[16px] md:text-[18px] font-medium leading-tight font-sans">
          Enfim...
        </span>

        <p className="mt-4 max-w-[800px] text-[23px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold text-white font-sans leading-[1.15] tracking-[-0.015em]">
          <span className="md:whitespace-nowrap">
            Se você quer solicitar a análise da sua empresa
          </span>{' '}
          <br className="hidden md:inline" />
          no Google ainda hoje...
        </p>

        <p className="mt-6 text-[23px] sm:text-[26px] md:text-[28px] lg:text-[30px] font-semibold text-white font-sans leading-[1.15] tracking-[-0.015em] md:whitespace-nowrap">
          A Análise Algoritmo Mais é para você.
        </p>
      </div>
    </section>
  );
};
