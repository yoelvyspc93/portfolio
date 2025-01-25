import styles from './CircleButton.module.scss';
import ArrowIcon from '@/../public/icons/arrow.svg';

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
