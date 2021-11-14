import React from 'react'
import LogoBabel from '../../../../assets/images/Logos/logo_babel_podcasts_bolivia.png'
import './logo.scss'

const Logo = () => {
    return (
        <div className="uk-background-cover uk-overflow-hidden uk-light logo-container">
            <a className="logo-link" href="/">
                <img id="logoBabel" src={LogoBabel} alt="logo Babel" />
            </a>
        </div>
    )
}

export { Logo }