import React from 'react'

export default function Button({
    children="boton generico", 
    className="fancy-btn",
    onClick,
    style,
    textStyle
}){
    return (
        <button 
            style={style}
            onClick={onClick}
            className={className}
        >
            <span style={textStyle}>
                {children}
            </span>
        </button>
    )
}
// lista de los props que este boton puede recibir