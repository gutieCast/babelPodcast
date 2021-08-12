import React from 'react'
import HeroImg from 'assets/images/portada.png'
import 'components/Home/components/Hero/hero.scss'
import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <div id="hero" >
            <Link to="/inscribirme">
                <div id="img-hero" style={{ backgroundImage: `url(${HeroImg})` }}>
                </div>
            </Link>
            <div className="text-container">
                <p className="uk-text-center uk-margin-auto uk-margin-auto-vertical"
                    uk-parallax="target: #hero; opacity: 0, 1; y: 100; easing: 2">
                    ¡Bienvenidx a Babel! Un lugar donde coexisten distintas formas de contar y decir.
                </p>
            </div>
        </div>
    )
}

export { Hero }
