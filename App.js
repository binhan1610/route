import React from 'react'
import "./App.css"
import { Route,BrowserRouter,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import Login from './components/Login'
import Logout from './components/Logout'
import Footer from './components/Footer'
import Error404 from './components/Eoror404'
import { useState } from 'react'
function App() {
  const [message, setMessage] = useState('')
  const callbackFunction = (childData) => {
    setMessage(childData)
  }
  return (
    <div>
<div className='main'>
<BrowserRouter>
      <Header/>
      <Routes>
        <Route path='*' element={<Error404/>}/>
        <Route path='/' element={<Home name={message}/>}/>
        <Route path='/Login' element={<Login an={callbackFunction}/>}/>
        <Route path='/Logout' element={<Logout/>}/>
    
      </Routes>
      <Footer/>
      </BrowserRouter>

</div>
    </div>
  )
}

export default App
