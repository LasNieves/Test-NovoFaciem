import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";
import ColumnCards from "../components/ColumnCards";

const Primario = () => {
  return (
    <Layout title="Novo Faciem | Primario" description="Nivel Primario">
      <SplitWithImage index={2}/>
      <ColumnCards/>
      <Centered2x2Grid index={1}/>
      <SimpleCentered1 index={2}/>
      <GridWithOffsetIcons index={1}/>
    </Layout>
  );
};

export default Primario;
