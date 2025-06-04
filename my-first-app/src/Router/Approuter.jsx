import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Aboutus from '../Screens/Aboutus'
import Contactus from '../Screens/Contactus'
import Login from '../Screens/Login'
import Services from '../Screens/Services'
import Header from '../Layout/Header'
import Home from '../Home/Home'

const Approuter = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/contactus'element={<Contactus/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Header' element={<Header/>}/>
        
    </Routes>

  )
}

export default Approuter
