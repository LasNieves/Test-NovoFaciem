import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";

const Secundario = () => {
  return (
    <Layout title="Novo Faciem | Secundario" description="Nivel Secundario">
      <SplitWithImage />
      <Centered2x2Grid />
      <SimpleCentered1 />
      <GridWithOffsetIcons />
    </Layout>
  );
};

export default Secundario;
