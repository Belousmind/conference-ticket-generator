import FormPage from '@components/form-page';
import Ticket from '@components/ticket';
import { useTicketStore } from './store/ticket-store';
import Header from '@components/header';

export default function App() {
  const ticket = useTicketStore((state) => state.ticket);

  return (
    <>
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
