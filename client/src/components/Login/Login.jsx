import React from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "./login.css";

function Login({ onCloseClick }) {
    const [addUser] = useMutation(ADD_USER);

    const handleAddUser = async() => {
        try{
            const { data } = await addUser({
                variables: {
                    username: user.username,
                    password: user.password,
                }
            })
        }
    }


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
                            <input type="text" id="username" value={user.username} placeholder="Username*" />
                        </div>
                        <div>
                            <input type="password" id="password" value={user.password} placeholder="Password*" />
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
