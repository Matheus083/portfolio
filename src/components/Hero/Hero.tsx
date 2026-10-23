import Image from 'next/image';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-label="Apresentação principal">
      <div className={`container ${styles.grid}`}>
        {/* Conteúdo textual */}
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span>Disponível para novos projetos</span>
          </div>

          <h1 className={styles.title}>
            Olá, sou <span className={styles.highlight}>Matheus Nunes</span>
          </h1>

          <p className={styles.subtitle}>
            Desenvolvedor Full Stack
          </p>

          <p className={styles.description}>
            Especializado no desenvolvimento de aplicações web completas, combinando arquitetura
            escalável no ecossistema TypeScript com interfaces modernas, responsivas e de alta performance.
          </p>

          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryBtn}>
              <span>Ver Projetos</span>
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
              <span>Entrar em Contato</span>
            </a>
          </div>
        </div>

        {/* Retrato profissional */}
        <div className={styles.imageContainer}>
          <div className={styles.imageFrame}>
            <Image
              src="/images/matheus.jpeg"
              alt="Fotografia profissional de Matheus Nunes"
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
