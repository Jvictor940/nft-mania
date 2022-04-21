import './NavBar.css'
import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return( 
        <div className="nav-menu">
            <img src="https://f8n-production.s3.amazonaws.com/creators/profile/ooryfc0yg-4389-256x256-png-anc8fa.png" className="nft-icon"/>
            <NavLink to="/home"
            className={isActive => !isActive ? "nav-home" : "nav-home-active"}
            >
                NFT Mania
            </NavLink>
            <NavLink to="/create" className={isActive => !isActive ? "nav-form" : "nav-form-active"}>Create an NFT</NavLink>
            <NavLink to="/about" className={isActive => !isActive ? "nav-about":"nav-about-active"}>About</NavLink>
        </div>
    )
}
export default NavBar