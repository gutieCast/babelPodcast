import React from 'react'
import { Logo } from './components/Logo'
import { Menu } from './components/Menu'
import './header.scss'

const Header = () => {
    return (
        <header id="main-header">
            <Logo />
            <Menu />
        </header>
    )
}

export { Header }