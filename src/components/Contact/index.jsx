import React from 'react'
import { Link } from 'react-router-dom'
import { Layout } from '../Layout'
// import { ContactForm } from './components/ContactForm'
import './contact.scss'

const Contact = () => {
    return (
        <section id="contacto">
            <Layout
                title={"contacto"}
                pattern={true}
            >

                <h3 className="subtitle">
                    Hagamos algo juntxs
                </h3>
                <p className="section-text">
                    ¿Te interesa ser parte de nuestra red, publicidad dentro de nuestros podcast, o buscas contar una historia nueva?
                    <br />
                    <br />
                    <Link to="#"
                        onClick={(e) => {
                            window.location = "mailto:babelpodcast.com@gmail.com";
                            e.preventDefault();
                        }}
                    >
                        ¡Escríbenos!
                    </Link>
                    <br />
                    <br />
                    Nos encantará contactar contigo.
                </p>
                {/* <ContactForm /> */}
            </Layout>
        </section>
    )
}

export { Contact }
