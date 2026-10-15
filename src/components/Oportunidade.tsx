import React from 'react';
import { OportunidadeData } from '../types/landing';
import { DemonstracaoAnalise } from './DemonstracaoAnalise';
import { ClientesConfirmam } from './ClientesConfirmam';
import { EntregaveisAnalise } from './EntregaveisAnalise';
import { BonusChecklist } from './BonusChecklist';

export interface OportunidadeProps {
  data?: Partial<OportunidadeData>;
}

const defaultData: OportunidadeData = {
  tag: '',
  title: 'Ter um Perfil da Empresa no Google não significa que os clientes estão encontrando e escolhendo o seu negócio.',
  description: 'A análise vai mostrar onde sua empresa aparece, quais concorrentes estão na sua frente e o que precisa ser ajustado.',
  items: [],
};

export const Oportunidade: React.FC<OportunidadeProps> = () => {
  return (
    <>
      {/* SEÇÃO DE DEMONSTRAÇÃO VISUAL DA ANÁLISE ESTRATÉGICA */}
      <DemonstracaoAnalise />

      {/* SEÇÃO COMPLETA: Clientes confirmam a experiência */}
      <ClientesConfirmam />

      {/* SEÇÃO: Apresentação detalhada dos 4 entregáveis da Análise Estratégica */}
      <EntregaveisAnalise />

      {/* SEÇÃO: Bônus Incluso - Checklist de Implementação no Google */}
      <BonusChecklist />
    </>
  );
};



