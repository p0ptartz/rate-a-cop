import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";
import "./login.css";

import Auth from '../../utils/auth';

function Login({ onCloseClick }) {
    const [addUser, { error, data }] = useMutation(ADD_USER);

    const [loginState, setLoginState] = useState({
        username: '',
        password:'',
    });


    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setLoginState({
        ...loginState,
        [name]: value,
      });
    };
  
    const handleLoginSubmit = async (event) => {
      event.preventDefault();
      console.log(loginState);
  
      try {
        const { data } = await addUser({
          variables: { ...loginState },
        });
  
        Auth.login(data.addUser.token);
      } catch (e) {
        console.error(e);
      }
    };
  

    return (
        <div className="login-overlay">
            <section className="login-contain">

                <section className="login-modal">
                    <div className="closebtn-contain"></div>
                    <div className="login-text">
                        <h2>LOGIN</h2>
                    </div>
                    <div className="line"></div>
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <div id="hidden" >

                        </div>
                        <div>
                            <input type="text" 
                            name="username" 
                            id="username" 
                            value={loginState.username} 
                            onChange={handleChange} 
                            placeholder="Username*" />
                        </div>
                        <div>
                            <input type="password" name="password" 
                            id="password" 
                            value={loginState.password} 
                            onChange={handleChange} 
                            placeholder="Password*" />
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
                    <form className="login-form" onSubmit={handleLoginSubmit}>
                        <div>
                            <input type="text"
                             id="signup-email"
                            //  name="email" 
                            //  value={loginState.email} 
                            //  onChange={handleChange} 
                             placeholder="Email Address*" />
                        </div>
                        <div>
                            <input type="text" id="signup-username" 
                            name="username" 
                            value={loginState.username} 
                            onChange={handleChange} 
                            placeholder="Username*" />
                        </div>
                        <div>
                            <input type="password" id="signup-password" 
                            name="password" 
                            value={loginState.password} 
                            onChange={handleChange} 
                            placeholder="Password*" />
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
