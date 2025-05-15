import styles from './styles.module.scss';
import { ConfLogo } from '@components/svg';

export default function Header() {
  return (
    <header className={styles.header}>
      <ConfLogo />
      <span className={styles.text}>coding conf</span>
    </header>
  );
}
