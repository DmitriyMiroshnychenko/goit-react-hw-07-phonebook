import { useState } from 'react';
import { useContacts } from 'hooks/useContacts';
import { toast } from 'react-toastify';
import styles from './ContactForm.module.css';

export function ContactForm() {
  const { contacts, addContact } = useContacts();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [numberError, setNumberError] = useState('');

  function resetState() {
    setName('');
    setNumber('');
  }

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;

    if (name === 'name') {
      setName(value);
    }

    if (name === 'number') {
      const onlyDigits = /^\d*$/.test(value);
      if (onlyDigits) {
        setNumber(value);
        setNumberError('');
      } else {
        setNumberError('Number should only contain digits.');
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const newContact = {
      name,
      number,
    };

    const alreadyInContacts = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    try {
      if (alreadyInContacts) {
        toast.error(`${newContact.name.toUpperCase()} is already in contacts.`);
      } else {
        await addContact(newContact);
        toast.success(`${newContact.name.toUpperCase()} is added to contacts.`);
      }
    } catch (error) {
      console.log(error);
    }

    resetState();
  }

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label className={styles.Label}>
        <input
          className={styles.Input}
          type="text"
          name="name"
          placeholder="name"
          value={name}
          autoComplete="off"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>

      <label className={styles.Label}>
        <label className={styles.Label}>
          <input
            className={styles.Input}
            type="tel"
            name="number"
            placeholder="number"
            value={number}
            autoComplete="off"
            required
            onChange={handleInputChange}
          />
          {numberError && <p className={styles.Error}>{numberError}</p>}
        </label>
      </label>
      <button type="submit" className={styles.SubmitBtn}>
        Add contact
      </button>
    </form>
  );
}
