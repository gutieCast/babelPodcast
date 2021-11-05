import React, { useState } from 'react'
import './teacherCard.scss'

const TeacherCard = ({ name, img, description }) => {
    const [infoIsExpanded, setInfoIsExpanded] = useState(false);

    const handleClick = () => {
        if (infoIsExpanded) {
            setInfoIsExpanded(false)
        } else {
            setInfoIsExpanded(true)
        }
    }

    const onMouseEnter = () => {
        setInfoIsExpanded(true)
    }

    const onMouseLeave = () => {
        setInfoIsExpanded(false)
    }

    return (
        <article className="uk-card uk-card-default teacher-card">
            <picture className="uk-card-media-top card-img" onMouseEnter={() => onMouseEnter()} onMouseLeave={() => onMouseLeave()} onClick={() => handleClick()}>
                <img src={img} alt={`${name} tallerista Babel 2021`} />
                <div className={`uk-animation-slide-bottom-medium info-teacher-spread-out ${infoIsExpanded ? 'shown' : 'hide'}`}>
                    <figcaption className="text-spread-out">{description}</figcaption>
                </div>
            </picture>
        </article>
    )
}

export { TeacherCard }