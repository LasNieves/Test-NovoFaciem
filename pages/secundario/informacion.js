import React from 'react'
import CenteredAccordion from '../../components/CenteredAccordion'
import ImageWithDetails from '../../components/ImageWithDetails'
import Layout from '../../components/Layout'
import SimpleCentered1 from '../../components/SimpleCentered1'
import SplitWithImage from '../../components/SplitWithImage'

const Informacion = () => {
    return (
        <Layout  title='Novo Faciem | Información Terciario' description='Información Terciario' banner={false}>
            <SplitWithImage/>
            <SimpleCentered1/>
            <ImageWithDetails/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default Informacion
