import React from "react";
import CenteredAccordion from "../../components/CenteredAccordion";
import Layout from "../../components/Layout";
import SimpleCentered1 from "../../components/SimpleCentered1";
import SimpleThreeColumn from "../../components/SimpleThreeColumn";
import WithTestimonialAndStats from "../../components/WithTestimonialAndStats";
import { faCode, faHashtag, faPen } from "@fortawesome/free-solid-svg-icons";

const Parroquial = () => {
  return (
    <Layout title="Novo Faciem | Parroquial" description="Parraquia">
      <WithTestimonialAndStats index={0} />
      <SimpleThreeColumn index={1} icon={[faPen, faHashtag, faCode]} />
      <SimpleCentered1 index={5} />
    </Layout>
  );
};

export default Parroquial;
