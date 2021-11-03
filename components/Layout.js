import React, { useContext } from "react";
import BannerContext from "../context/BannerContext";
import CenteredWithBottomBorder from "./CenteredWithBottomBorder";
import HeaderCentered from "./HeaderCentered";
import Seo from "./Seo";
import SimpleCentered2 from "./SimpleCentered2";
import { usePwaAlreadyInstalled } from "./../hooks/usePwaAlreadyInstalled";
import ScrollButton from "./ScrollButon";

const Layout = ({ children, title, description, banner }) => {
  const { pwaInstall } = usePwaAlreadyInstalled();
  const { isVisibleInNavigator } = useContext(BannerContext);

  return (
    <>
      <Seo title={title} description={description} />
      {(banner, !pwaInstall, isVisibleInNavigator && <HeaderCentered />)}
      <CenteredWithBottomBorder />
      <main>{children}</main>
      <ScrollButton />
      <SimpleCentered2 />
    </>
  );
};

export default Layout;
