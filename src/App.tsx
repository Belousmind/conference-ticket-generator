import FormPage from '@components/form-page';
import Ticket from '@components/ticket';
import { useTicketStore } from './store/ticket-store';
import Header from '@components/header';
import img from './public/image-avatar.jpg'
export default function App() {
  const ticket = useTicketStore((state) => state.ticket);

  return (
    <>
      <Header />
      <FormPage />
      <Ticket
        name="Ada Lovelace"
        email="ada.lovelace@computing.io"
        github="@ada-codequeen"
        imgSrc={img}
      />
      {/* {ticket ? (
        <Ticket
          name={ticket.name}
          email={ticket.email}
          github={ticket.github}
          imgSrc={ticket.imageUrl}
        />
      ) : (
        <FormPage />
      )} */}
    </>
  );
}
