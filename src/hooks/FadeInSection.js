import { useEffect, useRef, useState } from "react";
import styles from "./FadeInSection.module.css";

export default function FadeInSection({ children }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // 한 번만 실행
        }
      },
      { threshold: 0.1 }
    );

    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.fadeUp} ${isVisible ? styles.show : ""}`}
    >
      {children}
    </div>
  );
}
