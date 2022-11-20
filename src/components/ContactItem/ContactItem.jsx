import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import { BsFillTrashFill } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { deleteItems } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const onDeleteContact = contactId => dispatch(deleteItems(contactId));

  return (
    <li className={s.item} key={id}>
      <p className={s.info}>
        {name}: {number}
      </p>
      <BsFillTrashFill
        size={22}
        className={s.btn}
        type="button"
        onClick={() => onDeleteContact(id)}
      />
    </li>
  );
};

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
