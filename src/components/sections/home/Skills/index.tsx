import type { JSX } from 'react';
import styles from './Skills.module.scss';

const TITLE_LEFT = 'MY';
const TITLE_RIGHT = 'SKILLS';
const DESCRIPTION =
  'I approach every project as an opportunity to refine my skills and create meaningful results.';

export function Skills(): JSX.Element {
  return (
    <section
      className={styles.section}
      aria-labelledby="skills-heading"
      id="skills"
    >
      <div className={styles.container}>
        <h2 id="skills-heading" className={styles.title}>
          {TITLE_LEFT} <span>{TITLE_RIGHT}</span>
        </h2>

        <p className={styles.subtitle}>{DESCRIPTION}</p>
      </div>
    </section>
  );
}
