import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";
import ColumnCards from "../components/ColumnCards";

const Secundario = () => {
  return (
    <Layout title="Novo Faciem | Secundario" description="Nivel Secundario">
      <SplitWithImage index={3}/>
      <ColumnCards/>
      <Centered2x2Grid index={2}/>
      <SimpleCentered1 index={3}/>
      <GridWithOffsetIcons index={2}/>
    </Layout>
  );
};

export default Secundario;
