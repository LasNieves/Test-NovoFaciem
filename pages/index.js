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
import { useContext } from "react";
import BannerContext from "../context/BannerContext";
import ScrollButton from "../components/ScrollButon";
import ColumnCards from "../components/ColumnCards";

export default function Home() {
  const { isVisibleInNavigator, pwaInstall } = useContext(BannerContext);

  return (
    <>
      <Seo title="Novo Faciem | Home" description="Bienvenidos al Home" />
      {!pwaInstall && isVisibleInNavigator && <HeaderCentered />}
      <SplitWithNavbar />
      <ColumnCards />
      <SimpleCentered1 index={0} />
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
