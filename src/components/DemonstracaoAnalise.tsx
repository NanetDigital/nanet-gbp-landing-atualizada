import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Search, Users, ListChecks } from 'lucide-react';
import { useCheckoutUrl } from '../utils/tracking';

interface SlideItem {
  id: string;
  image: string;
  srcSet: string;
  alt: string;
  width: number;
  height: number;
}

const slides: SlideItem[] = [
  {
    id: 'diagnostico',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790537425/Design_sem_nome_8_xmtfhz.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790537425/Design_sem_nome_8_xmtfhz.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790537425/Design_sem_nome_8_xmtfhz.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790537425/Design_sem_nome_8_xmtfhz.png 1000w',
    alt: 'Diagnóstico da Saúde do Perfil da Empresa no Google',
    width: 1000,
    height: 562,
  },
  {
    id: 'posicao',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535462/2_zv795u.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535462/2_zv795u.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790535462/2_zv795u.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535462/2_zv795u.png 1000w',
    alt: 'Mapa de Posição nas Buscas Locais no Google',
    width: 1000,
    height: 562,
  },
  {
    id: 'concorrentes',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535459/3_g3h8pv.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/3_g3h8pv.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790535459/3_g3h8pv.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535459/3_g3h8pv.png 1000w',
    alt: 'Ranking e Comparação de Concorrentes no Google',
    width: 1000,
    height: 562,
  },
  {
    id: 'prioridades',
    image:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535459/4_mqlpjy.png',
    srcSet:
      'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/4_mqlpjy.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790535459/4_mqlpjy.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790535459/4_mqlpjy.png 1000w',
    alt: 'Plano de Prioridades de Melhoria e Ajustes no Perfil',
    width: 1000,
    height: 640,
  },
];

interface BeneficioCard {
  id: string;
  content: React.ReactNode;
  icon: React.ComponentType<{ className?: string }>;
}

const beneficiosCards: BeneficioCard[] = [
  {
    id: 'oportunidades',
    content: (
      <>
        Descobrir se sua empresa está perdendo clientes para os concorrentes e{' '}
        <strong className="font-bold text-[#171717]">
          o que precisa ajustar para ser encontrada
        </strong>
        .
      </>
    ),
    icon: Search,
  },
  {
    id: 'concorrentes',
    content: (
      <>
        Entender quais concorrentes estão sendo encontrados primeiro e onde sua empresa pode{' '}
        <strong className="font-bold text-[#171717]">
          ganhar mais clientes.
        </strong>
      </>
    ),
    icon: Users,
  },
  {
    id: 'prioridades',
    content: (
      <>
        Saber como ajustar seu perfil no Google de forma simples para atrair clientes,{' '}
        <strong className="font-bold text-[#171717]">
          sem perder tempo tentando descobrir o que fazer.
        </strong>
      </>
    ),
    icon: ListChecks,
  },
];

export const DemonstracaoAnalise: React.FC = () => {
  const checkoutUrl = useCheckoutUrl('https://pay.hotmart.com/V106938201T');
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Referências para unificação de Pointer Events (desktop e mobile)
  const pointerStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isDraggingRef = useRef(false);

  // Inicia um novo ciclo de autoplay de 3000ms
  const startAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
    autoplayTimerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 3000);
  }, []);

  // Pausa temporariamente o autoplay
  const pauseAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
      autoplayTimerRef.current = null;
    }
  }, []);

  // Inicializa o autoplay na montagem
  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [startAutoplay]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startAutoplay();
  }, [startAutoplay]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startAutoplay();
  }, [startAutoplay]);

  // Ao pressionar (mouse ou toque): pausa imediatamente o autoplay
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    pauseAutoplay();
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    isDraggingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerStartRef.current) return;
    const deltaX = Math.abs(e.clientX - pointerStartRef.current.x);
    const deltaY = Math.abs(e.clientY - pointerStartRef.current.y);
    if (deltaX > 10 || deltaY > 10) {
      isDraggingRef.current = true;
    }
  };

  // Ao soltar: verifica se foi clique rápido nas laterais, swipe, ou apenas soltura após segurar
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerStartRef.current) {
      startAutoplay();
      return;
    }

    const { x: startX, time: startTime } = pointerStartRef.current;
    const deltaX = e.clientX - startX;
    const duration = Date.now() - startTime;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const relativeX = clickX / rect.width;

    pointerStartRef.current = null;

    // Se houve swipe horizontal (> 40px)
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextSlide();
      } else {
        prevSlide();
      }
      return;
    }

    // Se foi clique/toque rápido (< 250ms e sem arraste significativo)
    if (duration < 250 && !isDraggingRef.current) {
      if (relativeX < 0.33) {
        // Região esquerda: slide anterior
        prevSlide();
        return;
      } else if (relativeX > 0.66) {
        // Região direita: próximo slide
        nextSlide();
        return;
      }
      // Região central: toque rápido não navega
    }

    // Soltura após segurar (ou toque central): reinicia contagem com 3s completos a partir deste momento
    startAutoplay();
  };

  // Se o ponteiro sair do container ou for cancelado, retoma o autoplay
  const handlePointerCancelOrLeave = () => {
    if (pointerStartRef.current) {
      pointerStartRef.current = null;
      startAutoplay();
    }
  };

  return (
    <section
      id="demonstracao"
      aria-label="Demonstração da Análise Estratégica"
      className="w-full pt-16 sm:pt-20 lg:pt-24 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título e Subtítulo Acima do Carrossel */}
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Veja como é a análise que você vai receber
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] font-sans leading-relaxed max-w-2xl mx-auto">
            Conheça os pontos que avaliamos no seu Perfil da Empresa no Google e descubra o que precisa melhorar.
          </p>
        </div>

        {/* 1. Demonstração Visual: Container com Largura que Acompanha a Imagem */}
        <div className="w-full max-w-[320px] md:max-w-[350px] mx-auto select-none">
          <div
            className="relative w-full aspect-square rounded-2xl border border-neutral-200/80 bg-white p-2 shadow-xs overflow-hidden mx-auto touch-pan-y cursor-pointer"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancelOrLeave}
            onPointerLeave={handlePointerCancelOrLeave}
            aria-label="Carrossel demonstrativo dos relatórios da análise"
          >
            {/* Viewport Dedicada com Overflow Hidden Estrito */}
            <div className="w-full h-full overflow-hidden rounded-xl relative">
              {/* Slides Track */}
              <div
                className="flex h-full w-full items-center transition-transform duration-400 ease-out will-change-transform pointer-events-none"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                  WebkitTransform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {slides.map((slide, index) => (
                  <div
                    key={slide.id}
                    className="h-full w-full min-w-0 max-w-full flex items-center justify-center p-0 m-0 overflow-hidden box-border"
                    style={{
                      flex: '0 0 100%',
                      width: '100%',
                      minWidth: 0,
                      maxWidth: '100%',
                      boxSizing: 'border-box',
                    }}
                    aria-hidden={currentIndex !== index}
                  >
                    <img
                      src={slide.image}
                      srcSet={slide.srcSet}
                      sizes="(max-width: 350px) 100vw, 350px"
                      alt={slide.alt}
                      width={slide.width}
                      height={slide.height}
                      loading={index === 0 ? 'eager' : 'lazy'}
                      decoding="async"
                      className="max-w-full max-h-full w-auto h-auto object-contain rounded-xl block select-none pointer-events-none"
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Selo Centralizado */}
        <div className="flex justify-center mt-8 sm:mt-10">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#F6F3EF] border border-neutral-200 text-xs font-mono font-bold text-[#16A34A] tracking-wider uppercase">
            ANÁLISE PERSONALIZADA
          </span>
        </div>

        {/* 3. Headline Compacta */}
        <h3 className="mt-3 text-xl sm:text-2xl lg:text-[26px] font-bold tracking-tight text-[#171717] font-sans leading-snug text-center max-w-2xl mx-auto">
          Com sua Análise Estratégica você será capaz de:
        </h3>

        {/* 4. Três Cards Compactos */}
        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-[1020px] mx-auto">
          {beneficiosCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F6F3EF] border border-neutral-200/80 rounded-2xl py-6 px-5 shadow-none flex flex-col justify-start"
            >
              <div className="w-9 h-9 rounded-xl bg-white border border-[#16A34A]/25 text-[#16A34A] flex items-center justify-center mb-4 shrink-0 shadow-xs">
                <card.icon className="w-4 h-4 stroke-[2]" />
              </div>
              <p className="text-[15px] text-[#6B7280] font-sans leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {/* 5. CTA Centralizado Compacto */}
        <div className="mt-8 sm:mt-10 text-center flex justify-center">
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                (window as any).fbq('track', 'InitiateCheckout');
              }
            }}
            className="w-full sm:w-[290px] inline-flex items-center justify-center min-h-[52px] sm:min-h-[50px] py-3.5 px-4 sm:px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[15px] max-[350px]:text-[14px] sm:text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-normal sm:whitespace-nowrap leading-snug sm:leading-normal"
          >
            QUERO ATRAIR MAIS CLIENTES
          </a>
        </div>
      </div>
    </section>
  );
};
