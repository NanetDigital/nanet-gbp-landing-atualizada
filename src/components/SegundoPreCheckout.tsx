import React from 'react';
import { PreCheckoutCard } from './PreCheckoutCard';

export const SegundoPreCheckout: React.FC = () => {
  return (
    <section
      aria-label="Análise Algoritmo Mais - Pré-checkout"
      className="w-full py-14 sm:py-16 lg:py-20 bg-[#F5F5F5] border-b border-neutral-200/80"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <PreCheckoutCard />
      </div>
    </section>
  );
};
