import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="DOD Scuba Diving Club Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/introduction">Introduction</Link>
        <Link href="/education">Education & Tour</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/equipment-market">Equipment Market</Link>
      </nav>
    </header>
  );
}
