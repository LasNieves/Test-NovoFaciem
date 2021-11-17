import React from 'react'
import Centered2x2Grid from '../../components/Centered2x2Grid'
import CenteredAccordion from '../../components/CenteredAccordion'
import Layout from '../../components/Layout'
import SimpleOnBrand from '../../components/SimpleOnBrand'
import SplitWithImage from '../../components/SplitWithImage'

const EducacionPrimaria = () => {
    return (
        <Layout title="Novo Faciem | Educación Primaria" description="Profesorado en Educación Primaria del Nivel Terciario">
            <SplitWithImage/>
            <Centered2x2Grid/>
            <SimpleOnBrand/>
            <CenteredAccordion/>
        </Layout>
    )
}

export default EducacionPrimaria;
