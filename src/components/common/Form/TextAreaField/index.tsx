import styles from './TextAreaField.module.scss';

interface Props {
  label: string;
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const TextAreaField = ({ label, id, value, onChange }: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        className={styles.textarea}
      />
    </div>
  );
};
