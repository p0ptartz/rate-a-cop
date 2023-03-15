import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./location.css";
import { useMutation, useQuery } from '@apollo/client';
import { GET_FEEDBACKS } from "../../utils/queries"
import Feedback from '../Feedback/Feedback';

function Location() {
    const { loading, error, data } = useQuery(GET_FEEDBACKS)
    const [showFeedbacks, setShowFeedbacks] = useState(false);
    const [showAddOfficer, setShowAddOfficer] = useState(false);
    const [location, setLocation] = useState("Philly")
    const [feedbackForm, setFeedbackForm] = useState(false)

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const handleViewOfficersClick = () => {
        setShowFeedbacks(true);
    }

    const handleAddOfficerClick = () => {
        setLocation(defaultLocation.name);
        setShowAddOfficer(true);
    }

    const defaultLocation = {name: "Atlanta", state: "GA"}

    const handleLinkOfficersClick = () => {
        setLocation(defaultLocation.name);
        setFeedbackForm(true)
    }    

    return (
        <div>
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
                        data.feedbacks.map((feedback) => (
                            <section className="get-feedback">
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
