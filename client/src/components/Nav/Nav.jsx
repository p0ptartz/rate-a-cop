import React from "react";
import "./nav.css";

function Nav({ onLoginClick }) {
    return (
        <div className="nav-container">
            <a href="/" className="nav-title">Rate-A-Cop</a>
             <div className="nav-about">
                <p className="nav-about-p">GIVING POWER<br /> TO <br />THE PUBLIC</p>
            </div>
            <div className="logo"></div>
            <div className="login">
                <button onClick={onLoginClick}>Login / Sign-up</button>
            </div>
        </div>
    );
}

export default Nav;
