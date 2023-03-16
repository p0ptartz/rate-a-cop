import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "./location.css";
import { useMutation, useQuery } from '@apollo/client';
import { GET_FEEDBACKS } from "../../utils/queries"


import goodIcon from "./smile.png"
import mehIcon from "./meh.png"
import badIcon from "./frownred.png"

import Feedback from '../Feedback/Feedback';



function Location({ }) {
    const navigate = useNavigate();
    const { city } = useParams();
    const { loading, error, data } = useQuery(GET_FEEDBACKS)
    const [showFeedbacks, setShowFeedbacks] = useState(false);
    const [showAddOfficer, setShowAddOfficer] = useState(false);

    const filteredFeedback = loading ? [] : data.feedbacks.filter((feedback) => feedback?.city == city);

    const filteredAverage = loading ? "-" :
        filteredFeedback.length == 0 ? "-" :
            Math.round(filteredFeedback.map((feedback) => feedback.rating).reduce((a, b) => a + b, 0) / filteredFeedback.length * 10) / 10;

    // THIS GUY DOES THE IMAGE URL THING
    let filteredBg;
    if (filteredAverage > 4) {
      filteredBg = goodIcon;
    } else if (filteredAverage < 2.6) {
      filteredBg = badIcon;
    } else {
      filteredBg = mehIcon;
    }
    

    const [location, setLocation] = useState(city)
    const [feedbackForm, setFeedbackForm] = useState(false)


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleViewOfficersClick = () => {
        setShowFeedbacks(true);
        console.log(data.feedbacks.filter((feedback) => feedback?.city == city))
    }
    
    
    const handleAddOfficerClick = () => {
        setLocation(city);
        setShowAddOfficer(true);
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
                            <div className="location-icon" style={{ backgroundImage: `url(${filteredBg})` }}>

                                {/* <img src={filteredBg} /> */}
                            </div>
                        </div>
                    </div>
                    <div className="location-btn-container">
                        <button className="add-officer" onClick={handleAddOfficerClick}>ADD AN OFFICER</button>
                        <button className="view-officer" onClick={handleViewOfficersClick}>VIEW OFFICERS</button>
                    </div>
                </section>

            </section>
            {showFeedbacks && // render feedbacks section only when showFeedbacks state is true
                <section className='get-feedback-container'>
                    {
                        data.feedbacks.filter((feedback) => feedback?.city == city).map((feedback) => (
                            <section className="get-feedback" key={feedback._id}>
                                <div className='officer-name'>
                                    <p>
                                        {feedback.officer}
                                    </p>
                                </div>
                                <div className="feedback-user">
                                    {feedback.rating} Stars
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
                            <Feedback place={location} />
                        </div>
                    </div>
                </section>

            }
        </div>
    );
}

export default Location;