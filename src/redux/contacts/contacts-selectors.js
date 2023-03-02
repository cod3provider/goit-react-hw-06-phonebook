export const getAllContacts = store => store.contacts;
export const getFilteredContacts = ({ contacts, filter }) => {
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
