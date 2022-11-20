import Container from 'components/Container/Container';
import s from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter, getFilter } from 'redux/contactsSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Container>
      <label className={s.label}>
        Find contacts by name
        <input
          className={s.input}
          type="text"
          value={filter}
          onChange={changeFilter}
        ></input>
      </label>
    </Container>
  );
};

export default Filter;
