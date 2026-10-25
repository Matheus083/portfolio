import { Language } from '@/context/LanguageContext';

export interface AboutHighlight {
  id: string;
  title: string;
  description: string;
}

export interface AboutData {
  sectionId: string;
  badge: string;
  title: string;
  paragraphs: string[];
  highlights: AboutHighlight[];
}

export const aboutContent: Record<Language, AboutData> = {
  pt: {
    sectionId: 'sobre',
    badge: 'Sobre mim',
    title: 'Trajetória e princípios de desenvolvimento',
    paragraphs: [
      'Sou Matheus Nunes, desenvolvedor Full Stack com foco no ecossistema TypeScript e aplicações web modernas. Minha abordagem de trabalho prioriza código limpo, arquitetura sustentável e facilidade de manutenção.',
      'Acredito que o desenvolvimento eficiente une atenção aos detalhes de interface com robustez de engenharia no backend, buscando resolver problemas reais com foco em usabilidade, acessibilidade e performance.',
    ],
    highlights: [
      {
        id: 'frontend',
        title: 'Frontend Moderno & Acessível',
        description: 'Construção de interfaces semânticas, responsivas e fluidas com React e Next.js, respeitando diretrizes de acessibilidade e padrões web.',
      },
      {
        id: 'fullstack',
        title: 'Visão de Ponta a Ponta',
        description: 'Estruturação de fluxos completos de aplicação, desde o modelo de dados e regras de negócio até a experiência final do usuário.',
      },
      {
        id: 'engineering',
        title: 'Qualidade e Manutenção',
        description: 'Foco em tipagem estrita com TypeScript, versionamento consistente e boas práticas de arquitetura de software.',
      },
    ],
  },
  en: {
    sectionId: 'sobre',
    badge: 'About Me',
    title: 'Journey and Engineering Principles',
    paragraphs: [
      'I am Matheus Nunes, a Full Stack developer focused on the TypeScript ecosystem and modern web applications. My development approach prioritizes clean code, sustainable architecture, and long-term maintainability.',
      'I believe that effective software balances attention to user interface details with robust backend engineering, aiming to solve real problems with focus on usability, accessibility, and high performance.',
    ],
    highlights: [
      {
        id: 'frontend',
        title: 'Modern & Accessible Frontend',
        description: 'Building semantic, responsive, and fluid interfaces with React and Next.js, complying with WCAG standards and modern web practices.',
      },
      {
        id: 'fullstack',
        title: 'End-to-End Mindset',
        description: 'Designing full application workflows, from data modeling and business rules to the final user experience.',
      },
      {
        id: 'engineering',
        title: 'Quality & Maintainability',
        description: 'Focus on strict TypeScript typing, consistent version control with Git, and solid software architecture principles.',
      },
    ],
  },
};
