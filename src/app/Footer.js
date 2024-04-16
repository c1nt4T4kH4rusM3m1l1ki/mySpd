import styles from './Footer.module.css'; // Asumsi Anda menggunakan CSS Modules

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span>Copyright @ 2024 By. Rindra Aniko (Version : 05.00.01)</span>
    </footer>
  );
};

export default Footer;