import ArrowIcon from '../Icons/ArrowIcon';
import styles from './CircleButton.module.scss';

export const CircleButton = () => {
  return (
    <button
      aria-label="circle button"
      type="button"
      className={styles.circle_button}
    >
      <ArrowIcon />
    </button>
  );
};
