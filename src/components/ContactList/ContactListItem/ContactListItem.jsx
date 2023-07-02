import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useContacts } from 'hooks/useContacts';
import { MdDelete, MdPerson, MdPhone } from 'react-icons/md';
import { toast } from 'react-toastify';
import styles from './ContactListItem.module.css';

export function ContactListItem({ id, name, number }) {
  const { deleteContact } = useContacts();
  const [updatedNumber, setUpdatedNumber] = useState(number);

  async function handleDeleteContact(id, name) {
    try {
      await deleteContact(id);
      toast.info(`${name.toUpperCase()} has been removed from contacts.`);
    } catch (error) {
      console.log(error);
    }
  }

  function handleNumberChange(event) {
    setUpdatedNumber(event.target.value);
  }

  return (
    <li className={styles.Item}>
      <span className={styles.Contact}>
        <span className={styles.Name}>
          <MdPerson className={styles.Icon} />
          {name}
        </span>{' '}
        <span className={styles.Number}>
          <MdPhone className={styles.Icon} />
          <input
            type="text"
            value={updatedNumber}
            onChange={handleNumberChange}
          />
        </span>
      </span>
      <button
        type="button"
        className={styles.DeleteBtn}
        onClick={() => handleDeleteContact(id, name)}
      >
        <MdDelete className={styles.Icon} />
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
