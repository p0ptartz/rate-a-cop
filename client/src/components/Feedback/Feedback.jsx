
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  ADD_FEEDBACK,
  ADD_DEPARTMENT,
  ADD_LOCATION,
  ADD_OFFICER,

} from '../../utils/mutations';
import './Feedback.css';


const Feedback = ({ place }) => {

  const [feedback, setFeedback] = useState({ review: '', rating: 0 });
  const [department, setDepartment] = useState({ name: '', officers: '' });
  const [location, setLocation] = useState(place);
  const [officer, setOfficer] = useState({ name: '', position: '', officerId: '' })


  const [addFeedback] = useMutation(ADD_FEEDBACK);
  // const [addDepartment] = useMutation(ADD_DEPARTMENT);
  // const [addLocation] = useMutation(ADD_LOCATION);
  const [addOfficer] = useMutation(ADD_OFFICER);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting form...', feedback, officer);

    await Promise.all([
      addFeedback({ variables: { review: feedback.review, rating: Number(feedback.rating), officer: officer.name, city: location } }),
      addOfficer({ variables: { name: officer.name, position: officer.position, officerId: officer.id } })
    ]);
    console.log('Form submitted', feedback, officer);
  };

  return (
    <div className="graph-container">
      <div className="graph-body">
        <div className="input-container">
          <label htmlFor="officer-name-input"></label>
          <input type="text" id="officer-name-input" placeholder="Enter The Officer's Name"
            value={officer.name}
            onChange={(e) => setOfficer({ ...officer, name: e.target.value })} />
        </div>
        <div className="input-container">
          <label htmlFor="department-name-input"></label>
          <input type="text"
            id="department-name-input" placeholder="Enter The Department Name"
            value={department.name}
            onChange={(e) => setDepartment({ ...department, name: e.target.value })} />
        </div>
        <div className="input-container">
          <label htmlFor="rating-input" placeholder='Enter a number between 1 and 5'>Rating:</label>
          <input type="number"
            id="rating-input"
            value={feedback.rating}
            onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })} />
        </div>
        <div className="input-container">
          {/* <label htmlFor="review-input"></label> */}
          <textarea id="review-input" placeholder='Leave your experience here'
            value={feedback.review}
            onChange={(e) => setFeedback({ ...feedback, review: e.target.value })}></textarea>
        </div>


        {/* <div className="input-container">
              <label htmlFor="department-officers-input">Officer's Position:</label>
              <input type="text" id="officers-position-input"
                value={officer.position}
                onChange={(e) => setOfficer({ ...officer, position: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="department-officers-input">Officer's ID:</label>
              <input type="text" id="officers-id-input"
                value={officer.id}
                onChange={(e) => setOfficer({ ...officer, officerId: e.target.value })} />
            </div>
            <div className="input-container">
              <label htmlFor="location-name-input">Location Name:</label>
              <input type="text"
                id="location-name-input"
                value={place}
                onChange={(e) => setLocation( e.target.value )}
 />
            </div>
            <div className="input-container">
              <label htmlFor="location-departments-input">Location Departments:</label>
              <input type="text" id="location-departments-input" */}
        {/* // value={location.departments}
                // onChange={(e) => setLocation({ ...location, departments: e.target.value })}
                 />
            </div>
            <div className="input-container">
              <label htmlFor="location-officers-input">Location Officers:</label>
              <input type="text" id="location-officers-input" */}
        {/* // value={location.officers}
                // onChange={(e) => setLocation({ ...location, officers: e.target.value })}
                 />
            </div> */}
        <div className="btn-container">
          <button className='submit-btn' onClick={handleFormSubmit}>Submit</button>



        </div>
      </div>
    </div>
  );
}

export default Feedback;



