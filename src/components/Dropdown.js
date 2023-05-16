import "../components/Dropdown.css";

import { Link } from "react-router-dom";
import React from "react";

const Dropdown = () => {
    return (
        <div className="dropdown">
            <li>최연수 님, 안녕하세요!</li>
            <Link to="/products">
                <li className="li">🎁 상품 리스트 페이지</li>
            </Link>
            <Link to="/bookmark">
                <li className="li">⭐️ 북마크 페이지</li>
            </Link>
        </div>
    );
};

export default Dropdown;