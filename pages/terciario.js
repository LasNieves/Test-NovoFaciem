import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";

const Terciario = () => {
  return (
    <Layout title="Novo Faciem | Terciario" description="Nivel Terciario">
      <SplitWithImage />
      <Centered2x2Grid />
      <SimpleCentered1 />
      <GridWithOffsetIcons />
    </Layout>
  );
};

export default Terciario;
