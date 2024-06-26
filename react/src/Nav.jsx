import React from 'react'
import './Nav.css'
import { Link } from "react-scroll"

function Nav() {
  return (
    <div className='navbar' >
     <div className="logo">
        <h1 className='logoh1'>  N<span>ikhil</span></h1>
     </div>
<div className="listIte">
    <Link className='list'>Home</Link>
    <Link className='list' >About</Link>
    <Link className='list'>Skills</Link>
    <Link className='list'>Projects</Link>
</div>
<div className="btnNav">
    <button className="btn">  Contact me</button>
</div>
    </div>
      
    
  )
}

export default Nav
