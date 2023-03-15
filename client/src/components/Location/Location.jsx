import React from "react";
import "./location.css";

function Location() {
    return (
        <section className="location-container">
            <section className="location-overall">
                <div className="location-name-container">
                    <h2>ATLANTIS</h2>
                </div>
                <div className="location-info">
                    <div className="location-rating">
                        <p className="score">2</p>
                        <p className="total">/5</p>
                    </div>
                    <div className="based-on">
                        <p className="based-on-text">Based on <span className="based-rating">4</span> total votes</p>
                    </div>
                    <div className="location-icon-container">
                        <div className="location-icon">

                        </div>
                    </div>
                </div>
                <div className="location-btn-container">
                    <button className="add-officer">ADD AN OFFICER</button>
                    <button className="view-officer">VIEW OFFICERS</button>
                </div>
            </section>
            <section className="location-graph-container">
                <div className="location-graph">

                </div>

            </section>
        </section>
    );
}

export default Location;
