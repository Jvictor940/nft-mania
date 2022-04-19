import React from 'react'
import { NavLink } from "react-router-dom"

function NavBar() {
    return( 
        <div>
            <NavLink to="/">NFT Mania</NavLink>
            <NavLink to="/create">Create an NFT</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    )
}
export default NavBar