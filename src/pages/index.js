import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.overlay}>
          <h1 className={styles.title}>
            DOD 스쿠버 다이빙 클럽에 오신 것을 환영합니다
          </h1>
          <p className={styles.subtitle}>
            체계적인 프로그램과 커뮤니티를 통해
            <br />
            안전하고 즐거운 다이빙의 세계로 여러분을 초대합니다
          </p>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className={styles.infoSection}>
        <div className={styles.card}>
          <h3>이벤트 캘린더</h3>
          <ul>
            <li>산호초 탐험 - 2023년 12월 12일</li>
            <li>야간 다이빙 어드벤처 - 2024년 1월 5일</li>
            <li>해양 생물 세미나 - 2024년 2월 20일</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>지금 뜨는 소식</h3>
          <p>
            스쿠버 다이빙 세계의 다양한 이야기와 소식을 전해드립니다. <br />
            클럽 활동과 성과를 한눈에 확인해보세요.
          </p>
        </div>

        <div className={styles.card}>
          <h3>멤버가 되려면?</h3>
          <p>
            열정적인 다이버 커뮤니티에 함께하세요. <br />
            지금 가입하고 새로운 수중 세계를 경험해보세요!
          </p>
          <Link href="/register">
            <button className={styles.registerButton}>지금 가입하기</button>
          </Link>
        </div>
      </section>
    </main>
  );
}
