import styles from './CircleLoaderBackdrop.module.css';

export function CircleLoaderBackdrop({ children }) {
  return <div className={styles.Backdrop}>{children}</div>;
}
