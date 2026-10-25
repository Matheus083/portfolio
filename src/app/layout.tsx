import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';
import { Header } from '@/components/Header/Header';
import { Footer } from '@/components/Footer/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: 'Matheus Nunes | Desenvolvedor Full Stack',
    template: '%s | Matheus Nunes',
  },
  description:
    'Portfólio profissional de Matheus Nunes, Desenvolvedor Full Stack especializado em engenharia de software, aplicações web e APIs modernas.',
  keywords: [
    'Matheus Nunes',
    'Desenvolvedor Full Stack',
    'Full Stack Developer',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Docker',
  ],
  authors: [{ name: 'Matheus Nunes', url: 'https://github.com/Matheus083' }],
  creator: 'Matheus Nunes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    alternateLocale: 'en_US',
    title: 'Matheus Nunes | Desenvolvedor Full Stack',
    description:
      'Portfólio profissional de Matheus Nunes, Desenvolvedor Full Stack especializado em Next.js, TypeScript e APIs escaláveis.',
    siteName: 'Matheus Nunes Portfolio',
    images: [
      {
        url: '/images/matheus.jpeg',
        width: 640,
        height: 800,
        alt: 'Matheus Nunes - Desenvolvedor Full Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Nunes | Desenvolvedor Full Stack',
    description:
      'Portfólio profissional de Matheus Nunes, Desenvolvedor Full Stack especializado em Next.js, TypeScript e APIs escaláveis.',
    images: ['/images/matheus.jpeg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t){document.documentElement.setAttribute('data-theme',t);}else if(window.matchMedia('(prefers-color-scheme: light)').matches){document.documentElement.setAttribute('data-theme','light');}}catch(e){}})();`,
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Header />
          <div style={{ paddingTop: '4.5rem' }}>
            {children}
            <Footer />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
