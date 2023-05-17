import "../components/Header.css";

import React, { useState } from 'react';

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

function Header() {
    const [dropdownOpen, setDropdownOpen] = useState(false); 
    
    const handleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };
    
    return (
        <>
        <header className="header">
            <Link to="/" className="logo">
                <span className="logo-img">
                    <img src={logo} alt ="logo"/>
                </span>
                <h2 className="logo-text">
                    COZ Shopping
                </h2>
            </Link>
            <span className="hamburger" onClick = {handleDropdown}>
                <MenuIcon />
            </span>
        </header>
        {dropdownOpen && <Dropdown />}
        </>
    );
}

export default Header;