import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'components/Home'
import { Podcasts } from 'components/Podcasts'
import { Contact } from 'components/Contact'
import { Inscription } from 'components/Inscription'
import 'components/Main/main.scss'


const Main = () => {
    return (
        <main className="main">
            <Switch>
                <Route path="/inscribirme" component={Inscription} />
                <Route path="/contacto" component={Contact} />
                <Route path="/podcasts" component={Podcasts} />
                <Route exact path="/" component={Home} />
            </Switch>
        </main>
    )
}

export default Main
