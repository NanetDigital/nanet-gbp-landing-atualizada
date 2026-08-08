import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  onBack: () => void;
}

export const TermosDeUso: React.FC<PageProps> = ({ onBack }) => {
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
            Termos de Uso
          </h1>
          <div className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-xs sm:text-sm font-mono text-neutral-600 dark:text-neutral-400 space-y-1">
            <p><strong className="text-neutral-900 dark:text-neutral-200">Empresa:</strong> Nanet</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">CNPJ:</strong> 65.262.598/0001-32</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">Última atualização:</strong> 04/08/2026</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-sans">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              1. Objeto
            </h2>
            <p>
              Estes Termos de Uso regulam o acesso e a utilização do website da <strong>Nanet</strong> (CNPJ 65.262.598/0001-32), apresentando as condições gerais para navegação, solicitação de Análise Estratégica da Empresa e agendamento de Sessões Estratégicas sobre o Perfil da Empresa no Google.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              2. Aceitação dos Termos
            </h2>
            <p>
              Ao navegar por este site ou contratar nossos serviços consultivos, você declara ter lido, compreendido e concordado integralmente com todos os termos e condições aqui estabelecidos. Caso não concorde com qualquer disposição, orientamos interromper a navegação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              3. Informações disponibilizadas
            </h2>
            <p>
              Os materiais, artigos, diagnósticos demonstrativos e descrições técnicas apresentados neste site visam prestar esclarecimentos estratégicos sobre a presença de empresas no Google. A Nanet busca manter todas as informações atualizadas e precisas com base nos dados públicos fornecidos pelas plataformas de busca.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              4. Limitação de responsabilidade
            </h2>
            <p>
              Os resultados de visibilidade e captação de clientes dependem de diversos fatores externos, incluindo atualizações de algoritmos de terceiros (como o Google), engajamento do público e atendimento prestado pela própria empresa contratante. A Nanet não garante volume fixo de faturamento nem se responsabiliza por decisões operacionais tomadas autonomamente pelo usuário.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              5. Propriedade intelectual
            </h2>
            <p>
              Todos os elementos deste site — incluindo a marca <strong>Nanet</strong>, logos, textos, layout, gráficos, estruturas de diagnósticos e o Método Algoritmo+ — são de propriedade exclusiva da Nanet ou licenciados de forma apropriada. É proibida a reprodução, cópia ou distribuição sem autorização prévia por escrito.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              6. Uso permitido do site
            </h2>
            <p>
              O usuário compromete-se a utilizar o site de forma lícita e ética, abstendo-se de praticar qualquer ato que possa danificar a infraestrutura, sobrecarregar os servidores ou violar direitos de terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              7. Links externos
            </h2>
            <p>
              Nosso site pode conter links para serviços externos de terceiros (como o WhatsApp). A Nanet não exerce controle sobre o conteúdo ou práticas de privacidade desses sites de terceiros e recomenda a leitura dos respectivos termos ao acessá-los.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              8. Alterações dos Termos
            </h2>
            <p>
              A Nanet reserva-se o direito de alterar estes Termos de Uso a qualquer momento para refletir atualizações operacionais ou legislativas. O uso continuado do site após modificações constitui concordância com os novos termos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              9. Legislação aplicável
            </h2>
            <p>
              Estes Termos de Uso são regidos e interpretados segundo as leis da República Federativa do Brasil.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              10. Contato
            </h2>
            <p>
              Para esclarecimentos sobre estes Termos de Uso, entre em contato através do nosso suporte oficial no WhatsApp.
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
