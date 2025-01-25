import styles from './InputField.module.scss';

interface Props {
  label: string;
  type: 'text' | 'email';
  id: string;
  value: string;
  onChange: (value: string) => void;
}

export const InputField = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
}: Props) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        className={styles.input}
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
      />
    </div>
  );
};
