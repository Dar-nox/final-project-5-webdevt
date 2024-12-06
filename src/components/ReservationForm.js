import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import ContactInformation from './ContactInformation';
import ReservationDetails from './ReservationDetails';
import MealCourse from './MealCourse';
import ConfirmationModal from './ConfirmationModal';
import './styles/ReservationForm.css';

const ReservationForm = ({ addReservation }) => {
  const [step, setStep] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [reservationData, setReservationData] = useState({
    name: '',
    email: '',
    phone: '',
    specialRequest: '',
    reservationDate: '',
    time: '',
    partySize: '',
    mealCourse: null,
  });

  const navigate = useNavigate(); // Initialize navigation

  const nextStep = (data) => {
    setReservationData((prevState) => ({
      ...prevState,
      ...data,
    }));
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const handleConfirm = () => {
    addReservation(reservationData); // Pass reservation data to the parent
    setShowSuccessMessage(true); // Show success message
    setTimeout(() => {
      navigate('/'); // Redirect to the homepage after 3 seconds
    }, 1000);
  };

  const handleEdit = () => {
    setStep(1); // Restart the form if editing is needed
  };

  return (
    <div className="reservation-form">
      {step === 1 && (
        <ReservationDetails
          nextStep={nextStep}
          reservationData={reservationData} // Pass current reservation data to retain values
        />
      )}
      {step === 2 && (
        <MealCourse nextStep={nextStep} previousStep={previousStep} />
      )}
      {step === 3 && (
        <ContactInformation nextStep={nextStep} previousStep={previousStep} />
      )}
      {step === 4 && (
        <ConfirmationModal
          reservationData={reservationData}
          onConfirm={handleConfirm}
          onEdit={handleEdit}
        />
      )}

      {/* Success message after confirmation */}
      {showSuccessMessage && (
        <div className="success-message">
          <h2>Reservation Successful!</h2>
          <p>Your reservation has been confirmed. Redirecting to the homepage...</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
