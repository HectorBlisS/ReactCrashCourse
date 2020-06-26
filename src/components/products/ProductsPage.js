import React, {Component} from 'react'
import NavBar from './Navbar'

class ProductsPage extends Component {

    componentWillMount () { // a veces quieres tomar un nodo
        console.log("Antes de montarme")
    }

    componentDidMount () { // usa este! <--------
        console.log("Ya me monté")
     }

    componentWillUnmount () {
        console.log("Me voy a desmontar")
    }

    render() {
        return (
            <div>
                <NavBar/>
            </div>
        )
    }
}

export default ProductsPage