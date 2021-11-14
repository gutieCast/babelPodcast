import React from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { menu } from '../../helpers/menuList'
import './mainMenu.scss'

const MainMenu = ({ styleName, classLoc }) => {
    const body = document.querySelector('body');
    const handleClick = (e) => {
        e.preventDefault();
        if (window.innerWidth < 999) {
            body.classList.toggle('menu-button-actived');
        }
    }
    return (
        <ul id="main-menu" className={classLoc}>
            {
                menu.map(({ name, link, hash }) => {
                    return (
                        <li
                            className={`${styleName} menu-item`}
                            tabIndex="0"
                            key={name}
                            onClick={(e) => handleClick(e)}
                        >
                            <NavLink className=" menu-link"
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
