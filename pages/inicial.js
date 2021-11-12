import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";

const Inicial = () => {
  return (
    <Layout title="Novo Faciem | Inicial" description="Nivel Inicial">
      <SplitWithImage />
      <Centered2x2Grid />
      <SimpleCentered1 index={1}/>
      <GridWithOffsetIcons />
    </Layout>
  );
};

export default Inicial;
