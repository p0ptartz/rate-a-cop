import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  ADD_FEEDBACK,
  ADD_DEPARTMENT,
  ADD_LOCATION,
  ADD_OFFICER,
} from '../../utils/mutations';
import './Feedback.css';
import Rating from 'react-rating-stars-component';
const Feedback = ({ place }) => {
  const [feedback, setFeedback] = useState({ review: '', rating: 0 });
  const [department, setDepartment] = useState({ name: '', officers: '' });
  const [location, setLocation] = useState(place);
  const [officer, setOfficer] = useState({ name: '', position: '', officerId: '' });
  const [addFeedback] = useMutation(ADD_FEEDBACK);
  const [addOfficer] = useMutation(ADD_OFFICER);
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...', feedback, officer);
    await Promise.all([
      addFeedback({
        variables: {
          review: feedback.review,
          rating: Number(feedback.rating),
          officer: officer.name,
          city: location,
        },
      }),
      addOfficer({
        variables: {
          name: officer.name,
          position: officer.position,
          officerId: officer.id,
        },
      }),
    ]);
    console.log('Form submitted', feedback, officer);
  };
  return (
    <div className="graph-container">
      <div className="graph-body">
        <div className="input-container">
          <label htmlFor="officer-name-input"></label>
          <input
            type="text"
            id="officer-name-input"
            placeholder="Enter The Officer's Name"
            value={officer.name}
            onChange={(e) =>
              setOfficer({ ...officer, name: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="department-name-input"></label>
          <input
            type="text"
            id="department-name-input"
            placeholder="Enter The Department Name"
            value={department.name}
            onChange={(e) =>
              setDepartment({ ...department, name: e.target.value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="rating-input" placeholder="Enter a number between 1 and 5">
            Rating:
          </label>
          <Rating
            count={5}
            size={24}
            activeColor="#FFD700"
            value={feedback.rating}
            onChange={(value) =>
              setFeedback({ ...feedback, rating: value })
            }
          />
        </div>
        <div className="input-container">
          <label htmlFor="review-input">Review:</label>
          <textarea
            id="review-input"
            value={feedback.review}
            onChange={(e) =>
              setFeedback({ ...feedback, review: e.target.value })
            }
          ></textarea>
        </div>
        <div className="btn-container">
          <button className="submit-btn" onClick={handleFormSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Feedback;