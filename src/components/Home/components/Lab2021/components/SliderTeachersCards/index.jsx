import React from 'react'
import { teachers } from './infoTeachers'
import { TeacherCard } from './components/TeacherCard'
import 'components/Home/components/Lab2021/components/SliderTeachersCards/cards.scss'


const SliderTeachersCards = () => {
    return (
        <div uk-slider="autoplay: true; autoplay-interval: 2500; pause-on-hover: true; center: true" className="uk-position-relative uk-visible-toggle uk-light slider" tabIndex="-1">
            <div className="uk-position-relative position-slider" >
                <div className="uk-slider-container uk-grid slider-container">
                    <ul className="uk-slider-items uk-child-width-expand-1-2@s uk-child-width-1-3@m uk-child-width-3-5@l teachers-list">
                        {
                            teachers.map(({ idx, name, img, description }) => {
                                return (
                                    <li uk-slider-item={`${idx}`} className="teacher-item" key={name}>
                                        <TeacherCard name={name} img={img} description={description} />
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

export { SliderTeachersCards }
