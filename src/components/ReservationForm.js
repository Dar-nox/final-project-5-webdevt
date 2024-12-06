import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import ContactInformation from './ContactInformation';
import ReservationDetails from './ReservationDetails';
import MealCourse from './MealCourse';
import ConfirmationModal from './ConfirmationModal';
import './styles/ReservationForm.css';

const ReservationForm = ({ addReservation }) => {
  const [step, setStep] = useState(1);
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

  const navigate = useNavigate(); 

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
    addReservation(reservationData);
    setTimeout(() => {
      navigate('/'); 
    }, 1);
  };

  const handleEdit = () => {
    setStep(1);
  };

  return (
    <div className="reservation-form">
      {step === 1 && (
        <ReservationDetails
          nextStep={nextStep}
          reservationData={reservationData}
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


    </div>
  );
};

export default ReservationForm;
