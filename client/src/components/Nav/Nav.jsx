import React from "react";
import "./nav.css";

function Nav({ onLoginClick }) {
    return (
        <div className="nav-container">
            <div className="logo"></div>
            <div className="login">
                <button onClick={onLoginClick}>Login / Sign-up</button>
            </div>
        </div>
    );
}

export default Nav;
