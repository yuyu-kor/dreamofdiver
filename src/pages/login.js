import styles from "../styles/Auth.module.css";

export default function LoginPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>로그인</h1>

      <form className={styles.form}>
        <label htmlFor="email" className={styles.label}>
          이메일
        </label>
        <input type="email" id="email" placeholder="이메일을 입력하세요" />

        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력하세요"
        />

        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>

      <p className={styles.helper}>
        아직 회원이 아니신가요? <a href="/register">회원가입</a>
      </p>
    </main>
  );
}

// 레이아웃 제외 (심플뷰)
LoginPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
