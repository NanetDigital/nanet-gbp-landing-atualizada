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
        <div className="bg-[#1A1D24] border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-9 text-white shadow-none">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 lg:gap-10 text-center sm:text-left">
            
            {/* Foto Original de Leandro Pires à Esquerda */}
            <div className="shrink-0 flex items-center justify-center">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/v1791701835/leandro_alves_evrgch.png"
                alt="Leandro Pires - Fundador da Nanet"
                width={165}
                height={165}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="w-32 h-32 sm:w-36 sm:h-36 lg:w-[165px] lg:h-[165px] rounded-full object-cover object-center border-2 border-[#16A34A]/50 shadow-xs"
              />
            </div>

            {/* Conteúdo à Direita */}
            <div className="flex-1 min-w-0">
              {/* Identificação / Eyebrow */}
              <span className="text-[11px] sm:text-xs font-mono font-semibold tracking-wider text-[#16A34A] uppercase block">
                QUEM ESTÁ POR TRÁS DESSA ANÁLISE
              </span>

              {/* Título Principal */}
              <h2 className="text-xl sm:text-2xl lg:text-[26px] font-bold text-white tracking-tight leading-snug mt-1.5 sm:mt-2">
                Sua empresa analisada por quem conhece o Google na prática.
              </h2>

              {/* Descrição com negritos pontuais estritos (alinhado à esquerda no mobile) */}
              <p className="text-left text-sm sm:text-[15px] lg:text-base text-neutral-300 font-sans leading-relaxed mt-2.5 sm:mt-3">
                Leandro Pires, fundador da Nanet, e sua equipe trabalham há <strong className="font-bold text-white">mais de 5 anos</strong> com Perfis da Empresa no Google. Já analisaram e ajustaram <strong className="font-bold text-white">mais de 300 empresas locais</strong>, acumulando <strong className="font-bold text-white">mais de 200 mil interações com clientes</strong>. Essa experiência ajuda a identificar o que pode estar limitando sua presença nas buscas e mostrar quais ajustes priorizar, sem você precisar descobrir tudo sozinho.
              </p>

              {/* Indicadores em linha única no desktop, sem cartões separados (editorial limpo) */}
              <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center sm:text-left">
                {/* Indicador 1 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    5+
                  </span>
                  <span className="text-xs text-neutral-400 font-sans block leading-tight mt-1">
                    Anos de experiência
                  </span>
                </div>

                {/* Indicador 2 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    300+
                  </span>
                  <span className="text-xs text-neutral-400 font-sans block leading-tight mt-1">
                    Empresas locais analisadas e ajustadas
                  </span>
                </div>

                {/* Indicador 3 */}
                <div>
                  <span className="text-2xl sm:text-2xl lg:text-3xl font-bold font-sans tracking-tight text-[#16A34A] block leading-tight">
                    200 mil+
                  </span>
                  <span className="text-xs text-neutral-400 font-sans block leading-tight mt-1">
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

