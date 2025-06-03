import React from "react";
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <div>
            <p><Link to="/Contactus">Contact</Link></p>
            <p><Link to="/Aboutus">About</Link></p>
            <p><Link to="/Login">Login</Link></p>
            <p><Link to="/Services">Services</Link></p>
        </div>
    )
}
export default Header;
