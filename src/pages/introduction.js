import styles from "../styles/Introduction.module.css";
import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "YongJu, Lee",
    title: "Master Instructor Trainer Examiner",
    image: "/license_yj.jpg",
    desc: "오픈워터부터 강사 트레이너 과정까지 전 교육 이수 및 자격 보유. 강사 시험 평가 진행하며, 전국 각지에서 강사 양성과 교육 활동 중.",
  },
  {
    id: 2,
    name: "JungMin, Park",
    title: "Master Instructor Trainer",
    image: "/license_jm.jpg",
    desc: "오픈워터부터 강사 훈련까지 교육 가능하며, 다이버 레스큐와 CPR 등 안전 교육을 포함한 맞춤형 피드백으로 실력과 자신감 향상에 집중.",
  },
  {
    id: 3,
    name: "MyoungGyu, Park",
    title: "Master Instructor Trainer",
    image: "/license_mg.jpg",
    desc: "오픈워터부터 강사 훈련까지 교육 가능. 안전한 다이빙 기술과 맞춤형 교육으로 학습 효과를 높이며, 학생들의 성장을 열정적으로 지원.",
  },
];

export default function Introduction() {
  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero}>
        <Image
          src="/img_banner.jpg"
          alt="Diving Banner"
          width={850}
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
          <h3>DOD의 미션</h3>
          <p>
            해양 보전과 교육에 헌신하는 열정적인 다이버들의 커뮤니티를 육성하고,
            수중 세계의 경이로움을 탐험하며 다이빙 기술을 향상시키는 것을 목표로
            합니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>DOD의 비전</h3>
          <p>
            안전과 환경 보호에 앞장서며, 해양 보전을 실천하는 우수한 다이버를
            양성하는 선도적인 스쿠버 다이빙 클럽으로 인정받는 것이 우리의
            비전입니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>DOD의 연혁</h3>
          <p>
            2005년에 설립된 DOD 스쿠버 다이빙 클럽은 소수의 열정적인 다이버들로
            시작해, 현재는 활기찬 다이빙 커뮤니티로 성장했습니다. 저희의 여정은
            모험과 배움, 그리고 바다를 지키려는 노력으로 이어져 왔습니다.
          </p>
        </div>

        <div className={styles.gridItem}>
          <h3>DOD의 핵심 가치</h3>
          <ul>
            <li>안전을 최우선으로</li>
            <li>환경에 대한 책임감</li>
            <li>배움과 커뮤니티 중심</li>
            <li>모험과 탐험의 정신</li>
          </ul>
        </div>
      </section>

      {/* PSA 소개 섹션 - 미션/비전 아래, 강사진 위 */}
      <section className={styles.psaSection}>
        <div className={styles.psaContent}>
          <div className={styles.psaImageWrapper}>
            <Image
              src="/img_psa.jpg" // public 폴더에 옮겼다면 파일명만 써도 됨
              alt="PSA International"
              width={400}
              height={300}
              className={styles.psaImage}
            />
          </div>
          <div className={styles.psaText}>
            <h3>PSA International이란?</h3>
            <p>
              PSAI(Professional Scuba Association International)는 1962년에
              설립된 국제 스쿠버 다이빙 교육 기관으로, 전 세계적으로 공인된
              다이빙 인증과 교육 커리큘럼을 제공합니다. DOD는 PSAI의 교육 기준에
              따라 강사 및 다이버를 양성하며, 국제적으로 통용되는 자격을
              부여받을 수 있는 정식 인증 센터입니다.
            </p>
          </div>
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
                width={300}
                height={300}
                className={styles.profile}
              />
              <h4>{inst.name}</h4>
              <p className={styles.title}>{inst.title}</p>
              <p className={styles.desc}>{inst.desc}</p>
            </div>
          ))}
        </div>

        <p className={styles.instructorNote}>
          이 외에도 다양한 분야의 경력과 전문성을 갖춘 다수의 강사진이 함께하고
          있습니다.
          <br />
          안전하고 체계적인 교육을 위해 최선을 다하고 있습니다.
        </p>
      </section>
    </main>
  );
}
