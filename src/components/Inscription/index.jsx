import { Layout } from 'components/Layout'
import React from 'react'
import InscriptionForm from 'components/Inscription/components/InscriptionForm'

const Inscription = () => {
    return (
        <section id="inscription">
            <Layout
                title={'Inscribirme'}
                pattern={true}
            >
                <InscriptionForm />
            </Layout>            
        </section>
    )
}

export { Inscription }
