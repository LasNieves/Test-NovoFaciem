/* This example requires Tailwind CSS v2.0+ */
import { Switch } from "@headlessui/react";
import { useDarkMode } from "../hooks/useDarkMode";
import { useContext } from "react";
import SwitchContext from "../context/SwitchContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { switchTheme, theme } = useDarkMode();
  const { enabled, setEnabled } = useContext(SwitchContext);

  function handlerTheme(theme) {
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  }

  return (
    <button onClick={switchTheme} className="h-6 w-11 p-0 m-0s border-0 rounded-full">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={handlerTheme}
        className={classNames(
          enabled
            ? "bg-Blanco dark:bg-PseudoNegro"
            : "bg-Blanco dark:bg-PseudoNegro",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 outline-switch"
        )}
      >
        <span className="sr-only">Use setting</span>
        <span
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none relative inline-block h-5 w-5 rounded-full bg-AmarilloLigth dark:bg-AzulDark shadow transform ring-0 transition ease-in-out duration-200"
          )}
        >
          <span
            className={classNames(
              enabled
                ? "opacity-0 ease-out duration-100"
                : "opacity-100 ease-in duration-200",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-Blanco "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </span>
          <span
            className={classNames(
              enabled
                ? "opacity-100 ease-in duration-200"
                : "opacity-0 ease-out duration-100",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-Blanco"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </span>
        </span>
      </Switch>
    </button>
  );
}
