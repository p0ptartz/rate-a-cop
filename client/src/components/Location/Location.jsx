import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./location.css";
import { useMutation, useQuery } from '@apollo/client';
import { GET_FEEDBACKS } from "../../utils/queries"

import frownIcon from "./frown.png";

import Feedback from '../Feedback/Feedback';



function Location({ }) {
    const { city } = useParams()
    const { loading, error, data } = useQuery(GET_FEEDBACKS)
    const [showFeedbacks, setShowFeedbacks] = useState(false);
    const [showAddOfficer, setShowAddOfficer] = useState(false);

    const filteredFeedback = loading ? [] : data.feedbacks.filter((feedback) => feedback?.city == city);
    const filteredAverage = loading ? "-" :
        filteredFeedback.length == 0 ? "-" :
            Math.round(filteredFeedback.map((feedback) => feedback.rating).reduce((a, b) => a + b, 0) / filteredFeedback.length * 10) / 10;

    // THIS GUY DOES THE IMAGE URL THING
    const filteredBg = filteredAverage == "-" ? "https://em-content.zobj.net/thumbs/120/twitter/322/skull_1f480.png" :
        filteredAverage > 4 ? "https://em-content.zobj.net/thumbs/120/twitter/322/fire_1f525.png" :
            filteredAverage > 3 ? "https://em-content.zobj.net/thumbs/120/microsoft/319/shamrock_2618-fe0f.png" :
                frownIcon

    const [location, setLocation] = useState(city)
    const [feedbackForm, setFeedbackForm] = useState(false)


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleViewOfficersClick = () => {
        setShowFeedbacks(true);
        console.log(data.feedbacks.filter((feedback) => feedback?.city == city))
    }

    const handleAddOfficerClick = () => {
        // setLocation(defaultLocation.name);
        setShowAddOfficer(true);
    }

    // const defaultLocation = {name: "Atlanta", state: "GA"}

    const handleLinkOfficersClick = () => {
        // setLocation(defaultLocation.name);
        setFeedbackForm(true)
    }    

    return (
        <div>
            <section className="location-container">
                <section className="location-overall">
                    <div className="location-name-container">
                        <h2>{city.toUpperCase()}</h2>
                    </div>
                    <div className="location-info">
                        <div className="location-rating">
                            <p className="score">{filteredAverage}</p>
                            <p className="total">/5</p>
                        </div>
                        <div className="based-on">
                            <p className="based-on-text">Based on <span className="based-rating">{filteredFeedback.length}</span> total votes</p>
                        </div>
                        <div className="location-icon-container">
                            {/* <div className="location-icon" > */}
                            {/* <div>
                                <img style={{ height: 200, width: 150 }} src={filteredBg} />
                            </div> */}
                        </div>
                    </div>
                    <div className="location-btn-container">
                        <button className="add-officer" onClick={handleAddOfficerClick}>ADD AN OFFICER</button>
                        <button className="view-officer" onClick={handleViewOfficersClick}>VIEW OFFICERS</button>
                    </div>
                </section>
                <section className="location-graph-container">
                    <div className="location-graph">

                    </div>

                </section>

            </section>
            {showFeedbacks && // render feedbacks section only when showFeedbacks state is true
                <section className='get-feedback-container'>
                    {
                        data.feedbacks.filter((feedback) => feedback?.city == city).map((feedback) => (
                            <section className="get-feedback" key={feedback._id}>
                                <div className="feedback-user">
                                    {feedback.rating}
                                </div>
                                <div className="feedback-review">
                                    {feedback.review}
                                </div>
                            </section>

                        ))
                    }
                </section>
            }
            {showAddOfficer &&
                <section className="add-officer-backdrop">
                    <div className="add-officer-page">
                        <div className="add-officer-header">
                            <button onClick={() => setShowAddOfficer(false)}>X</button>
                        </div>
                        <div className="add-officer-content">
                            <Feedback place={location}/>
                        </div>
                    </div>
                </section>

            }
        </div>
    );
}

export default Location;
