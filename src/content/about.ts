/**
 * Conteúdo da seção 'Sobre mim'.
 * Separado do componente para facilitar a edição e futura internacionalização.
 * 
 * NOTA: Os textos abaixo são provisórios e estruturais, alinhados com o título
 * profissional confirmado (Desenvolvedor Full Stack). Devem ser refinados com a
 * biografia e conquistas reais de Matheus Nunes quando disponíveis.
 */
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

export const aboutData: AboutData = {
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
};
