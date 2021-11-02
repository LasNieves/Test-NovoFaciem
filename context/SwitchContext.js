import { createContext, useState, useEffect } from "react";

const SwitchContext = createContext();

const SwitchProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        setEnabled(false);
      } else if (localStorage.getItem("theme") === "dark") {
        setEnabled(true);
      }
    } else {
      setEnabled(false);
    }
  }, []);

  const data = { setEnabled, enabled };

  return (
    <SwitchContext.Provider value={data}>{children}</SwitchContext.Provider>
  );
};

export { SwitchProvider };

export default SwitchContext;
