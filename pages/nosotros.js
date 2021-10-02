import React from 'react'
import ActionsWithSharedBorders from '../components/ActionsWithSharedBorders';
import Centered2x2Grid from '../components/Centered2x2Grid';
import Layout from '../components/Layout';
import SimpleLogo from '../components/SimpleLogo';
import SplitWithImage from '../components/SplitWithImage';

const Nosotros = () => {
    return (
        <Layout title="Novo Faciem | Nosotros" description="Información general" banner={true}>
            <SplitWithImage index={1} />
            <Centered2x2Grid />
            <SimpleLogo />
            <ActionsWithSharedBorders />
        </Layout>
    )
}

export default Nosotros;
