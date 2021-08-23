import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from 'components/Home'
import { AboutUs } from 'components/AboutUs'
import { Podcasts } from 'components/Podcasts'
import { Contact } from 'components/Contact'
import { Lab2021 } from 'components/Home/components/Lab2021'
import { Inscription } from 'components/Inscription'
import 'components/Main/main.scss'

const Main = () => {
    return (

        <main className="main">
            <Switch>
                <Route path="/acerca-de" component={AboutUs} />
                <Route path="/lab-2021" component={Lab2021} />
                <Route path="/podcasts" component={Podcasts} />
                <Route path="/contacto" component={Contact} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
