/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, lazy, Suspense } from 'react';
import { Hero } from './components/Hero';

// Code-splitting below-the-fold components to reduce initial JS execution and bundle size
const Oportunidade = lazy(() => import('./components/Oportunidade').then(m => ({ default: m.Oportunidade })));
const Problema = lazy(() => import('./components/Problema').then(m => ({ default: m.Problema })));
const Solucao = lazy(() => import('./components/Solucao').then(m => ({ default: m.Solucao })));
const ComoFunciona = lazy(() => import('./components/ComoFunciona').then(m => ({ default: m.ComoFunciona })));
const OQueVoceRecebe = lazy(() => import('./components/OQueVoceRecebe').then(m => ({ default: m.OQueVoceRecebe })));
const Provas = lazy(() => import('./components/Provas').then(m => ({ default: m.Provas })));
const Oferta = lazy(() => import('./components/Oferta').then(m => ({ default: m.Oferta })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const CTAFinal = lazy(() => import('./components/CTAFinal').then(m => ({ default: m.CTAFinal })));
const Duvidas = lazy(() => import('./components/Duvidas').then(m => ({ default: m.Duvidas })));
const Rodape = lazy(() => import('./components/Rodape').then(m => ({ default: m.Rodape })));
const WhatsAppFloating = lazy(() => import('./components/WhatsAppFloating').then(m => ({ default: m.WhatsAppFloating })));
const PoliticaPrivacidade = lazy(() => import('./components/PoliticaPrivacidade').then(m => ({ default: m.PoliticaPrivacidade })));
const TermosDeUso = lazy(() => import('./components/TermosDeUso').then(m => ({ default: m.TermosDeUso })));

export default function App() {
  const [currentPage, setCurrentPage] = useState<'landing' | 'privacidade' | 'termos'>('landing');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#privacidade') {
        setCurrentPage('privacidade');
      } else if (hash === '#termos') {
        setCurrentPage('termos');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
          <WhatsAppFloating />
        </Suspense>
      </div>
    );
  }

  if (currentPage === 'termos') {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
        <Suspense fallback={null}>
          <TermosDeUso onBack={() => navigateTo('landing')} />
          <WhatsAppFloating />
        </Suspense>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans antialiased">
      {/* Main Container rendering all production components */}
      <main className="w-full">
        {/* 1. Hero - Eagerly loaded for instant LCP */}
        <Hero />

        {/* Below-the-fold content loaded asynchronously */}
        <Suspense fallback={null}>
          {/* 2. Oportunidade */}
          <Oportunidade />

          {/* 3. Problema */}
          <Problema />

          {/* 4. Solução */}
          <Solucao />

          {/* 5. Como Funciona */}
          <ComoFunciona />

          {/* 6. O que Você Recebe */}
          <OQueVoceRecebe />

          {/* 7. Provas */}
          <Provas />

          {/* 8. Oferta */}
          <Oferta />

          {/* 9. FAQ */}
          <FAQ />

          {/* 10. CTA Final */}
          <CTAFinal />

          {/* 11. Seção de Dúvidas / CTA Secundário */}
          <Duvidas />

          {/* 12. Rodapé */}
          <Rodape onNavigate={navigateTo} />
        </Suspense>
      </main>

      {/* Botão Flutuante de WhatsApp */}
      <Suspense fallback={null}>
        <WhatsAppFloating />
      </Suspense>
    </div>
  );
}

