import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const useDarkMode = () => {
  const [isMounted, setIsMounted] = useState(false);

  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return { switchTheme };
};
