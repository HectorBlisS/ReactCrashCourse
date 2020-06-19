import React, {Component} from 'react'

let logo = "https://send.firefox.com/icon.fd04d81a.svg"

class NavBar extends Component{

    state = {
        name:'Ania',
        email:'',
        tel:'',
        age:'',
    }

    cuandoCambie = e =>{
        let value = e.target.value
        let field = e.target.name
        // virtual dom:
        this.setState({[field]:value})
        console.log(this.state)
        // NO SE MEZCLA VANILLA JS CON REACT NUNCA
        // CLONAR UN FORM SIMPLE Y CUANDO LE DAN ENVIAR, USAR LOS DATOS PARA UN MENSAJE 
        // ("JUANITO GRACIAS TE CONTACTAREMOS EN EMAIL")
    }

    onChange = ({target:{name,value}}) => this.setState({[name]:value})

    render(){
        return (
            <nav className="" >
                <img src={logo}/>
                <h2 id="mijo">
                    {this.state.name}
                    {/* nombre, correo, tel, edad */}
                </h2> 
                <p>{this.state.email}</p>
                <p>{this.state.tel}</p>
                <p>{this.state.age}</p>
                <input name="name" onChange={this.onChange} type="text" placeholder="Escribe tu nombre" />
                <input name="email" onChange={this.onChange} type="text" placeholder="Escribe tu mail" />
                <input name="tel" onChange={this.onChange} type="text" placeholder="Escribe tu tel" />
                <input name="age" onChange={this.onChange} type="text" placeholder="Ahora tu edad" />
                <button >Enviar formulario</button>
            </nav>
        )
    }
}

export default NavBar