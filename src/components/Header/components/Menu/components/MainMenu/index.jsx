import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { menu } from 'helpers/menuList'
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
            {
                menu.map(({ name, link, hash }) => {
                    return (
                        <li
                            className="menu-item"
                            key={name}
                            onClick={(e) => handleClick(e)}
                        >
                            <NavLink className={`${styleName} uk-animation-slide-top-small menu-link`}
                                to={`/${hash}`}
                                scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                                to={link}
                            >
                                {name}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export { MainMenu }
