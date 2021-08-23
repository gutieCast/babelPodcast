import React from 'react'
import PatternDecoration from "assets/images/Patterns/patron3.png"
import 'components/Home/components/Call2021/call2021.scss'
import { Button } from 'components/Button'

const Call2021 = () => {
    return (
        <section id="call-2021"
        // uk-parallax="opacity: 0, 1; y: 200, 199"
        >
            <div className="grid-row-3">
                <div className="pattern-decoration" style={{ backgroundImage: `url(${PatternDecoration})` }}></div>

                <div className="call-content">
                    <div className="headline"
                        uk-parallax="opacity: 0,1; y: 100%, 30%; scale: 1, 1.5 target: #call-2021; viewport: 0.5"
                    >
                        <h2>¡Convocatoria abierta!</h2>
                    </div>

                    <div className="uk-animation-toggle text-call-container"
                    >
                        <p className="uk-text-center uk-margin-auto uk-margin-auto-vertical text-call">
                            ¡Participa en la primera convocatoria abierta al Laboratorio de pódcasts 2021!
                        </p>
                        <p className="uk-text-center uk-margin-auto uk-margin-auto-vertical text-call">
                            Queremos que escuchar nuevas voces y contar nuevas historias.

                        </p>
                    </div>
                    <Button
                        classStyle="uk-animation-shake"
                        to="https://docs.google.com/forms/d/e/1FAIpQLSeYu3VNuuak1f3li6FdGcCkO_HE1r2HyAttHxj7q3jnvcZThA/viewform"
                        text="¡Inscribirme!"
                    />
                </div>
                <div className="pattern-decoration" style={{ backgroundImage: `url(${PatternDecoration})` }}></div>
            </div>
        </section >
    )
}

export { Call2021 }