import styles from './styles.module.scss';

type ButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  disabled: boolean;
};

export default function Button({
  text,
  disabled,
  type = 'button',
}: ButtonProps) {
  return (
    <button type={type} disabled={disabled} className={styles.button}>
      {text}
    </button>
  );
}
