import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";
import ColumnCards from "../components/ColumnCards";

const Terciario = () => {
  return (
    <Layout title="Novo Faciem | Terciario" description="Nivel Terciario">
      <SplitWithImage index={4}/>
      <ColumnCards/>
      <Centered2x2Grid index={3}/>
      <SimpleCentered1 index={4}/>
      <GridWithOffsetIcons index={3}/>
    </Layout>
  );
};

export default Terciario;
