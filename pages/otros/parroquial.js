import React from 'react'
import CenteredAccordion from '../../components/CenteredAccordion';
import Layout from '../../components/Layout';
import SimpleCentered1 from '../../components/SimpleCentered1';
import SimpleThreeColumn from '../../components/SimpleThreeColumn';
import WithTestimonialAndStats from '../../components/WithTestimonialAndStats';
import { faCode, faHashtag, faPen } from '@fortawesome/free-solid-svg-icons';

const Parroquial = () => {
    return (
        <Layout title="Novo Faciem | Parroquial" description="Parraquia" >
            <WithTestimonialAndStats/>
            <SimpleThreeColumn index={0} icon={[faPen, faHashtag, faCode]}/>
            <SimpleCentered1/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default Parroquial;
