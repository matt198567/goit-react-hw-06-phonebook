import { ContactForm } from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Container from './Container/Container';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, filterContact } from 'redux/action';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const handleSubmitForm = contact => {
    contacts.find(
      item => item.name.toLowerCase() === contact.name.toLowerCase()
    )
      ? alert(` ${contact.name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const changeFilter = e => {
    dispatch(filterContact(e.currentTarget.value));
  };

  const onDeleteContact = contactID => {
    dispatch(deleteContact(contactID));
  };

  const normalFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalFilter)
  );

  return (
    <Container>
      <h2>Phonebook</h2>

      <ContactForm onSubmit={handleSubmitForm} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />

      {contacts.length === 0 ? (
        <h3>Please, add new contact</h3>
      ) : (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={onDeleteContact}
        />
      )}
    </Container>
  );
};
