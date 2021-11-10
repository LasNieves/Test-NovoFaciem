import React from 'react'
import CenteredAccordion from '../../components/CenteredAccordion';
import Layout from '../../components/Layout';
import WithTestimonialAndStats from '../../components/WithTestimonialAndStats';

const Informacion = () => {
    return (
        <Layout  title='Novo Faciem | Información Inicial' description='Información Inicial'>
            <WithTestimonialAndStats/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default Informacion;
