import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Education.module.css";
import { FiPhone } from "react-icons/fi";

const courses = [
  {
    id: "OWD",
    title: "Open Water Diver",
    description: "스쿠버 입문 기본 자격증",
    detail:
      "처음 스쿠버 다이빙을 배우는 사람을 위한 기본 교육과정입니다. 학과 수업, 풀장 연습, 해양 실습으로 구성되며 바다나 호수에서 최대 18m 깊이까지 다이빙할 수 있는 자격이 주어집니다.",
    duration: "조율 가능",
    price: "30만원",
    thumbnail: "/img_turtle.jpg",
    badge: "🔥 인기",
  },
  {
    id: "AOWD",
    title: "Advanced Open Water Diver",
    description: "고급 기술을 배우는 심화 자격증",
    detail:
      "OWD를 취득한 이후, 딥 다이빙, 야간 다이빙, 네비게이션 등 고급 다이빙 기술을 배우는 과정입니다. 총 4가지의 특수 다이빙을 체험하며 실전 응용 능력을 키울 수 있습니다.",
    duration: "조율 가능",
    price: "40만원",
    thumbnail: "/img_turtle.jpg",
    badge: "🔥 인기",
  },
  {
    id: "MD",
    title: "Master Diver",
    description: "민간 최고 레벨의 전문가 자격",
    detail:
      "스쿠버 다이빙 레저 자격 중 가장 높은 수준으로, 다양한 경험과 다이빙 로그를 바탕으로 인증됩니다. 일정 횟수 이상의 다이빙 기록과 보조 강사급 지식이 필요합니다.",
    duration: "조율 가능",
    price: "문의 주세요",
    thumbnail: "/img_turtle.jpg",
  },
  {
    id: "DM",
    title: "Dive Master",
    description: "전문 가이드 역할을 수행하는 자격",
    detail:
      "다이브마스터는 다이빙 가이드로서 활동할 수 있으며, 교육생 보조 및 체험 다이빙 인솔 등을 수행합니다. 스쿠버 업계 취업을 위한 필수 과정이기도 합니다.",
    duration: "조율 가능",
    price: "문의 주세요",
    thumbnail: "/img_turtle.jpg",
  },
  {
    id: "AI",
    title: "Associate Instructor",
    description: "보조 강사 자격",
    detail:
      "Instructor(강사) 자격을 준비하는 단계로, 일부 강의와 학생 지도 역할을 수행할 수 있습니다. 실무에 가까운 교육 경험을 쌓게 됩니다.",
    duration: "조율 가능",
    price: "문의 주세요",
    thumbnail: "/img_turtle.jpg",
  },
  {
    id: "IQC",
    title: "Instructor Qualification Course",
    description: "강사 자격 준비 코스",
    detail:
      "정식 강사가 되기 위한 자격 과정으로, 강의법, 안전관리, 교육 커리큘럼 구성 등 실제 교육을 위한 전반적인 지식을 익힙니다.",
    duration: "조율 가능",
    price: "문의 주세요",
    thumbnail: "/img_turtle.jpg",
  },
  {
    id: "INS",
    title: "Instructor",
    description: "공식 강사 자격증",
    detail:
      "스쿠버 교육을 직접 진행하고 자격증을 발급할 수 있는 최종 자격입니다. 교육기관의 인증을 받아야 하며, 강의 및 다이버 평가 능력이 요구됩니다.",
    duration: "조율 가능",
    price: "문의 주세요",
    thumbnail: "/img_turtle.jpg",
  },
];

export default function Education() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <main className={styles.container}>
      <section className={styles.educationSection}>
        <h2 className={styles.heading}>Scuba Diving Education</h2>
        <p className={styles.intro}>
          다이빙 실력을 향상시킬 수 있는 다양한 교육 과정이 준비되어 있습니다.
        </p>

        <div className={styles.cardGrid}>
          {courses.map((course) => (
            <div
              key={course.id}
              className={styles.card}
              onClick={() => setSelectedCourse(course)}
            >
              <div className={styles.imageWrapper}>
                {course.badge && (
                  <span className={styles.badge}>{course.badge}</span>
                )}
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={400}
                  height={200}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.cardBody}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <ul>
                  <li>기간 - {course.duration}</li>
                  <li>가격 - {course.price}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.tourSection}>
        <h2 className={styles.heading}>Diving Tour</h2>
        <p className={styles.intro}>
          현재 투어는 준비 중입니다. 곧 멋진 프로그램으로 찾아뵐게요!
        </p>
      </section>

      {/* ✅ 모달 */}
      {selectedCourse && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => setSelectedCourse(null)}
            >
              ✖
            </button>

            {/* 1. 이미지 */}
            <div className={styles.modalImageWrapper}>
              <Image
                src={selectedCourse.thumbnail}
                alt={selectedCourse.title}
                width={640}
                height={360}
                className={styles.modalImage}
              />
            </div>

            {/* 2. 제목 */}
            <h2 className={styles.modalTitle}>{selectedCourse.title}</h2>

            {/* 3. 상세 설명 */}
            <p className={styles.modalShort}>{selectedCourse.description}</p>
            <p className={styles.modalDescription}>{selectedCourse.detail}</p>

            {/* 4, 5. 기간/가격 */}
            <div className={styles.infoBox}>
              <div>
                <span className={styles.infoLabel}>기간</span>
                <span>{selectedCourse.duration}</span>
              </div>
              <div>
                <span className={styles.infoLabel}>가격</span>
                <span>{selectedCourse.price}</span>
              </div>
            </div>

            {/* 6. 문의 버튼 */}
            <a href="tel:01085533500" className={styles.inquiryButton}>
              <FiPhone
                style={{ marginRight: "8px", verticalAlign: "middle" }}
              />
              문의하기
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
