'use client';

import { useLanguage } from '@/context/LanguageContext';
import { aboutContent } from '@/content/about';
import styles from './About.module.css';

export function About() {
  const { lang } = useLanguage();
  const data = aboutContent[lang];

  return (
    <section
      id={data.sectionId}
      className={styles.about}
      aria-labelledby="sobre-titulo"
    >
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className={styles.header}>
          <span className={styles.badge}>{data.badge}</span>
          <h2 id="sobre-titulo" className={styles.title}>
            {data.title}
          </h2>
        </div>

        {/* Grade de conteúdo principal */}
        <div className={styles.grid}>
          {/* Coluna de texto descritivo */}
          <div className={styles.bio}>
            {data.paragraphs.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          {/* Coluna de pilares de atuação */}
          <div className={styles.highlights}>
            {data.highlights.map((highlight) => (
              <article key={highlight.id} className={styles.highlightCard}>
                <h3 className={styles.highlightTitle}>
                  <span className={styles.highlightDot} aria-hidden="true" />
                  {highlight.title}
                </h3>
                <p className={styles.highlightDesc}>{highlight.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
