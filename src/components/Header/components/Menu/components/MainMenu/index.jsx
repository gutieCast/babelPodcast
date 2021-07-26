import React from 'react'
import { NavLink } from 'react-router-dom'
import 'components/Header/components/Menu/components/MainMenu/mainMenu.scss'

const MainMenu = ({ styleName }) => {
    const body = document.querySelector('body');
    const handleClick = (e) => {
        e.preventDefault();
        if (window.innerWidth < 999) {
            body.classList.toggle('menu-button-actived');
        }
    }
    return (
        <ul id="main-menu">
            <li className="menu-item" onClick={(e) => handleClick(e)}>
                <NavLink className={`${styleName} uk-animation-slide-top-small menu-link`} to="/">
                    Inicio
                </NavLink>
            </li>
            <li className="menu-item" onClick={(e) => handleClick(e)}>
                <NavLink className={`${styleName} uk-animation-slide-top-small menu-link`} to="/podcast">
                    Podcast
                </NavLink>
            </li>
            <li className="menu-item" onClick={(e) => handleClick(e)}>
                <NavLink className={`${styleName} uk-animation-slide-top-small menu-link`} to="/contacto">
                    Contacto
                </NavLink>
            </li>
        </ul>
    )
}

export { MainMenu }
