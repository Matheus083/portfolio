'use client';

import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { heroContent } from '@/content/hero';
import styles from './Hero.module.css';

export function Hero() {
  const { lang } = useLanguage();
  const content = heroContent[lang];

  return (
    <section id="inicio" className={styles.hero} aria-label={content.name}>
      <div className={`container ${styles.grid}`}>
        {/* Conteúdo textual */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>{content.badge}</span>
          </div>

          <h1 className={styles.title}>
            {content.greetingPrefix} <span className={styles.highlight}>{content.name}</span>
          </h1>

          <p className={styles.subtitle}>
            {content.role}
          </p>

          <p className={styles.description}>
            {content.description}
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryBtn}>
              <span>{content.ctaProjects}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </a>

            <a href="#contato" className={styles.secondaryBtn}>
              <span>{content.ctaContact}</span>
            </a>
          </div>
        </div>

        {/* Retrato profissional */}
        <div className={styles.imageContainer}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/matheus.jpeg"
              alt={content.imageAlt}
              width={640}
              height={800}
              priority
              sizes="(max-width: 768px) 280px, 320px"
              className={styles.avatar}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
