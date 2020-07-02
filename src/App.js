import React from 'react';
import './App.css';
import Routes from './Routes';
import {Link, NavLink} from 'react-router-dom'
import Button from './components/common/Button';

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
            <Button
                onClick={click}
                className="fancy-btn"
                text="Puchame"
                textStyle={{color:"red"}}
            >
                <h1>Mijo</h1>
            </Button>
            <Button 
                textStyle={ {color:"white"} }
                text="Cancelar"
                style={ {backgroundColor:"orange"} }       
                onClick={()=>alert("cancelado")} 
                    >
                        Cancelar
            </Button>
        </div>
    )
}

export default App;
