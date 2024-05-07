import React from 'react'
import './Card.css'
import { Image } from '../Image/Image';
import { Paragraph } from '../Paragraph/Paragraph';

export const Card = ({ style, styleImg, src, contentBox, stylePtitle, styleP, styleBtn, href }) => {
    return (
        <div className={style}>
            <Image style={styleImg} src={src} />

            <div className={contentBox}>
                <Paragraph content='Tittle' style={stylePtitle} />
                <Paragraph content='Descripcion' style={styleP} />
                <Paragraph content='Ir al proyecto' style={styleBtn} />
            </div> 
        </div>
    )
}
