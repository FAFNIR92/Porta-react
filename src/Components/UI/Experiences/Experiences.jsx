import React from 'react'
import './Experiences.css'
import { Image } from '../Image/Image';
import { Line } from '../Line/Line';
import { Paragraph } from '../Paragraph/Paragraph';

export const Experiences = ({content,boxFooter,styleLine,style,src,classP}) => {
  return (
    <div className={boxFooter}>
        <Image src={src} style={style}/>
        <Line style={styleLine}/>
        <Paragraph style={classP} content={content}/>
    </div>
  )
}
