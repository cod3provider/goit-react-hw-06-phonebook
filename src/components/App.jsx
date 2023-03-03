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

const App = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  // const filter = useSelector(getFilter);
  // const allContacts = useSelector(getAllContacts);

  const dispatch = useDispatch();

  // const isDuplicateContact = name => {
  //   const normalizedName = name.toLowerCase();
  //   const result = allContacts.find(({ name }) => {
  //     return name.toLowerCase() === normalizedName;
  //   });
  //   return Boolean(result);
  // };
  //
  // const handleAddContact = ({ name, number }) => {
  //   if (isDuplicateContact(name)) {
  //     alert(`${name} is already in contacts`);
  //     return;
  //   }
  //
  //   dispatch(addContact({ name, number }));
  // };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  // const handleFilter = e => {
  //   dispatch(setFilter(e.target.value));
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
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={handleDeleteContact}
        />
      </div>
    </div>
  );
};

export default App;
