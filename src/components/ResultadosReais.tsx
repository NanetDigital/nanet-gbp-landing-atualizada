import React from 'react';

export const ResultadosReais: React.FC = () => {
  return (
    <section
      id="resultados-reais"
      className="w-full py-16 sm:py-24 lg:py-32 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">RESULTADOS REAIS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
            Empresas que já aplicaram o Método Algoritmo+ compartilham seus resultados.
          </h2>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
            Os comentários abaixo foram publicados espontaneamente por clientes em anúncios públicos da Nanet no Instagram após a aplicação da nossa metodologia.
          </p>
        </div>

        {/* 3 Cards Grid (Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col) - Enlarged by ~30% */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-16 sm:mb-20">
          {/* CARD 01 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              {/* Print Real do Comentário */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-5 sm:p-6 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1785768020/2_mnahho.png"
                  alt="Comentário espontâneo de @thalitatmd.espaco no Instagram"
                  width={360}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[280px] sm:max-h-[320px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>

              {/* Descrição */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Primeiros resultados após a implementação.
              </p>
            </div>
          </div>

          {/* CARD 02 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-6">
              {/* Print Real do Comentário */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-5 sm:p-6 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1785768021/3_usiozw.png"
                  alt="Comentário espontâneo de @eriik.viniciuss no Instagram"
                  width={360}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[280px] sm:max-h-[320px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>

              {/* Descrição */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Resultados que geraram confiança para expandir o projeto.
              </p>
            </div>
          </div>

          {/* CARD 03 */}
          <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-6">
              {/* Print Real do Comentário */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-5 sm:p-6 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1785768022/Sem_t%C3%ADtulo_crcwaj.png"
                  alt="Comentário espontâneo de @emporiosaren no Instagram"
                  width={360}
                  height={320}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[280px] sm:max-h-[320px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>

              {/* Descrição */}
              <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                Empresa voltou a contratar para outra unidade.
              </p>
            </div>
          </div>
        </div>

        {/* Bloco Final Centralizado */}
        <div className="max-w-4xl mx-auto p-8 sm:p-12 rounded-3xl bg-neutral-50 dark:bg-neutral-900/60 border border-neutral-200/80 dark:border-neutral-800 text-center space-y-6 shadow-sm">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            Mais do que comentários positivos.
          </h3>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-2xl mx-auto">
            Cada empresa possui um cenário diferente, mas todas têm um objetivo em comum: conquistar mais clientes. Nossa Análise Estratégica foi criada para transformar dados oficiais do Google em decisões práticas que geram oportunidades reais de crescimento.
          </p>

          <div className="pt-2">
            <a
              href="https://pay.hotmart.com/V106938201T"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                  (window as any).fbq('track', 'InitiateCheckout');
                }
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center h-[54px] px-8 sm:px-10 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-base font-semibold border border-[#16A34A] transition-all shadow-sm hover:shadow-md cursor-pointer"
            >
              Quero receber minha análise estratégica
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
