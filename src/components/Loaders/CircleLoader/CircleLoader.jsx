import PropTypes from 'prop-types';
import styles from './CircleLoader.module.css';

export function CircleLoader({ type }) {
  return (
    <div>
      <div className={styles[type]}></div>
    </div>
  );
}

CircleLoader.propTypes = {
  type: PropTypes.string.isRequired,
};
