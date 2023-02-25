import React from 'react'
import input1 from './Input.module.css'
export default function Input(props){
  return(
   
    <input className={props.className} type={props.type} placeholder={props.placeholder}
    p onChange={props.onChange}/>
 
  )
}