import React from 'react';
import { WhatsAppIcon } from './Duvidas';
import { BrandLogo } from './BrandLogo';

const FOOTER_WHATSAPP_URL =
  'https://wa.me/5527998752912?text=Ol%C3%A1%2C%20quero%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20An%C3%A1lise%20Algoritmo%20Mais.';

export const Rodape: React.FC = () => {
  return (
    <footer
      id="rodape"
      aria-label="Rodapé institucional Nanet"
      className="w-full bg-[#000000] text-white"
    >
      {/* Área Principal Centralizada em Coluna Única */}
      <div className="max-w-[750px] mx-auto px-5 sm:px-6 py-10 sm:py-12 flex flex-col items-center text-center">
        {/* 1. Logotipo Oficial Análise Algoritmo Mais (letras brancas, sem texto duplicado) */}
        <BrandLogo
          variant="light-text"
          className="w-[175px] sm:w-[205px] lg:w-[218px]"
        />

        {/* 2. Contato pelo WhatsApp */}
        <p className="mt-5 sm:mt-6 text-[14px] sm:text-[15px] text-white/90 font-sans">
          Tem alguma dúvida? Envie no WhatsApp.
        </p>
        <a
          href={FOOTER_WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1.5 inline-flex items-center justify-center gap-1.5 text-[14px] sm:text-[15px] font-semibold text-[#4ADE80] hover:text-[#22c55e] transition-colors font-sans"
        >
          <WhatsAppIcon className="w-4 h-4 shrink-0" />
          <span>Falar com o suporte</span>
        </a>

        {/* 4. CNPJ */}
        <span className="mt-4 text-[12.5px] sm:text-[13px] text-white/85 font-mono">
          CNPJ: 65.262.598/0001-32
        </span>

        {/* 5. Aviso Legal Centralizado */}
        <p className="mt-5 max-w-[750px] mx-auto text-[12px] sm:text-[12.5px] text-white/85 font-sans leading-relaxed text-center">
          Este site não é afiliado ao Google. A Análise Algoritmo Mais oferece relatórios e orientação sobre melhorias no Perfil da Empresa no Google. A compra desse material não garante nenhum tipo de resultado. Os resultados dependem das condições de cada negócio e da aplicação das recomendações.
        </p>
      </div>

      {/* Faixa Inferior Cinza-Escura (#242424) */}
      <div className="w-full bg-[#242424] min-h-[58px] py-4 px-4 flex items-center justify-center text-center">
        <p className="text-[13px] sm:text-[13.5px] text-white font-sans font-normal">
          Todos os direitos reservados © 2026
        </p>
      </div>
    </footer>
  );
};
