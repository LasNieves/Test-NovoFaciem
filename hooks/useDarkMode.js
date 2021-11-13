import { useEffect, useState, useContext } from "react";
import { useTheme } from "next-themes";
import SwitchContext from './../context/SwitchContext';

export const useDarkMode = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { enabled, setEnabled } = useContext(SwitchContext);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
    if (!localStorage.getItem("theme")) {
      const userMedia = window.matchMedia("(prefers-color-scheme: dark)");
      if (userMedia.matches) {
        setTheme("dark");
      } else {
        setTheme("light");
      }
    }
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
      setEnabled(enabled === true ? false : true);
      localStorage.setItem("theme", theme === "light" ? "dark" : "light");
    }
  };
  return { switchTheme, theme };
};
