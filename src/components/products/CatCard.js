import React from 'react'

export default function CatCard({cat}){

    function renderCategory(){
        return cat.categories ? <p>{cat.categories[0].name}</p> : <p>No hay categoría</p>
    }

    return ( // conditional rendering
        <div className="card">
            <h2>{cat.id}</h2>
            {renderCategory()}
            <img width="50" src={cat.url} />
            <span>Link que te lleva a ver la tumba</span>
        </div>
    )
}