import { contactData, ContactChannel } from '@/content/contact';
import styles from './Contact.module.css';

function ChannelIcon({ id }: { id: string }) {
  switch (id) {
    case 'email':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
    case 'linkedin':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case 'github':
      return (
        <svg
          width="20"
          height="20"
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
      );
    case 'whatsapp':
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
        </svg>
      );
    default:
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}

export function Contact() {
  return (
    <section
      id={contactData.sectionId}
      className={styles.contact}
      aria-labelledby="contato-titulo"
    >
      <div className="container">
        <div className={styles.card}>
          <span className={styles.badge}>{contactData.badge}</span>
          <h2 id="contato-titulo" className={styles.title}>
            {contactData.title}
          </h2>
          <p className={styles.description}>{contactData.description}</p>

          <div
            className={styles.grid}
            role="list"
            aria-label="Canais de contato direto"
          >
            {contactData.channels.map((channel: ContactChannel) => (
              <a
                key={channel.id}
                href={channel.url}
                target={channel.type === 'email' ? undefined : '_blank'}
                rel={
                  channel.type === 'email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                className={styles.channelCard}
                aria-label={`${channel.name}: ${channel.label}${
                  channel.type !== 'email' ? ' (abre em nova aba)' : ''
                }`}
                role="listitem"
              >
                <div className={styles.iconWrapper}>
                  <ChannelIcon id={channel.id} />
                </div>
                <div className={styles.channelContent}>
                  <span className={styles.channelName}>{channel.name}</span>
                  <span className={styles.channelLabel}>{channel.label}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
