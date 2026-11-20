import React, { useLayoutEffect, useRef } from 'react';

const PONTOS_IDENTIFICACAO = [
  {
    prefix: '',
    bold: 'Busca mais visibilidade no Google',
    suffix: ' para sua empresa na região.',
  },
  {
    prefix: '',
    bold: 'Não sabe o que melhorar no perfil',
    suffix: ' para atrair mais clientes.',
  },
  {
    prefix: '',
    bold: 'Precisa de orientação de um especialista',
    suffix: ' para agilizar os ajustes e buscar mais vendas.',
  },
  {
    prefix: '',
    bold: 'Perde tempo organizando as melhorias',
    suffix: ' e acompanhando o que falta fazer.',
  },
  {
    prefix: '',
    bold: 'Vê concorrentes aparecendo primeiro',
    suffix: ' e deseja comparar suas posições no Google.',
  },
  {
    prefix: '',
    bold: 'Gostaria de trocar experiências com empresários',
    suffix: ' sobre melhorias no Google.',
  },
];

interface SegmentoItem {
  icon: string;
  label: string;
}

const SEGMENTOS_FILEIRAS: SegmentoItem[][] = [
  [
    { icon: '🍔', label: 'Restaurantes e lanchonetes' },
    { icon: '🍕', label: 'Pizzarias' },
    { icon: '☕', label: 'Cafeterias e padarias' },
    { icon: '🦷', label: 'Clínicas odontológicas' },
    { icon: '🩺', label: 'Médicos' },
    { icon: '🧳', label: 'Empresas de turismo' },
    { icon: '🧴', label: 'Clínicas de estética' },
  ],
  [
    { icon: '🛋️', label: 'Lojas de móveis' },
    { icon: '🔧', label: 'Oficinas mecânicas' },
    { icon: '🚗', label: 'Automóveis' },
    { icon: '👟', label: 'Roupas e calçados' },
    { icon: '🔋', label: 'Mobilidade elétrica' },
    { icon: '🧱', label: 'Materiais de construção' },
    { icon: '🏨', label: 'Hotéis e pousadas' },
  ],
  [
    { icon: '🔑', label: 'Chaveiros' },
    { icon: '🚚', label: 'Guincho' },
    { icon: '💇', label: 'Salões e barbearias' },
    { icon: '🏠', label: 'Imobiliárias' },
    { icon: '🚜', label: 'Aluguel de máquinas' },
    { icon: '💎', label: 'Joalherias' },
  ],
];

const MARQUEE_SPEED_PX_PER_SEC = 40;
const DEFAULT_DURATIONS = [68, 66, 52];
const ROW_DELAYS = ['0s', '-7s', '-14s'];

const SegmentoPill: React.FC<{ item: SegmentoItem }> = ({ item }) => (
  <span className="inline-flex items-center shrink-0 whitespace-nowrap w-fit h-[38px] sm:h-[44px] px-3.5 sm:px-4 gap-2 sm:gap-2.5 rounded-full bg-white border border-neutral-200/90 shadow-[0_1px_3px_rgba(0,0,0,0.06)] text-[13px] sm:text-[14.5px] font-semibold text-[#374151] font-sans leading-none select-none">
    <span aria-hidden="true" className="text-[15px] sm:text-[17px] leading-none shrink-0">
      {item.icon}
    </span>
    <span className="whitespace-nowrap">{item.label}</span>
  </span>
);

const SegmentosMarquee: React.FC = () => {
  const trackRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const lastDurationsRef = useRef<number[]>([...DEFAULT_DURATIONS]);

  useLayoutEffect(() => {
    const syncDurations = () => {
      // Leitura em lote para evitar reflows forçados intercalados com escrita
      const updates: Array<{ el: HTMLDivElement; idx: number; duration: number }> = [];
      SEGMENTOS_FILEIRAS.forEach((_, idx) => {
        const trackEl = trackRefs.current[idx];
        if (!trackEl) return;
        const halfWidth = trackEl.getBoundingClientRect().width / 2;
        if (halfWidth <= 0) return;
        const nextDuration = Number((halfWidth / MARQUEE_SPEED_PX_PER_SEC).toFixed(2));
        if (Math.abs(nextDuration - lastDurationsRef.current[idx]) >= 0.5) {
          updates.push({ el: trackEl, idx, duration: nextDuration });
        }
      });

      updates.forEach(({ el, idx, duration }) => {
        lastDurationsRef.current[idx] = duration;
        el.style.setProperty('--nanet-icp-duration', `${duration}s`);
      });
    };

    syncDurations();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined'
        ? new ResizeObserver(() => {
            syncDurations();
          })
        : null;

    if (resizeObserver) {
      trackRefs.current.forEach((el) => {
        if (el) resizeObserver.observe(el);
      });
    }

    if (typeof document !== 'undefined' && document.fonts?.ready) {
      document.fonts.ready.then(syncDurations).catch(() => {});
    }

    window.addEventListener('resize', syncDurations);
    return () => {
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', syncDurations);
    };
  }, []);

  return (
    <div className="w-full mt-6 sm:mt-7 lg:mt-8">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 mb-3.5 sm:mb-4 text-center">
        <p className="text-[17px] sm:text-[18px] font-bold text-[#171717] font-sans leading-[1.4]">
          Ideal para negócios locais:
        </p>
      </div>

      <div
        className="relative w-full overflow-hidden py-1"
        aria-label="Segmentos atendidos pela Análise Algoritmo Mais"
      >
        {/* Esmaecimento suave nas extremidades esquerda e direita */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-r from-white via-white/80 to-transparent z-10"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 lg:w-24 bg-gradient-to-l from-white via-white/80 to-transparent z-10"
        />

        <div className="flex flex-col gap-2.5 sm:gap-3">
          {SEGMENTOS_FILEIRAS.map((rowItems, rowIndex) => (
            <div
              key={rowIndex}
              className="nanet-icp-row-viewport py-0.5"
            >
              <div
                ref={(el) => {
                  trackRefs.current[rowIndex] = el;
                }}
                className="nanet-icp-track items-center"
                style={{
                  animationDelay: ROW_DELAYS[rowIndex],
                  ['--nanet-icp-duration' as string]: `${DEFAULT_DURATIONS[rowIndex]}s`,
                }}
              >
                {/* Metade A e Metade B idênticas (2 cópias por metade = 4 cópias totais) para loop -50% sem saltos nem vazios em qualquer resolução */}
                {[0, 1, 2, 3].map((copyIndex) => (
                  <div
                    key={copyIndex}
                    aria-hidden={copyIndex > 0 ? true : undefined}
                    className="flex flex-nowrap shrink-0 items-center gap-2.5 sm:gap-3 pr-2.5 sm:pr-3 whitespace-nowrap"
                  >
                    {rowItems.map((item) => (
                      <SegmentoPill key={`${copyIndex}-${item.label}`} item={item} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const PublicoAlvo: React.FC = () => {
  return (
    <section
      id="para-quem-e"
      aria-label="Para quem é a Análise Estratégica"
      className="w-full py-12 sm:py-14 lg:py-16 bg-white border-b border-neutral-200/80 overflow-x-clip"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-7 lg:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Essa análise é para sua empresa se você:
          </h2>
        </div>

        {/* Layout 2 Colunas no Desktop | Coluna única no Mobile */}
        <div className="max-w-[1020px] mx-auto grid grid-cols-1 lg:grid-cols-[336px_minmax(0,1fr)] gap-6 sm:gap-7 lg:gap-9 lg:items-center">
          
          {/* Coluna Esquerda: Imagem Original Preservada (~13% menor no desktop) */}
          <div className="w-full flex justify-center">
            <div className="w-full max-w-[310px] sm:max-w-[336px] lg:max-w-full mx-auto rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1792004746/pesquisa_google_gah03o.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1792004746/pesquisa_google_gah03o.png 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1792004746/pesquisa_google_gah03o.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_768/v1792004746/pesquisa_google_gah03o.png 768w"
                sizes="(max-width: 640px) 310px, (max-width: 1024px) 336px, 336px"
                alt="Pesquisa no Google para negócios locais"
                width={480}
                height={360}
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Coluna Direita: 6 Pontos de Identificação centralizados verticalmente no desktop */}
          <div className="min-w-0 flex flex-col text-left">
            <div className="flex flex-col divide-y divide-neutral-200/70">
              {PONTOS_IDENTIFICACAO.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 first:pt-0 last:pb-0 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-[#16A34A] font-bold text-base sm:text-lg shrink-0 leading-snug mt-0.5 select-none"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p className="text-[17px] sm:text-[18px] text-[#4B5563] font-sans leading-[1.5]">
                      {item.prefix}
                      <strong className="font-bold text-[#171717]">
                        {item.bold}
                      </strong>
                      {'middle' in item && item.middle}
                      {'bold2' in item && (
                        <strong className="font-bold text-[#171717]">
                          {item.bold2}
                        </strong>
                      )}
                      {item.suffix}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Identificação dos Segmentos — Faixa Contínua em Largura Total (3 Fileiras) */}
      <SegmentosMarquee />

      {/* Filtro do Público — Bloco Discreto e Compacto preservado após a faixa */}
      <div className="max-w-[780px] mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-7 lg:mt-8">
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200/80 text-left">
          <h4 className="font-bold text-[14px] text-[#374151] font-sans mb-2">
            Não é para sua empresa se:
          </h4>
          <ul className="text-[14px] text-[#6B7280] font-sans leading-relaxed">
            <li className="flex items-start gap-2">
              <span
                className="text-[#9CA3AF] font-bold text-sm leading-none shrink-0 mt-0.5 select-none"
                aria-hidden="true"
              >
                ✕
              </span>
              <span>Seus clientes não procuram seus produtos ou serviços no Google por cidade ou região.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
