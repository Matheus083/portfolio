import { Language } from '@/context/LanguageContext';

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  isPlaceholder?: boolean;
  description: string;
  tags: string[];
  url?: string;
  urlLabel?: string;
}

export interface ProjectsData {
  sectionId: string;
  badge: string;
  title: string;
  subtitle: string;
  placeholderStatus: string;
  viewMoreText: string;
  githubProfileUrl: string;
  projects: ProjectItem[];
}

export const projectsContent: Record<Language, ProjectsData> = {
  pt: {
    sectionId: 'projetos',
    badge: 'Trabalhos & Contribuições',
    title: 'Projetos em Destaque',
    subtitle: 'Contribuições práticas e iniciativas em desenvolvimento.',
    placeholderStatus: 'Em estruturação',
    viewMoreText: 'Ver repositórios completos no GitHub',
    githubProfileUrl: 'https://github.com/Matheus083?tab=repositories',
    projects: [
      {
        id: 'vibe-trading',
        title: 'HKUDS / Vibe-Trading',
        category: 'Open Source (PR #18 Merged)',
        isPlaceholder: false,
        description:
          'Otimização de Developer Experience (DX) e orquestração de containers com Docker Compose Profiles, permitindo desenvolvimento isolado do frontend e comunicação DNS interna entre Vite e a API Python.',
        tags: ['Docker', 'Docker Compose', 'Python', 'Vite', 'TypeScript'],
        url: 'https://github.com/HKUDS/Vibe-Trading',
        urlLabel: 'Ver no GitHub',
      },
      {
        id: 'placeholder-1',
        title: 'Projeto em Desenvolvimento',
        category: 'Em Breve',
        isPlaceholder: true,
        description:
          'Espaço reservado para a próxima aplicação Full Stack em desenvolvimento. Código-fonte e detalhes de arquitetura serão publicados em breve.',
        tags: ['Next.js', 'TypeScript', 'Node.js'],
      },
      {
        id: 'placeholder-2',
        title: 'Projeto em Desenvolvimento',
        category: 'Em Breve',
        isPlaceholder: true,
        description:
          'Espaço reservado para documentação de arquitetura, automação ou API moderna em fase de desenvolvimento.',
        tags: ['Python', 'Docker', 'PostgreSQL'],
      },
    ],
  },
  en: {
    sectionId: 'projetos',
    badge: 'Work & Contributions',
    title: 'Featured Projects',
    subtitle: 'Practical contributions and works currently in progress.',
    placeholderStatus: 'In development',
    viewMoreText: 'View full repositories on GitHub',
    githubProfileUrl: 'https://github.com/Matheus083?tab=repositories',
    projects: [
      {
        id: 'vibe-trading',
        title: 'HKUDS / Vibe-Trading',
        category: 'Open Source (PR #18 Merged)',
        isPlaceholder: false,
        description:
          'Developer Experience (DX) optimization and container orchestration with Docker Compose Profiles, enabling isolated frontend development and internal DNS communication between Vite and Python API.',
        tags: ['Docker', 'Docker Compose', 'Python', 'Vite', 'TypeScript'],
        url: 'https://github.com/HKUDS/Vibe-Trading',
        urlLabel: 'View on GitHub',
      },
      {
        id: 'placeholder-1',
        title: 'Project in Development',
        category: 'Coming Soon',
        isPlaceholder: true,
        description:
          'Reserved space for the next Full Stack application in development. Source code and architectural documentation will be published soon.',
        tags: ['Next.js', 'TypeScript', 'Node.js'],
      },
      {
        id: 'placeholder-2',
        title: 'Project in Development',
        category: 'Coming Soon',
        isPlaceholder: true,
        description:
          'Reserved space for architectural documentation, automation pipeline, or modern API currently under development.',
        tags: ['Python', 'Docker', 'PostgreSQL'],
      },
    ],
  },
};
