import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import { ContactListItem } from './ContactListItem';
import { useEffect } from 'react';
import { getContacts } from 'redux/contacts/contactsOperations';

export function ContactList() {
  const { dispatch, contacts, filter } = useContacts();

  const filteredContacts = contacts
    .filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <>
      {contacts && (
        <ul>
          {filteredContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} number={phone} />
          ))}
        </ul>
      )}
    </>
  );
}

ContactList.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
