import React from 'react'
import { CardWorkshop } from './components/CardWorkshop'
import { workshops } from './workshops'
import './workshops.scss'

const Workshops = () => {
    return (
        <div div className="uk-child-width-expand@s uk-text-center workshops-container" uk-grid>
            <h3>Retoma el LAB 2021</h3>
            <ul className="workshops-list">
                {
                    workshops.map((workshop, idx) => {
                        return (
                            <li uk-slider-item={`${idx}`} className="workshop-item" key={`workshop-${workshop.id}`}>
                                <CardWorkshop
                                    id={workshop.id}
                                    img={workshop.img}
                                    name={workshop.name}
                                    teacher={workshop.teacher}
                                    url1={workshop.url1}
                                    url2={workshop.url2}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export { Workshops }
