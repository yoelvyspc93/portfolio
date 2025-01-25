import { ReactNode } from 'react';

import EmailIcon from '@/../public/icons/email-gradient.svg';
import TelegramIcon from '@/../public/icons/telegram-gradient.svg';

export interface ContactInfo {
  header: string;
  messages: string[];
  contactLinks: {
    icon: ReactNode;
    text: string;
  }[];
}

export const contactInfo: ContactInfo = {
  header: 'Contact Me',
  messages: [
    'I am always open to new opportunities, collaborations, and exciting projects. If you have any questions or just want to say hello, feel free to send me a message.',
    'I will be happy to respond as soon as possible!',
  ],
  contactLinks: [
    {
      icon: <EmailIcon />,
      text: 'yoelvyspc93@gmail.com',
    },
    {
      icon: <TelegramIcon />,
      text: '+53 54773819',
    },
  ],
};
