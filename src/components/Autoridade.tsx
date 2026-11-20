import React from 'react';

export const Autoridade: React.FC = () => {
  return (
    <section
      id="quem-esta-por-tras"
      aria-label="Quem está por trás dessa análise"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#121318] border-b border-white/10"
    >
      <div className="max-w-[960px] mx-auto px-4 sm:px-6">
        {/* Card Horizontal Centralizado */}
        <div className="bg-[#1A1D24] border border-white/10 rounded-2xl sm:rounded-3xl px-5 py-6 sm:p-8 lg:p-9 text-white shadow-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 sm:gap-8 lg:gap-10 text-center sm:text-left">
            
            {/* Foto Original de Leandro Pires à Esquerda */}
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_330/v1791701835/leandro_alves_evrgch.png"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_240/v1791701835/leandro_alves_evrgch.png 240w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_330/v1791701835/leandro_alves_evrgch.png 330w"
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 144px, 165px"
                alt="Leandro Pires - Fundador da Nanet"
                width={165}
                height={165}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-[120px] h-[120px] sm:w-36 sm:h-36 lg:w-[165px] lg:h-[165px] rounded-full object-cover object-center border-2 border-[#16A34A]/50 shadow-xs"
              />
            </div>

            {/* Conteúdo à Direita */}
            <div className="w-full flex-1 min-w-0">
              {/* Título Principal */}
              <h2 className="text-center sm:text-left text-[20px] sm:text-[23px] lg:text-[24px] font-bold text-white tracking-tight leading-[1.3] sm:leading-snug hyphens-none break-normal [overflow-wrap:normal]">
                O criador da Análise Algoritmo Mais é Leandro Pires.
              </h2>

              {/* Descrição em 3 parágrafos alinhados à esquerda no desktop e no mobile */}
              <div className="text-left w-full max-w-[620px] hyphens-none break-normal [overflow-wrap:normal] text-[15.5px] sm:text-[18px] text-neutral-300 font-sans leading-[1.5] mt-4 space-y-3.5 sm:space-y-3">
                <p>
                  Leandro Pires, fundador da Nanet, e sua equipe trabalham há mais de 5 anos com Perfis da Empresa no Google.
                </p>
                <p>
                  Já analisaram e ajustaram mais de 300 empresas locais, acumulando mais de 200 mil interações com clientes.
                </p>
                <p>
                  Essa experiência ajuda a identificar o que pode estar limitando sua presença nas buscas e mostrar quais ajustes priorizar, sem você precisar descobrir tudo sozinho.
                </p>
              </div>

              {/* Indicadores em linha única no desktop, sem cartões separados (editorial limpo) */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 text-center sm:text-left">
                {/* Indicador 1 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    5+
                  </span>
                  <span className="text-[13.5px] sm:text-xs text-neutral-400 font-sans block leading-[1.35] sm:leading-tight mt-1">
                    Anos de experiência
                  </span>
                </div>

                {/* Indicador 2 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    300+
                  </span>
                  <span className="text-[13.5px] sm:text-xs text-neutral-400 font-sans block leading-[1.35] sm:leading-tight mt-1">
                    Empresas locais analisadas e ajustadas
                  </span>
                </div>

                {/* Indicador 3 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    200 mil+
                  </span>
                  <span className="text-[13.5px] sm:text-xs text-neutral-400 font-sans block leading-[1.35] sm:leading-tight mt-1">
                    Interações com clientes para empresas locais
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

