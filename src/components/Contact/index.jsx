import React from 'react'
import { Link } from 'react-router-dom'
import 'components/Contact/contact.scss'

const Contact = () => {
    return (
        <section id="contact">
            <h2 className="section-title">
                Hagamos algo juntxs
            </h2>
            <p className="section-text">
                ¿Te interesa ser parte de nuestra red, publicidad dentro de nuestros podcast, o buscas contar una historia nueva?
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
                Nos encantará contactar contigo.
            </p>
        </section>
    )
}

export { Contact }
