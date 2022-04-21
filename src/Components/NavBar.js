import './NavBar.css'
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return( 
        <div className="nav-menu">
            <img src="https://f8n-production.s3.amazonaws.com/creators/profile/ooryfc0yg-4389-256x256-png-anc8fa.png" className="nft-icon"/>
            <NavLink to="/" className="nav-home">NFT Mania</NavLink>
            <NavLink to="/create" className="nav-form">Create an NFT</NavLink>
            <NavLink to="/about" className="nav-about">About</NavLink>
        </div>
    )
}
export default NavBar