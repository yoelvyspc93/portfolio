import styles from './Experience.module.scss';
import { CustomImage } from '@/components/common/CustomImage';

type ExperienceImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ExperienceItem = {
  id: string;
  period: string;
  company: string;
  paragraphs: string[];
  images?: ExperienceImage[];
};

const ITEMS: ExperienceItem[] = [
  {
    id: 'dspot',
    period: '2022 – Today',
    company: 'DSpot Team',
    paragraphs: [
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
    ],
    images: [
      {
        src: '/images/projects/flowsev.webp',
        alt: 'Code screen',
        width: 800,
        height: 600,
      },
      {
        src: '/images/projects/pioneerz.webp',
        alt: 'Typing close-up',
        width: 800,
        height: 600,
      },
      {
        src: '/images/projects/flowsev.webp',
        alt: 'Laptop with charts',
        width: 800,
        height: 600,
      },
      {
        src: '/images/projects/pioneerz.webp',
        alt: 'Code editor detail',
        width: 800,
        height: 600,
      },
    ],
  },
  {
    id: 'datatucar',
    period: '2020 – 2022',
    company: 'Datatucar',
    paragraphs: [
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
    ],
    images: [
      {
        src: '/images/projects/pioneerz.webp',
        alt: 'Code screen',
        width: 800,
        height: 600,
      },
      {
        src: '/images/projects/flowsev.webp',
        alt: 'Typing close-up',
        width: 800,
        height: 600,
      },
    ],
  },
  {
    id: 'university',
    period: '2013 – 2018',
    company: 'University',
    paragraphs: [
      'I was part of more than 10 projects that included landing pages with advanced animations and optimized SEO, as well as complex applications designed to manage large volumes of data. Thanks to the use of modern tools like Next.js, I developed innovative technical solutions and unique visual experiences.',
    ],
    images: [
      {
        src: '/images/projects/flowsev.webp',
        alt: 'Code screen',
        width: 800,
        height: 600,
      },
      {
        src: '/images/projects/pioneerz.webp',
        alt: 'Typing close-up',
        width: 800,
        height: 600,
      },
    ],
  },
];

export function Experience() {
  return (
    <section aria-labelledby="experience-heading" className={styles.section}>
      <div className={styles.container}>
        <h2 id="experience-heading" className={styles.title}>
          MY <span>EXPERIENCE</span>
        </h2>

        <ol className={styles.timeline}>
          {ITEMS.map((item) => (
            <li key={item.id} className={styles.item}>
              <div className={styles.marker} aria-hidden />

              <div className={styles.left}>
                <p className={styles.period}>{item.period}</p>
                <p className={styles.company}>{item.company}</p>
              </div>

              <div className={styles.right}>
                {item.paragraphs.map((p, i) => (
                  <p key={i} className={styles.paragraph}>
                    {p}
                  </p>
                ))}

                {item.images?.length ? (
                  <div className={styles.gallery} role="list">
                    {item.images.map((img, i) => (
                      <div key={i} role="listitem" className={styles.thumb}>
                        <CustomImage
                          src={img.src}
                          alt={img.alt}
                          width={img.width}
                          height={img.height}
                          priority={false}
                        />
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
