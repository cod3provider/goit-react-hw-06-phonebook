import ContactItem from '../ContactItem/ContactItem';

import { useSelector } from 'react-redux';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import { getFilter } from '../../redux/filter/filter-selectors';

import s from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(getAllContacts);
  const filtered = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filtered.toString().toLowerCase();

    if (filtered === '') {
      return contacts;
    }

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filter = filteredContacts();

  return (
    <ul className={s.list}>
      {filter.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
