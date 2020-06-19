import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import ProductsPage from './components/products/ProductsPage'

function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductsPage} />
        </Switch>
    )
}

export default Routes