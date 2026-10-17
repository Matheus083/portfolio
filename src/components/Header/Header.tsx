import Link from 'next/link';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        {/* Identidade / Logotipo */}
        <Link href="/" className={styles.brand} aria-label="Matheus Nunes - Página Inicial">
          Matheus Nunes<span className={styles.brandDot}>.</span>
        </Link>

        {/* Navegação Semântica */}
        <nav className={styles.nav} aria-label="Navegação principal">
          <ul className={styles.navList}>
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

          {/* Link Externo Verificado do GitHub */}
          <div className={styles.actions}>
            <a
              href="https://github.com/Matheus083"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubLink}
              aria-label="Perfil do GitHub de Matheus Nunes (abre em nova aba)"
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
              <span className={styles.githubText}>GitHub</span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
