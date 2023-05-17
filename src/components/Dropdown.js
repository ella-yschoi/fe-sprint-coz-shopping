import "../components/Dropdown.css";

import { Link } from "react-router-dom";
import React from "react";

const Dropdown = () => {
    return (
        <div className="dropdown">
            최연수 님, 안녕하세요!
            <Link to="/products">🎁 상품 리스트 페이지</Link>
            <Link to="/bookmark">⭐️ 북마크 페이지</Link>
        </div>
    );
};

export default Dropdown;