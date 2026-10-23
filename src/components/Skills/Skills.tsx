import { skillsData } from '@/content/skills';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section
      id={skillsData.sectionId}
      className={styles.skills}
      aria-labelledby="habilidades-titulo"
    >
      <div className="container">
        {/* Cabeçalho da seção */}
        <div className={styles.header}>
          <span className={styles.badge}>{skillsData.badge}</span>
          <h2 id="habilidades-titulo" className={styles.title}>
            {skillsData.title}
          </h2>
          <p className={styles.subtitle}>{skillsData.subtitle}</p>
        </div>

        {/* Grade de categorias */}
        <div className={styles.grid}>
          {skillsData.categories.map((category) => (
            <article key={category.id} className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.categoryTitle}>{category.title}</h3>
                <p className={styles.categoryDescription}>
                  {category.description}
                </p>
              </div>

              <ul
                className={styles.skillsList}
                aria-label={`Tecnologias de ${category.title}`}
              >
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skillItem}>
                    <span className={styles.skillDot} aria-hidden="true" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
