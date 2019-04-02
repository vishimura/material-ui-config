import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'

import Home from '../pages/home/home'

import history from './history'

 const Routes = () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='*' component={() => (<h1>Página não encontrada 404</h1>)} />
        </Switch>
    </ConnectedRouter>
)

export default Routes