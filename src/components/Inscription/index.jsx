import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from 'components/Layout'
import InscriptionForm from 'components/Inscription/components/InscriptionForm'

const Inscription = () => {
    const textForm = [
        "¡Bienvenidx al Laboratorio de pódcasts 2021 de Babel Pódcast!",
        <br />,<br />,
        "Llena el siguiente formulario para participar en el evento.",
        <br />,<br />,
        "Tendremos disponibles hasta 100 cupos. Los talleres y las tutorías son totalmente gratuitos.",
        <br />,<br />,
        "Fechas del laboratorio: del 31 de agosto al 17 de septiembre",
        <br />,<br />,
        "Para ponerte en contacto con nosotrxs, escríbenos a",
        <Link to="#"
        onClick={(e) => {
            window.location = "mailto:babelpodcast.com@gmail.com";
            e.preventDefault();
        }}
    > babelpodcastorg@gmail.com</Link>
    ]
    return (
        <section id="inscription">
            <Layout
                title={'Inscribirme'}
                pattern={true}
                body={textForm}
            >                
                <InscriptionForm />
            </Layout>            
        </section>
    )
}

export { Inscription }
