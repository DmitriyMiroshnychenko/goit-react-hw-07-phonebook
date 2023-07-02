import { useContacts } from 'hooks/useContacts';
import styles from './Filter.module.css';

export function Filter() {
  const { filter, setFilter } = useContacts();

  function handleFilterInputChange(event) {
    const { value } = event.currentTarget;
    setFilter(value);
  }

  return (
    <label className={styles.Label}>
      <input
        className={styles.Input}
        type="text"
        name="filter"
        placeholder="find contacts by name"
        value={filter}
        onChange={handleFilterInputChange}
      ></input>
    </label>
  );
}
