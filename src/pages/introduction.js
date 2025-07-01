import styles from "../styles/Introduction.module.css";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "홍길동",
    title: "마스터 다이버 & 강사",
    image: "/instructor1.jpg",
    desc: "심해 다이빙과 수중 사진 전문 강사입니다. 다이빙 업계에서 20년 이상의 경험을 보유하고 있습니다.",
  },
  {
    id: 2,
    name: "김해심",
    title: "스쿠버 교육 전문 강사",
    image: "/instructor2.jpg",
    desc: "초보자 교육과 자유 다이빙을 전문으로 하며, 체계적인 이론 수업에 강점을 가지고 있습니다.",
  },
  {
    id: 3,
    name: "이수연",
    title: "해양 구조 전문가",
    image: "/instructor3.jpg",
    desc: "다이빙 응급 구조 및 해양 안전 교육을 전문으로 하며, 실제 구조 경험도 풍부합니다.",
  },
];

export default function Introduction() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/banner.jpeg"
          alt="Diving Banner"
          width={1200}
          height={400}
          className={styles.bannerImage}
        />
      </section>

      {/* Intro Text Section */}
      <section className={styles.introText}>
        <h1 className={styles.heading}>
          DOD 스쿠버 다이빙 클럽에 오신 것을 환영합니다
        </h1>
        <p className={styles.subtext}>
          DOD 스쿠버 다이빙 클럽과 함께하는 수중 탐험의 짜릿함을 느껴보세요.
          <br />
          저희는 모든 다이버가 안전하고 즐거우며 유익한 다이빙 경험을 할 수
          있도록 노력하고 있습니다.
        </p>
      </section>

      {/* Mission, Vision, History, Values */}
      <section className={styles.gridSection}>
        <div className={styles.gridItem}>
          <h3>Our Mission</h3>
          <p>
            해양 보전과 교육에 헌신하는 열정적인 다이버들의 커뮤니티를 육성하고,
            수중 세계의 경이로움을 탐험하며 다이빙 기술을 향상시키는 것을 목표로
            합니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>Our Vision</h3>
          <p>
            안전과 환경 보호에 앞장서며, 해양 보전을 실천하는 우수한 다이버를
            양성하는 선도적인 스쿠버 다이빙 클럽으로 인정받는 것이 우리의
            비전입니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>Our History</h3>
          <p>
            2005년에 설립된 DOD 스쿠버 다이빙 클럽은 소수의 열정적인 다이버들로
            시작해, 현재는 활기찬 다이빙 커뮤니티로 성장했습니다. 저희의 여정은
            모험과 배움, 그리고 바다를 지키려는 노력으로 이어져 왔습니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>Core Values</h3>
          <ul>
            <li>안전을 최우선으로</li>
            <li>환경에 대한 책임감</li>
            <li>배움과 커뮤니티 중심</li>
            <li>모험과 탐험의 정신</li>
          </ul>
        </div>
      </section>

      {/* Instructor Section */}
      <section className={styles.instructorSection}>
        <h2 className={styles.heading}>공인 강사진을 소개합니다</h2>
        <div className={styles.cardWrapper}>
          {instructors.map((inst) => (
            <div className={styles.card}>
              <Image
                src={inst.image}
                alt={`${inst.name} 프로필`}
                width={120}
                height={120}
                className={styles.profile}
              />
              <h4>{inst.name}</h4>
              <p className={styles.title}>{inst.title}</p>
              <p className={styles.desc}>{inst.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
