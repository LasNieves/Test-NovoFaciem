import Seo from "../components/Seo";
import SplitWithNavbar from "../components/SplitWithNavbar";
import SimpleCentered2 from "../components/SimpleCentered2";
import SimpleCentered1 from "../components/SimpleCentered1";
import SimpleOnBrand from "../components/SimpleOnBrand";
import SimpleLogo from "../components/SimpleLogo";
import SplitWithImage from "../components/SplitWithImage";
import SimpleThreeColumn from "../components/SimpleThreeColumn";
import SideBySideOnBrand from "../components/SideBySideOnBrand";
import CenteredAccordion from "../components/CenteredAccordion";
import { faCode, faHashtag, faPen } from "@fortawesome/free-solid-svg-icons";
import HeaderCentered from "../components/HeaderCentered";
import { usePwaAlreadyInstalled } from "../hooks/usePwaAlreadyInstalled";
import { usePwaInNavigator } from "../hooks/usePwaInNavigator";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import ToggleWithIcon from "../components/ToggleWithIcon";
import ScrollButton from "../components/ScrollButon";

export default function Home() {
  const { pwaInstall } = usePwaAlreadyInstalled();
  const { isVisibleInNavigator } = usePwaInNavigator();

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

  return (
    <>
      <Seo title="Novo Faciem | Home" description="Bienvenidos al Home" />
      {(!pwaInstall, isVisibleInNavigator && <HeaderCentered />)}
      <button onClick={switchTheme}>
        <ToggleWithIcon />
      </button>
      <SplitWithNavbar />
      <SimpleCentered1 />
      <SimpleOnBrand />
      <SimpleLogo />
      <SplitWithImage index={0} />
      <SimpleThreeColumn index={0} icon={[faPen, faHashtag, faCode]} />
      <SideBySideOnBrand />
      <CenteredAccordion />
      <ScrollButton />
      <SimpleCentered2 />
    </>
  );
}
