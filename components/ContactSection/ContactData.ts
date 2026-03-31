export const ContactData = (locale?: string) => {
  const contactTexts =
    locale === 'en'
      ? {
          title: 'Any questions ?',
          description1:
            'Let us help you! Our Customer Happiness Team will gladly help you make the right choice and answer any questions you may have.',
          description2: 'Speak to a human',
          image: '/images/help.webp',
        }
      : {
          title: 'Des questions?',
          description1:
            'Laissez-nous vous aider! Notre équipe Customer Happiness se fera un plaisir de vous aider à faire le bon choix et de répondre à toutes vos questions.',
          description2: 'Parler à un humain',
          image: '/images/help.webp',
        };

  const contactInfo = [
    {
      text: 'Call',
      link: 'tel:+18888288371',
      icon: '/images/icons/phone-icon-w.svg',
      description: '+1 (888) 828-8371',
    },
    {
      text: 'Email',
      link: 'mailto:support@cozey.com',
      icon: '/images/icons/mail-icon-w.svg',
      description: 'support@cozey.com',
    },
  ];
  const contactInfoLegs = [
    ...(locale === 'en'
      ? [
          {
            text: 'Call',
            link: 'tel:+18335211089',
            icon: '/images/icons/phone-icon.svg',
            description: '+1 (833) 521-1089',
          },
          // {
          //   text: 'SMS',
          //   link: 'sms:+18335211089',
          //   icon: '/images/icons/sms-icon.svg',
          //   description: '+1 (833) 521-1089',
          // },
          {
            text: 'Email',
            link: 'mailto:support@cozey.ca',
            icon: '/images/icons/mail-icon.svg',
            description: 'support@cozey.ca',
          },
          {
            text: 'Live chat',
            link: 'live-chat',
            icon: '/images/icons/live-chat-icon.svg',
            description: 'Weekdays 9AM-8PM EST',
          },
        ]
      : [
          {
            text: 'Téléphone',
            link: 'tel:+18335211089',
            icon: '/images/icons/phone-icon.svg',
            description: '+1 (833) 521-1089',
          },
          // {
          //   text: 'SMS',
          //   link: 'sms:+18335211089',
          //   icon: '/images/icons/sms-icon.svg',
          //   description: '+1 (833) 521-1089',
          // },
          {
            text: 'Courriel',
            link: 'mailto:support@cozey.ca',
            icon: '/images/icons/live-chat-icon.svg',
            description: 'support@cozey.ca',
          },
          {
            text: 'Clavarder en direct',
            link: 'live-chat',
            icon: '/images/icons/live-chat-icon.svg',
            description: 'Weekdays 9AM-8PM EST',
          },
        ]),
  ];
  return { contactTexts, contactInfo, contactInfoLegs };
};
