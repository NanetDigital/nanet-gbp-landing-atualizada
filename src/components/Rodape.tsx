import React from 'react';
import { RodapeData } from '../types/landing';
import { WHATSAPP_URL } from './Duvidas';

export interface RodapeProps {
  data?: Partial<RodapeData>;
  onNavigate?: (page: 'landing' | 'privacidade' | 'termos') => void;
}

const defaultData: RodapeData = {
  brandName: 'NANET',
  copyright: `© 2026 Nanet`,
  links: [
    'Política de Privacidade',
    'Termos de Uso',
    'WhatsApp Suporte',
  ],
  disclaimer:
    'Este site não é afiliado ao Google ou a qualquer entidade governamental. Todos os conteúdos exibidos visam auxiliar empresas locais em suas estratégias de presença digital e captação de clientes.',
};

export const Rodape: React.FC<RodapeProps> = ({ data = {}, onNavigate }) => {
  const footerData = { ...defaultData, ...data };
  const links = footerData.links && footerData.links.length > 0 ? footerData.links : defaultData.links;

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
      className="w-full py-12 sm:py-16 bg-white dark:bg-neutral-950 text-neutral-500 dark:text-neutral-400 border-t border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center mb-1">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_300/v1785814782/Design_sem_nome_3_esxy36.png"
                alt="Nanet Logo"
                width={130}
                height={35}
                loading="lazy"
                decoding="async"
                className="w-[130px] h-auto object-contain block"
              />
            </div>
            <p className="mt-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 leading-relaxed">
              © 2026 Nanet<br />
              CNPJ: 65.262.598/0001-32<br />
              Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono">
            {links.map((link, idx) => {
              if (link === 'WhatsApp Suporte') {
                return (
                  <a
                    key={idx}
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neutral-900 dark:hover:text-neutral-200 cursor-pointer transition-colors"
                  >
                    {link}
                  </a>
                );
              }
              return (
                <button
                  key={idx}
                  onClick={() => handleLinkClick(link)}
                  className="hover:text-neutral-900 dark:hover:text-neutral-200 cursor-pointer transition-colors text-left bg-transparent border-none p-0"
                >
                  {link}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-6 text-[11px] font-mono leading-relaxed text-neutral-400 dark:text-neutral-600 max-w-3xl">
          {footerData.disclaimer}
        </div>
      </div>
    </footer>
  );
};

