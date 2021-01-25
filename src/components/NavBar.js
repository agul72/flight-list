import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <NavLink to="/" className="brand-logo right">Flight list app</NavLink>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><NavLink to={'/create'}>Create</NavLink></li>
                    <li><NavLink to={'/links'}>Flights</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}
