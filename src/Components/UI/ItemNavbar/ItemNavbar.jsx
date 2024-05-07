import React from 'react'
import './ItemNavbar.css'

export const ItemNavbar = ({style, href, content}) => <li><a className={style} href={href}> {content} </a></li>

