import { Language } from '@/context/LanguageContext';

export interface ContactChannel {
  id: string;
  name: string;
  label: string;
  value: string;
  url: string;
  type: 'email' | 'link';
}

export interface ContactData {
  sectionId: string;
  badge: string;
  title: string;
  description: string;
  channels: ContactChannel[];
}

export const contactContent: Record<Language, ContactData> = {
  pt: {
    sectionId: 'contato',
    badge: 'Conexões & Oportunidades',
    title: 'Vamos conversar?',
    description:
      'Estou aberto a novas oportunidades profissionais, projetos freelance e colaborações técnicas. Sinta-se à vontade para me contatar através de um dos canais abaixo:',
    channels: [
      {
        id: 'email',
        name: 'E-mail',
        label: 'matheusnunes.tech.dev@gmail.com',
        value: 'matheusnunes.tech.dev@gmail.com',
        url: 'mailto:matheusnunes.tech.dev@gmail.com',
        type: 'email',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        label: 'linkedin.com/in/matheus-nunes',
        value: 'matheus-nunes-34464b2a2',
        url: 'https://www.linkedin.com/in/matheus-nunes-34464b2a2',
        type: 'link',
      },
      {
        id: 'github',
        name: 'GitHub',
        label: 'github.com/Matheus083',
        value: 'Matheus083',
        url: 'https://github.com/Matheus083',
        type: 'link',
      },
      {
        id: 'whatsapp',
        name: 'WhatsApp',
        label: 'Conversar no WhatsApp',
        value: '+55 83 9386-1857',
        url: 'https://wa.me/558393861857',
        type: 'link',
      },
    ],
  },
  en: {
    sectionId: 'contato',
    badge: 'Connections & Opportunities',
    title: "Let's Connect",
    description:
      'I am open to new professional opportunities, freelance projects, and technical collaborations. Feel free to reach out through any of the channels below:',
    channels: [
      {
        id: 'email',
        name: 'Email',
        label: 'matheusnunes.tech.dev@gmail.com',
        value: 'matheusnunes.tech.dev@gmail.com',
        url: 'mailto:matheusnunes.tech.dev@gmail.com',
        type: 'email',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        label: 'linkedin.com/in/matheus-nunes',
        value: 'matheus-nunes-34464b2a2',
        url: 'https://www.linkedin.com/in/matheus-nunes-34464b2a2',
        type: 'link',
      },
      {
        id: 'github',
        name: 'GitHub',
        label: 'github.com/Matheus083',
        value: 'Matheus083',
        url: 'https://github.com/Matheus083',
        type: 'link',
      },
      {
        id: 'whatsapp',
        name: 'WhatsApp',
        label: 'Chat on WhatsApp',
        value: '+55 83 9386-1857',
        url: 'https://wa.me/558393861857',
        type: 'link',
      },
    ],
  },
};
