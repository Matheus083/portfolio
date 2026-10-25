'use client';

import { useLanguage } from '@/context/LanguageContext';
import { projectsContent } from '@/content/projects';
import styles from './Projects.module.css';

export function Projects() {
  const { lang } = useLanguage();
  const data = projectsContent[lang];

  return (
    <section
      id={data.sectionId}
      className={styles.projects}
      aria-labelledby="projetos-titulo"
    >
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className={styles.header}>
          <span className={styles.badge}>{data.badge}</span>
          <h2 id="projetos-titulo" className={styles.title}>
            {data.title}
          </h2>
          <p className={styles.subtitle}>{data.subtitle}</p>
        </div>

        {/* Grade de projetos */}
        <div className={styles.grid}>
          {data.projects.map((project) => (
            <article
              key={project.id}
              className={`${styles.card} ${
                project.isPlaceholder ? styles.placeholderCard : ''
              }`}
            >
              <div className={styles.cardTop}>
                <div className={styles.cardMeta}>
                  <span
                    className={`${styles.categoryBadge} ${
                      project.isPlaceholder ? styles.placeholderBadge : ''
                    }`}
                  >
                    {project.category}
                  </span>
                </div>

                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>

              <div>
                <ul
                  className={styles.tagsList}
                  aria-label={`Tecnologias de ${project.title}`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className={styles.tag}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className={styles.cardFooter}>
                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      aria-label={`${project.urlLabel || 'Acessar'} para ${project.title} (abre em nova aba)`}
                    >
                      <span>{project.urlLabel || 'Ver projeto'}</span>
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </a>
                  ) : (
                    <span className={styles.placeholderStatus}>
                      {data.placeholderStatus}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Botão de redirecionamento para o GitHub */}
        <div className={styles.viewMoreContainer}>
          <a
            href={data.githubProfileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.viewMoreBtn}
            aria-label={`${data.viewMoreText} (abre em nova aba)`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>{data.viewMoreText}</span>
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
