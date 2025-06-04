import React from "react";
import { Link } from 'react-router-dom'
import "../Styles/Header.css"

const Header = () => {
    return(
        <div className="Main-header-container">
            <p className="Nav-link"><Link to="/Contactus">Contact</Link></p>
            <p className="Nav-link"><Link to="/Aboutus">About</Link></p>
            <p className="Nav-link"><Link to="/Login">Login</Link></p>
            <p className="Nav-link"><Link to="/Services">Services</Link></p>
        </div>
    )
}
export default Header;
