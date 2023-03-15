import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./location.css";
import { useMutation, useQuery } from '@apollo/client';
import { GET_FEEDBACKS } from "../../utils/queries"


function Location() {

    const { loading, error, data } = useQuery(GET_FEEDBACKS)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;


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
                        <button className="add-officer">ADD AN OFFICER</button>
                        <button className="view-officer">VIEW OFFICERS</button>
                    </div>
                </section>
                <section className="location-graph-container">
                    <div className="location-graph">

                    </div>

                </section>

            </section>
            <section className='get-feedback-container'>
                {
                    data.feedbacks.map((feedback) => (
                        <section className="get-feedback">
                            <div className="feedback-user">

                            </div>
                            <div className="feedback-review">
                                {feedback.review} - {feedback.rating}
                            </div>
                        </section>

                    ))
                }
            </section>
        </div>

    );
}

export default Location;

// {
//     data.feedbacks.map((feedback) => (
//         <div key={feedback._id} className="feedback-review">
//             {feedback.review} - {feedback.rating}
//         </div>
//     ))
// }