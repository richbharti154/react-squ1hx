import React from 'react'
import {TbLayoutNavbar } from "react-icons/tb";
import {NavLink} from 'react-router-dom'
import style from "./Navbar.module.css"
export default function Navbar(){
  return(
  
  
    <div className={style.wrapper} >
<NavLink className={style.navabar}to ='/'>home</NavLink>
<NavLink className={style.navabar} to='/register'>register</NavLink>
<NavLink className={style.navabar} to='/emoji'>emoji</NavLink>

</div>
  )
}