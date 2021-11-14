import React from 'react'
import './burguerButton.scss'

const BurguerButton = ({ children }) => {
    const body = document.querySelector('body');
    const navMobileToggle = (e) => {
        e.preventDefault();
        body.classList.toggle('menu-button-actived');
    }
    return (
        <>
            <div className="menu-button-box">
                <a id="menu-button-toggle" onClick={(e) => navMobileToggle(e)}>
                    <span></span>
                </a>
            </div>
            {children}
        </>
    )
}

export { BurguerButton }
