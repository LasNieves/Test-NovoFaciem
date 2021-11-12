import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";

const Primario = () => {
  return (
    <Layout title="Novo Faciem | Primario" description="Nivel Primario">
      <SplitWithImage />
      <Centered2x2Grid />
      <SimpleCentered1 />
      <GridWithOffsetIcons />
    </Layout>
  );
};

export default Primario;
