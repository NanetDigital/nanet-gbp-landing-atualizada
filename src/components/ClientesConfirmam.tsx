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

// Curva de transição suave cubic-bezier(0.4, 0, 0.2, 1) para 3 segundos da versão 71
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

// Curva de alinhamento suave (snap) ao soltar o arraste da versão 71
function easeOutQuad(t: number): number {
  const clamped = Math.max(0, Math.min(1, t));
  return clamped * (2 - clamped);
}

// Verifica se o dispositivo possui um ponteiro fino (mouse desktop)
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
  const centerOffsetRef = useRef<number>(0);

  // Máquina de estados da animação
  const phaseRef = useRef<CarouselPhase>({ type: 'HOLD', elapsed: 0, cardIndex: 0 });

  // Flags de controle
  const isHoveredRef = useRef<boolean>(false);
  const isDraggingRef = useRef<boolean>(false);
  const isMouseDownRef = useRef<boolean>(false);
  const isTouchingRef = useRef<boolean>(false);

  // Referências para navegação mobile idêntica a DemonstracaoAnalise.tsx
  const pointerStartRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const isPointerDraggingRef = useRef<boolean>(false);

  // Controle de frames e timestamps
  const animationFrameIdRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);

  // Arraste desktop
  const dragStartXRef = useRef<number>(0);
  const dragStartOffsetRef = useRef<number>(0);

  // Mede as dimensões reais dos cards e espaçamentos no DOM
  const updateDimensions = useCallback(() => {
    let measuredDistance = 0;
    let measuredCardWidth = 0;

    if (firstSeqRef.current) {
      const seqEl = firstSeqRef.current;
      const children = seqEl.children;
      if (children.length >= 2) {
        const firstChild = children[0] as HTMLElement;
        const secondChild = children[1] as HTMLElement;
        measuredCardWidth = firstChild.offsetWidth;
        const dist = secondChild.offsetLeft - firstChild.offsetLeft;
        if (dist > 50) {
          measuredDistance = dist;
        }
      } else if (children.length === 1) {
        measuredCardWidth = (children[0] as HTMLElement).offsetWidth;
      }
      if (measuredDistance <= 0 && seqEl.offsetWidth > 0) {
        measuredDistance = seqEl.offsetWidth / 5;
      }
    }

    const viewportW = typeof window !== 'undefined' ? window.innerWidth : 1200;
    const isMobile = viewportW < 640;

    // Fallback instantâneo caso o DOM ainda esteja calculando layout
    if (measuredCardWidth <= 0) {
      measuredCardWidth = isMobile
        ? viewportW * 0.94
        : (viewportW >= 1024 ? 340 : (viewportW >= 768 ? 330 : 320));
    }
    if (measuredDistance <= 0) {
      const gap = viewportW >= 640 ? 20 : 16;
      measuredDistance = measuredCardWidth + gap;
    }

    cardDistanceRef.current = measuredDistance;
    seqWidthRef.current = measuredDistance * 5;

    // Calcula o deslocamento de centralização para mobile (< 640px)
    // No mobile, centraliza exatamente 1 card por vez na largura do container (margens de ~3% em cada lado)
    // No desktop e tablet (>= 640px), centerOffset é 0 (alinhamento padrão à esquerda)
    const containerW = containerRef.current?.offsetWidth || viewportW;
    const centerOffset = isMobile ? Math.max(0, (containerW - measuredCardWidth) / 2) : 0;
    centerOffsetRef.current = centerOffset;

    // Se estiver em estado HOLD, reposiciona suavemente no card atual sem salto
    if (phaseRef.current.type === 'HOLD') {
      offsetRef.current = phaseRef.current.cardIndex * measuredDistance;
    }

    // Inicializa a posição física na Sequência 2 (Principal)
    if (trackRef.current) {
      const initialTranslate = -(seqWidthRef.current + offsetRef.current) + centerOffsetRef.current;
      trackRef.current.style.transform = `translate3d(${initialTranslate}px, 0, 0)`;
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
    // Cancela frame anterior para garantir estritamente 1 único loop ativo
    if (animationFrameIdRef.current !== null) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
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
      const centerOffset = centerOffsetRef.current || 0;
      const currentPhase = phaseRef.current;

      // Pausa por hover EXCLUSIVAMENTE em Desktop real (>= 1024px) com cursor fino
      // No simulador mobile do AI Studio (< 1024px), hover é completamente ignorado para nunca congelar
      const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024;
      const isPausedByHover = isHoveredRef.current && hasFinePointer() && isDesktop;
      // Pausa imediata ao encostar o dedo na faixa no mobile
      const isPausedByTouch = isTouchingRef.current;
      const isPaused = isPausedByHover || isPausedByTouch;

      if (!isPaused && phaseRef.current.type !== 'DRAGGING') {
        if (currentPhase.type === 'HOLD') {
          // Pausa com o card perfeitamente alinhado: 2 segundos no mobile, 1 segundo no desktop
          currentPhase.elapsed += deltaSeconds;
          offsetRef.current = currentPhase.cardIndex * cardDistance;

          const holdDuration = isDesktop ? 1.0 : 2.0;

          if (currentPhase.elapsed >= holdDuration) {
            phaseRef.current = {
              type: 'TRANSITION',
              elapsed: 0,
              fromIndex: currentPhase.cardIndex,
              toIndex: currentPhase.cardIndex + 1,
            };
          }
        } else if (currentPhase.type === 'TRANSITION') {
          // ETAPA 2: 3 segundos de transição suave até o próximo card via cubic-bezier(0.4, 0, 0.2, 1)
          currentPhase.elapsed += deltaSeconds;
          const progress = Math.min(1, currentPhase.elapsed / 3.0);
          const eased = easeTransition(progress);
          const startX = currentPhase.fromIndex * cardDistance;
          const endX = currentPhase.toIndex * cardDistance;
          offsetRef.current = startX + (endX - startX) * eased;

          if (currentPhase.elapsed >= 3.0) {
            // ETAPA 4: Transição completada: normaliza o cardIndex de 0 a 4 e entra em HOLD de 1 segundo
            const nextIndex = ((currentPhase.toIndex % 5) + 5) % 5;
            offsetRef.current = nextIndex * cardDistance;
            phaseRef.current = {
              type: 'HOLD',
              elapsed: 0,
              cardIndex: nextIndex,
            };
          }
        } else if (currentPhase.type === 'SNAPPING') {
          // Alinhamento suave ao soltar o arraste manual
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

      // Aplica o deslocamento físico direto na GPU (3 sequências: Prepend, Principal, Append)
      if (trackRef.current) {
        const translateX = -(seqWidth + offsetRef.current) + centerOffset;
        trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }

      // Continua o loop de animação de forma ininterrupta e confiável
      animationFrameIdRef.current = requestAnimationFrame(step);
    };

    animationFrameIdRef.current = requestAnimationFrame(step);
  }, []);

  // Ciclo de vida: inicialização imediata e listeners de redimensionamento
  useEffect(() => {
    updateDimensions();

    // Inicia imediatamente o loop rAF no mount sem barreiras de bloqueio
    startLoop();

    if (typeof window === 'undefined') return;

    // Observador de redimensionamento dos cards para adaptação fluida
    const resizeObserver = new ResizeObserver(() => {
      updateDimensions();
    });

    if (firstSeqRef.current) {
      resizeObserver.observe(firstSeqRef.current);
    }
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    const handleResize = () => {
      updateDimensions();
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    // Instrumentação de diagnóstico em tempo real no console e em window.__CAROUSEL_TEST_RESULTS__
    const startTime = performance.now();
    const records: Array<{ time: string; phase: string; offset: number; left: number; transform: string }> = [];

    const captureSnapshot = (label: string) => {
      const track = trackRef.current;
      if (!track) return;
      const left = track.getBoundingClientRect().left;
      const transform = getComputedStyle(track).transform;
      const phase = phaseRef.current.type;
      const offset = offsetRef.current;
      records.push({ time: label, phase, offset, left, transform });
      console.log(`[Carrossel V71 - ${label}] Fase: ${phase} | Offset: ${offset.toFixed(1)}px | Left: ${left.toFixed(1)}px | Transform: ${transform}`);
    };

    captureSnapshot('0s (Inicial)');

    const timer2s = setTimeout(() => captureSnapshot('2s (Transição 1)'), 2000);
    const timer5s = setTimeout(() => captureSnapshot('5s (Transição 2)'), 5000);
    const timer10s = setTimeout(() => captureSnapshot('10s (Transição 3)'), 10000);
    const timer12s = setTimeout(() => {
      captureSnapshot('12s (Final)');
      const t0 = records[0];
      const t12 = records[records.length - 1];
      const deltaTotal = Math.abs(t12.left - t0.left);
      const isMoving = deltaTotal > 50;
      console.log(`[Carrossel V71 - Diagnóstico Final] Deslocamento total comprovado: ${deltaTotal.toFixed(1)}px`);
      console.log(`[Carrossel V71 - Diagnóstico Final] Status: ${isMoving ? 'MOVIMENTO ATIVO E COMPROVADO' : 'PARADO'}`);
      console.table(records);
      (window as any).__CAROUSEL_TEST_RESULTS__ = {
        records,
        deltaTotal,
        isMoving,
      };
    }, 12000);

    return () => {
      stopLoop();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      clearTimeout(timer2s);
      clearTimeout(timer5s);
      clearTimeout(timer10s);
      clearTimeout(timer12s);
    };
  }, [updateDimensions, startLoop, stopLoop]);

  // Função disparada ao soltar o arraste de mouse no Desktop
  const finishDrag = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    isHoveredRef.current = false;
    isTouchingRef.current = false;
    setIsDraggingUI(false);

    const cardDistance = cardDistanceRef.current || 340;
    const currentOffset = offsetRef.current;
    // Identifica o card mais próximo
    const nearestIndex = Math.round(currentOffset / cardDistance);
    const targetOffset = nearestIndex * cardDistance;
    const distanceToSnap = Math.abs(targetOffset - currentOffset);

    // Duração do snap proporcional à distância (entre 180ms e 320ms da versão 71)
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

  // Navegação mobile unificada idêntica a DemonstracaoAnalise.tsx
  const navigateToCard = useCallback((direction: 'next' | 'prev' | 'stay') => {
    const cardDistance = cardDistanceRef.current || 340;
    const currentOffset = offsetRef.current;
    const nearestIndex = Math.round(currentOffset / cardDistance);

    let targetIndex = nearestIndex;
    if (direction === 'next') {
      targetIndex = nearestIndex + 1;
    } else if (direction === 'prev') {
      targetIndex = nearestIndex - 1;
    }

    const targetOffset = targetIndex * cardDistance;
    const distance = Math.abs(targetOffset - currentOffset);

    // Duração suave proporcional (entre 180ms e 380ms)
    const duration = distance < 2 ? 0.05 : Math.min(0.38, Math.max(0.22, (distance / cardDistance) * 0.35));

    phaseRef.current = {
      type: 'SNAPPING',
      elapsed: 0,
      duration,
      startOffset: currentOffset,
      targetOffset,
      targetIndex,
    };
    startLoop();
  }, [startLoop]);

  // Ao pressionar (toque mobile): pausa imediatamente o autoplay
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Desktop mouse é tratado exclusivamente pelos handlers de mouse originais
    if (e.pointerType === 'mouse' || hasFinePointer()) return;

    isTouchingRef.current = true;
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: Date.now(),
    };
    isPointerDraggingRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' || hasFinePointer()) return;
    if (!pointerStartRef.current) return;

    const deltaX = Math.abs(e.clientX - pointerStartRef.current.x);
    const deltaY = Math.abs(e.clientY - pointerStartRef.current.y);

    if (deltaX > 10 || deltaY > 10) {
      isPointerDraggingRef.current = true;
    }
  };

  // Ao soltar (toque mobile): swipe, toque lateral ou soltura após segurar
  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' || hasFinePointer()) return;

    isTouchingRef.current = false;

    if (!pointerStartRef.current) {
      navigateToCard('stay');
      return;
    }

    const { x: startX, y: startY, time: startTime } = pointerStartRef.current;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;
    const duration = Date.now() - startTime;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const relativeX = clickX / rect.width;

    pointerStartRef.current = null;

    // 1. Swipe horizontal (> 40px e predominantemente horizontal para não capturar rolagem vertical)
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        // Deslizar para a esquerda: avançar para a próxima avaliação
        navigateToCard('next');
      } else {
        // Deslizar para a direita: voltar para a avaliação anterior
        navigateToCard('prev');
      }
      return;
    }

    // 2. Toque rápido nas laterais (< 250ms e sem arraste significativo)
    if (duration < 250 && !isPointerDraggingRef.current) {
      if (relativeX < 0.33) {
        // Toque rápido no lado esquerdo da faixa: voltar uma avaliação
        navigateToCard('prev');
        return;
      } else if (relativeX > 0.66) {
        // Toque rápido no lado direito da faixa: avançar uma avaliação
        navigateToCard('next');
        return;
      }
      // Toque rápido no centro (0.33 a 0.66): não mudar de avaliação
      navigateToCard('stay');
      return;
    }

    // 3. Soltura após segurar (ou toque central): reinicia contagem com 2s completos
    navigateToCard('stay');
  };

  const handlePointerCancelOrLeave = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === 'mouse' || hasFinePointer()) return;

    isTouchingRef.current = false;
    if (pointerStartRef.current) {
      pointerStartRef.current = null;
      navigateToCard('stay');
    }
  };

  // Eventos de Mouse no Desktop (Arraste e Pausa)
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!hasFinePointer()) return;
    if (e.button !== 0) return;
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

  // Pausa no hover estritamente para desktop real (>= 1024px)
  const handleMouseEnter = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;
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
      className="w-full pt-16 sm:pt-20 lg:pt-24 pb-0 bg-[#F6F3EF] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-0 sm:px-6 lg:px-8">
        <div className="space-y-8 sm:space-y-10">
          {/* Header da Seção */}
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-0">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
              Resultados de empresas que fizeram a Análise Estratégica
            </h2>
          </div>

          {/* Faixa Interativa por Etapas (Autoplay + Pointer Events Mobile + Mouse Desktop) */}
          <div
            ref={containerRef}
            className={`depoimentos-marquee-container relative w-full overflow-hidden select-none touch-pan-y ${
              isDraggingUI ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancelOrLeave}
            onPointerLeave={handlePointerCancelOrLeave}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label="Faixa de depoimentos de clientes da Nanet Digital. Deslize para navegar pelas avaliações."
          >
            <div
              ref={trackRef}
              className="depoimentos-marquee-track flex w-max items-center"
            >
              {/* Sequência 1 (Prepend para loop infinito e navegação reversa) */}
              <div
                className="flex shrink-0 items-center gap-4 sm:gap-5 pr-4 sm:pr-5"
                aria-hidden="true"
              >
                {depoimentos.map((item) => (
                  <div
                    key={`prep-${item.id}`}
                    className="w-[94vw] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 94vw, 340px"
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
                    className="w-[94vw] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 94vw, 340px"
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
                    className="w-[94vw] sm:w-[320px] md:w-[330px] lg:w-[340px] aspect-[4/3] shrink-0 flex items-center justify-center rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1"
                  >
                    <img
                      src={item.image}
                      srcSet={item.srcSet}
                      sizes="(max-width: 640px) 94vw, 340px"
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

          {/* Indicação visual discreta para mobile */}
          <div className="text-center -mt-4 sm:-mt-5">
            <p className="text-xs sm:text-sm text-neutral-500 font-sans tracking-wide select-none">
              Toque e segure para pausar · Deslize para ver
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
