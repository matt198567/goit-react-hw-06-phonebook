import { ContactForm } from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';

export function App() {
  return (
    <Container>
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
