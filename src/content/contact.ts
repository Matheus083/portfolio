/**
 * Dados de contato e canais de comunicação profissionais.
 * Canais reais confirmados a partir do perfil oficial de Matheus Nunes.
 */
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

export const contactData: ContactData = {
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
};
