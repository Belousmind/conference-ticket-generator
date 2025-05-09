import styles from './style.module.scss';
import HintIcon from '@components/svg/hint-icon';

type TextInputProps = {
  text: string;
  placeholder?: string;
};

export default function TextInput({ text, placeholder = '' }: TextInputProps) {
  return (
    <label htmlFor="text" className={styles.label}>
      {text}
      <input
        type="text"
        name=""
        id="text"
        placeholder={placeholder}
        className={styles.input}
      />
      <span className={styles.hint}>
        <HintIcon /> This is a hint text to help user
      </span>
    </label>
  );
}
