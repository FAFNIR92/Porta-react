import React from 'react'
import './References.css'
import { Paragraph } from '../Paragraph/Paragraph' 


export const References = ({ style, styleDiv }) => {
    return (
        <div className={styleDiv}>
            <Paragraph content='Nombre: Sebástian Ramírez Giraldo' style={style}/>
            <Paragraph content='Cargo' style={style}/>
            <Paragraph content='Telefono: +57-3046194068' style={style}/>
            <Paragraph content='Correo: ramirezgiraldosebastian30@gmail.com' style={style}/>
        </div>
    )
}

