import "../components/Dropdown.css";

import { Link } from "react-router-dom";
import React from "react";

function Dropdown () {
    return (
        <div className="dropdown">
            <div>👋 Hello, Ella !</div>
            <Link to="/products">🎁 상품리스트 페이지</Link>
            <Link to="/bookmark">⭐️ 북마크 페이지</Link>
        </div>
    );
};

export default Dropdown;