import React from 'react'
// import HeroImg from '../../../../assets/images/babel_podcasts_bolivia.png'
import HeroImgCenter from '../../../../assets/images/babel_podcasts_bolivia-unmoving.png'
import HeroImgAnim from '../../../../assets/images/babel_podcasts_bolivia-moving.png'
import './hero.scss'

const Hero = () => {
    return (
        <section id="hero">
            <article
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
            </article >
            <article
                className="img-hero-container"
                uk-parallax={
                    window.innerWidth < 768
                        ? "target: #hero; y: 0,35vh; viewport: 0.5; easing: 0"
                        : "target: #hero; opacity: 1, 0; x: 0,30vw; viewport: 0.5; easing: 0"
                }
            >
                <div id="img-hero-center" style={{ backgroundImage: `url(${HeroImgCenter})` }}>
                    <div id="img-hero-animated" style={{ backgroundImage: `url(${HeroImgAnim})` }}></div>
                </div>
            </article >
        </section >
    )
}

export { Hero }
