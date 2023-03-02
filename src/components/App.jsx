import { useDispatch, useSelector } from 'react-redux';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

import { addContact, deleteContact } from '../redux/contacts/contacts-slice';
import { getFilter } from '../redux/filter/filter-selectors';
import {
  getFilteredContacts,
  getAllContacts,
} from '../redux/contacts/contacts-selectors';
import { setFilter } from '../redux/filter/filter-slice';

// import useLocalStorage from '../hooks/useLocalStorage/useLocalStorage';

const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const filter = useSelector(getFilter);
  const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch({
  //     type: '',
  //     payload: {
  //       id: '',
  //       name: '',
  //       number: '',
  //     },
  //   });
  // }, []);

  // const [contacts, setContacts] = useLocalStorage('my-contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  const isDuplicateContact = name => {
    const normalizedName = name.toLowerCase();
    const result = allContacts.find(({ name }) => {
      return name.toLowerCase() === normalizedName;
    });
    return Boolean(result);
  };

  const handleAddContact = ({ name, number }) => {
    if (isDuplicateContact(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  // const deleteContact = id => {
  //   setContacts(prevState => prevState.filter(contact => contact.id !== id));
  // };

  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />

      <h2>Contacts</h2>
      <ContactFilter value={filter} handleChange={handleFilter} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default App;
