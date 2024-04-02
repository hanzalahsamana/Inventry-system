import { configureStore } from '@reduxjs/toolkit';
import NotesReducer from '../../src/Store/apps/Notes/NotesSlice';
import CustomizerReducer from '../../src/Store/Customizer/CustomizerSlice';
import ChatsReducer from '../../src/Store/apps/chat/ChatSlice';
import ContactsReducer from '.././Store/apps/contacts/ContactSlice';
import EmailReducer from '../../src/Store/apps/email/EmailSlice';
import TicketReducer from '../../src/Store/apps/ticket/TicketSlice';

export const store = configureStore({
  reducer: {
    customizer: CustomizerReducer,
    notesReducer: NotesReducer,
    chatReducer: ChatsReducer,
    contactsReducer: ContactsReducer,
    emailReducer: EmailReducer,
    ticketReducer: TicketReducer,
  },
});

export default store;
