import styles from './styles.module.scss';
import { ConfLogo, GithubIcon } from '@components/svg';
import TicketBackground from '../../public/pattern-ticket.svg';

type TicketProps = {
  name: string;
  email: string;
  github: string;
  imgSrc: string;
};

export default function Ticket({ name, email, github, imgSrc }: TicketProps) {
 
  return (
    <section className={styles['ticket-section']}>
      <div className={styles.confirmation}>
        <h1 className={styles.title}>
          Congrats, <span className={styles.name}>{name}! </span>
          Your ticket is ready.
        </h1>
        <p className={styles.text}>
          We've emailed your ticket to <br />
          <span className={styles.email}> {email}</span> and will send updates
          in the run up to the event.
        </p>
      </div>

      <div className={styles.ticket}>
        <img src={TicketBackground} alt="ticket" />
        <div className={styles['ticket-info']}>
          <ConfLogo />
          <div className={styles['event-summary']}>
            <span className={styles.event}>Coding Conf</span>
            <span className={styles['event-info']}>Jan 31, 2025</span>
            <span className={styles['event-info']}>/</span>
            <span className={styles['event-info']}>Austin, TX</span>
          </div>
        </div>
        <div className={styles.attendee}>
          <img src={imgSrc} alt={name} />
          <div className={styles['user-info']}>
            <span className={styles.fullname}>{name}</span>
            <GithubIcon />
            <span className={styles.github}>{github}</span>
          </div>
        </div>
        <span className={styles['ticket-number']}>#01609</span>
      </div>
    </section>
  );
}
