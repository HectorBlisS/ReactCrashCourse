import React from 'react';
import './App.css';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom'

const App = () => { // layout
    return (
        <div>
            <nav>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/products">Catálogo</NavLink>
                <NavLink activeClassName="active" to="/about">Sobre nosotro</NavLink>
            </nav>
            <Routes/>
        </div>
    )
}

export default App;
