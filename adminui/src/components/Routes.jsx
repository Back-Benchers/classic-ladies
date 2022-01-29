import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Notfound from '../pages/Notfound'
import Product from '../pages/Products'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/customers' component={Customers} />
            <Route path='/products' component={Product} />
            <Route path='*' component={Notfound} />

        </Switch>
    )
}

export default Routes
