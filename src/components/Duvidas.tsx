import React from 'react';

export const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <img
    src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_100/v1785817194/Design_sem_nome_3_uih02c.png"
    alt="WhatsApp"
    width={24}
    height={24}
    loading="lazy"
    decoding="async"
    className={`${className} object-contain shrink-0 block pointer-events-none`}
  />
);

export const WHATSAPP_URL = `https://wa.me/5527998752912?text=${encodeURIComponent(
  'Olá! Gostaria de tirar algumas dúvidas sobre a Análise Estratégica da Empresa antes de contratar.'
)}`;

export const Duvidas: React.FC = () => {
  return (
    <section
      id="duvidas"
      className="w-full py-16 sm:py-24 bg-neutral-50/70 dark:bg-neutral-900/40 text-neutral-900 dark:text-neutral-100 border-b border-neutral-200/60 dark:border-neutral-800"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
          Ainda ficou com alguma dúvida?
        </h2>

        {/* Texto */}
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans max-w-xl mx-auto leading-relaxed">
          Converse diretamente com um especialista e entenda como funciona a Análise Estratégica antes de tomar sua decisão.
        </p>

        {/* Botão */}
        <div className="pt-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-[52px] px-7 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-sm sm:text-base font-semibold border border-[#16A34A] transition-all duration-250 ease-out hover:-translate-y-[2px] shadow-xs hover:shadow-sm active:translate-y-0 cursor-pointer"
          >
            <WhatsAppIcon className="w-5 h-5 sm:w-[20px] sm:h-[20px] shrink-0" />
            <span>Falar com um especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
};
