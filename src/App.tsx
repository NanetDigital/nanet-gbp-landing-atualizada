/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  Hero,
  Oportunidade,
  Problema,
  Solucao,
  ComoFunciona,
  OQueVoceRecebe,
  Provas,
  Oferta,
  FAQ,
  CTAFinal,
  Duvidas,
  WhatsAppFloating,
  Rodape,
  PoliticaPrivacidade,
  TermosDeUso,
} from './components';

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
        <PoliticaPrivacidade onBack={() => navigateTo('landing')} />
        <WhatsAppFloating />
      </div>
    );
  }

  if (currentPage === 'termos') {
    return (
      <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased">
        <TermosDeUso onBack={() => navigateTo('landing')} />
        <WhatsAppFloating />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 selection:bg-neutral-200 dark:selection:bg-neutral-800 font-sans antialiased">
      {/* Main Container rendering all production components */}
      <main className="w-full">
        {/* 1. Hero */}
        <Hero />

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
      </main>

      {/* Botão Flutuante de WhatsApp */}
      <WhatsAppFloating />
    </div>
  );
}

