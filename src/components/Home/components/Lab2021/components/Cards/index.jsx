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
        <div uk-slider="autoplay: true; autoplay-interval: 2500; pause-on-hover: true; center: true" className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1">
            <div className="uk-position-relative position-slider" >
                <div className="uk-slider-container uk-grid slider-container">
                    <ul className="uk-slider-items uk-child-width-expand-1-2@s uk-child-width-1-3@m uk-child-width-1-3@l teachers-list">
                        {
                            teachers.map((teacher, idx) => {
                                return (
                                    <li
                                        uk-slider-item={`${idx}`} className="teacher-item" key={teacher.name}>
                                        <div className="uk-card uk-card-default teacher-card">
                                            <div className="uk-card-media-top card-img" >
                                                <img src={teacher.img} alt={`${teacher.name} tallerista Babel 2021`} />
                                            </div>
                                        </div>
                                    </li>
                                )

                            })
                        }

                    </ul>
                </div>
                <a class="uk-position-center-left button-slider left" href="#" uk-slider-item="previous">
                    <span uk-icon="icon: chevron-left; ratio: 2"></span>
                </a>
                <a class="uk-position-center-right button-slider right" href="#" uk-slider-item="next">
                    <span uk-icon="icon: chevron-right; ratio: 2"></span>
                </a>
            </div>
            <ul class="uk-slider-nav"></ul>
        </div>
    )
}

export { Cards }
