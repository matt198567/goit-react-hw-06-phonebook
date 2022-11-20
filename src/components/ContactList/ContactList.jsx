import s from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import Container from 'components/Container/Container';
import { getContacts, getFilter } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const filteredContacts = getFilteredContacts();
  return (
    <Container>
      {filteredContacts.map(contact => {
        const { name, number, id } = contact;
        return (
          <ContactItem
            className={s.list}
            name={name}
            number={number}
            id={id}
            key={id}
          />
        );
      })}
    </Container>
  );
};

export default ContactList;
