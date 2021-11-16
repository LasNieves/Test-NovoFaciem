import React from "react";
import Layout from "../components/Layout";
import SplitWithImage from "../components/SplitWithImage";
import Centered2x2Grid from "../components/Centered2x2Grid";
import SimpleCentered1 from "../components/SimpleCentered1";
import GridWithOffsetIcons from "../components/GridWithOffsetIcons";
import ColumnCards from './../components/ColumnCards';

const Inicial = () => {
  return (
    <Layout title="Novo Faciem | Inicial" description="Nivel Inicial">
      <SplitWithImage index={1}/>
      <ColumnCards/>
      <Centered2x2Grid index={0}/>
      <SimpleCentered1 index={1}/>
      <GridWithOffsetIcons index={0}/>
    </Layout>
  );
};

export default Inicial;
