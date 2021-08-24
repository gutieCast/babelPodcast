import React from 'react'
import LogoBabel from 'assets/images/Logos/logo_babel_podcasts_bolivia.png'
import 'components/Header/components/Logo/logo.scss'

const Logo = () => {
    return (
        <div className="uk-height-large uk-background-cover uk-overflow-hidden uk-light uk-flex logo-container">
            <a href="/">
                <img id="logoBabel" src={LogoBabel} alt="logo Babel" />
            </a>
        </div>
    )
}

export { Logo }