import { CircleButton } from '../CircleButton';
import styles from './ProjectsCard.module.scss';

interface Props {
  number: string;
  title: string;
  content: string;
}

export const ProjectsCard = ({ number, title, content }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <span className={styles.index}>{number}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.content}>{content}</p>
        <div className={styles.icon}>
          <CircleButton />
        </div>
      </div>
    </div>
  );
};
