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
            <p><strong className="text-neutral-900 dark:text-neutral-200">Empresa:</strong> Nanet Digital</p>
            <p><strong className="text-neutral-900 dark:text-neutral-200">CNPJ:</strong> 65.262.598/0001-32</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="space-y-8 text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base font-sans">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              1. Sobre estes Termos
            </h2>
            <p>
              Estes Termos estabelecem as condições de uso do site e de contratação dos serviços da Nanet Digital.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              2. Sobre o Serviço
            </h2>
            <p>
              A Análise Estratégica da Empresa oferece diagnóstico do Perfil da Empresa no Google, orientação com especialista, plano de ajustes prioritários e acesso ao Grupo de Empresários no WhatsApp.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              3. Contratação e Pagamento
            </h2>
            <p>
              O serviço custa R$ 97, em pagamento único realizado pela Hotmart.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              4. Entrega do Serviço
            </h2>
            <p>
              Após a confirmação da compra, o cliente recebe as instruções para fornecer as informações necessárias e receber sua análise e orientação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              5. Garantia e Reembolso
            </h2>
            <p>
              O cliente tem garantia incondicional de 7 dias e pode solicitar reembolso pelos canais de atendimento ou pela Hotmart, sem prejuízo de seus direitos legais.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              6. Resultados e Responsabilidades
            </h2>
            <p>
              Os resultados dependem das condições de cada empresa e da aplicação das recomendações, sem garantia de posicionamento no Google, novos clientes ou faturamento.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              7. Uso dos Materiais
            </h2>
            <p>
              Os materiais fornecidos pela Nanet Digital destinam-se ao uso do cliente e não podem ser comercializados ou distribuídos sem autorização, ressalvados os direitos previstos em lei.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              8. Serviços de Terceiros
            </h2>
            <p>
              A Nanet Digital utiliza plataformas como Hotmart, WhatsApp e Google, respeitando as condições de cada serviço, sem possuir afiliação com o Google.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              9. Atualizações
            </h2>
            <p>
              Estes Termos podem ser atualizados conforme necessário, respeitando as condições das contratações já realizadas e a legislação brasileira.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-neutral-100">
              10. Atendimento
            </h2>
            <p>
              Dúvidas sobre o serviço, a contratação ou o reembolso podem ser esclarecidas pelo WhatsApp Suporte disponível no rodapé do site.
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
