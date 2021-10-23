import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let screenHeigth = window.screen.height - 150;

    const detectarScroll = () => {
      setScrollY(window.pageYOffset);
      if (scrollY > screenHeigth) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", detectarScroll);
    return () => window.removeEventListener("scroll", detectarScroll);
  }, [scrollY]);

  return { isVisible };
};
