import React from 'react'
import { BurguerButton } from './components/BurguerButton'
import { MainMenu } from '../../../MainMenu'
import './menu.scss'

const Menu = () => {
    return (
        <nav id="main-navegator">
            {
                window.inner > 999
                    ? < MainMenu styleName={"uk-animation-slide-top-small"} />
                    :
                    <BurguerButton>
                        <MainMenu styleName={"uk-animation-slide-top-small"} />
                    </BurguerButton>
            }
        </nav>
    )
}

export { Menu }
