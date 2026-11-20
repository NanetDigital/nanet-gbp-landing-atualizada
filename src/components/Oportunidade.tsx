import React from 'react';
import { OportunidadeData } from '../types/landing';
import { DemonstracaoAnalise } from './DemonstracaoAnalise';
import { ClientesConfirmam } from './ClientesConfirmam';

export interface OportunidadeProps {
  data?: Partial<OportunidadeData>;
}

export const Oportunidade: React.FC<OportunidadeProps> = () => {
  return (
    <>
      {/* SEÇÃO COMPLETA: Clientes confirmam a experiência */}
      <ClientesConfirmam />

      {/* SEÇÃO DE DEMONSTRAÇÃO VISUAL DA ANÁLISE ESTRATÉGICA */}
      <DemonstracaoAnalise />
    </>
  );
};
