import { Language } from '@/context/LanguageContext';

export interface NavLink {
  href: string;
  label: string;
}

export interface NavigationContent {
  links: NavLink[];
  brandAria: string;
  githubLabel: string;
  footerTagline: string;
  footerCopyright: string;
}

export const navigationContent: Record<Language, NavigationContent> = {
  pt: {
    links: [
      { href: '#sobre', label: 'Sobre' },
      { href: '#habilidades', label: 'Habilidades' },
      { href: '#projetos', label: 'Projetos' },
      { href: '#contato', label: 'Contato' },
    ],
    brandAria: 'Matheus Nunes - Página Inicial',
    githubLabel: 'Perfil do GitHub de Matheus Nunes (abre em nova aba)',
    footerTagline: 'Desenvolvedor Full Stack • Transformando ideias em software de alto impacto',
    footerCopyright: 'Matheus Nunes. Todos os direitos reservados.',
  },
  en: {
    links: [
      { href: '#sobre', label: 'About' },
      { href: '#habilidades', label: 'Skills' },
      { href: '#projetos', label: 'Projects' },
      { href: '#contato', label: 'Contact' },
    ],
    brandAria: 'Matheus Nunes - Home Page',
    githubLabel: 'GitHub profile of Matheus Nunes (opens in new tab)',
    footerTagline: 'Full Stack Developer • Transforming ideas into high-impact software',
    footerCopyright: 'Matheus Nunes. All rights reserved.',
  },
};
