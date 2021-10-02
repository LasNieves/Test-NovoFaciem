import React from 'react'
import CenteredAccordion from '../../components/CenteredAccordion'
import Layout from '../../components/Layout'
import TwoColumnsWithImage from '../../components/TwoColumnsWithImage'

const Informacion = () => {
    return (
        <Layout  title='Novo Faciem | Información Primario' description='Información Primario' banner={false}>
            <TwoColumnsWithImage/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default Informacion
