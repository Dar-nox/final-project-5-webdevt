import React from 'react';
import './styles/ConfirmationModal.css';

const ConfirmationModal = ({ reservationData, onConfirm, onEdit }) => {
  
  const addOneDayToDate = (date) => {
    const newDate = new Date(date); 
    newDate.setDate(newDate.getDate() + 1); 
    return newDate;
  };

  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <h2>Confirm Your Reservation</h2>

        <div className="section">
          <h3>Reservation Details</h3>
          <p>
            <strong>Date:</strong> {addOneDayToDate(reservationData.reservationDate).toLocaleDateString()}
          </p>
          <p><strong>Time:</strong> {reservationData.time}</p>
          <p><strong>Party Size:</strong> {reservationData.partySize}</p>
        </div>

        <div className="section">
          <h3>Meal Course</h3>
          {reservationData.mealCourse ? (
            <div className="meal-course-details">
              <img src={reservationData.mealCourse.image} alt={reservationData.mealCourse.name} />
              <p><strong>Course Name:</strong> {reservationData.mealCourse.name}</p>
              <p><strong>Allergies:</strong> {reservationData.mealCourse.allergies}</p>
              <p><strong>Cost:</strong> {reservationData.mealCourse.cost}</p>
            </div>
          ) : (
            <p>No meal course selected.</p>
          )}
        </div>

        <div className="section">
          <h3>Contact Information</h3>
          <p><strong>Name:</strong> {reservationData.name}</p>
          <p><strong>Email:</strong> {reservationData.email}</p>
          <p><strong>Phone:</strong> {reservationData.phone}</p>
          {reservationData.specialRequest && (
            <p><strong>Special Requests:</strong> {reservationData.specialRequest}</p>
          )}
        </div>

        <div className="buttons">
          <button className="edit-button" onClick={onEdit}>Edit</button>
          <button className="confirm-button" onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;