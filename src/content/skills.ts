import { Language } from '@/context/LanguageContext';

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: string[];
}

export interface SkillsData {
  sectionId: string;
  badge: string;
  title: string;
  subtitle: string;
  categories: SkillCategory[];
}

export const skillsContent: Record<Language, SkillsData> = {
  pt: {
    sectionId: 'habilidades',
    badge: 'Competências Técnicas',
    title: 'Tecnologias & Ferramentas',
    subtitle: 'Linguagens, frameworks e ferramentas que utilizo no desenvolvimento de software.',
    categories: [
      {
        id: 'languages',
        title: 'Linguagens de Programação',
        description: 'Linguagens para desenvolvimento web, lógica de negócio e automação.',
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java'],
      },
      {
        id: 'frontend',
        title: 'Frontend & Web',
        description: 'Desenvolvimento de interfaces modernas, responsivas e semânticas.',
        skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'CSS Modules'],
      },
      {
        id: 'backend',
        title: 'Backend & Frameworks',
        description: 'Construção de APIs, automação e desenvolvimento de aplicações.',
        skills: ['Django', 'Express', 'Spring', 'Selenium', 'Qt'],
      },
      {
        id: 'tools-databases',
        title: 'Bancos de Dados, DevOps & Ferramentas',
        description: 'Persistência, conteinerização, versionamento e ambiente de desenvolvimento.',
        skills: ['Docker', 'MySQL', 'SQLite', 'Git', 'GitHub', 'Linux', 'VS Code'],
      },
    ],
  },
  en: {
    sectionId: 'habilidades',
    badge: 'Technical Skills',
    title: 'Technologies & Tools',
    subtitle: 'Programming languages, frameworks, and tools I use to build robust software.',
    categories: [
      {
        id: 'languages',
        title: 'Programming Languages',
        description: 'Languages for web development, business logic, and automated scripts.',
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java'],
      },
      {
        id: 'frontend',
        title: 'Frontend & Web',
        description: 'Building modern, responsive, and semantic web interfaces.',
        skills: ['React', 'Next.js', 'HTML5', 'CSS3', 'CSS Modules'],
      },
      {
        id: 'backend',
        title: 'Backend & Frameworks',
        description: 'API development, workflow automation, and distributed systems.',
        skills: ['Django', 'Express', 'Spring', 'Selenium', 'Qt'],
      },
      {
        id: 'tools-databases',
        title: 'Databases, DevOps & Tools',
        description: 'Data persistence, containerization, version control, and dev environments.',
        skills: ['Docker', 'MySQL', 'SQLite', 'Git', 'GitHub', 'Linux', 'VS Code'],
      },
    ],
  },
};
