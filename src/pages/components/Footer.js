import styles from "./Footer.module.css";
import { FaEnvelope, FaBlogger, FaPhone } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>문의하기</h4>
        <p>Email: abc6264@hanmail.net</p>
        <p>Phone: +82 10 8553 3500</p>
      </div>

      <div className={styles.social}>
        <h4>소셜미디어</h4>
        <div className={styles.icons}>
          {/* 이메일: 클릭 시 메일 앱 실행 */}
          <a
            href="mailto:abc6264@hanmail.net"
            className={styles.icon}
            title="Send Email"
          >
            <FaEnvelope />
          </a>

          {/* 블로그(BAND): 클릭 시 밴드 링크로 이동 */}
          <a
            href="https://www.band.us/band/76027355"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.icon}
            title="Join our BAND"
          >
            <FaBlogger />
          </a>

          {/* 전화: 클릭 시 전화 걸기 (모바일 환경에서만 작동) */}
          <a href="tel:01085533500" className={styles.icon} title="Call Us">
            <FaPhone />
          </a>
        </div>
      </div>
    </footer>
  );
}
