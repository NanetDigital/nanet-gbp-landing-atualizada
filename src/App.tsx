/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';

// Code-splitting below-the-fold components to reduce initial JS execution and bundle size
const Oportunidade = lazy(() => import('./components/Oportunidade').then(m => ({ default: m.Oportunidade })));
const PublicoAlvo = lazy(() => import('./components/PublicoAlvo').then(m => ({ default: m.PublicoAlvo })));
const Autoridade = lazy(() => import('./components/Autoridade').then(m => ({ default: m.Autoridade })));
const Oferta = lazy(() => import('./components/Oferta').then(m => ({ default: m.Oferta })));
const DepoisDaCompra = lazy(() => import('./components/DepoisDaCompra').then(m => ({ default: m.DepoisDaCompra })));
const Garantia = lazy(() => import('./components/Garantia').then(m => ({ default: m.Garantia })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTAPosFAQ = lazy(() => import('./components/CTAPosFAQ').then(m => ({ default: m.CTAPosFAQ })));
const Rodape = lazy(() => import('./components/Rodape').then(m => ({ default: m.Rodape })));
const PoliticaPrivacidade = lazy(() => import('./components/PoliticaPrivacidade').then(m => ({ default: m.PoliticaPrivacidade })));
const TermosDeUso = lazy(() => import('./components/TermosDeUso').then(m => ({ default: m.TermosDeUso })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'privacidade' | 'termos'>('landing');
  
  // Estado para carregamento progressivo das seções mais profundas da página
  const [loadRemainingSections, setLoadRemainingSections] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    // Se a URL já contiver uma âncora/hash (ex: #oferta, #faq), carrega tudo imediatamente
    return Boolean(window.location.hash);
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacidade') {
        setCurrentPage('privacidade');
      } else if (hash === '#termos') {
        setCurrentPage('termos');
      } else if (hash) {
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

    const triggerRemaining = () => {
      setLoadRemainingSections(true);
    };

    // 1. Ao menor sinal de interação do usuário (toque, rolagem ou movimento de mouse)
    window.addEventListener('scroll', triggerRemaining, { passive: true, once: true });
    window.addEventListener('touchstart', triggerRemaining, { passive: true, once: true });
    window.addEventListener('mousemove', triggerRemaining, { passive: true, once: true });

    // 2. Ou após o carregamento inicial quando o navegador estiver ocioso
    let idleId: number | null = null;
    let timeoutId: number | null = null;

    if ('requestIdleCallback' in window) {
      idleId = (window as any).requestIdleCallback(triggerRemaining, { timeout: 1500 });
    } else {
      timeoutId = setTimeout(triggerRemaining, 1200) as unknown as number;
    }

    return () => {
      window.removeEventListener('scroll', triggerRemaining);
      window.removeEventListener('touchstart', triggerRemaining);
      window.removeEventListener('mousemove', triggerRemaining);
      if (idleId !== null && 'cancelIdleCallback' in window) {
        (window as any).cancelIdleCallback(idleId);
      }
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
    };
  }, [loadRemainingSections]);

  const navigateTo = (page: 'landing' | 'privacidade' | 'termos') => {
    setCurrentPage(page);
    if (page === 'landing') {
      if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
      }
      window.scrollTo(0, 0);
    } else {
      window.location.hash = `#${page}`;
      window.scrollTo(0, 0);
    }
  };

  if (currentPage === 'privacidade') {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
        <Suspense fallback={null}>
          <PoliticaPrivacidade onBack={() => navigateTo('landing')} />
        </Suspense>
      </div>
    );
  }

  if (currentPage === 'termos') {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
        <Suspense fallback={null}>
          <TermosDeUso onBack={() => navigateTo('landing')} />
        </Suspense>
      </div>
    );
  }

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

        {/* 3. Seções mais profundas da página, carregadas progressivamente */}
        {loadRemainingSections && (
          <Suspense fallback={null}>
            {/* Qualificação de Público: Para quem é */}
            <PublicoAlvo />

            {/* 4. Oferta: SUA ANÁLISE ESTRATÉGICA COMPLETA */}
            <Oferta />

            {/* Nova Seção: Depois da compra, é simples */}
            <DepoisDaCompra />

            {/* Nova Seção: Garantia sem risco */}
            <Garantia />

            {/* Autoridade: Quem está por trás da sua análise */}
            <Autoridade />

            {/* Perguntas Frequentes */}
            <FAQ />

            {/* Nova Seção: CTA Final de Fechamento */}
            <CTAPosFAQ />

            {/* Rodapé */}
            <Rodape onNavigate={navigateTo} />
          </Suspense>
        )}
      </main>
    </div>
  );
}

