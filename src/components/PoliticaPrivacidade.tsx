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
            <p><strong className="text-neutral-900 dark:text-neutral-200">Empresa:</strong> Nanet Digital</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">CNPJ:</strong> 65.262.598/0001-32</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">Última atualização:</strong> 15/10/2026</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-sans">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              1. Quem somos
            </h2>
            <p>
              A Nanet Digital oferece análises estratégicas para ajudar empresas a entender e melhorar sua presença no Google, respeitando a privacidade dos seus dados.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              2. Dados coletados
            </h2>
            <p>
              Podemos coletar nome, e-mail, WhatsApp, informações da empresa e dados de navegação necessários ao funcionamento do site e à prestação dos nossos serviços.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              3. Uso das informações
            </h2>
            <p>
              Utilizamos seus dados para preparar a análise, organizar o atendimento, prestar suporte e melhorar a experiência em nosso site, incluindo as informações enviadas pelos formulários.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              4. Cookies e ferramentas de análise
            </h2>
            <p>
              Utilizamos cookies e, quando efetivamente implementados, ferramentas como Google Analytics e Meta Pixel para compreender a navegação e medir o desempenho das campanhas, respeitando os controles de privacidade aplicáveis.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              5. WhatsApp
            </h2>
            <p>
              Utilizamos o WhatsApp para responder dúvidas, enviar orientações, prestar suporte e disponibilizar o acesso ao Grupo de Empresários no WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              6. Compartilhamento de dados
            </h2>
            <p>
              Não vendemos seus dados pessoais e podemos compartilhá-los com plataformas necessárias ao pagamento, atendimento, funcionamento do site e cumprimento de obrigações legais, incluindo a Hotmart quando aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              7. Segurança das informações
            </h2>
            <p>
              Adotamos medidas de segurança para proteger seus dados contra acessos não autorizados e usos indevidos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              8. Seus direitos
            </h2>
            <p>
              Você pode solicitar acesso, correção, exclusão e exercer outros direitos previstos na LGPD, conforme a legislação aplicável.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              9. Atualizações
            </h2>
            <p>
              Esta Política poderá ser atualizada quando necessário, com a data da última revisão informada nesta página.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              10. Contato
            </h2>
            <p>
              Para dúvidas ou solicitações relacionadas à privacidade e à proteção dos seus dados pessoais, entre em contato:
            </p>
            <div className="pt-1 text-sm sm:text-base space-y-1">
              <p><strong className="font-semibold text-neutral-900 dark:text-neutral-100">Nanet Digital</strong></p>
              <p><strong className="font-semibold text-neutral-900 dark:text-neutral-100">CNPJ:</strong> 65.262.598/0001-32</p>
              <p><strong className="font-semibold text-neutral-900 dark:text-neutral-100">E-mail:</strong> admin@nanetdigital.com</p>
            </div>
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
