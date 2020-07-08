// los imports de el virtiual dom   1.- setState etc... 
import {useState} from 'react'

// la funcion que hace todo         2.- la lógica que quiero compartir
function useInput(initial=''){
    let [field, setValue] = useState(initial) // mi estado soporta arrays?

    function handleChange(e){ // mi funcion siempre recibe un evento
        let {value} = e.target // <--- cualidad ??? SABE CÓMO TRABAJR CON UN EVENTO 
        setValue(value)
    }

    // lo que queremos exportar         3.- exportar lo que diseñe
    return [field, handleChange]
}

export default useInput
