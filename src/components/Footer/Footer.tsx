'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { navigationContent } from '@/content/navigation';
import styles from './Footer.module.css';

export function Footer() {
  const { lang } = useLanguage();
  const navData = navigationContent[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.content}`}>
        <div>
          <Link href="/" className={styles.brand} aria-label={navData.brandAria}>
            Matheus Nunes<span className={styles.brandDot}>.</span>
          </Link>
          <p className={styles.tagline}>{navData.footerTagline}</p>
        </div>

        <ul className={styles.nav} aria-label={lang === 'pt' ? 'Navegação do rodapé' : 'Footer navigation'}>
          <li>
            <a href="#inicio" className={styles.navLink}>
              {lang === 'pt' ? 'Início' : 'Home'}
            </a>
          </li>
          {navData.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.copyright}>
          <p>© {currentYear} {navData.footerCopyright}</p>
        </div>
      </div>
    </footer>
  );
}
