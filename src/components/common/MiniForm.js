import React from 'react'
import useForm from '../customHooks/useForm'

function MiniForm(){ // reglas de usar hooks 1.- siempre al principio
    //custom
    // let [name, handleName] = useInput("BlisS") // <--- porque un hook? por el VD
    // let [age, handleAge] = useInput(33) 
    // let [tel, handleTel] = useInput() 
    let [form, handle] = useForm({
        name:"Blissito",
        age:"",
        tel:""
    }, "age")

    //let {name,age,tel} =form

    return (
        <div>
            <h2>Responde! {form.name} </h2>
            <input name="name" value={form.name} onChange={handle} type="text" />
            <input name="age" value={form.age} onChange={handle} type="text" />
            <input name="tel" value={form.tel} onChange={handle} type="text" />
        </div>
    )
}

export default MiniForm