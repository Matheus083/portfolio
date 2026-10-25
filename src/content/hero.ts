import { Language } from '@/context/LanguageContext';

export interface HeroData {
  badge: string;
  greetingPrefix: string;
  name: string;
  role: string;
  description: string;
  ctaProjects: string;
  ctaContact: string;
  imageAlt: string;
}

export const heroContent: Record<Language, HeroData> = {
  pt: {
    badge: 'Disponível para novos projetos',
    greetingPrefix: 'Olá, sou',
    name: 'Matheus Nunes',
    role: 'Desenvolvedor Full Stack',
    description:
      'Especializado no desenvolvimento de aplicações web completas, combinando arquitetura escalável no ecossistema TypeScript com interfaces modernas, responsivas e de alta performance.',
    ctaProjects: 'Ver Projetos',
    ctaContact: 'Entrar em Contato',
    imageAlt: 'Fotografia profissional de Matheus Nunes',
  },
  en: {
    badge: 'Available for new projects',
    greetingPrefix: 'Hi, I am',
    name: 'Matheus Nunes',
    role: 'Full Stack Developer',
    description:
      'Specialized in building full-stack web applications, combining scalable architecture in the TypeScript ecosystem with modern, responsive, and high-performance interfaces.',
    ctaProjects: 'View Projects',
    ctaContact: 'Get in Touch',
    imageAlt: 'Professional photograph of Matheus Nunes',
  },
};
