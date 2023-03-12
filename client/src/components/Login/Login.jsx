import React from "react";
import "./login.css";

function Login() {
    return (
        <div className="login-overlay">
            <div className="login-modal">
                <div className="login-text">
                    <h2>LOGIN</h2>
                </div>
                <div className="line"></div>
                <form id="login-form">
                    <div>
                        <input type="text" id="username" name="username" placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit" id="submit">Continue</button>
                    </div>

                    <div className="login-bottom">
                        <p>Don't have an account?</p>
                        <a href="">Sign up here,</a>
                        <a href="">or go back to Home</a>
                    </div>
                    {/* <button className="close-button">
                        home 
                    </button> */}
                </form>
            </div>
        </div>
    );
}

export default Login;
