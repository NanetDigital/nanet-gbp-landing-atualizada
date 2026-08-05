import React from 'react';
import { Search, Cpu, Sliders, TrendingUp, Building2 } from 'lucide-react';
import { motion } from 'motion/react';

export const Provas: React.FC = () => {
  return (
    <section
      id="provas"
      className="w-full py-16 sm:py-24 bg-white dark:bg-neutral-950 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        
        {/* ========================================================== */}
        {/* PARTE 1: NARRATIVA VISUAL (3 CARDS)                         */}
        {/* ========================================================== */}
        <div className="space-y-12 sm:space-y-16">
          {/* Header principal */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
              <span className="font-semibold uppercase tracking-wide">ESTUDOS E RESULTADOS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
              Empresas que transformaram dados em mais clientes
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Veja como empresas utilizaram a Análise Estratégica baseada no Método Algoritmo+ para tomar decisões utilizando dados reais do Google.
            </p>
          </div>

          {/* Grid de 3 Cards da Narrativa */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* CARD 01: Diagnóstico Inicial */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-xs hover:border-[#16A34A]/30 transition-all space-y-6">
              <div className="w-full space-y-4 flex flex-col items-center">
                {/* Selo */}
                <span className="text-[11px] font-mono tracking-wider text-[#16A34A] uppercase font-semibold self-start">
                  DIAGNÓSTICO INICIAL
                </span>

                {/* Print Relatório Executivo */}
                <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1.5 sm:p-2 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/nds7zozp/image/upload/v1785785662/Gemini_Generated_Image_dqm223dqm223dqm2_xejyis.png"
                    alt="Diagnóstico Inicial - Relatório Executivo"
                    className="w-full h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block max-h-[280px] sm:max-h-[320px]"
                  />
                </div>

                {/* Título */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Descubrimos onde estavam as maiores oportunidades.
                </h3>

                {/* Texto */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                  Antes de qualquer decisão, realizamos uma análise completa do Perfil da Empresa no Google, identificando pontos fortes, oportunidades e fatores que limitavam a visibilidade nas pesquisas.
                </p>
              </div>
            </div>

            {/* CARD 02: Método Algoritmo+ - DESTAQUE VISUAL */}
            <div className="bg-white dark:bg-neutral-900/90 border-2 border-[#16A34A]/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-lg shadow-[#16A34A]/5 ring-1 ring-[#16A34A]/30 md:scale-[1.05] z-10 transition-all space-y-6">
              <div className="w-full space-y-4 flex flex-col items-center">
                {/* Selo */}
                <span className="text-[11px] font-mono tracking-wider text-[#16A34A] uppercase font-semibold self-start">
                  MÉTODO ALGORITMO+
                </span>

                {/* Print Mapa Verde / Plano Estratégico */}
                <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1.5 sm:p-2 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/nds7zozp/image/upload/v1785767999/3_nebdri.png"
                    alt="Plano Estratégico - Método Algoritmo+"
                    className="w-full h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block max-h-[280px] sm:max-h-[320px]"
                  />
                </div>

                {/* Título */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Transformamos dados em prioridades de ação.
                </h3>

                {/* Texto */}
                <p className="text-sm sm:text-base text-neutral-800 dark:text-neutral-200 font-sans leading-relaxed font-medium">
                  Com base nos dados oficiais do Google, identificamos quais ações geram maior impacto e definimos um plano estratégico personalizado para aumentar a presença da empresa nas pesquisas.
                </p>
              </div>
            </div>

            {/* CARD 03: Resultado Esperado */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 flex flex-col justify-between items-center text-center shadow-xs hover:border-[#16A34A]/30 transition-all space-y-6">
              <div className="w-full space-y-4 flex flex-col items-center">
                {/* Selo */}
                <span className="text-[11px] font-mono tracking-wider text-[#16A34A] uppercase font-semibold self-start">
                  RESULTADO ESPERADO
                </span>

                {/* Print Resultado Esperado */}
                <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1.5 sm:p-2 flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/nds7zozp/image/upload/v1785798403/Screenshot_20260803-130356_Google_1_mehnvp.jpg"
                    alt="Resultado Esperado - Pesquisa no Google"
                    className="w-[80%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block max-h-[280px] sm:max-h-[320px]"
                  />
                </div>

                {/* Título */}
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                  Sua empresa passa a ser encontrada por quem já está procurando o que você vende.
                </h3>

                {/* Texto */}
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                  Depois da implementação das melhorias, seu Perfil da Empresa ganha mais relevância nas pesquisas locais, aumentando as chances de receber ligações, mensagens, solicitações de rota e novos clientes.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* TRANSIÇÃO SUBTIL ENTRE AS SEÇÕES                            */}
        {/* ========================================================== */}
        <div className="w-full max-w-5xl mx-auto h-px bg-neutral-200/60 dark:bg-neutral-800/60" />

        {/* ========================================================== */}
        {/* PARTE 2: SEÇÃO DE VALIDAÇÃO (COMENTÁRIOS DE CLIENTES)       */}
        {/* ========================================================== */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Header da Validação com Badge "Validação Social" */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
              <span className="font-semibold uppercase tracking-wide">VALIDAÇÃO SOCIAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
              Clientes confirmam a experiência
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Os comentários abaixo foram publicados espontaneamente por clientes após a aplicação do Método Algoritmo+.
            </p>
          </div>

          {/* Grid dos 3 Comentários */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            
            {/* COMENTÁRIO 01 */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#16A34A]/30 transition-all flex flex-col items-center justify-center text-center space-y-5">
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1 sm:p-2 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785768020/2_mnahho.png"
                  alt="Comentário espontâneo de @thalitatmd.espaco no Instagram"
                  className="w-full h-auto object-contain max-h-[340px] sm:max-h-[400px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed font-medium">
                Primeiros resultados após a implementação.
              </p>
            </div>

            {/* COMENTÁRIO 02 */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#16A34A]/30 transition-all flex flex-col items-center justify-center text-center space-y-5">
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1 sm:p-2 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785768021/3_usiozw.png"
                  alt="Comentário espontâneo de @eriik.viniciuss no Instagram"
                  className="w-full h-auto object-contain max-h-[340px] sm:max-h-[400px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed font-medium">
                Resultados que geraram confiança para expandir o projeto.
              </p>
            </div>

            {/* COMENTÁRIO 03 */}
            <div className="bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 rounded-3xl p-6 sm:p-7 shadow-xs hover:border-[#16A34A]/30 transition-all flex flex-col items-center justify-center text-center space-y-5">
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-1 sm:p-2 flex items-center justify-center">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785768022/Sem_t%C3%ADtulo_crcwaj.png"
                  alt="Comentário espontâneo de @emporiosaren no Instagram"
                  className="w-full h-auto object-contain max-h-[340px] sm:max-h-[400px] rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] mx-auto block"
                />
              </div>
              <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed font-medium">
                Empresa voltou a contratar para outra unidade.
              </p>
            </div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* TRANSIÇÃO SUBTIL ENTRE AS SEÇÕES                            */}
        {/* ========================================================== */}
        <div className="w-full max-w-5xl mx-auto h-px bg-neutral-200/60 dark:bg-neutral-800/60" />

        {/* ========================================================== */}
        {/* PARTE 3: ESTUDO DE CASO REAL (TIMELINE NARRATIVA)           */}
        {/* ========================================================== */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Header do Estudo de Caso */}
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
              <span className="font-semibold uppercase tracking-wide">ESTUDO DE CASO REAL</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans leading-[1.18]">
              Como uma empresa expandiu o Método Algoritmo+ para todas as suas unidades
            </h2>

            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
              Conheça como uma empresa da Grande Vitória utilizou a Análise Estratégica para identificar oportunidades, implementar melhorias e expandir o projeto para todas as suas operações.
            </p>
          </div>

          {/* Timeline Vertical Elegante */}
          <div className="max-w-4xl mx-auto relative space-y-14 sm:space-y-20">
            
            {/* Linha Conectora Vertical Verde (Desktop) */}
            <div
              className="hidden sm:block absolute left-[39px] top-12 bottom-12 w-0.5 bg-gradient-to-b from-[#16A34A]/50 via-[#16A34A]/60 to-[#16A34A]/50 z-0"
              aria-hidden="true"
            />

            {/* ETAPA 01: Diagnóstico Estratégico */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0, ease: 'easeOut' }}
              className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-300/80 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#16A34A]/40 transition-all duration-250 ease-out space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Ícone e Número */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                    01
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                    <Search className="w-5 h-5 text-[#16A34A]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-2 flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    Diagnóstico Estratégico
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    Antes de qualquer decisão, analisamos o cenário completo da empresa utilizando dados oficiais do Google Business Profile. O objetivo é identificar com precisão as oportunidades de crescimento e definir prioridades.
                  </p>
                </div>
              </div>

              {/* Print do Diagnóstico Estratégico */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-2 sm:p-4">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785793152/Gemini_Generated_Image_yj7g7uyj7g7uyj7g_z5spgs.png"
                  alt="Diagnóstico Estratégico - Perfil da Empresa no Google"
                  className="w-full md:w-[92%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] max-h-[300px] sm:max-h-[380px] mx-auto block"
                />
              </div>
            </motion.div>

            {/* ETAPA 02: Plano de Ação Estratégico */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.1, ease: 'easeOut' }}
              className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-300/80 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#16A34A]/40 transition-all duration-250 ease-out space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Ícone e Número */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                    02
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                    <Cpu className="w-5 h-5 text-[#16A34A]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-2 flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    Plano de Ação Estratégico
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    Com base na análise de ranking e na distribuição geográfica dos concorrentes, identificamos exatamente quais ações devem ser priorizadas para aumentar a relevância do Perfil da Empresa nas pesquisas locais.
                  </p>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed mt-2">
                    Cada decisão é baseada em dados reais do Google, transformando informações em um plano estratégico claro para aumentar a visibilidade e gerar mais oportunidades de negócio.
                  </p>
                </div>
              </div>

              {/* Print do Plano de Ação Estratégico */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-2 sm:p-4">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785767999/3_nebdri.png"
                  alt="Plano de Ação Estratégico - Análise de Ranking"
                  className="w-[90%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] max-h-[300px] sm:max-h-[380px] mx-auto block"
                />
              </div>
            </motion.div>

            {/* ETAPA 03: Visibilidade e Atração de Clientes */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.2, ease: 'easeOut' }}
              className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-300/80 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#16A34A]/40 transition-all duration-250 ease-out space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Ícone e Número */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                    03
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                    <Sliders className="w-5 h-5 text-[#16A34A]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-2 flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    Mais clientes começam quando sua empresa é encontrada pelas pessoas certas.
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    Após a implementação das ações priorizadas, o Perfil da Empresa passou a gerar muito mais interações com clientes no Google. Isso significa mais pessoas descobrindo o negócio, solicitando rotas, enviando mensagens, realizando ligações e criando novas oportunidades reais de venda.
                  </p>
                </div>
              </div>

              {/* Print da Atração e Visibilidade de Clientes */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-2 sm:p-4">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785810377/image_qjb8wg.png"
                  alt="Mais clientes no Google - Perfil da Empresa"
                  className="w-[90%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] max-h-[300px] sm:max-h-[380px] mx-auto block"
                />
              </div>
            </motion.div>

            {/* ETAPA 04: Expansão com um método que pode ser replicado */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.3, ease: 'easeOut' }}
              className="relative z-10 bg-white dark:bg-neutral-950 border border-neutral-300/80 dark:border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-md hover:-translate-y-1 hover:border-[#16A34A]/40 transition-all duration-250 ease-out space-y-6"
            >
              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Ícone e Número */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                    04
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-[#16A34A]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-2 flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    Expansão com um método que pode ser replicado.
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed">
                    Depois que a estratégia gera resultados, o mesmo método pode ser aplicado em outras unidades ou operações da empresa, mantendo um padrão de gestão, fortalecendo a presença local de cada Perfil da Empresa e ampliando continuamente as oportunidades de conquistar novos clientes.
                  </p>
                </div>
              </div>

              {/* Print da Expansão */}
              <div className="w-full overflow-hidden rounded-2xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 p-2 sm:p-4">
                <img
                  src="https://res.cloudinary.com/nds7zozp/image/upload/v1785810680/4_n9nsxd.png"
                  alt="Expansão com um método que pode ser replicado"
                  className="w-[90%] h-auto object-contain rounded-[20px] shadow-[0_12px_35px_rgba(0,0,0,0.08)] max-h-[300px] sm:max-h-[380px] mx-auto block"
                />
              </div>
            </motion.div>

            {/* ETAPA 05: Confiança construída através dos resultados (Ponto Alto da Narrativa) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: 0.4, ease: 'easeOut' }}
              className="relative z-10 bg-white dark:bg-neutral-900/90 border-2 border-[#16A34A] rounded-3xl p-6 sm:p-8 shadow-md hover:shadow-lg hover:-translate-y-1 ring-2 ring-[#16A34A]/20 transition-all duration-250 ease-out space-y-6"
            >
              
              {/* Badge de Destaque CASO REAL */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDF4] dark:bg-emerald-950/80 border border-[#16A34A]/40 text-xs font-mono font-semibold text-[#16A34A] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
                <span className="uppercase tracking-wide">CASO REAL</span>
              </div>

              <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
                {/* Ícone e Número */}
                <div className="flex items-center gap-3 shrink-0">
                  <div className="w-12 h-12 rounded-2xl bg-[#F0FDF4] dark:bg-neutral-800 border border-[#16A34A]/60 flex items-center justify-center font-mono font-bold text-base text-[#16A34A] shadow-2xs">
                    05
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5 text-[#16A34A]" />
                  </div>
                </div>

                {/* Conteúdo */}
                <div className="space-y-4 flex-1 pt-0.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                    Confiança construída através dos resultados
                  </h3>
                  
                  <div className="space-y-3.5 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 font-sans leading-relaxed">
                    <p>
                      Após validar os resultados da primeira unidade, o empresário decidiu expandir a aplicação do Método Algoritmo+ para outras unidades da empresa.
                    </p>
                    <p>
                      Hoje o mesmo processo é utilizado em todas as <strong className="font-bold text-neutral-900 dark:text-neutral-100">6 unidades da GTR EBikes</strong> na Grande Vitória.
                    </p>
                    <p>
                      Quando um cliente decide expandir um projeto para toda a operação, isso demonstra confiança no método, no processo e nos resultados entregues. Essa expansão se tornou uma das maiores validações práticas do Método Algoritmo+.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ========================================================== */}
        {/* PARTE 4: CTA FINAL DA SEÇÃO (ATUALIZADO)                    */}
        {/* ========================================================== */}
        <div className="max-w-4xl mx-auto p-10 sm:p-14 lg:p-16 rounded-3xl bg-white dark:bg-neutral-950 border border-neutral-200/90 dark:border-neutral-800 text-center space-y-6 shadow-sm">
          
          {/* Badge de Apoio Superior */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-xs font-mono text-neutral-600 dark:text-neutral-400 shadow-xs mx-auto">
            <span className="w-2 h-2 rounded-full bg-[#16A34A]"></span>
            <span className="font-semibold uppercase tracking-wide">CASO REAL • RESULTADOS REAIS</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            Sua empresa pode ser o próximo estudo de caso.
          </h3>

          <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 font-sans leading-relaxed max-w-3xl mx-auto">
            Toda empresa possui oportunidades escondidas nas pesquisas do Google. Nossa Análise Estratégica identifica essas oportunidades e mostra exatamente quais ações priorizar.
          </p>

          <div className="pt-2 space-y-3">
            <a
              href="https://pay.hotmart.com/V106938201T"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center h-[58px] px-9 sm:px-12 rounded-xl bg-[#16A34A] hover:bg-[#15803D] text-white font-mono text-base sm:text-lg font-semibold border border-[#16A34A] transition-all duration-250 ease-out hover:-translate-y-[2px] shadow-sm hover:shadow-md active:translate-y-0 cursor-pointer"
            >
              Quero receber minha análise estratégica
            </a>

            {/* Linhas discretas de redução de fricção */}
            <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-sans space-y-0.5 pt-2">
              <p>Sem contrato de fidelidade.</p>
              <p>Análise personalizada para cada empresa.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
