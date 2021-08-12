import React from 'react'
import HeroImg from 'assets/images/portada.png'
import 'components/Home/components/Hero/hero.scss'

const Hero = () => {
    return (
        <div id="hero" >
            <div className="img-hero">
                <img src={HeroImg} alt="convocatoria" />
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
