import React from "react";
import "./landing.css"
import { useNavigate } from 'react-router-dom';

function Landing() {
    const navigate = useNavigate()

    function handleSearch() {
        const searchText = document.getElementById('search').value;
        navigate(`/officer`);
    }

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
                <div className="direction-container">

                    <div className="directions">
                        <p>Search by State, City, or Zip-code</p>
                    </div>
                    <div className="input-form">
                        <input id="search" type="text" aria-label="search" placeholder="State, City, Zip-Code" />
                    </div>
                    <button className="search-btn" onClick={handleSearch}>Search</button>

                </div>

            </div>

        </div>
    )

}

export default Landing;
