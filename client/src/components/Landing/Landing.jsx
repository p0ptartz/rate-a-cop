import React from "react";
import "./landing.css"

function Landing() {
    return (
        <div className="landing-container">
            <div className="blur">
                <div className="title">
                    <div className="title-1">
                        <p>RATE</p>
                    </div>
                    <div className="title-2">
                        <p>A COP</p>
                    </div>
                </div>
                <div className="start">
                    <p>GET STARTED:</p>
                </div>
                <div className="directions">
                    <p>Search by State, City, or Zip-code</p>
                </div>
                <div className="input-form">
                    <input id="search" type="text" aria-label="search" placeholder="State, City, Zip-Code" />
                </div>
            </div>

        </div>
    )

}

export default Landing
