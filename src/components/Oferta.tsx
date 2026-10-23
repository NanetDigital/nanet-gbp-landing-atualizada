import React from 'react';
import { Lock, Check } from 'lucide-react';
import { useCheckoutUrl } from '../utils/tracking';

export interface OfertaProps {
  [key: string]: any;
}

export const Oferta: React.FC<OfertaProps> = () => {
  const checkoutUrl = useCheckoutUrl();

  return (
    <section
      id="oferta"
      aria-label="Sua Análise Estratégica Completa"
      className="w-full py-16 sm:py-20 lg:py-24 bg-[#F6F3EF] border-b border-neutral-300/70"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ========================================================== */}
        {/* PARTE 1 — RECAPITULAÇÃO (Pilha de Valor Compacta)          */}
        {/* Fundo bege-claro #F6F3EF integrado com a oferta           */}
        {/* ========================================================== */}
        <div>
          
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#171717] font-sans leading-tight">
              Veja tudo o que você vai receber
            </h2>
          </div>

          {/* Único Box Compacto e Horizontal — Tabela Branca Elegante */}
          <div className="max-w-[760px] mx-auto bg-white border border-neutral-200/90 rounded-2xl shadow-sm overflow-hidden">
            
            {/* ITEM 01 — DIAGNÓSTICO PERSONALIZADO */}
            <div className="py-3.5 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-200/70 text-left">
              <div className="flex items-start gap-3 min-w-0">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 sm:mt-1" strokeWidth={2.5} />
                <div className="min-w-0">
                  <h4 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#171717] font-sans leading-snug">
                    Diagnóstico Personalizado
                  </h4>
                  <p className="text-[17px] text-neutral-600 font-sans font-normal mt-0.5 leading-relaxed">
                    Inclui Relatório Geogrid (posição e concorrentes) e Relatório de Saúde do Perfil do Google.
                  </p>
                </div>
              </div>
              <div className="shrink-0 whitespace-nowrap pt-0.5 sm:pt-0 pl-2">
                <span className="text-[16px] sm:text-[17px] font-bold text-red-600 line-through">R$ 200</span>
              </div>
            </div>

            {/* ITEM 02 — ORIENTAÇÃO PROFISSIONAL */}
            <div className="py-3.5 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-200/70 text-left">
              <div className="flex items-start gap-3 min-w-0">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 sm:mt-1" strokeWidth={2.5} />
                <div className="min-w-0">
                  <h4 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#171717] font-sans leading-snug">
                    Orientação Profissional de 30 Minutos
                  </h4>
                  <p className="text-[17px] text-neutral-600 font-sans font-normal mt-0.5 leading-relaxed">
                    Um especialista apresenta e entrega os dois relatórios, interpreta os resultados e indica as melhorias prioritárias.
                  </p>
                </div>
              </div>
              <div className="shrink-0 whitespace-nowrap pt-0.5 sm:pt-0 pl-2">
                <span className="text-[16px] sm:text-[17px] font-bold text-red-600 line-through">R$ 147</span>
              </div>
            </div>

            {/* ITEM 03 — CHECKLIST DE IMPLEMENTAÇÃO NO GOOGLE */}
            <div className="py-3.5 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-200/70 text-left">
              <div className="flex items-start gap-3 min-w-0">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 sm:mt-1" strokeWidth={2.5} />
                <div className="min-w-0">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider bg-emerald-100 text-[#15803D] border border-emerald-300 leading-none">
                      BÔNUS
                    </span>
                    <h4 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#171717] font-sans leading-snug">
                      Checklist de Implementação no Google
                    </h4>
                  </div>
                  <p className="text-[17px] text-neutral-600 font-sans font-normal mt-0.5 leading-relaxed">
                    Material de apoio para organizar e acompanhar os ajustes recomendados.
                  </p>
                </div>
              </div>
              <div className="shrink-0 whitespace-nowrap pt-0.5 sm:pt-0 pl-2">
                <span className="text-[16px] sm:text-[17px] font-bold text-red-600 line-through">R$ 47</span>
              </div>
            </div>

            {/* ITEM 04 — BÔNUS: GRUPO */}
            <div className="py-3.5 px-4 sm:px-6 flex items-start sm:items-center justify-between gap-3 sm:gap-4 border-b border-neutral-200/70 text-left bg-[#F0FDF4]/90">
              <div className="flex items-start gap-3 min-w-0">
                <Check className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5 sm:mt-1" strokeWidth={2.5} />
                <div className="min-w-0">
                  <div className="flex items-center flex-wrap gap-2">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold font-mono uppercase tracking-wider bg-emerald-100 text-[#15803D] border border-emerald-300 leading-none">
                      BÔNUS
                    </span>
                    <h4 className="text-[18px] sm:text-[19px] lg:text-[20px] font-semibold text-[#171717] font-sans leading-snug">
                      Grupo Exclusivo de Empresários no WhatsApp
                    </h4>
                  </div>
                  <p className="text-[17px] text-neutral-600 font-sans font-normal mt-0.5 leading-relaxed">
                    Espaço para trocar experiências com outros empresários locais.
                  </p>
                </div>
              </div>
              <div className="shrink-0 whitespace-nowrap pt-0.5 sm:pt-0 pl-2">
                <span className="text-[16px] sm:text-[17px] font-bold text-red-600 line-through">R$ 47</span>
              </div>
            </div>

            {/* Rodapé da tabela: Valor de referência das entregas vs R$ 441 */}
            <div className="py-3.5 sm:py-4 px-4 sm:px-6 flex items-center justify-between gap-3 text-left bg-neutral-50/70">
              <span className="text-[16px] sm:text-[18px] font-bold text-[#171717] font-sans leading-snug">
                Valor de referência das entregas
              </span>
              <div className="shrink-0 whitespace-nowrap pl-2 text-right">
                <span className="text-[16px] sm:text-[18px] font-bold text-red-600 line-through decoration-red-500 font-mono tracking-tight">
                  R$ 441
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Título de transição entre a tabela de entregáveis e a seção de compra */}
        {/* Espaçamento vertical perfeitamente simétrico: 40px acima e 40px abaixo no desktop; 28px no mobile */}
        <div className="text-center max-w-2xl mx-auto py-[28px] sm:py-[40px]">
          <h3 className="text-base sm:text-lg lg:text-[20px] font-bold text-[#171717] font-sans tracking-tight leading-snug m-0">
            Hoje você leva tudo por menos de um quarto desse valor
          </h3>
        </div>

        {/* ========================================================== */}
        {/* PARTE 2 — SEÇÃO DE OFERTA (Fundo Bege-Claro Integrado)    */}
        {/* ========================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.04fr] gap-10 lg:gap-[60px] items-start max-w-[1140px] mx-auto">
          
          {/* COLUNA ESQUERDA: Imagem Horizontal Moderada + 5 Entregáveis */}
          <div className="w-full max-w-[520px] mx-auto lg:mx-0">
            
            {/* Frame horizontal proporcional (aspect-ratio 16/10 ~520x325) */}
            <div className="w-full aspect-[16/10] overflow-hidden rounded-2xl border border-neutral-300/80 shadow-md bg-[#E8E4DE]">
              <img
                src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791695397/Gemini_Generated_Image_gigf20gigf20gigf_wscbhi.jpg"
                srcSet="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_400/v1791695397/Gemini_Generated_Image_gigf20gigf20gigf_wscbhi.jpg 400w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_640/v1791695397/Gemini_Generated_Image_gigf20gigf20gigf_wscbhi.jpg 640w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_800/v1791695397/Gemini_Generated_Image_gigf20gigf20gigf_wscbhi.jpg 800w, https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_1040/v1791695397/Gemini_Generated_Image_gigf20gigf20gigf_wscbhi.jpg 1040w"
                sizes="(max-width: 640px) 100vw, 520px"
                alt="Análise Estratégica da Empresa - Relatórios e Diagnóstico"
                width={520}
                height={325}
                className="w-full h-full object-cover object-center block"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* 5 Entregáveis abaixo da imagem em 2 colunas com alto contraste (#171717) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 pt-6 sm:pt-7 text-left px-0.5">
              <div className="flex items-center gap-2.5 text-[17px] sm:text-[18px] font-semibold text-[#171717] font-sans">
                <span className="text-[#16A34A] font-bold text-base shrink-0 leading-none">✓</span>
                <span>Relatório Geogrid</span>
              </div>
              <div className="flex items-center gap-2.5 text-[17px] sm:text-[18px] font-semibold text-[#171717] font-sans">
                <span className="text-[#16A34A] font-bold text-base shrink-0 leading-none">✓</span>
                <span>Relatório de Saúde do Perfil</span>
              </div>
              <div className="flex items-center gap-2.5 text-[17px] sm:text-[18px] font-semibold text-[#171717] font-sans">
                <span className="text-[#16A34A] font-bold text-base shrink-0 leading-none">✓</span>
                <span>Orientação profissional de 30 minutos</span>
              </div>
              <div className="flex items-center gap-2.5 text-[17px] sm:text-[18px] font-semibold text-[#171717] font-sans">
                <span className="text-[#16A34A] font-bold text-base shrink-0 leading-none">✓</span>
                <span>Checklist de implementação</span>
              </div>
              <div className="flex items-center gap-2.5 text-[17px] sm:text-[18px] font-semibold text-[#171717] font-sans sm:col-span-2">
                <span className="text-[#16A34A] font-bold text-base shrink-0 leading-none">✓</span>
                <span>Grupo exclusivo de WhatsApp</span>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: Box de Compra Branco de Alto Contraste */}
          <div className="w-full">
            <div className="bg-white border border-neutral-200/80 rounded-2xl p-7 sm:p-9 lg:p-10 shadow-md flex flex-col justify-between text-center space-y-5 text-[#171717]">
              
              {/* Topo do Box */}
              <div className="space-y-1.5">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#171717] font-sans">
                  Sua Análise Estratégica Completa
                </h3>
                <p className="text-[15px] sm:text-[15px] text-[#6B7280] font-sans max-w-sm mx-auto leading-relaxed">
                  Entenda como sua empresa aparece nas buscas locais, conheça os pontos de atenção do seu Perfil do Google e descubra quais melhorias priorizar.
                </p>
                <div className="text-xs sm:text-sm font-sans text-neutral-500 pt-1">
                  De <span className="line-through decoration-red-500 font-bold text-[15px] sm:text-[16px] text-red-600">R$ 441</span> em entregas por apenas:
                </div>
              </div>

              {/* Preço Principal com R$ perfeitamente alinhado ao topo visível do 97 */}
              <div className="space-y-2 pt-1 pb-0">
                <span className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold block">
                  INVESTIMENTO ÚNICO
                </span>
                <div className="flex justify-center">
                  <div className="inline-flex items-start justify-center gap-[3px] leading-none">
                    <span className="text-lg sm:text-xl lg:text-[22px] font-semibold text-neutral-800 select-none leading-none pt-2 sm:pt-2.5 lg:pt-3">
                      R$
                    </span>
                    <span className="text-6xl sm:text-7xl lg:text-[80px] font-black text-[#171717] tracking-tight leading-none">
                      97
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA Principal */}
              <div className="space-y-2.5 pt-1 flex flex-col items-center">
                <a
                  href={checkoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    if (typeof window !== 'undefined' && typeof (window as any).fbq === 'function') {
                      (window as any).fbq('trackCustom', 'ClickCheckout');
                    }
                  }}
                  className="w-full sm:w-[290px] inline-flex items-center justify-center min-h-[52px] sm:min-h-[50px] py-3.5 px-4 sm:px-6 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-sans text-[16px] font-bold tracking-wide transition-all duration-200 ease-out hover:-translate-y-[1px] shadow-sm hover:shadow active:translate-y-0 cursor-pointer text-center uppercase whitespace-normal sm:whitespace-nowrap leading-snug sm:leading-normal"
                >
                  QUERO RECEBER MINHA ANÁLISE
                </a>

                {/* Linha discreta de segurança Hotmart com ícone de cadeado */}
                <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-500 font-sans">
                  <Lock className="w-3.5 h-3.5 text-neutral-400 shrink-0" />
                  <span>Pagamento seguro pela Hotmart.</span>
                </div>

                {/* Texto de apoio */}
                <p className="text-xs text-neutral-500 font-sans pt-1">
                  Após a compra, receba as instruções por e-mail e tenha acesso imediato à área de membros.
                </p>
              </div>

              {/* Divisória horizontal sutil */}
              <div className="w-full h-px bg-neutral-200/80 my-1" />

              {/* Bloco de Garantia de 7 dias com composição horizontal */}
              <div className="flex items-center justify-center gap-3.5 text-left pt-1">
                <div className="w-11 h-11 rounded-full bg-[#F6F3EF] border border-[#16A34A]/30 flex flex-col items-center justify-center shrink-0 leading-none">
                  <span className="text-sm font-black font-mono text-[#16A34A] leading-none">7</span>
                  <span className="text-[8px] font-bold font-mono uppercase text-[#16A34A] tracking-wider leading-none mt-0.5">DIAS</span>
                </div>
                <p className="text-xs sm:text-sm text-[#6B7280] font-sans leading-snug">
                  <strong className="font-semibold text-[#171717]">Garantia incondicional:</strong>{' '}
                  não gostou, devolvemos 100% do valor.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

