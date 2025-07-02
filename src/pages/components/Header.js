import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router"; // 추가
import styles from "./Header.module.css";

export default function Header() {
  const router = useRouter(); // 현재 경로

  const navItems = [
    { href: "/", label: "홈" },
    { href: "/introduction", label: "소개" },
    { href: "/education", label: "교육 및 투어" },
    { href: "/gallery", label: "갤러리" },
    { href: "/equipment-market", label: "장비 마켓" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo2.png"
            alt="DOD Scuba Diving Club Logo"
            width={100}
            height={100}
            priority
          />
        </Link>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navLink} ${
              router.pathname === item.href ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
