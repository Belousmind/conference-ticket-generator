import styles from './style.module.scss';
import HintIcon from '@components/svg/hint-icon';
import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
  label: string;
  placeholder?: string;
  id: string;
  type: string;
  error?: FieldError;
  register: UseFormRegisterReturn;

};

export default function TextInput({
  label,
  placeholder = '',
  id,
  type,
  error,
  register,
}: TextInputProps) {
  return (
    <label htmlFor={id} className={styles.label}>
      <span>{label}</span>

      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={styles.input}
        {...register}
      />
      {error && (
        <span className={styles.hint}>
          <HintIcon /> {error.message}
        </span>
      )}
    </label>
  );
}
