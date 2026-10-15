import React from 'react';
import { RodapeData } from '../types/landing';
import { WHATSAPP_URL, WhatsAppIcon } from './Duvidas';

export interface RodapeProps {
  data?: Partial<RodapeData>;
  onNavigate?: (page: 'landing' | 'privacidade' | 'termos') => void;
}

const defaultData: RodapeData = {
  brandName: 'Nanet Digital',
  copyright: '© 2026 Nanet Digital. Todos os direitos reservados.',
  links: [
    'Política de Privacidade',
    'Termos de Uso',
    'WhatsApp Suporte',
  ],
  disclaimer:
    'Este site não é afiliado ao Google. Os resultados dependem das condições de cada empresa e da aplicação das recomendações.',
};

export const Rodape: React.FC<RodapeProps> = ({ data = {}, onNavigate }) => {
  const footerData = { ...defaultData, ...data };

  const handleLinkClick = (link: string) => {
    if (link === 'Política de Privacidade') {
      if (onNavigate) {
        onNavigate('privacidade');
      } else {
        window.location.hash = '#privacidade';
      }
    } else if (link === 'Termos de Uso') {
      if (onNavigate) {
        onNavigate('termos');
      } else {
        window.location.hash = '#termos';
      }
    }
  };

  return (
    <footer
      id="rodape"
      aria-label="Rodapé institucional Nanet Digital"
      className="w-full py-8 sm:py-10 bg-[#171C24] text-[#B8C0CC] border-t border-[#39414C]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* ========================================================== */}
        {/* 1. LAYOUT DESKTOP (3 Colunas Horizontais)                  */}
        {/* ========================================================== */}
        <div className="hidden md:grid md:grid-cols-3 items-start gap-8 pb-6 border-b border-[#39414C]">
          
          {/* COLUNA 1: IDENTIFICAÇÃO (Alinhada à esquerda) */}
          <div className="flex flex-col items-start space-y-1.5 text-left">
            <div className="flex items-center pb-0.5">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_260/v1785814782/Design_sem_nome_3_esxy36.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_130/v1785814782/Design_sem_nome_3_esxy36.png 1x, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_260/v1785814782/Design_sem_nome_3_esxy36.png 2x"
                alt="Nanet Digital"
                width={120}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-[110px] sm:w-[120px] h-auto object-contain block brightness-0 invert opacity-95"
              />
            </div>
            <span className="text-[14px] font-semibold text-[#F3F4F6] font-sans">
              Análise Estratégica da Empresa
            </span>
            <span className="text-[12px] text-[#B8C0CC] font-mono">
              CNPJ: 65.262.598/0001-32
            </span>
          </div>

          {/* COLUNA 2: RECURSOS (Centralizada) */}
          <div className="flex flex-col items-center space-y-2 text-center">
            <span className="text-[15px] font-semibold text-[#F3F4F6] font-sans tracking-tight">
              Recursos
            </span>
            <div className="flex flex-col space-y-1.5 text-[13px] font-sans">
              <button
                type="button"
                onClick={() => handleLinkClick('Política de Privacidade')}
                className="text-[#D1D5DB] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-center"
              >
                Política de Privacidade
              </button>
              <button
                type="button"
                onClick={() => handleLinkClick('Termos de Uso')}
                className="text-[#D1D5DB] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 text-center"
              >
                Termos de Uso
              </button>
            </div>
          </div>

          {/* COLUNA 3: SUPORTE (Alinhada à direita) */}
          <div className="flex flex-col items-end justify-start text-right pt-0.5">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4ADE80] hover:text-[#22c55e] transition-colors"
            >
              <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
              <span>WhatsApp Suporte</span>
            </a>
          </div>

        </div>

        {/* ========================================================== */}
        {/* 2. LAYOUT MOBILE (Coluna Única Centralizada)               */}
        {/* ========================================================== */}
        <div className="md:hidden flex flex-col space-y-5">
          
          {/* BLOCO 1: IDENTIFICAÇÃO (Centralizado) */}
          <div className="flex flex-col items-center text-center space-y-1.5">
            <div className="flex items-center pb-0.5">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_260/v1785814782/Design_sem_nome_3_esxy36.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_130/v1785814782/Design_sem_nome_3_esxy36.png 1x, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_260/v1785814782/Design_sem_nome_3_esxy36.png 2x"
                alt="Nanet Digital"
                width={120}
                height={32}
                loading="lazy"
                decoding="async"
                className="w-[110px] h-auto object-contain block brightness-0 invert opacity-95"
              />
            </div>
            <span className="text-[14px] font-semibold text-[#F3F4F6] font-sans">
              Análise Estratégica da Empresa
            </span>
            <span className="text-[12px] text-[#B8C0CC] font-mono">
              CNPJ: 65.262.598/0001-32
            </span>
          </div>

          {/* DIVISÓRIA MOBILE 1 */}
          <div className="w-full h-px bg-[#39414C]" />

          {/* BLOCO 2: RECURSOS E CONTATO (Centralizado) */}
          <div className="flex flex-col items-center text-center space-y-2.5">
            <span className="text-[15px] font-semibold text-[#F3F4F6] font-sans tracking-tight">
              Recursos
            </span>
            
            {/* Links lado a lado na mesma linha com quebra natural */}
            <div className="flex flex-wrap items-center justify-center gap-x-2 text-[13px] font-sans text-[#D1D5DB] leading-relaxed">
              <button
                type="button"
                onClick={() => handleLinkClick('Política de Privacidade')}
                className="text-[#D1D5DB] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
              >
                Política de Privacidade
              </button>
              <span className="text-[#39414C] select-none">·</span>
              <button
                type="button"
                onClick={() => handleLinkClick('Termos de Uso')}
                className="text-[#D1D5DB] hover:text-white transition-colors cursor-pointer bg-transparent border-none p-0 whitespace-nowrap"
              >
                Termos de Uso
              </button>
            </div>

            {/* WhatsApp Suporte Discreto */}
            <div className="pt-0.5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#4ADE80] hover:text-[#22c55e] transition-colors"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
                <span>WhatsApp Suporte</span>
              </a>
            </div>
          </div>

          {/* DIVISÓRIA MOBILE 2 */}
          <div className="w-full h-px bg-[#39414C]" />

        </div>

        {/* ========================================================== */}
        {/* 3. AVISO LEGAL E COPYRIGHT (Desktop e Mobile)              */}
        {/* ========================================================== */}
        <div className="space-y-2 text-center text-[12px] font-sans text-[#B8C0CC]">
          <p className="leading-relaxed max-w-2xl md:max-w-4xl mx-auto">
            {footerData.disclaimer}
          </p>
          <p className="text-[#B8C0CC]">
            {footerData.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
};
