import PropTypes from 'prop-types';
import styles from './Section.module.css';

export function Section({ tag, title, children }) {
  const CustomTag = `${tag}`;

  return (
    <section>
      {title && <CustomTag className={styles.Title}>{title}</CustomTag>}
      {children}
    </section>
  );
}

Section.propTypes = {
  tag: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
