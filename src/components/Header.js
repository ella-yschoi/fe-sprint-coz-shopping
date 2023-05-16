import "../components/Header.css";

import React, { useState } from 'react';

import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";

function Header() {
    const [dropdown, setDropdown] = useState(false);
    
    const handleDropdown = () => {
        setDropdown(!dropdown);
    };
    
    return (
        <>
        <header className="header">
            <Link to="/">
                <span className="logo">
                    <img src={logo} alt ="logo"/>
                    <h2>COZ Shopping</h2>
                </span>
            </Link>
            <span className="hamburger" onClick = {handleDropdown}>
            </span>
            <MenuIcon />
        </header>
        {dropdown && <Dropdown/>}
        </>
    );
}

export default Header;