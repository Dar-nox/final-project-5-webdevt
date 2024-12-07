import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
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

  const [errorMessage, setErrorMessage] = useState('');
  const [reservations, setReservations] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('activeReservations')) || [];
    setReservations(storedReservations);
  }, []);

  const nextStep = (data) => {
    const updatedData = { ...reservationData, ...data };

    if (step === 1 && !isReservationValid(updatedData)) {
      setErrorMessage('This reservation is not available. Please try a different slot.');
      return;
    }

    setErrorMessage('');
    setReservationData(updatedData);
    setStep(step + 1);
  };

  const previousStep = () => setStep(step - 1);

  const isReservationValid = (newReservation) => {
    return !reservations.some(
      (res) =>
        res.reservationDate === newReservation.reservationDate &&
        res.time === newReservation.time &&
        res.partySize === newReservation.partySize
    );
  };

  const handleConfirm = () => {
    const newReservation = {
      id: uuidv4(),
      ...reservationData,
    };

    if (isReservationValid(newReservation)) {
      const updatedReservations = [...reservations, newReservation];
      localStorage.setItem('activeReservations', JSON.stringify(updatedReservations));
      setShowSuccessMessage(true);
      setTimeout(() => navigate('/'), 1000);
    } else {
      setErrorMessage('This slot is no longer available.');
    }
  };

  const handleEdit = () => setStep(1);

  return (
    <div className="reservation-form">
      {step === 1 && (
        <ReservationDetails nextStep={nextStep} reservationData={reservationData} />
      )}
      {step === 2 && <MealCourse nextStep={nextStep} previousStep={previousStep} />}
      {step === 3 && <ContactInformation nextStep={nextStep} previousStep={previousStep} />}
      {step === 4 && (
        <ConfirmationModal
          reservationData={reservationData}
          onConfirm={handleConfirm}
          onEdit={handleEdit}
        />
      )}

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {showSuccessMessage && (
        <div className="success-message">
          <h2>Reservation Successful!</h2>
          <p>Redirecting to the homepage...</p>
        </div>
      )}
    </div>
  );
};

export default ReservationForm;
