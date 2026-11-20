import React from 'react';

export const LOGO_LIGHT_BG_URL =
  'https://res.cloudinary.com/nds7zozp/image/upload/v1795160964/logo_letras_pretas_crwokx.png';

export const LOGO_DARK_BG_URL =
  'https://res.cloudinary.com/nds7zozp/image/upload/v1795160964/logo_letras_brancas_e3cfov.png';

interface BrandLogoProps {
  variant: 'dark-text' | 'light-text';
  className?: string;
  eager?: boolean;
}

/**
 * Enquadramento preciso da logo oficial "Análise Algoritmo Mais".
 * As imagens PNG oficiais (2752x1536) possuem margens transparentes internas
 * (~12% nas laterais e ~33% acima/abaixo). O container 2202/584 com imagem a 125%
 * compensa esse espaço transparente com ~2% de folga de segurança em todos os lados,
 * garantindo proporção fiel, centralização exata e zero corte no símbolo ou nas letras.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant,
  className = 'w-[220px]',
  eager = false,
}) => {
  const src = variant === 'dark-text' ? LOGO_LIGHT_BG_URL : LOGO_DARK_BG_URL;

  return (
    <div
      className={`relative mx-auto max-w-full aspect-[2202/584] overflow-hidden shrink-0 ${className}`}
    >
      <img
        src={src}
        alt="Análise Algoritmo Mais"
        width={2752}
        height={1536}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] max-w-none h-auto block select-none"
      />
    </div>
  );
};
