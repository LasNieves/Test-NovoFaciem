import React from 'react'
import Layout from '../components/Layout';
import SplitScreen from '../components/SplitScreen';

const Siena = () => {
    return (
       <Layout title="Novo Faciem | Siena" description="Ingreso al Siena" banner={false}>
           <SplitScreen/>
       </Layout>
    )
}

export default Siena;
