import React from 'react';

export const BonusChecklist: React.FC = () => {
  return (
    <section
      id="bonus-especial"
      aria-label="Você também vai receber"
      className="w-full"
    >
      {/* PARTE SUPERIOR: CABEÇALHO EM FAIXA PRETA */}
      <div className="w-full bg-[#121318] py-9 sm:py-10 md:py-11 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1024px] mx-auto flex flex-col items-center text-center">
          <span className="inline-flex items-center justify-center bg-transparent border border-neutral-500/80 text-white rounded-2xl px-7 py-2.5 text-[16px] md:text-[20px] font-normal leading-tight font-sans">
            Ainda não acabou!
          </span>
          <h2 className="mt-3 text-[24px] sm:text-[26px] md:text-[32px] font-bold tracking-tight text-white text-center font-sans leading-[1.2]">
            Você também vai receber:
          </h2>
        </div>
      </div>

      {/* PARTE INFERIOR: CARDS EM FUNDO BRANCO */}
      <div className="w-full bg-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-neutral-200/80">
        <div className="max-w-[1024px] mx-auto space-y-4 sm:space-y-5 md:space-y-6">
          {/* ========================================================== */}
          {/* CARD 1: CHECKLIST DE IMPLEMENTAÇÃO                         */}
          {/* Desktop: Imagem à esquerda | Texto à direita               */}
          {/* Mobile: Imagem acima | Texto abaixo                        */}
          {/* ========================================================== */}
          <div className="w-full bg-[#F5F5F5] rounded-[24px] overflow-hidden flex flex-col md:grid md:grid-cols-2 items-center">
            {/* Imagem (Mobile: Topo | Desktop: Esquerda) */}
            <div className="w-full p-4 sm:p-5 md:p-6 lg:p-8 flex items-center justify-center md:order-1">
              <div className="w-full max-w-[420px] mx-auto overflow-hidden rounded-2xl flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/4_mqlpjy.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_360/v1790535459/4_mqlpjy.png 360w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_480/v1790535459/4_mqlpjy.png 480w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790535459/4_mqlpjy.png 640w"
                  sizes="(max-width: 767px) 100vw, 440px"
                  alt="Checklist de Implementação no Google - Bônus 01"
                  width={340}
                  height={340}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain block mx-auto rounded-2xl"
                />
              </div>
            </div>

            {/* Texto (Mobile: Abaixo | Desktop: Direita) */}
            <div className="w-full px-5 pt-1 pb-6 sm:px-6 sm:pb-7 md:p-8 lg:p-10 text-left min-w-0 flex flex-col justify-center md:order-2">
              {/* Headline */}
              <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2] max-w-xl">
                Checklist prático e fácil para fazer as melhorias
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-[16px] sm:text-[17px] md:text-[18px] text-[#374151] font-sans leading-[1.5]">
                Use um checklist personalizado da sua empresa, com as melhorias organizadas por prioridade, para registrar o que já foi feito e acompanhar o que ainda precisa de atenção.
              </p>
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 2: ANÁLISE DOS CONCORRENTES                           */}
          {/* Desktop: Texto à esquerda | Imagem à direita               */}
          {/* Mobile: Imagem acima | Texto abaixo                        */}
          {/* ========================================================== */}
          <div className="w-full bg-[#F5F5F5] rounded-[24px] overflow-hidden flex flex-col md:grid md:grid-cols-2 items-center">
            {/* Imagem (Mobile: Topo | Desktop: Direita) */}
            <div className="w-full p-4 sm:p-5 md:p-6 lg:p-8 flex items-center justify-center md:order-2">
              <div
                id="entregavel-concorrentes"
                data-container="entregavel-concorrentes"
                className="w-full overflow-hidden rounded-2xl bg-white p-1.5 sm:p-2 flex items-center justify-center"
              >
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/3_orftbb.png"
                  srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1790742870/3_orftbb.png 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1790742870/3_orftbb.png 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1790742870/3_orftbb.png 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1000/v1790742870/3_orftbb.png 1000w"
                  sizes="(max-width: 767px) 100vw, 480px"
                  alt="Análise dos Concorrentes"
                  width={640}
                  height={360}
                  className="w-full h-auto object-contain block mx-auto rounded-xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Texto (Mobile: Abaixo | Desktop: Esquerda) */}
            <div className="w-full px-5 pt-1 pb-6 sm:px-6 sm:pb-7 md:p-8 lg:p-10 text-left flex flex-col justify-center space-y-3.5 sm:space-y-4 md:order-1">
              <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2]">
                Compare sua posição com a dos concorrentes próximos
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] font-normal leading-[1.5] text-[#374151] font-sans">
                Veja a posição que sua empresa aparece em relação aos concorrentes da região e identifique onde pode ganhar mais visibilidade para atrair clientes e gerar oportunidades de vendas.
              </p>
            </div>
          </div>

          {/* ========================================================== */}
          {/* CARD 3: BÔNUS 02 · GRUPO EXCLUSIVO NO WHATSAPP             */}
          {/* Desktop: Representação visual à esquerda | Texto à direita */}
          {/* Mobile: Representação visual acima | Texto abaixo          */}
          {/* ========================================================== */}
          <div className="w-full bg-[#F5F5F5] rounded-[24px] overflow-hidden flex flex-col md:grid md:grid-cols-2 items-center">
            {/* Representação Visual WhatsApp (Mobile: Topo | Desktop: Esquerda) */}
            <div className="w-full p-4 sm:p-5 md:p-6 lg:p-8 flex items-center justify-center md:order-1">
              <div className="w-full max-w-[380px] md:max-w-[400px] mx-auto rounded-2xl bg-[#121318] border border-white/10 shadow-sm p-4 sm:p-5 flex flex-col justify-between text-neutral-900">
                <div>
                  {/* Topo do Mockup */}
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#16A34A] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-4.5 h-4.5 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                      </svg>
                    </div>
                    <div className="text-left min-w-0">
                      <div className="text-[13px] sm:text-sm font-bold text-white font-sans tracking-tight leading-tight">
                        Google para Empresas Locais
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-400 font-sans mt-0.5">
                        Grupo de Empresários no WhatsApp
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

            {/* Texto (Mobile: Abaixo | Desktop: Direita) */}
            <div className="w-full px-5 pt-1 pb-6 sm:px-6 sm:pb-7 md:p-8 lg:p-10 text-left min-w-0 flex flex-col justify-center md:order-2">
              {/* Headline */}
              <h3 className="text-[22px] sm:text-[24px] md:text-[26px] lg:text-[28px] font-bold tracking-tight text-[#171717] font-sans leading-[1.2] max-w-xl">
                Grupo de empresários no WhatsApp para trocar experiências
              </h3>

              {/* Descrição */}
              <p className="mt-3 text-[16px] sm:text-[17px] md:text-[18px] text-[#374151] font-sans leading-[1.5]">
                Participe de um grupo de empresários locais para compartilhar dúvidas, trocar experiências e conhecer melhorias que outros negócios estão aplicando no Google Meu Negócio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
