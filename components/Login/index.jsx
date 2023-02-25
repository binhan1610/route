import React from 'react'
import "./style.css"
import { useState } from 'react'
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom'
function Login({an}) {

    const navigate = useNavigate()
    // const {history} = useHistory

    const [name, setName]=useState("")
    
    const changetext=(el)=>{
        setName(el.target.value)
        console.log(name);
    
    }
    const submit4=(e)=>{
        e.preventDefault()
        // console.log(name);
        an(name)
        // console.log(an);
        navigate("/") 
    }
  return (
<div>
    <div className="conteiner">
        <div style={{display:"flex",justifyContent:"center"}}><h1>Log In</h1></div>
       
            <form>
    <div className='mb-3'>
        <label>Username</label>
        <input type='text' placeholder="Enter Username" className='form-control' onChange={changetext}></input>
    </div>
    <div className='mb-3'>
        <label>Password</label>
        <input type='text' placeholder="Enter Password" className='form-control'></input>
    </div>
    <button type='submit' className='btn btn-primary' style={{marginLeft:"130px"} } onClick={(e) => submit4(e)}>Submit</button>
            </form>
      

    </div>
</div>
  )
}

export default Login