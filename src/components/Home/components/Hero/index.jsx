import React from 'react'
import HeroImg from '../../../../assets/images/babel_podcasts_bolivia.png'
import './hero.scss'

const Hero = () => {
    return (
        <section id="hero">
            <div
                className="text-hero-container"
                uk-parallax={
                    window.innerWidth < 768
                        ? "target: #hero; opacity: 1, 0; y: 0,-10vh; viewport: 0.5; easing: -1"
                        : "target: #hero; opacity: 1, 0; x: 0,-30vw; viewport: 0.5; easing: 0"
                }
            >
                <p className="text-hero">extendemos</p>
                <p className="text-hero upper">nuestras voces</p>
                <p className="text-hero">para contar</p>
                <p className="text-hero upper">nuevas historias</p>
            </div >
            <div
                className="img-hero-container"
                uk-parallax={
                    window.innerWidth < 768
                        ? "target: #hero; y: 0,35vh; viewport: 0.5; easing: 0"
                        : "target: #hero; opacity: 1, 0; x: 0,30vw; viewport: 0.5; easing: 0"
                }
            >
                <img id="img-hero" src={HeroImg} alt="Babel podcast Bolivia. Periodismos populares y comunitarios" />
            </div >
        </section >
    )
}

export { Hero }
