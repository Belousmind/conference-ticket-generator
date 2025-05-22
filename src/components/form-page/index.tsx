import styles from './styles.module.scss';
import TicketForm from '@components/form';

export default function FormPage() {
  return (
    <section className={styles['form-page']}>
      <div className={styles.text}>
        <h1 className={styles.title}>
          Your Journey to Coding Conf 2025 Starts Here!
        </h1>
        <h2 className={styles.subtitle}>
          Secure your spot at next year’s biggest coding conference.
        </h2>
      </div>
      <TicketForm />
    </section>
  );
}
