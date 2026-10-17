import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/Header/Header';
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
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        <Header />
        <div style={{ paddingTop: '4.5rem' }}>{children}</div>
      </body>
    </html>
  );
}
