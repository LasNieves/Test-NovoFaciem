import React from 'react'
import Centered2x2Grid from '../../components/Centered2x2Grid'
import CenteredAccordion from '../../components/CenteredAccordion'
import Layout from '../../components/Layout'
import SimpleOnBrand from '../../components/SimpleOnBrand'
import SplitWithImage from '../../components/SplitWithImage'

const CienciasSagradas = () => {
    return (
        <Layout title="Novo Faciem | Ciencias Sagradas " description="Profesorado en Ciencias Sagradas del Nivel Terciario" banner={false}>
            <SplitWithImage/>
            <Centered2x2Grid/>
            <SimpleOnBrand/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default CienciasSagradas;