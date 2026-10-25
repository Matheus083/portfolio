import Link from 'next/link';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.content}`}>
        <div>
          <Link href="/" className={styles.brand} aria-label="Ir para o início">
            Matheus Nunes<span className={styles.brandDot}>.</span>
          </Link>
          <p className={styles.tagline}>
            Desenvolvedor Full Stack • Transformando ideias em software de alto impacto
          </p>
        </div>

        <ul className={styles.nav} aria-label="Navegação do rodapé">
          <li>
            <a href="#inicio" className={styles.navLink}>
              Início
            </a>
          </li>
          <li>
            <a href="#sobre" className={styles.navLink}>
              Sobre
            </a>
          </li>
          <li>
            <a href="#habilidades" className={styles.navLink}>
              Habilidades
            </a>
          </li>
          <li>
            <a href="#projetos" className={styles.navLink}>
              Projetos
            </a>
          </li>
          <li>
            <a href="#contato" className={styles.navLink}>
              Contato
            </a>
          </li>
        </ul>

        <div className={styles.copyright}>
          <p>© {currentYear} Matheus Nunes. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
