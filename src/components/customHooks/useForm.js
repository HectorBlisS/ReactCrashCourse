// 1.- virtual dom
import {useState, useEffect} from 'react'
// 2.- logica
function useForm(initial={}, watch){
    let [state, setState] = useState(initial)

    useEffect(()=>{ // lo hice pa demostrar que yo decido que hacer en mi CH
        console.log("Te ando viendo")
    },[state[watch]])

    function handleChange(e){ // tiempo real
        let {name, value} = e.target
        setState({...state, [name]:value})
    }

    return [state, handleChange]
}
// 3.- return de las herramientas
export default useForm
