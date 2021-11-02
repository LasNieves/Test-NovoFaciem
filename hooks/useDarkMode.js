import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useDarkMode = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const userMedia = window.matchMedia('(prefers-color-scheme: dark)');

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return { switchTheme, theme };
};
