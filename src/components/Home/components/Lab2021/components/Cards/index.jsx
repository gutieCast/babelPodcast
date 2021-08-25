import React from 'react'
import JG from 'assets/images/teachers/Jhoselin_Granados_Taller_Babel_2021_Guion_Podcast.png'
import SR from 'assets/images/teachers/Shirley_Rios_Taller_Babel_2021_Medios_Digitales.png'
import MN from 'assets/images/teachers/Michelle_Nogales_Taller_Babel_2021_Edicion_Audio.png'
import RC from 'assets/images/teachers/Roberto_Condori_Carita_Taller_Babel_2021_Entrevista_Periodistica.png'
import KG from 'assets/images/teachers/Karen_Gil_Taller_Babel_2021_Introduccion_Periodismo.png'

import 'components/Home/components/Lab2021/components/Cards/cards.scss'

const teachers = [
    { name: "Jhoselin Granados", img: JG },
    { name: "Shirley Rios", img: SR },
    { name: "Michelle Nogales", img: MN },
    { name: "Roberto C. Carita", img: RC },
    { name: "Karen Gil", img: KG },
]

const Cards = () => {
    return (
        <div
            uk-slider="autoplay: true; autoplay-interval: 2500; pause-on-hover: true; center: true"
        >
            <div className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1">
                <div className="uk-slider-container uk-slider-container-offset teachers-container">
                    <ul className="uk-slider-items uk-grid teachers-list">
                        {
                            teachers.map(({ name, img }) => {
                                return (
                                    <li className="teacher-item" key={name}>
                                        <div className="uk-card uk-card-default teacher-card">
                                            <div className="uk-card-media-top card-img" >
                                                <img src={img} alt={`${name} tallerista Babel 2021`} />
                                            </div>
                                        </div>
                                    </li>
                                )

                            })
                        }

                    </ul>
                </div>
            </div>
        </div>
    )
}

export { Cards }
