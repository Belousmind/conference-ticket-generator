import FormPage from '@components/form-page';
import Ticket from '@components/ticket';
import { useTicketStore } from './store/ticket-store';
import Header from '@components/header';

export default function App() {
  const ticket = useTicketStore((state) => state.ticket);

  return (
    <>
      <img
        src="pattern-squiggly-line-bottom.svg"
        alt="pattern squiggly line bottom"
        className="pattern bottom-wave"
      />
      <img
        src="pattern-squiggly-line-top.svg"
        alt="pattern squiggly line top"
        className="pattern top-wave"
      />
      <img
        src="pattern-lines.svg"
        alt="pattern lines"
        className="pattern background-lines"
      />
      <Header />
      <main>
        {ticket ? (
          <Ticket
            name={ticket.name}
            email={ticket.email}
            github={ticket.github}
            imgSrc={ticket.imageUrl}
          />
        ) : (
          <FormPage />
        )}
      </main>
    </>
  );
}
