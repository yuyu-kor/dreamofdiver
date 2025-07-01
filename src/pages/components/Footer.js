import styles from "./Footer.module.css";
import { FaEnvelope, FaBlogger, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>Contact Us</h4>
        <p>Email: abc6264@hanmail.net</p>
        <p>Phone: +82 10 8553 3500</p>
      </div>

      <div className={styles.social}>
        <h4>Follow Us</h4>
        <div className={styles.icons}>
          <FaEnvelope className={styles.icon} />
          <FaBlogger className={styles.icon} />
          <FaPhone className={styles.icon} />
        </div>
      </div>
    </footer>
  );
}
