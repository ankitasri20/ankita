import React from 'react'
import {Route ,Routes} from "react-router-dom"
import Aboutus from '../Screens/Aboutus'
import Contactus from '../Screens/Contactus'
import Login from '../Screens/Login'
import Services from '../Screens/Services'
import Header from '../Layout/Header'

const Approuter = () => {
  return (
    <Routes>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/contactus'element={<Contactus/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Header' element={<Header/>}/>
    </Routes>

  )
}

export default Approuter
