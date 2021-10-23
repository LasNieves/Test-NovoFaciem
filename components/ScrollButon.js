import { useScroll } from "../hooks/useScroll";
import styles from "../styles/ScrollButton.module.css";
import React, { useRef, useEffect } from "react";

const ScrollButton = () => {
  const { isVisible } = useScroll();

  let refScroll = useRef();

  useEffect(() => {
    if (isVisible) {
      refScroll.current.classList.add(styles.showScroll);
    } else {
      refScroll.current.classList.remove(styles.showScroll);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button
        ref={refScroll}
        onClick={scrollToTop}
        className={styles.scrollTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.scrollTopIcon}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </>
  );
};

export default ScrollButton;
