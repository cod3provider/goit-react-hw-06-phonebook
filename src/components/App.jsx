import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import Wrap from './Wrap/Wrap';

const App = () => {
  return (
    <Wrap>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>

      <div>
        <h2>Contacts</h2>
        <ContactFilter />
        <ContactList />
      </div>
    </Wrap>
  );
};

export default App;
