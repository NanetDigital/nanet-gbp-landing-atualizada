import React from 'react';

const PONTOS_IDENTIFICACAO = [
  {
    prefix: 'Já possui um ',
    bold: 'Perfil da Empresa no Google',
    suffix: ' e quer entender como aparece nas buscas da região.',
  },
  {
    prefix: 'Vê ',
    bold: 'concorrentes no Google Maps',
    suffix: ' e deseja comparar suas posições.',
  },
  {
    prefix: 'Quer identificar ',
    bold: 'pontos fracos, razoáveis e bons',
    suffix: ' no seu Perfil do Google.',
  },
  {
    prefix: 'Precisa de ',
    bold: 'orientação profissional',
    suffix: ' para decidir quais melhorias priorizar.',
  },
];

export const PublicoAlvo: React.FC = () => {
  return (
    <section
      id="para-quem-e"
      aria-label="Para quem é a Análise Estratégica"
      className="w-full py-14 sm:py-16 lg:py-20 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Essa análise é para sua empresa se você:
          </h2>
        </div>

        {/* Layout 2 Colunas no Desktop | Coluna única no Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Coluna Esquerda: Imagem Original Preservada */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="w-full max-w-[360px] sm:max-w-[390px] lg:max-w-none rounded-2xl overflow-hidden border border-neutral-200/80 bg-white shadow-xs p-1">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/v1792004746/pesquisa_google_gah03o.png"
                alt="Pesquisa no Google para negócios locais"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-auto object-contain rounded-xl"
              />
            </div>
          </div>

          {/* Coluna Direita: 4 Pontos + Frase Segmentos + Bloco de Exclusão Compacto */}
          <div className="lg:col-span-7 flex flex-col space-y-5 sm:space-y-6 text-left">
            
            {/* 4 Pontos de Identificação */}
            <div className="flex flex-col divide-y divide-neutral-200/70">
              {PONTOS_IDENTIFICACAO.map((item, idx) => (
                <div
                  key={idx}
                  className="py-3 sm:py-3.5 first:pt-0 last:pb-0 text-left"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="text-[#16A34A] font-bold text-base sm:text-lg shrink-0 leading-snug mt-0.5 select-none"
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <p className="text-sm sm:text-base text-[#4B5563] font-sans leading-relaxed">
                      {item.prefix}
                      <strong className="font-bold text-[#171717]">
                        {item.bold}
                      </strong>
                      {'middle' in item && item.middle}
                      {'bold2' in item && (
                        <strong className="font-bold text-[#171717]">
                          {item.bold2}
                        </strong>
                      )}
                      {item.suffix}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Identificação dos Segmentos */}
            <div className="pt-1">
              <p className="text-sm sm:text-[15px] text-[#4B5563] font-sans leading-relaxed">
                <strong className="font-bold text-[#171717]">Ideal para negócios locais:</strong> restaurantes, clínicas, lojas, comércios de produtos e prestadores de serviços que atendem clientes da sua cidade ou região.
              </p>
            </div>

            {/* Filtro do Público — Bloco Discreto e Compacto */}
            <div className="p-3.5 sm:p-4 rounded-xl bg-[#F9FAFB] border border-neutral-200/80 text-left">
              <h4 className="font-bold text-xs sm:text-[13px] text-[#374151] font-sans mb-2">
                Não é para sua empresa se:
              </h4>
              <ul className="space-y-1.5 text-xs sm:text-[13px] text-[#6B7280] font-sans leading-relaxed">
                <li className="flex items-start gap-2">
                  <span
                    className="text-[#9CA3AF] font-bold text-sm leading-none shrink-0 mt-0.5 select-none"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span>Sua empresa não atende clientes de uma cidade ou região específica.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span
                    className="text-[#9CA3AF] font-bold text-sm leading-none shrink-0 mt-0.5 select-none"
                    aria-hidden="true"
                  >
                    ✕
                  </span>
                  <span>Seus produtos ou serviços não dependem de buscas locais no Google.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
