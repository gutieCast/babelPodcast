import React from 'react'
import { Logo } from 'components/Header/components/Logo'
import { Menu } from 'components/Header/components/Menu'
import 'components/Header/header.scss'

const Header = () => {
    return (
        <header id="main-header">
            <Logo />
            <Menu />
        </header>
    )
}

export { Header }