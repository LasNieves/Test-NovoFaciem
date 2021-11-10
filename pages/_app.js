import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { SwitchProvider } from "../context/SwitchContext";
import { BannerProvider } from "../context/BannerContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SwitchProvider>
        <BannerProvider>
          <Component {...pageProps} />
        </BannerProvider>
      </SwitchProvider>
    </ThemeProvider>
  );
}
export default MyApp;
