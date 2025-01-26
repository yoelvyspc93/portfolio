'use client';

import { ReactNode } from 'react';
import styles from './Modal.module.scss';

import { useRouter } from 'next/navigation';
import CloseOutlineIcon from '../Icons/CloseOutlineIcon';

interface Props {
  isOpen: boolean;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, title, children }: Props) => {
  const router = useRouter();

  if (!isOpen) return null;

  return (
    <div className={`${styles.modal} modal`}>
      <div className={styles.modal__content}>
        <span className={styles.close_button} onClick={() => router.back()}>
          <CloseOutlineIcon />
        </span>
        <h2 className={styles.modal__title}>{title}</h2>
        <div className={styles.modal__body}>{children}</div>
      </div>
    </div>
  );
};
