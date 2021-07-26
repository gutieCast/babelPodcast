import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from 'components/Home'
import { Podcast } from 'components/Podcast'
import { Contact } from 'components/Contact'


const Main = () => {
    return (
        <div>
            <Switch>
                <Route path="/contacto" component={Contact} />
                <Route path="/podcast" component={Podcast} />
                <Route excat path="/" component={Home} />
            </Switch>
        </div>
    )
}

export { Main }
