import { WorkExperience } from '@/constants/experience';
//import styles from './ExperienceModal.module.scss';

export const ExperienceModal = ({
  experience,
}: {
  experience: WorkExperience;
}) => {
  console.log({ experience });

  return <div>Hello</div>;
};

/*
<div className={styles.experience}>
      <span className={styles.experience__date}>{period}</span>
      {details.map((desc, index) => (
        <p key={index} className={styles.experience__description}>
          {desc}
        </p>
      ))}
      <div className={styles.experience__technologies__title}>
        Technologies Learned
      </div>
      <div className={styles.experience__technologies}>
        {techStack.map((tech, index) => (
          <div key={index} className={styles.experience__technologies__item}>
            {tech}
          </div>
        ))}
      </div>
    </div>
*/
