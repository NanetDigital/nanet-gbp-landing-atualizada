/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';

// Code-splitting below-the-fold components to reduce initial JS execution and bundle size
const Oportunidade = lazy(() => import('./components/Oportunidade').then(m => ({ default: m.Oportunidade })));
const PublicoAlvo = lazy(() => import('./components/PublicoAlvo').then(m => ({ default: m.PublicoAlvo })));
const FaixaTransicaoOferta = lazy(() => import('./components/FaixaTransicaoOferta').then(m => ({ default: m.FaixaTransicaoOferta })));
const Autoridade = lazy(() => import('./components/Autoridade').then(m => ({ default: m.Autoridade })));
const SegundoPreCheckout = lazy(() => import('./components/SegundoPreCheckout').then(m => ({ default: m.SegundoPreCheckout })));
const Oferta = lazy(() => import('./components/Oferta').then(m => ({ default: m.Oferta })));
const DepoisDaCompra = lazy(() => import('./components/DepoisDaCompra').then(m => ({ default: m.DepoisDaCompra })));
const Garantia = lazy(() => import('./components/Garantia').then(m => ({ default: m.Garantia })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Rodape = lazy(() => import('./components/Rodape').then(m => ({ default: m.Rodape })));

export default function App() {
  
  // Estado para carregamento progressivo das seções mais profundas da página
  const [loadRemainingSections, setLoadRemainingSections] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Se a URL já contiver uma âncora/hash (ex: #oferta, #faq), carrega tudo imediatamente
    return Boolean(window.location.hash);
  });

  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        setLoadRemainingSections(true);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Disparo progressivo em segundo plano das seções mais profundas
  useEffect(() => {
    if (loadRemainingSections) return;

    let triggered = false;
    let idleId: number | null = null;
    let timeoutId: number | null = null;
    let observer: IntersectionObserver | null = null;

    const triggerRemaining = () => {
      if (triggered) return;
      triggered = true;
      setLoadRemainingSections(true);
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('scroll', triggerRemaining);
      window.removeEventListener('touchstart', triggerRemaining);
      window.removeEventListener('touchmove', triggerRemaining);
      window.removeEventListener('wheel', triggerRemaining);
      window.removeEventListener('keydown', triggerRemaining);
      window.removeEventListener('pointerdown', triggerRemaining);
      window.removeEventListener('load', scheduleIdle);
      if (observer) {
        observer.disconnect();
        observer = null;
      }
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleId);
        idleId = null;
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };

    // 1. Ao menor sinal de interação ou intenção do usuário
    window.addEventListener('scroll', triggerRemaining, { passive: true, once: true });
    window.addEventListener('touchstart', triggerRemaining, { passive: true, once: true });
    window.addEventListener('touchmove', triggerRemaining, { passive: true, once: true });
    window.addEventListener('wheel', triggerRemaining, { passive: true, once: true });
    window.addEventListener('keydown', triggerRemaining, { passive: true, once: true });
    window.addEventListener('pointerdown', triggerRemaining, { passive: true, once: true });

    // 2. Disparo por aproximação visual via IntersectionObserver (1000px antes das seções profundas)
    if (typeof IntersectionObserver !== 'undefined' && sentinelRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            triggerRemaining();
          }
        },
        { rootMargin: '1000px 0px' }
      );
      observer.observe(sentinelRef.current);
    }

    // 3. Fallback ocioso seguro: pós-carregamento inicial sem disputa de banda com a primeira dobra
    const scheduleIdle = () => {
      if (triggered) return;
      if ('requestIdleCallback' in window) {
        idleId = (window as any).requestIdleCallback(triggerRemaining, { timeout: 4500 });
      } else {
        timeoutId = setTimeout(triggerRemaining, 4000) as unknown as number;
      }
    };

    if (document.readyState === 'complete') {
      scheduleIdle();
    } else {
      window.addEventListener('load', scheduleIdle, { once: true });
    }

    return cleanup;
  }, [loadRemainingSections]);

  return (
    <div className="min-h-screen bg-white text-[#171717] selection:bg-neutral-200 font-sans antialiased">
      {/* Main Container rendering all production components */}
      <main className="w-full">
        {/* 1. Hero - Crítico e síncrono para entrega instantânea do LCP */}
        <Hero />

        {/* 2. Oportunidade (Demonstração, Avaliações, Entregáveis, Bônus) carregado logo abaixo */}
        <Suspense fallback={null}>
          <Oportunidade />
        </Suspense>

        {/* Marcador sentinel para antecipar carregamento das seções profundas por proximidade de rolagem */}
        <div ref={sentinelRef} className="w-full h-px pointer-events-none" aria-hidden="true" />

        {/* 3. Seções mais profundas da página, carregadas progressivamente */}
        {loadRemainingSections && (
          <Suspense fallback={null}>
            {/* Qualificação de Público: Para quem é */}
            <PublicoAlvo />

            {/* Faixa de transição entre Público-Alvo e Oferta */}
            <FaixaTransicaoOferta />

            {/* 4. Oferta: SUA ANÁLISE ESTRATÉGICA COMPLETA */}
            <Oferta />

            {/* Nova Seção: Depois da compra, é simples */}
            <DepoisDaCompra />

            {/* Nova Seção: Garantia sem risco */}
            <Garantia />

            {/* Autoridade: Quem está por trás da sua análise */}
            <Autoridade />

            {/* Segundo Pré-checkout idêntico ao original */}
            <SegundoPreCheckout />

            {/* Perguntas Frequentes */}
            <FAQ />

            {/* Rodapé */}
            <Rodape />
          </Suspense>
        )}
      </main>
    </div>
  );
}

