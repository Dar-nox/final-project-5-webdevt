import React from 'react';
import './styles/ConfirmationModal.css';

const ConfirmationModal = ({ reservationData, onConfirm, onEdit }) => {
  if (!reservationData) return null;

  return (
    <div className="modal-container">
    <div className="confirmation-modal">
      <div className="modal-content">
        <h2>Confirm Your Reservation</h2>
        <p>Name: {reservationData.name}</p>
        <p>Email: {reservationData.email}</p>
        <p>Phone: {reservationData.phone}</p>
        <p>Meal Course: {reservationData.mealCourse?.name || 'N/A'}</p>
        <p>Special Requests: {reservationData.specialRequest}</p>
        <p>Party Size: {reservationData.partySize}</p>
        <p>Reservation Date: {reservationData.reservationDate}</p>
        <div className="modal-actions">
          <button onClick={() => onConfirm(reservationData)} className="confirm-button">Confirm</button>
          <button onClick={onEdit} className="edit-button">Edit</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ConfirmationModal;
