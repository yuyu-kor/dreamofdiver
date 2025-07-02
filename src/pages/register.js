import styles from "../styles/Auth.module.css";

export default function RegisterPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>회원가입</h1>

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

        <label htmlFor="confirm">비밀번호 확인</label>
        <input
          type="password"
          id="confirm"
          placeholder="비밀번호를 한 번 더 입력하세요"
        />

        <button type="submit" className={styles.button}>
          가입하기
        </button>
      </form>

      <p className={styles.helper}>
        이미 계정이 있으신가요? <a href="/login">로그인</a>
      </p>
    </main>
  );
}

// 레이아웃 제외 (심플뷰)
RegisterPage.getLayout = function PageLayout(page) {
  return <>{page}</>;
};
