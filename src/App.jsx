import React, { useState } from "react";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import "./App.css";

function App() {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const handleLoginClick = () => {
        setIsLoginOpen(true);
    };

    const handleCloseClick = () => {
        setIsLoginOpen(false);
    };

    return (
        <div>
            <Nav onLoginClick={handleLoginClick} />
            <Landing />
            {isLoginOpen && <Login onCloseClick={handleCloseClick} />}
        </div>
    );
}

export default App;
