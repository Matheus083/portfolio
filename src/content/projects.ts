/**
 * Dados da seção de Projetos e Contribuições.
 * Inclui contribuições verificadas do perfil de Matheus Nunes
 * e placeholders explícitos para novas aplicações.
 */
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
  githubProfileUrl: string;
  projects: ProjectItem[];
}

export const projectsData: ProjectsData = {
  sectionId: 'projetos',
  badge: 'Trabalhos & Contribuições',
  title: 'Projetos em Destaque',
  subtitle: 'Contribuições práticas e iniciativas em desenvolvimento.',
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
};
