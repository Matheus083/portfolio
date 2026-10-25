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
  title: {
    default: 'Matheus Nunes | Desenvolvedor Full Stack',
    template: '%s | Matheus Nunes',
  },
  description:
    'Portfólio profissional de Matheus Nunes, Desenvolvedor Full Stack especializado em engenharia de software, aplicações web e APIs modernas.',
  keywords: [
    'Matheus Nunes',
    'Desenvolvedor Full Stack',
    'Software Engineer',
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
  ],
  authors: [{ name: 'Matheus Nunes' }],
  creator: 'Matheus Nunes',
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
