import styles from './styles.module.scss';
import Button from '@components/form/button';
import TextInput from '@components/form/text-input';

export default function FormPage() {
  return (
    <section className={styles['form-page']}>
      <h1 className={styles.title}>
        Your Journey to Coding Conf 2025 Starts Here!
      </h1>
      <h2 className={styles.subtitle}>
        Secure your spot at next year’s biggest coding conference.
      </h2>
      <TextInput text="Your email" />
      <Button text="Generate My Ticket" />
    </section>
  );
}
