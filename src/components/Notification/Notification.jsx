import PropTypes from 'prop-types';
import styles from './Notification.module.css';

export function Notification({ message }) {
  return <>{message && <h3 className={styles.Notification}>{message}</h3>}</>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
