import './NavBar.css'
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return( 
        <div className="nav-menu">
            <NavLink to="/" className="nav-home">NFT Mania</NavLink>
            <NavLink to="/create" className="nav-form">Create an NFT</NavLink>
            <NavLink to="/about" className="nav-about">About</NavLink>
        </div>
    )
}
export default NavBar