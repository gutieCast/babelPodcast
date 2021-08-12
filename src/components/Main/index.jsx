import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'components/Home'
import { Podcast } from 'components/Podcast'
import { Contact } from 'components/Contact'
import { Inscription } from 'components/Inscription'


const Main = () => {
    return (
        <main>
            <Switch>
                <Route path="/inscribirme" component={Inscription} />
                <Route path="/contacto" component={Contact} />
                <Route path="/podcast" component={Podcast} />
                <Route excat path="/" component={Home} />
            </Switch>
        </main>
    )
}

export { Main }
