import React, {Component} from 'react'
import NavBar from './Navbar'
import CatCard from './CatCard'

class ProductsPage extends Component { // quien hace peticiones a un server | 1.- Container (Page) | 2.- Método: componentDidMount |

    state = {
        cats:[],
        name: "App de gatos"
    }

    componentWillMount () { // a veces quieres tomar un nodo
        console.log("Antes de montarme")
    }

    componentDidMount () { // usa este! <-------- queremos que todo este listo  | nivel 1 de donde poner los consumos a una api 2.- servicio, 3.- redux | 
        
        fetch("https://api.thecatapi.com/v1/images/search?limit=30&page=100&mime_types=gif&api_key=b4e8a552-5906-4f14-9a85-c78769892703", {
            method: "get",
            headers: {
                "x-api-key":"b4e8a552-5906-4f14-9a85-c78769892703",
                "Content-Type":"application/json"
            }
        })
        .then(response=>{
            if(response.ok) return response.json() // esto lo manda al 2do then
            console.log(response.statusText)
        })
        .then(data=>{
            this.setState({cats:data})
        })

     }

    componentWillUnmount () {
        console.log("Me voy a desmontar")
    }

    drawCat = cat => {
        return <CatCard name={this.state.name} cat={cat} />
    }

    renderCats = () => {
        let {cats} = this.state
        return cats.map(this.drawCat)
    }

    // van a crear un metodo que devuelva el último gato

    // lastCat = () => <img src />

    render() {
        return ( // porque es una colección 
            <div>
              {this.renderCats()}
            </div>
        )
    }
}

export default ProductsPage