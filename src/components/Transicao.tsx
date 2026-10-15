import React from 'react';

export const Transicao: React.FC = () => {
  return (
    <section
      id="transicao"
      aria-label="Transição Estratégica"
      className="w-full py-10 sm:py-12 lg:py-14 bg-neutral-100 dark:bg-neutral-900/80 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] xl:text-[36px] font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.3] sm:leading-[1.25] max-w-3xl mx-auto">
          Ter um Perfil da Empresa no Google não significa que os clientes estão encontrando e escolhendo o seu negócio.
        </h2>

        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-sans leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
          A análise vai mostrar{' '}
          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
            onde sua empresa aparece, quais concorrentes estão na sua frente e o que precisa ser ajustado.
          </strong>
        </p>
      </div>
    </section>
  );
};
