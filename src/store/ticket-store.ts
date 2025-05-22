import { create } from 'zustand';

type TicketData = {
  name: string;
  email: string;
  github: string;
  imageUrl: string;
};

type TicketStore = {
  ticket: TicketData | null;
  setTicket: (data: TicketData) => void;
  resetTicket: () => void;
};

export const useTicketStore = create<TicketStore>((set) => ({
  ticket: null,
  setTicket: (data) => set({ ticket: data }),
  resetTicket: () => set({ ticket: null }),
}));
