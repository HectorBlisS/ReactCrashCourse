import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/home/Home'
import ProductsPage from './components/products/ProductsPage'
import AboutPage from './components/about/AboutPage'

// TAREA 1: hacer proyecto desde cero --> agregar 5 rutas --> crear container y displays

function Routes(){
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={ProductsPage} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    )
}

export default Routes