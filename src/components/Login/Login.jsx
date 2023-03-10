import React from "react";
import "./login.css";

function Login({ onCloseClick }) {
    return (
        <div className="login-overlay">
            <div className="login-modal">

                <form>
                    <div>
                        <input type="text" id="username" name="username" placeholder="Username" />
                    </div>
                    <div>
                        <input type="password" id="password" name="password" placeholder="Password" />
                    </div>
                    <div>
                        <button type="submit" id="submit">Submit</button>
                    </div>
                    <button className="close-button" onClick={onCloseClick}>
                        X
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
