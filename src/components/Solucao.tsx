import React from 'react';
import { SolucaoData } from '../types/landing';
import { SectionHeader } from './SectionHeader';
import { Layers, Search, MapPin, CheckCircle2, Cpu, BarChart2, ShieldCheck } from 'lucide-react';

export interface SolucaoProps {
  data?: Partial<SolucaoData>;
}

const defaultData: SolucaoData = {
  tag: 'MÉTODO ALGORITMO+',
  title: 'A Metodologia que transforma dados de busca em novos clientes',
  description: 'Analisamos minuciosamente o ecossistema do Google para identificar onde sua empresa está perdendo oportunidades e como assumir o controle do mercado local.',
  pillars: [
    {
      id: 'sol-1',
      title: 'Mapeamento de Demanda Ativa',
      description: 'Identificamos os exatos termos de busca e volume de pesquisa que seus potenciais clientes usam diariamente.',
      technicalNote: 'Inteligência de Dados Google',
    },
    {
      id: 'sol-2',
      title: 'Auditoria do Perfil no Google',
      description: 'Avaliamos fotos, categorias, avaliações e relevância do seu perfil comparado aos líderes locais.',
      technicalNote: 'Otimização de Posicionamento',
    },
    {
      id: 'sol-3',
      title: 'Análise Competitiva Direta',
      description: 'Descubra por que os concorrentes aparecem antes e quais brechas sua empresa pode explorar.',
      technicalNote: 'Benchmark da Concorrência',
    },
    {
      id: 'sol-4',
      title: 'Matriz de Priorização',
      description: 'Um plano simples, direto ao ponto, mostrando as correções que geram o maior impacto em menor tempo.',
      technicalNote: 'Roteiro Prático de Execução',
    },
  ],
};

export const Solucao: React.FC<SolucaoProps> = ({ data = {} }) => {
  const solData = { ...defaultData, ...data };
  const pillars = solData.pillars || defaultData.pillars;

  return (
    <section
      id="solucao"
      className="w-full py-16 sm:py-24 bg-neutral-50 dark:bg-neutral-900/50 border-b border-neutral-100 dark:border-neutral-900"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag={solData.tag}
          title={solData.title}
          description={solData.description}
        />

        {/* Visual Solution Showcase Frame */}
        <div className="mb-12 bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-neutral-100 dark:border-neutral-800">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold mb-2">
                <Cpu className="w-3.5 h-3.5 text-[#16A34A]" />
                MECANISMO ÚNICO DE DIAGNÓSTICO
              </div>
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 font-sans">
                Arquitetura de Análise do Método Algoritmo+
              </h3>
            </div>
            <div className="text-xs font-mono text-neutral-500 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
              <span>Verificado por Especialistas em Busca Local</span>
            </div>
          </div>

          {/* Interactive Flow Diagram */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-bold font-mono text-xs">
                01
              </div>
              <div className="font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
                Coleta &amp; Mineração de Dados
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                Extraímos o histórico real de buscas da sua região para entender o volume exato de potenciais compradores.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-bold font-mono text-xs">
                02
              </div>
              <div className="font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
                Cruzamento de Posicionamento
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                Comparamos o perfil da sua empresa com os líderes atuais no Google Maps para isolar falhas de estrutura.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center font-bold font-mono text-xs">
                03
              </div>
              <div className="font-semibold text-neutral-900 dark:text-neutral-100 font-sans">
                Plano de Ação Tático
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans">
                Geramos um roteiro prático ordenado por impacto e esforço, pronto para ser implementado.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.id || idx}
              className="p-6 sm:p-8 bg-white dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 rounded-2xl flex flex-col justify-between hover:border-[#16A34A]/30 transition-all shadow-2xs"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/80 flex items-center justify-center font-mono text-xs font-bold text-[#16A34A] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2 font-sans">
                  {pillar.title}
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 dark:border-neutral-900 text-xs font-mono text-neutral-400 font-medium">
                {pillar.technicalNote}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

