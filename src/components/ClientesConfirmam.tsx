import React, { useState, useRef, useEffect, useCallback } from 'react';

interface DepoimentoItem {
  id: string;
  autor: string;
  image: string;
  srcSet: string;
  alt: string;
}

const depoimentos: DepoimentoItem[] = [
  {
    id: 'thalita',
    autor: 'Thalita Traspadini Modolo',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791497189/1_Thalita_yqoexh.jpg',
    srcSet: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1791497189/1_Thalita_yqoexh.jpg 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791497189/1_Thalita_yqoexh.jpg 640w',
    alt: 'Depoimento de Thalita Traspadini Modolo - Avaliação de cliente da Nanet Digital',
  },
  {
    id: 'helder',
    autor: 'Helder',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791499396/Cards_de_depoimentos_da_Nanet_Digital_1_a9ia03.jpg',
    srcSet: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1791499396/Cards_de_depoimentos_da_Nanet_Digital_1_a9ia03.jpg 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791499396/Cards_de_depoimentos_da_Nanet_Digital_1_a9ia03.jpg 640w',
    alt: 'Depoimento de Helder - Avaliação de cliente da Nanet Digital',
  },
  {
    id: 'saren',
    autor: 'Empório Saren',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791497710/Cards_de_depoimentos_da_Nanet_Digital_cya3gs.jpg',
    srcSet: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1791497710/Cards_de_depoimentos_da_Nanet_Digital_cya3gs.jpg 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791497710/Cards_de_depoimentos_da_Nanet_Digital_cya3gs.jpg 640w',
    alt: 'Depoimento do Empório Saren - Avaliação de cliente da Nanet Digital',
  },
  {
    id: 'erik',
    autor: 'Erik',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791497189/4_Erik_o5bfk8.jpg',
    srcSet: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1791497189/4_Erik_o5bfk8.jpg 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791497189/4_Erik_o5bfk8.jpg 640w',
    alt: 'Depoimento de Erik - Avaliação de cliente da Nanet Digital',
  },
  {
    id: 'cleiton',
    autor: 'Cleiton de Souza Porto',
    image: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1791497189/6_Cleiton_rv4uhk.jpg',
    srcSet: 'https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1791497189/6_Cleiton_rv4uhk.jpg 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791497189/6_Cleiton_rv4uhk.jpg 640w',
    alt: 'Depoimento de Cleiton de Souza Porto - Avaliação de cliente da Nanet Digital',
  },
];

// Curva de transição suave cubic-bezier(0.4, 0, 0.2, 1) para 3 segundos
function easeTransition(t: number): number {
  if (t <= 0) return 0;
  if (t >= 1) return 1;
  const p1x = 0.4, p1y = 0.0, p2x = 0.2, p2y = 1.0;
  const cx = 3 * p1x;
  const bx = 3 * (p2x - p1x) - cx;
  const ax = 1 - cx - bx;
  const cy = 3 * p1y;
  const by = 3 * (p2y - p1y) - cy;
  const ay = 1 - cy - by;

  let x = t;
  for (let i = 0; i < 5; i++) {
    const currentX = ((ax * x + bx) * x + cx) * x;
    const dx = (3 * ax * x + 2 * bx) * x + cx;
    if (Math.abs(dx) < 1e-6) break;
    x -= (currentX - t) / dx;
  }
  x = Math.max(0, Math.min(1, x));
  return ((ay * x + by) * x + cy) * x;
}

// Curva de alinhamento suave (snap) ao soltar o arraste
function easeOutQuad(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * (2 - clamped);
}

// Verifica se o dispositivo possui um ponteiro fino (mouse real) e suporte a hover
function hasFinePointer(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(hover: hover) and (pointer: fine)').matches;
}

type CarouselPhase =
  | { type: 'HOLD'; elapsed: number; cardIndex: number }
  | { type: 'TRANSITION'; elapsed: number; fromIndex: number; toIndex: number }
  | { type: 'DRAGGING' }
  | { type: 'SNAPPING'; elapsed: number; duration: number; startOffset: number; targetOffset: number; targetIndex: number };

export const ClientesConfirmam: React.FC = () => {
  const [isDraggingUI, setIsDraggingUI] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const firstSeqRef = useRef<HTMLDivElement>(null);

  // Offset e dimensões físicas
  const offsetRef = useRef<number>(0);
  const seqWidthRef = useRef<number>(1700);
  const cardDistanceRef = useRef<number>(340);

  // Máquina de estados da animação
  const phaseRef = useRef<CarouselPhase>({ type: 'HOLD', elapsed: 0, cardIndex: 0 });

  // Flags de controle
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const isMouseDownRef = useRef<boolean>(false);

  // Visibilidade, animação e acessibilidade
  const isIntersectingRef = useRef<boolean>(false);
  const isDocumentVisibleRef = useRef<boolean>(true);
  const prefersReducedMotionRef = useRef<boolean>(false);
  const animationFrameIdRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Arraste
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);
  const touchStartXRef = useRef<number>(0);
  const touchStartYRef = useRef<number>(0);
  const touchDirectionRef = useRef<'horizontal' | 'vertical' | null>(null);

  // Mede as dimensões reais dos cards e espaçamentos no DOM
  const updateDimensions = useCallback(() => {
    let measuredDistance = 0;
    if (firstSeqRef.current) {
      const seqEl = firstSeqRef.current;
      const children = seqEl.children;
      if (children.length >= 2) {
        const firstChild = children[0] as HTMLElement;
        const secondChild = children[1] as HTMLElement;
        const dist = secondChild.offsetLeft - firstChild.offsetLeft;
        if (dist > 50) {
          measuredDistance = dist;
        }
      } else if (seqEl.offsetWidth > 0) {
        measuredDistance = seqEl.offsetWidth / 5;
      }
    }
    // Fallback inteligente caso ainda não calculado
    if (measuredDistance <= 0 && typeof window !== 'undefined') {
      const viewportW = window.innerWidth || 1200;
      const cardW = Math.min(viewportW * 0.82, viewportW >= 1024 ? 340 : (viewportW >= 768 ? 330 : 320));
      const gap = viewportW >= 640 ? 20 : 16;
      measuredDistance = cardW + gap;
    }
    if (measuredDistance > 0) {
      cardDistanceRef.current = measuredDistance;
      // 5 cards por sequência, o loop perfeito ocorre exatamente em 5 * cardDistance
      seqWidthRef.current = measuredDistance * 5;
    }
  }, []);

  const stopLoop = useCallback(() => {
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
    lastTimestampRef.current = null;
    if (trackRef.current) {
      trackRef.current.style.willChange = 'auto';
    }
  }, []);

  const startLoop = useCallback(() => {
    if (animationFrameIdRef.current !== null) return;
    if (!isIntersectingRef.current || !isDocumentVisibleRef.current || prefersReducedMotionRef.current) {
      return;
    }

    if (trackRef.current) {
      trackRef.current.style.willChange = 'transform';
    }

    lastTimestampRef.current = null;

    const step = (timestamp: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = timestamp;
      }
      const deltaSeconds = Math.min((timestamp - lastTimestampRef.current) / 1000, 0.1);
      lastTimestampRef.current = timestamp;

      const cardDistance = cardDistanceRef.current || 340;
      const seqWidth = seqWidthRef.current || cardDistance * 5;

      const currentPhase = phaseRef.current;

      // Pausa por hover exclusivamente se tiver ponteiro fino (mouse desktop)
      const isPausedByHover = isHoveredRef.current && hasFinePointer();

      if (!isPausedByHover) {
        if (currentPhase.type === 'HOLD') {
          // 1 segundo de pausa com o card perfeitamente alinhado
          currentPhase.elapsed += deltaSeconds;
          offsetRef.current = currentPhase.cardIndex * cardDistance;

          if (currentPhase.elapsed >= 1.0) {
            phaseRef.current = {
              type: 'TRANSITION',
              elapsed: 0,
              fromIndex: currentPhase.cardIndex,
              toIndex: currentPhase.cardIndex + 1,
            };
          }
        } else if (currentPhase.type === 'TRANSITION') {
          // 3 segundos de transição suave até o próximo card
          currentPhase.elapsed += deltaSeconds;
          const progress = Math.min(1, currentPhase.elapsed / 3.0);
          const eased = easeTransition(progress);
          const startX = currentPhase.fromIndex * cardDistance;
          const endX = currentPhase.toIndex * cardDistance;
          offsetRef.current = startX + (endX - startX) * eased;

          if (currentPhase.elapsed >= 3.0) {
            // Transição completada: normaliza o cardIndex e entra em HOLD de 1 segundo
            const nextIndex = ((currentPhase.toIndex % 5) + 5) % 5;
            offsetRef.current = nextIndex * cardDistance;
            phaseRef.current = {
              type: 'HOLD',
              elapsed: 0,
              cardIndex: nextIndex,
            };
          }
        } else if (currentPhase.type === 'SNAPPING') {
          // Alinhamento suave ao soltar o arraste
          currentPhase.elapsed += deltaSeconds;
          const progress = Math.min(1, currentPhase.elapsed / currentPhase.duration);
          const eased = easeOutQuad(progress);
          offsetRef.current = currentPhase.startOffset + (currentPhase.targetOffset - currentPhase.startOffset) * eased;

          if (currentPhase.elapsed >= currentPhase.duration) {
            const normalizedIndex = ((currentPhase.targetIndex % 5) + 5) % 5;
            offsetRef.current = normalizedIndex * cardDistance;
            phaseRef.current = {
              type: 'HOLD',
              elapsed: 0,
              cardIndex: normalizedIndex,
            };
          }
        }
      }

      // Aplica o deslocamento físico na GPU (3 sequências: Prepend, Principal, Append)
      if (trackRef.current) {
        const translateX = -(seqWidth + offsetRef.current);
        trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      if (isIntersectingRef.current && isDocumentVisibleRef.current && !prefersReducedMotionRef.current) {
        animationFrameIdRef.current = requestAnimationFrame(step);
      } else {
        stopLoop();
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(step);
  }, [stopLoop]);

  // Ciclo de vida com IntersectionObserver, visibilidade e redimensionamento
  useEffect(() => {
    updateDimensions();

    if (typeof window === 'undefined') return;

    // 1. Verificação de preferência por redução de movimento
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = (e: MediaQueryListEvent) => {
      prefersReducedMotionRef.current = e.matches;
      if (e.matches) {
        stopLoop();
      } else if (isIntersectingRef.current && isDocumentVisibleRef.current) {
        startLoop();
      }
    };

    mediaQuery.addEventListener('change', handleMotionChange);

    // 2. Pausa quando a aba do navegador estiver oculta
    const handleVisibilityChange = () => {
      const isVisible = !document.hidden;
      isDocumentVisibleRef.current = isVisible;
      if (isVisible) {
        if (isIntersectingRef.current && !prefersReducedMotionRef.current) {
          startLoop();
        }
      } else {
        stopLoop();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 3. IntersectionObserver: executa exclusivamente quando a seção está próxima ou na viewport
    const target = containerRef.current;
    let observer: IntersectionObserver | null = null;

    if (target && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isIntersecting = entry.isIntersecting;
          isIntersectingRef.current = isIntersecting;

          if (isIntersecting) {
            updateDimensions();
            if (isDocumentVisibleRef.current && !prefersReducedMotionRef.current) {
              startLoop();
            }
          } else {
            stopLoop();
          }
        },
        {
          root: null,
          rootMargin: '200px 0px', // Retoma suavemente 200px antes de entrar no viewport
          threshold: 0,
        }
      );
      observer.observe(target);
    } else {
      isIntersectingRef.current = true;
      startLoop();
    }

    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (firstSeqRef.current) {
      resizeObserver.observe(firstSeqRef.current);
    }

    const handleResize = () => {
      updateDimensions();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      stopLoop();
      mediaQuery.removeEventListener('change', handleMotionChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (observer) observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [updateDimensions, startLoop, stopLoop]);

  // Função disparada ao soltar o arraste (Touch ou Mouse)
  const finishDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    isHoveredRef.current = false;
    setIsDraggingUI(false);

    const cardDistance = cardDistanceRef.current || 340;
    const currentOffset = offsetRef.current;
    // Identifica o card mais próximo
    const nearestIndex = Math.round(currentOffset / cardDistance);
    const targetOffset = nearestIndex * cardDistance;
    const distanceToSnap = Math.abs(targetOffset - currentOffset);

    // Duração do snap proporcional à distância (entre 180ms e 320ms)
    const duration = distanceToSnap < 2 ? 0.05 : Math.min(0.32, Math.max(0.18, (distanceToSnap / cardDistance) * 0.32));

    phaseRef.current = {
      type: 'SNAPPING',
      elapsed: 0,
      duration,
      startOffset: currentOffset,
      targetOffset,
      targetIndex: nearestIndex,
    };
    startLoop();
  }, [startLoop]);

  // Eventos de Toque no Mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    isHoveredRef.current = false;
    if (e.touches.length !== 1) return;
    touchStartXRef.current = e.touches[0].clientX;
    touchStartYRef.current = e.touches[0].clientY;
    touchDirectionRef.current = null;
    dragStartOffsetRef.current = offsetRef.current;
    dragStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    if (touchDirectionRef.current === null) {
      const diffX = Math.abs(currentX - touchStartXRef.current);
      const diffY = Math.abs(currentY - touchStartYRef.current);

      if (diffX < 6 && diffY < 6) return;

      if (diffY >= diffX) {
        // Gesto vertical: preserva 100% a rolagem vertical padrão da página
        touchDirectionRef.current = 'vertical';
        return;
      } else {
        // Gesto horizontal: assume o controle do carrossel
        touchDirectionRef.current = 'horizontal';
        isDraggingRef.current = true;
        setIsDraggingUI(true);
        phaseRef.current = { type: 'DRAGGING' };
        dragStartOffsetRef.current = offsetRef.current;
        dragStartXRef.current = currentX;
      }
    }

    if (touchDirectionRef.current === 'horizontal' && isDraggingRef.current) {
      const delta = currentX - dragStartXRef.current;
      offsetRef.current = dragStartOffsetRef.current - delta;
    }
  };

  const handleTouchEnd = () => {
    isHoveredRef.current = false;
    if (touchDirectionRef.current === 'horizontal') {
      finishDrag();
    }
    touchDirectionRef.current = null;
  };

  // Eventos de Mouse no Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!hasFinePointer()) return;
    if (e.button !== 0) return; // Apenas botão principal (esquerdo)
    isMouseDownRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartOffsetRef.current = offsetRef.current;
  };

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isMouseDownRef.current) return;
      const delta = e.clientX - dragStartXRef.current;

      if (!isDraggingRef.current && Math.abs(delta) > 3) {
        isDraggingRef.current = true;
        setIsDraggingUI(true);
        phaseRef.current = { type: 'DRAGGING' };
        dragStartOffsetRef.current = offsetRef.current;
        dragStartXRef.current = e.clientX;
      }

      if (isDraggingRef.current) {
        offsetRef.current = dragStartOffsetRef.current - (e.clientX - dragStartXRef.current);
      }
    };

    const onMouseUp = () => {
      if (isMouseDownRef.current) {
        isMouseDownRef.current = false;
        if (isDraggingRef.current) {
          finishDrag();
        }
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [finishDrag]);

  // Pausa automática no hover do mouse (Desktop exclusivo com mouse real)
  const handleMouseEnter = () => {
    if (!hasFinePointer()) return;
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <section
      id="clientes-confirmam"
      aria-label="Depoimentos de clientes da Nanet"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F6F3EF] border-b border-neutral-200/80 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10">
          {/* Header da Seção */}
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
              Resultados de empresas que fizeram a Análise Estratégica
            </h2>
          </div>

          {/* Faixa Contínua Interativa */}
          <div
            ref={containerRef}
            className={`depoimentos-marquee-container relative w-full overflow-hidden select-none ${
              isDraggingUI ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Faixa de depoimentos de clientes da Nanet Digital. Deslize para voltar às avaliações anteriores."
          >
            <div
              ref={trackRef}
              className="depoimentos-marquee-track flex w-max items-center"
              style={{ transform: 'translate3d(-33.333333%, 0, 0)' }}
            >
              {/* Sequência 1 (Prepend para loop e arraste para avaliações anteriores) */}
              <div
                className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
                aria-hidden="true"
              >
                {depoimentos.map((item) => (
                  <div
                    key={`prep-${item.id}`}
                    className="w-[min(82vw,320px)] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 300px, 340px"
                      alt=""
                      width={340}
                      height={255}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-contain select-none pointer-events-none block rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Sequência 2 (Principal - 5 avaliações ordenadas) */}
              <div
                ref={firstSeqRef}
                className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
              >
                {depoimentos.map((item) => (
                  <div
                    key={`orig-${item.id}`}
                    className="w-[min(82vw,320px)] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 300px, 340px"
                      alt={item.alt}
                      width={340}
                      height={255}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-contain select-none pointer-events-none block rounded-xl"
                    />
                  </div>
                ))}
              </div>

              {/* Sequência 3 (Append para loop contínuo infinito) */}
              <div
                className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
                aria-hidden="true"
              >
                {depoimentos.map((item) => (
                  <div
                    key={`app-${item.id}`}
                    className="w-[min(82vw,320px)] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 300px, 340px"
                      alt=""
                      width={340}
                      height={255}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="w-full h-full object-contain select-none pointer-events-none block rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
