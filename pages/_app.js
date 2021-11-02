import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { SwitchProvider } from "../context/SwitchContext";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SwitchProvider>
        <Component {...pageProps} />
      </SwitchProvider>
    </ThemeProvider>
  );
}

export default MyApp;
