export interface SectionInfo {
  id: string;
  number: number;
  name: string;
  tag: string;
}

export interface HeroData {
  badge: string;
  headline: string;
  subheadline: string;
  primaryCta: string;
  secondaryCta: string;
  mockupPlaceholder: string;
  socialProofNote: string;
}

export interface OpportunityItem {
  id: string;
  metric: string;
  title: string;
  description: string;
}

export interface OportunidadeData {
  tag: string;
  title: string;
  description: string;
  items: OpportunityItem[];
}

export interface ProblemItem {
  id: string;
  label: string;
  painPoint: string;
  consequence: string;
}

export interface ProblemaData {
  tag: string;
  title: string;
  description: string;
  problems: ProblemItem[];
}

export interface SolutionPillar {
  id: string;
  title: string;
  description: string;
  technicalNote: string;
}

export interface SolucaoData {
  tag: string;
  title: string;
  description: string;
  pillars: SolutionPillar[];
}

export interface HowItWorksStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface ComoFuncionaData {
  tag: string;
  title: string;
  description: string;
  steps: HowItWorksStep[];
}

export interface DeliverableItem {
  id: string;
  title: string;
  description: string;
  estimatedValue: string;
  isBonus?: boolean;
}

export interface OQueVoceRecebeData {
  tag: string;
  title: string;
  description: string;
  deliverables: DeliverableItem[];
}

export interface ProofItem {
  id: string;
  authorRole: string;
  quote: string;
  metricResult: string;
  context: string;
}

export interface ProvasData {
  tag: string;
  title: string;
  description: string;
  proofs: ProofItem[];
}

export interface OfferFeature {
  id: string;
  text: string;
}

export interface OfertaData {
  tag: string;
  title: string;
  subtitle: string;
  packageName: string;
  anchorPrice: string;
  currentPrice: string;
  paymentDetails: string;
  features: OfferFeature[];
  guaranteeBadge: string;
  ctaText: string;
  disclaimer: string;
}

export interface FAQItemData {
  id: string;
  question: string;
  answer: string;
}

export interface FAQData {
  tag: string;
  title: string;
  description: string;
  items: FAQItemData[];
}

export interface CTAFinalData {
  tag: string;
  title: string;
  subtitle: string;
  ctaText: string;
  reassuranceNote: string;
}

export interface RodapeData {
  brandName: string;
  copyright: string;
  links: string[];
  disclaimer: string;
}

export interface LandingPageArchitectureData {
  hero: HeroData;
  oportunidade: OportunidadeData;
  problema: ProblemaData;
  solucao: SolucaoData;
  comoFunciona: ComoFuncionaData;
  oQueVoceRecebe: OQueVoceRecebeData;
  provas: ProvasData;
  oferta: OfertaData;
  faq: FAQData;
  ctaFinal: CTAFinalData;
  rodape: RodapeData;
}
