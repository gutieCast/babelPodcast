import React from 'react'
import 'components/Hero/hero.scss'

const Hero = () => {
    return (
        <div id="hero" >
            <div className="img-hero">
                <div className="name-container">
                    <h1 className="uk-text-center uk-margin-auto uk-margin-auto-vertical"
                        uk-parallax="target: #hero; opacity: 1, 0; y: 400; easing: -2"
                        id="text-hero">
                        Babel Podcast
                    </h1>
                </div>
            </div>
            <div className="text-container">
                <p>
                    ¡Bienvenidx a Babel! Un lugar donde coexisten distintas formas de contar y decir.
                </p>
            </div>
        </div>
    )
}

export { Hero }
