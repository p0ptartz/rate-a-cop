import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  ADD_FEEDBACK,
  ADD_DEPARTMENT,
  ADD_LOCATION,
  REMOVE_FEEDBACK,
} from '../../utils/mutations';
import './Officers.css';

function Officers() {
  const [addFeedback] = useMutation(ADD_FEEDBACK);
  const [addDepartment] = useMutation(ADD_DEPARTMENT);
  const [addLocation] = useMutation(ADD_LOCATION);
  const [removeFeedback] = useMutation(REMOVE_FEEDBACK);

  const [feedback, setFeedback] = useState({ review: '', rating: 0 });
  const [department, setDepartment] = useState({ name: '', officers: '' });
  const [location, setLocation] = useState({ name: '', departments: '', officers: '' });

  const handleAddFeedback = async () => {
    try {
      const { data } = await addFeedback({
        variables: {
          review: feedback.review,
          rating: Number(feedback.rating),
        },
      });
      console.log('Added feedback:', data.addFeedback);
    } catch (error) {
      console.error('Error adding feedback:', error);
    }
  };

  const handleAddDepartment = async () => {
    try {
      const { data } = await addDepartment({
        variables: {
          name: department.name,
          officers: department.officers,
        },
      });
      console.log('Added department:', data.addDepartment);
    } catch (error) {
      console.error('Error adding department:', error);
    }
  };

  const handleAddLocation = async () => {
    try {
      const { data } = await addLocation({
        variables: {
          name: location.name,
          departments: location.departments,
          officers: location.officers,
        },
      });
      console.log('Added location:', data.addLocation);
    } catch (error) {
      console.error('Error adding location:', error);
    }
  };

  const handleRemoveFeedback = async () => {
    try {
      const { data } = await removeFeedback({
        variables: {
          feedbackId: 'feedbackId123',
        },
      });
      console.log('Removed feedback with ID feedbackId123:', data.removeFeedback);
    } catch (error) {
      console.error('Error removing feedback:', error);
    }
  };

  return (
    <section className="officer-container">
      <section className="officer-rating">
        <div className="officer-stats-container">
          <div className="officer-stats">
            <h2 className="officer-name">Officers Name</h2>
            <p className="officer-ratings"><span className='avg'>3</span>/5</p>
            <p className="review"></p>
          </div>
        </div>
        <div className="graph-container">
          <div className="graph-body">
            <div className="input-container">
              <label htmlFor="rating-input">Rating:</label>
              <input type="number" id="rating-input" value={feedback.rating} onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="review-input">Review:</label>
              <textarea id="review-input" value={feedback.review} onChange={(e) => setFeedback({ ...feedback, review: e.target.value })}></textarea>
            </div>
            <div className="input-container">
              <label htmlFor="department-name-input">Department Name:</label>
              <input type="text" id="department-name-input" value={department.name} onChange={(e) => setDepartment({ ...department, name: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="department-officers-input">Department Officers:</label>
              <input type="text" id="department-officers-input" value={department.officers} onChange={(e) => setDepartment({ ...department, officers: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="location-name-input">Location Name:</label>
              <input type="text" id="location-name-input" value={location.name} onChange={(e) => setLocation({ ...location, name: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="location-departments-input">Location Departments:</label>
              <input type="text" id="location-departments-input" value={location.departments} onChange={(e) => setLocation({ ...location, departments: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="location-officers-input">Location Officers:</label>
              <input type="text" id="location-officers-input" value={location.officers} onChange={(e) => setLocation({ ...location, officers: e.target.value })} />
            </div>
            <div className="btn-container">
        <button className="add-feedback-btn" onClick={handleAddFeedback}>Add Feedback</button>
        <button className="add-department-btn" onClick={handleAddDepartment}>Add Department</button>
        <button className="add-location-btn" onClick={handleAddLocation}>Add Location</button>
        <button className="remove-feedback-btn" onClick={handleRemoveFeedback}>Remove Feedback</button>
                    </div>
            </div>
        </div>
    </section>
</section>
);
}

export default Officers;



