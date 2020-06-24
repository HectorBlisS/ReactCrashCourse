import React from 'react'
import styles from './about.module.css'
import { Button } from 'antd'

// 1 archivo module por carpeta (5) 
// 2 de los archivos vas a colocar 2 clases (que se llamen igual)
// 3 verifica los nombres en el navegador.

export default function Author({name}){ // display
    return( 
        <div>
            <p className={styles.blissito}>
                Autor de la página: {name}
               
            </p>
            <Button
                disabled={true}
                loading={true}
            >
            Pushame!
            </Button>
        </div>
    )
}