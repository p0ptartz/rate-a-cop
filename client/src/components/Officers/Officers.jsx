import React from 'react';
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

  const handleAddFeedback = async () => {
    try {
      const { data } = await addFeedback({
        variables: {
          review: 'Great job!',
          rating: 5,
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
          name: 'Police Department',
          officers: 'Officer A, Officer B',
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
          name: 'City Hall',
          departments: 'Police Department, Fire Department',
          officers: 'Officer A, Officer B',
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
            <button onClick={handleAddFeedback}>Add Feedback</button>
            <button onClick={handleAddDepartment}>Add Department</button>
            <button onClick={handleAddLocation}>Add Location</button>
            <button onClick={handleRemoveFeedback}>Remove Feedback</button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Officers;


