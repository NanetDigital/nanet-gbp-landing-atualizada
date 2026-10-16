import React from 'react';

export const EntregaveisAnalise: React.FC = () => {
  return (
    <section
      id="entregaveis-analise"
      aria-label="Ajuste seu Perfil da Empresa no Google de forma eficiente"
      className="w-full py-16 sm:py-20 lg:py-24 bg-white border-b border-neutral-200/80"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-14 lg:space-y-16">
        {/* ========================================================== */}
        {/* CABEÇALHO DA SEÇÃO                                         */}
        {/* ========================================================== */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
            Ajuste seu Perfil da Empresa no Google de forma eficiente
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
                Descubra onde você pode conquistar novos clientes
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Veja em quais posições sua empresa aparece nas buscas da sua região e identifique <strong className="font-bold text-[#171717]">onde ela pode ter mais chances de conquistar clientes no Google</strong>.
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
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742871/2_of6tif.png"
                  alt="Posição nas Buscas Locais"
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
                Saiba quais concorrentes estão à frente e como ganhar espaço
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Identifique quais concorrentes estão aparecendo no seu lugar, entenda <strong className="font-bold text-[#171717]">o que eles fazem melhor</strong> e descubra o que pode ajustar para <strong className="font-bold text-[#171717]">ser encontrado por quem procura o que você vende</strong>.
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
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/3_orftbb.png"
                  alt="Análise dos Concorrentes"
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
                Aumente suas chances de ser escolhido
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Entenda facilmente a saúde do seu Perfil da Empresa no Google com uma <strong className="font-bold text-[#171717]">pontuação de 0 a 100</strong>, descubra <strong className="font-bold text-[#171717]">o que pode estar limitando seus resultados</strong> e quais ajustes priorizar para <strong className="font-bold text-[#171717]">fortalecer sua presença nas buscas</strong>.
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
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/1_kn2sua.png"
                  alt="Diagnóstico e Ajustes do Perfil"
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
                Transforme a análise em um plano de ação claro
              </h3>

              <p className="text-base sm:text-lg lg:text-[18px] font-normal leading-relaxed text-[#6B7280] font-sans">
                Na Orientação Prática com Especialista, entenda como ajustar seu Perfil da Empresa no Google de forma simples para <strong className="font-bold text-[#171717]">melhorar seu posicionamento e atrair mais clientes</strong>.
              </p>

              {/* Texto complementar de autoridade */}
              <div className="pt-4 border-t border-neutral-200/80">
                <p className="text-sm sm:text-base text-[#6B7280] font-sans leading-relaxed">
                  Orientação baseada na experiência prática acumulada em <strong className="font-bold text-[#171717]">mais de 300 empresas locais analisadas e ajustadas</strong>.
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
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/4_tb3hmk.png"
                  alt="Orientação Prática com Especialista"
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
