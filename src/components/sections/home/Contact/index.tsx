'use client';

import { InputField } from '@/components/common/Form/InputField';
import styles from './Contact.module.scss';
import { FormEvent, useState, useRef, useEffect } from 'react';
import { TextAreaField } from '@/components/common/Form/TextAreaField';
import { GradientButton } from '@/components/common/GradientButton';
import { contactInfo } from '@/constants/contact';
import { useTranslation } from '../../../../hooks/useTranslation';
import { useMailTo } from '@/hook/useMailTo';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { usePrefersReducedMotion } from '@/hook/usePrefersReducedMotion';

export const EMAIL_REGEX =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i;

const placeholders = [
  'Tell me about your project or idea you have in mind...',
  'Describe the technical requirements, timeline or any important details...',
];

export const Contact = () => {
  const { generateMailTo } = useMailTo();

  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [errors, setErrors] = useState<{ email?: string; message?: string }>(
    {},
  );

  const { t } = useTranslation('contact');
  const { contactLinks } = contactInfo;

  const messages = t('messages', { returnObjects: true }) as string[];
  const prefersReducedMotion = usePrefersReducedMotion();

  const titleRef = useRef(null);
  const descriptionRefs = useRef<(HTMLParagraphElement | null)[]>([]);
  const linksRef = useRef<(HTMLLIElement | null)[]>([]);
  const formRef = useRef(null);

  useEffect(() => {
    if (prefersReducedMotion) return;
    gsap.registerPlugin(ScrollTrigger);
    const title = titleRef.current;
    const form = formRef.current;

    // Hide elements initially
    gsap.set(title, { opacity: 0, y: 50 });
    descriptionRefs.current.forEach((desc) => {
      if (desc) gsap.set(desc, { opacity: 0, y: 50 });
    });
    gsap.set(form, { opacity: 0, y: 50 });
    linksRef.current.forEach((link) => {
      if (link) gsap.set(link, { opacity: 0, y: 50 });
    });

    // Animate title
    gsap.to(title, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: title,
        start: 'top 80%',
        once: true,
      },
    });

    // Animate descriptions
    descriptionRefs.current.forEach((desc, index) => {
      if (!desc) return;
      gsap.to(desc, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: desc,
          start: 'top 85%',
          once: true,
        },
      });
    });

    // Animate links after descriptions
    linksRef.current.forEach((link, index) => {
      if (!link) return;
      gsap.to(link, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: descriptionRefs.current.length * 0.2 + index * 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: link,
          start: 'top 90%',
          once: true,
        },
      });
    });

    // Animate form
    gsap.to(form, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: form,
        start: 'top 90%',
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [prefersReducedMotion]);

  const validateFields = (): boolean => {
    const newErrors: { email?: string; message?: string } = {};

    if (!email) {
      newErrors.email = t('form.errors.emailRequired');
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = t('form.errors.emailInvalid');
    }

    if (!message) {
      newErrors.message = t('form.errors.messageRequired');
    } else if (message.length < 3) {
      newErrors.message = t('form.errors.messageTooShort');
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (evt: FormEvent) => {
    evt.preventDefault();

    if (!validateFields()) {
      return;
    }

    generateMailTo({ email, message });
    setIsSubmit(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact__container}>
        <div className={styles.contact__info}>
          <h2 ref={titleRef}>{t('header')}</h2>
          {messages.map((desc, index) => (
            <p
              key={index}
              ref={(el) => {
                descriptionRefs.current[index] = el;
              }}
            >
              {desc}
            </p>
          ))}
          <ul>
            {contactLinks.map((item, index) => (
              <li
                key={item.text}
                ref={(el) => {
                  linksRef.current[index] = el;
                }}
              >
                {item.icon} {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact_form} ref={formRef}>
          <form onSubmit={handleSubmit}>
            {isSubmit ? (
              <p aria-live="polite">{t('form.success')}</p>
            ) : (
              <>
                <InputField
                  id="email"
                  label={t('form.emailLabel')}
                  type="email"
                  value={email}
                  onChange={(v) => setEmail(v)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <span
                    id="email-error"
                    className={styles.error}
                    aria-live="polite"
                  >
                    {errors.email}
                  </span>
                )}
                <TextAreaField
                  id="message"
                  label={t('form.messageLabel')}
                  value={message}
                  onChange={(v) => setMessage(v)}
                  placeholders={placeholders}
                  aria-describedby={
                    errors.message ? 'message-error' : undefined
                  }
                />
                {errors.message && (
                  <span
                    id="message-error"
                    className={styles.error}
                    aria-live="polite"
                  >
                    {errors.message}
                  </span>
                )}
                <GradientButton type="submit">
                  {t('form.submit')}
                </GradientButton>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
