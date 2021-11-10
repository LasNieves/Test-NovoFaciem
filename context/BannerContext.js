import { createContext, useState, useEffect } from "react";
import { isIE, isFirefox, isOpera, isSafari } from "react-device-detect";

const BannerContext = createContext();

const BannerProvider = ({ children }) => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);
  const [isVisibleInNavigator, setIsVisibleInNavigator] = useState(false);
  const [pwaInstall, setPwaInstall] = useState(false);


  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      setSupportsPWA(true);
      setPromptInstall(e);
      setIsVisibleInNavigator(true);
    };
    
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setPwaInstall(true);
    }

    if (isIE || isFirefox || isOpera || isSafari) {
      setIsVisibleInNavigator(true);
    }

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const data = { promptInstall, supportsPWA, isVisibleInNavigator, pwaInstall };

  return (
    <BannerContext.Provider value={data}>{children}</BannerContext.Provider>
  );
};

export { BannerProvider };

export default BannerContext;
