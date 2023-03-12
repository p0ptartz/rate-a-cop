import React from "react";
import "./login.css";

function Login({ onCloseClick }) {
    return (
        <div className="login-overlay">
            <section className="login-contain">

                <section className="login-modal">
                    <div className="closebtn-contain"></div>
                    <div className="login-text">
                        <h2>LOGIN</h2>
                    </div>
                    <div className="line"></div>
                    <form className="login-form">
                        <div id="hidden" >

                        </div>
                        <div>
                            <input type="text" id="username" name="username" placeholder="Username*" />
                        </div>
                        <div>
                            <input type="password" id="password" name="password" placeholder="Password*" />
                        </div>
                        <div>
                            <button type="submit" id="submit">Login</button>
                        </div>
                    </form>
                </section>
            </section>

            {/* <div className="divider">
                <div className="dividerline"></div>
            </div> */}
            <section className="signup-contain">
                <section className="signup-modal">
                    <div className="closebtn-contain">
                        <button onClick={onCloseClick}>X</button>
                    </div>
                    <div className="login-text">
                        <h2>SIGN UP</h2>
                    </div>
                    <form className="login-form">
                        <div>
                            <input type="text" id="signup-email" name="username" placeholder="Email Address*" />
                        </div>
                        <div>
                            <input type="text" id="signup-username" name="username" placeholder="Username*" />
                        </div>
                        <div>
                            <input type="password" id="signup-password" name="password" placeholder="Password*" />
                        </div>
                        <div>
                            <button type="submit" id="signup-submit" className="signup-submit">Sign Up</button>
                        </div>
                    </form>
                </section>
            </section>

        </div>
    );
}

export default Login;
