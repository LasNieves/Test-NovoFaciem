import "tailwindcss/tailwind.css";
import { ThemeProvider } from "next-themes";
import { SwitchProvider } from "../context/SwitchContext";
import { BannerProvider } from "../context/BannerContext";
import { BannerCloseProvider } from "../context/BannerCloseContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <SwitchProvider>
        <BannerProvider>
          <BannerCloseProvider>
            <Component {...pageProps} />
          </BannerCloseProvider>
        </BannerProvider>
      </SwitchProvider>
    </ThemeProvider>
  );
}
export default MyApp;
