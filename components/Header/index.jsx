import React from 'react'
import "./style.css"
import { Link } from 'react-router-dom'
function Header () {
  return (
    <div className='header'>
        
        <Link to={"/"} >Home</Link>
        <Link to={"/Login"}>Login</Link>
        <Link to={"/Logout"}>Logout</Link>

    </div>
  )
}

export default Header 