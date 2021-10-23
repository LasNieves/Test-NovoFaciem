import React from 'react'
import ImageWithDetails from '../../components/ImageWithDetails';
import Layout from '../../components/Layout';
import SimpleCentered1 from '../../components/SimpleCentered1';

const Informacion = () => {
    return (
        <Layout  title='Novo Faciem | Información Terciario' description='Información Terciario' banner={false}>
            <SimpleCentered1/>
            <ImageWithDetails/>
        </Layout>
    )
}

export default Informacion;
