import React from 'react';

export const EntregaveisAnalise: React.FC = () => {
  return (
    <section
      id="entregaveis-analise"
      aria-label="Veja tudo que você vai receber na sua Análise Estratégica da Empresa"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 lg:space-y-16">
        {/* ========================================================== */}
        {/* CABEÇALHO DA SEÇÃO                                         */}
        {/* ========================================================== */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Veja tudo que você vai receber na sua Análise Estratégica da Empresa
          </h2>
        </div>

        {/* ========================================================== */}
        {/* BLOCOS HORIZONTAIS DOS 4 ENTREGÁVEIS                      */}
        {/* ========================================================== */}
        <div className="space-y-16 sm:space-y-20 lg:space-y-24">
          {/* -------------------------------------------------------- */}
          {/* BLOCO 1: POSIÇÃO (COPY À ESQUERDA | IMAGEM À DIREITA)     */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Copy (Desktop: Esquerda | Mobile: Acima) */}
            <div className="w-full lg:w-[48%] space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#16A34A] tracking-wider uppercase">
                <span>✓</span>
                <span>SUA POSIÇÃO NAS BUSCAS LOCAIS</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
                Descubra sua posição nas buscas locais
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Veja <strong className="font-bold text-[#171717]">em quais posições sua empresa aparece</strong> para uma busca local analisada, em diferentes pontos da região.
              </p>
            </div>

            {/* Container da Imagem (Desktop: Direita | Mobile: Abaixo) */}
            <div className="w-full lg:w-[48%]">
              <div
                id="entregavel-posicao"
                data-container="entregavel-posicao"
                className="w-full overflow-hidden rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center p-2"
              >
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742871/2_of6tif.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742871/2_of6tif.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742871/2_of6tif.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742871/2_of6tif.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742871/2_of6tif.png 1000w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 634px, 528px"
                  alt="Posição nas Buscas Locais"
                  width={640}
                  height={360}
                  className="w-full h-auto object-contain block mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* BLOCO 2: CONCORRENTES (IMAGEM À ESQUERDA | COPY À DIREITA)*/}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-14">
            {/* Copy (Desktop: Direita | Mobile: Acima) */}
            <div className="w-full lg:w-[48%] space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#16A34A] tracking-wider uppercase">
                <span>✓</span>
                <span>ANÁLISE DOS CONCORRENTES</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
                Compare sua empresa com os concorrentes
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Veja <strong className="font-bold text-[#171717]">como sua posição se compara à de concorrentes</strong> encontrados na sua região.
              </p>
            </div>

            {/* Container da Imagem (Desktop: Esquerda | Mobile: Abaixo) */}
            <div className="w-full lg:w-[48%]">
              <div
                id="entregavel-concorrentes"
                data-container="entregavel-concorrentes"
                className="w-full overflow-hidden rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center p-2"
              >
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/3_orftbb.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/3_orftbb.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/3_orftbb.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/3_orftbb.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/3_orftbb.png 1000w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 634px, 528px"
                  alt="Análise dos Concorrentes"
                  width={640}
                  height={360}
                  className="w-full h-auto object-contain block mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* BLOCO 3: SAÚDE DO PERFIL (COPY ESQ | IMAGEM DIR)          */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
            {/* Copy (Desktop: Esquerda | Mobile: Acima) */}
            <div className="w-full lg:w-[48%] space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#16A34A] tracking-wider uppercase">
                <span>✓</span>
                <span>PONTUAÇÃO E SAÚDE DO PERFIL</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
                Conheça a saúde do seu Perfil do Google
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Receba uma avaliação de 20 critérios do seu Perfil do Google, com pontuação de 0 a 100 calculada e <strong className="font-bold text-[#171717]">identificação dos pontos que merecem atenção</strong>.
              </p>
            </div>

            {/* Container da Imagem (Desktop: Direita | Mobile: Abaixo) */}
            <div className="w-full lg:w-[48%]">
              <div
                id="entregavel-diagnostico"
                data-container="entregavel-diagnostico"
                className="w-full overflow-hidden rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center p-2"
              >
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/1_kn2sua.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/1_kn2sua.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/1_kn2sua.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/1_kn2sua.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/1_kn2sua.png 1000w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 634px, 528px"
                  alt="Diagnóstico e Ajustes do Perfil"
                  width={640}
                  height={360}
                  className="w-full h-auto object-contain block mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* -------------------------------------------------------- */}
          {/* BLOCO 4: ORIENTAÇÃO / ESPECIALISTA (IMG ESQ | COPY DIR)  */}
          {/* -------------------------------------------------------- */}
          <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 lg:gap-14">
            {/* Copy (Desktop: Direita | Mobile: Acima) */}
            <div className="w-full lg:w-[48%] space-y-4 sm:space-y-5 text-left">
              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-mono font-bold text-[#16A34A] tracking-wider uppercase">
                <span>✓</span>
                <span>ORIENTAÇÃO PRÁTICA COM ESPECIALISTA</span>
              </div>

              <h3 className="text-2xl sm:text-[28px] lg:text-[32px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
                Entenda quais melhorias priorizar
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Durante uma orientação profissional de 30 minutos, um especialista apresenta e entrega seus dois relatórios, explica os resultados e <strong className="font-bold text-[#171717]">indica os ajustes prioritários</strong>.
              </p>

              {/* Texto complementar de autoridade */}
              <div className="pt-4 border-t border-neutral-200/80">
                <p className="text-sm sm:text-base text-[#6B7280] font-sans leading-relaxed">
                  Orientação baseada na experiência prática acumulada em mais de 300 empresas locais analisadas e ajustadas.
                </p>
              </div>
            </div>

            {/* Container da Imagem (Desktop: Esquerda | Mobile: Abaixo) */}
            <div className="w-full lg:w-[48%]">
              <div
                id="entregavel-sessao"
                data-container="entregavel-sessao"
                className="w-full overflow-hidden rounded-2xl bg-white border border-neutral-200/80 shadow-xs flex items-center justify-center p-2"
              >
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/4_tb3hmk.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/4_tb3hmk.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/4_tb3hmk.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/4_tb3hmk.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/4_tb3hmk.png 1000w"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 634px, 528px"
                  alt="Orientação Prática com Especialista"
                  width={640}
                  height={360}
                  className="w-full h-auto object-contain block mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
