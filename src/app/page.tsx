import { Hero } from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { Skills } from '@/components/Skills/Skills';

export default function HomePage() {
  return (
    <main id="conteudo-principal">
      <Hero />
      <About />
      <Skills />
    </main>
  );
}

