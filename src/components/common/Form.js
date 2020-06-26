import React, {Component} from 'react'
import {Input, Select} from 'antd'

const { Option } = Select;

class Form extends Component{

    state = {
        form:{
            name:"morro",
            email:"fixter@fixter.com",
            tel:"77712",
            age:"33",
            message:""
        }        
    }

    handleChange = e => {
        let {name:field, value} = e.target // deconstruimos target << PS TODO TRUENA NO MMS >>
        let {form} = this.state
        form[field] = value
        this.setState({form}) // aplicar los cambios
    }

    render(){
        let {name, email, tel, age} = this.state.form // hack del dia
        // cualquier maldito calculo
        return (
            <div>
                <h2>Formulario de contacto</h2>
                <Input 
                    placeholder="escribe tu nombre"
                    value={name}
                    onChange={this.handleChange}
                    name="name"
                    type="text"
                />
                  <Input 
                    value={email}
                    placeholder="escribe tu email"
                    onChange={this.handleChange}
                    name="email"
                    type="text"
                />
                 <Input 
                    value={tel}
                    onChange={this.handleChange}
                    name="tel"
                    type="text"
                />
                <Select style={{width:200}} value={age} onChange={value=>this.handleChange({target:{name:"age",value}})} > {/** Por esto React es hermoso */}
                    <Option value="29">
                        29 o menos
                    </Option>
                    <Option value="35">
                        35 hasta 39
                    </Option>
                    <Option value="40">
                        40 o más
                    </Option>
                </Select>
            </div>
        )
    }
}

export default Form