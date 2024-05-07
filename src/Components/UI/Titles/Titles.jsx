import React from 'react'
import './Titles.css'
import { Image } from '../Image/Image'

export const Titles = ({style,src,styleImage,content}) => <h2 className={style}><Image style={styleImage} src={src}/> {content} </h2>


