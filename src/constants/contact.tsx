import EmailGradientIcon from '@/components/common/Icons/EmailGradientIcon';
import TelegramGradientIcon from '@/components/common/Icons/TelegramGradientIcon';
import { ReactNode } from 'react';

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
      icon: <EmailGradientIcon />,
      text: 'yoelvyspc93@gmail.com',
    },
    {
      icon: <TelegramGradientIcon />,
      text: '+53 54773819',
    },
  ],
};
