import React from 'react';

export const BonusChecklist: React.FC = () => {
  return (
    <section
      id="bonus-especial"
      aria-label="Bônus Especiais da Análise Estratégica"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#121318] border-b border-white/10"
    >
      <div className="max-w-[1120px] w-[calc(100%-32px)] sm:w-[calc(100%-64px)] mx-auto">
        
        {/* Cabeçalho da Seção de Bônus */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-white font-sans leading-tight">
            Você também vai receber
          </h2>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {/* ========================================================== */}
          {/* QUADRO 01 — BÔNUS 01 · CHECKLIST DE IMPLEMENTAÇÃO           */}
          {/* Layout: TEXTO (Esquerda) | MOCKUP (Direita)                 */}
          {/* ========================================================== */}
          <div className="w-full bg-[#1A1D24] border border-white/10 rounded-2xl p-5 sm:p-7 lg:py-8 lg:pl-8 lg:pr-[24px] text-white shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center">
              
              {/* COLUNA ESQUERDA: Pill, Headline, Copy e Bullets */}
              <div className="w-full text-left min-w-0">
                {/* Faixa de Identificação BÔNUS 01 */}
                <div className="inline-flex max-w-full flex-wrap sm:flex-nowrap items-center gap-1.5 sm:gap-2.5 p-1 pr-3 sm:pr-3.5 rounded-full bg-[#1D70B8] text-white shadow-sm mb-3 border border-white/15">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 text-white font-black text-[11px] sm:text-xs tracking-wider shrink-0">
                    <span className="text-xs sm:text-sm font-black leading-none text-white">✓</span>
                    <span>BÔNUS 01</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white uppercase pr-1">
                    AJUSTE E MONITORE
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold tracking-tight text-white font-sans leading-[1.2] max-w-xl">
                  Checklist de Implementação no Google
                </h3>

                {/* Descrição */}
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                  Use o checklist para fazer os ajustes por prioridade e <strong className="font-bold text-white">acompanhar a implementação de forma simples.</strong>
                </p>

                {/* 3 Bullets / Benefícios */}
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Organize os pontos de atenção por prioridade.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Registre os ajustes realizados.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Acompanhe o que ainda precisa de atenção.</span>
                  </li>
                </ul>

                {/* Valor riscado discreto */}
                <div className="mt-4 text-xs sm:text-sm font-sans text-gray-400">
                  Valor do bônus:{' '}
                  <span className="line-through decoration-neutral-500 font-mono text-gray-400 font-normal">
                    R$ 47
                  </span>
                </div>
              </div>

              {/* COLUNA DIREITA: Mockup Vertical Proporcional à Altura do Texto */}
              <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end shrink-0">
                <div className="w-full max-w-[300px] sm:max-w-[320px] lg:w-[330px] xl:w-[340px] mx-auto lg:mr-0 rounded-2xl bg-[#121318] border border-white/10 shadow-lg p-3.5 sm:p-4 flex flex-col items-center justify-center">
                  <div className="w-full rounded-xl overflow-hidden bg-white/95 p-2 sm:p-2.5 shadow-inner flex items-center justify-center">
                    <img
                      src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/4_mqlpjy.png"
                      srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1790535459/4_mqlpjy.png 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/4_mqlpjy.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790535459/4_mqlpjy.png 640w"
                      sizes="(max-width: 640px) 300px, 340px"
                      alt="Checklist de Implementação no Google - Bônus 01"
                      width={340}
                      height={340}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto max-h-[320px] lg:max-h-[335px] object-contain block mx-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ========================================================== */}
          {/* QUADRO 02 — BÔNUS 02 · GRUPO EXCLUSIVO NO WHATSAPP         */}
          {/* Layout: TEXTO (Esquerda) | MOCKUP (Direita)                 */}
          {/* ========================================================== */}
          <div className="w-full bg-[#1A1D24] border-2 border-[#16A34A] rounded-2xl p-5 sm:p-7 lg:py-8 lg:pl-8 lg:pr-[24px] text-white shadow-none">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-8 items-center">
              
              {/* COLUNA ESQUERDA: Pill, Headline, Copy e Bullets */}
              <div className="w-full text-left min-w-0">
                {/* Faixa de Identificação BÔNUS 02 */}
                <div className="inline-flex items-center gap-1.5 sm:gap-2.5 p-1 pr-3 sm:pr-3.5 rounded-full bg-[#16A34A] text-white shadow-sm mb-3 border border-white/15 w-fit">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/25 text-white font-black text-[11px] sm:text-xs tracking-wider shrink-0">
                    <svg className="w-3.5 h-3.5 fill-current text-white shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                    </svg>
                    <span>BÔNUS 02</span>
                  </div>
                  <span className="text-[11px] sm:text-xs font-bold tracking-wider text-white uppercase pr-1 whitespace-nowrap">
                    TROCA DE EXPERIÊNCIAS
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-[26px] lg:text-[28px] font-bold tracking-tight text-white font-sans leading-[1.2] max-w-xl">
                  Grupo Exclusivo de Empresários no WhatsApp
                </h3>

                {/* Descrição */}
                <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                  Faça parte de um <strong className="font-bold text-white">grupo exclusivo de empresários locais</strong> para trocar experiências, compartilhar aprendizados sobre o Google e se conectar com outros donos de negócios.
                </p>

                {/* 3 Bullets / Benefícios */}
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Acesso a um grupo exclusivo de empresários locais</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Troque experiências sobre melhorias no Google</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm sm:text-[15px] text-white font-sans font-medium">
                    <span className="text-[#16A34A] font-bold shrink-0 mt-0.5 text-base leading-none">✓</span>
                    <span>Conexão com empresários que enfrentam desafios parecidos</span>
                  </li>
                </ul>

                {/* Valor riscado discreto */}
                <div className="mt-4 text-xs sm:text-sm font-sans text-gray-400">
                  Valor do bônus:{' '}
                  <span className="line-through decoration-neutral-500 font-mono text-gray-400 font-normal">
                    R$ 47
                  </span>
                </div>
              </div>

              {/* COLUNA DIREITA: Mockup Vertical Proporcional à Altura do Texto */}
              <div className="w-full lg:w-auto flex items-center justify-center lg:justify-end shrink-0">
                <div className="w-full max-w-[300px] sm:max-w-[320px] lg:w-[330px] xl:w-[340px] mx-auto lg:mr-0 rounded-2xl bg-[#121318] border border-white/10 shadow-lg p-4 sm:p-5 flex flex-col justify-between text-neutral-900">
                  
                  <div>
                    {/* Topo do Mockup */}
                    <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                      </div>
                      <div className="text-left min-w-0">
                        <div className="text-[13px] sm:text-sm font-bold text-white font-sans tracking-tight leading-tight">
                          Google para Empresas Locais
                        </div>
                        <div className="text-[11px] sm:text-xs text-gray-400 font-sans mt-0.5">
                          Grupo exclusivo no WhatsApp
                        </div>
                      </div>
                    </div>

                    {/* 3 Blocos Funcionais */}
                    <div className="space-y-2.5 pt-3 text-left">
                      {/* Bloco 1 */}
                      <div className="p-3 sm:p-3.5 rounded-xl bg-[#1A1D24] border border-white/10 space-y-1">
                        <div className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#4ADE80] uppercase tracking-wider">
                          TROQUE EXPERIÊNCIAS
                        </div>
                        <div className="text-[12.5px] sm:text-[13px] text-gray-200 font-medium font-sans leading-snug">
                          sobre melhorias no Google
                        </div>
                      </div>

                      {/* Bloco 2 */}
                      <div className="p-3 sm:p-3.5 rounded-xl bg-[#1A1D24] border border-white/10 space-y-1">
                        <div className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#4ADE80] uppercase tracking-wider">
                          COMPARTILHE APRENDIZADOS
                        </div>
                        <div className="text-[12.5px] sm:text-[13px] text-gray-200 font-medium font-sans leading-snug">
                          com outros donos de negócios
                        </div>
                      </div>

                      {/* Bloco 3 */}
                      <div className="p-3 sm:p-3.5 rounded-xl bg-[#1A1D24] border border-white/10 space-y-1">
                        <div className="text-[10px] sm:text-[10.5px] font-mono font-bold text-[#4ADE80] uppercase tracking-wider">
                          CONECTE-SE COM EMPRESÁRIOS
                        </div>
                        <div className="text-[12.5px] sm:text-[13px] text-gray-200 font-medium font-sans leading-snug">
                          que enfrentam desafios parecidos
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
