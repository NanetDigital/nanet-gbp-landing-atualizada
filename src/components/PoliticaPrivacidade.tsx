import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

export const PoliticaPrivacidade: React.FC<PageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans antialiased py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-6 border-b border-neutral-200 dark:border-neutral-800">
          <img
            src="https://res.cloudinary.com/nds7zozp/image/upload/f_auto,q_auto,w_300/v1785814782/Design_sem_nome_3_esxy36.png"
            alt="Nanet Logo"
            width={120}
            height={32}
            loading="lazy"
            decoding="async"
            className="w-[120px] h-auto object-contain"
          />
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-mono font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 hover:bg-neutral-200 dark:hover:bg-neutral-800 rounded-xl transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao início</span>
          </button>
        </div>

        {/* Title & Metadata */}
        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100 font-sans">
            Política de Privacidade
          </h1>
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
            <p><strong className="text-neutral-900 dark:text-neutral-200">Razão Social / Marca:</strong> Nanet</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">CNPJ:</strong> 65.262.598/0001-32</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">Última atualização:</strong> 04/08/2026</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-sans">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              1. Quem somos
            </h2>
            <p>
              A <strong>Nanet</strong> (CNPJ 65.262.598/0001-32) é uma empresa especializada em estratégias de visibilidade digital e otimização de Perfil da Empresa no Google Business Profile. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados pessoais em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 - LGPD).
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              2. Quais dados coletamos
            </h2>
            <p>
              Coletamos informações necessárias para fornecer nossos serviços consultivos e atender às solicitações de contato:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400">
              <li><strong>Informações fornecidas por você:</strong> Nome, e-mail, telefone/WhatsApp, nome da empresa e dados sobre o Perfil da Empresa no Google enviados via formulários ou mensagens.</li>
              <li><strong>Dados de navegação e dispositivo:</strong> Endereço IP, tipo de navegador, sistema operacional, páginas visitadas e tempo de permanência no site.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              3. Como utilizamos essas informações
            </h2>
            <p>
              Utilizamos os dados coletados com as seguintes finalidades legítimas:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-neutral-600 dark:text-neutral-400">
              <li>Realizar o diagnóstico estratégico e preparar a Sessão Estratégica solicitada.</li>
              <li>Entrar em contato via WhatsApp ou e-mail para agendamentos e suporte consultivo.</li>
              <li>Aprimorar a experiência de navegação e aperfeiçoar nossos conteúdos e serviços.</li>
              <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              4. Cookies
            </h2>
            <p>
              Cookies são pequenos arquivos armazenados em seu dispositivo ao visitar nosso site. Utilizamos cookies para garantir o correto funcionamento das páginas, lembrar suas preferências de navegação e analisar o tráfego do site para melhorias contínuas. Você pode desativar os cookies nas configurações do seu navegador a qualquer momento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              5. Google Analytics
            </h2>
            <p>
              Utilizamos a ferramenta Google Analytics para compreender de forma agregada e anônima como os visitantes interagem com nossas páginas. O Google Analytics coleta métricas estatísticas de acessos sem identificar individualmente os usuários.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              6. Meta Pixel
            </h2>
            <p>
              Podemos utilizar o Meta Pixel para mensurar a eficácia de nossas campanhas de tráfego pago na rede Meta (Facebook e Instagram), permitindo apresentar anúncios relevantes para pessoas interessadas na otimização de empresas no Google.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              7. Formulários de contato
            </h2>
            <p>
              Os dados preenchidos nos formulários deste site são utilizados estritamente para a finalidade informada no momento da coleta, como o agendamento da Análise Estratégica da Empresa e o envio do Relatório Executivo.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              8. WhatsApp
            </h2>
            <p>
              Ao iniciar uma conversa pelo canal de atendimento do WhatsApp, os dados transmitidos serão tratados exclusivamente para responder às suas dúvidas e orientar sobre nossos serviços consultivos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              9. Compartilhamento de dados
            </h2>
            <p>
              A <strong>Nanet não vende, aluga ou comercializa</strong> dados pessoais a terceiros. O compartilhamento ocorre apenas com fornecedores de infraestrutura tecnológica (como hospedagem e análise de tráfego) estritamente necessários para a operação do site ou por determinação judicial/legal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              10. Segurança das informações
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acessos não autorizados, perda, destruição ou alteração. O tráfego de dados neste site é protegido por criptografia SSL/TLS.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              11. Direitos do titular dos dados
            </h2>
            <p>
              Nos termos da LGPD, você possui o direito de confirmar a existência de tratamento, acessar seus dados, solicitar a correção de dados incompletos ou a eliminação de informações desnecessárias. Para exercer seus direitos, entre em contato através dos nossos canais de atendimento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              12. Contato
            </h2>
            <p>
              Se você tiver qualquer dúvida referente a esta Política de Privacidade ou ao tratamento de seus dados pela <strong>Nanet</strong>, entre em contato pelo nosso canal oficial no WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              13. Atualizações desta política
            </h2>
            <p>
              Esta Política de Privacidade pode ser atualizada periodicamente para refletir melhorias em nossos processos ou adequações regulatórias. A data da última versão está sempre indicada no topo deste documento.
            </p>
          </section>
        </div>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 flex justify-start">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono font-semibold text-white bg-[#16A34A] hover:bg-[#15803D] rounded-xl transition-all cursor-pointer shadow-xs hover:-translate-y-0.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar à Página Inicial</span>
          </button>
        </div>
      </div>
    </div>
  );
};
