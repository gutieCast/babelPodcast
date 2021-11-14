import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Home'
import { AboutUs } from '../AboutUs'
import { Podcasts } from '../Podcasts'
import { Contact } from '../Contact'
import { Lab2021 } from '../Home/components/Lab2021'
import './main.scss'

const Main = () => {
    return (

        <main className="main">
            <Switch>
                <Route path="/#acerca-de" component={AboutUs} />
                <Route path="/#lab-2021" component={Lab2021} />
                <Route path="/#podcasts" component={Podcasts} />
                <Route path="/#contacto" component={Contact} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
