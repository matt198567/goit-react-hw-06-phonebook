import s from './Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setItems, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import Container from 'components/Container/Container';

export function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const nameId = nanoid();
  const numberId = nanoid();

  const handleSubmit = evt => {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const normalizedName = name.toLowerCase();
    const checkDoubling = contacts
      .map(contact => contact.name.toLowerCase())
      .includes(normalizedName);
    if (checkDoubling) {
      alert(`${name} is already in your contacts`);
      return;
    }

    const newId = nanoid();
    const newContact = {
      id: newId,
      name,
      number,
    };
    dispatch(setItems(newContact));
    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>Name</label>
        <input
          className={s.input}
          id={nameId}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label className={s.label} htmlFor={numberId}>
          Phone
        </label>
        <input
          className={s.input}
          id={numberId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </Container>
  );
}
