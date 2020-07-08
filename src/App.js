import React from 'react';
import './App.css';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom'
import Button from './components/common/Button';
import MiniForm from './components/common/MiniForm'

const App = () => { // layout
    function click(){
        alert("me puchaste")
    }
    return (
        <div>
            <nav>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
                <NavLink activeClassName="active" to="/products">Catálogo</NavLink>
                <NavLink activeClassName="active" to="/about">Sobre nosotro</NavLink>
            </nav>
            {/* <Routes/> */}
            <MiniForm/>
        </div>
    )
}

export default App;
