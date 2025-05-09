import styles from './style.module.scss';
import HintIcon from '@components/svg/hint-icon';

type TextInputProps = {
  text: string;
  placeholder?: string;
  id: string;
  name: string;
  type: string;
  hint: string;
};

export default function TextInput({
  text,
  placeholder = '',
  id,
  name,
  type,
  hint,
}: TextInputProps) {
  return (
    <label htmlFor={id} className={styles.label}>
      {text}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={styles.input}
      />
      <span className={styles.hint}>
        <HintIcon /> {hint}
      </span>
    </label>
  );
}
