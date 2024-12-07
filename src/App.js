import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ReservationForm from './components/ReservationForm';
import AdminPage from './components/AdminPage';
import AdminLoginPage from './components/AdminLoginPage'; 

const App = () => {
  const [authenticated, setAuthenticated] = useState(false); 
  const [reservations, setReservations] = useState([]); 
  const [history, setHistory] = useState([]); 

  // Load reservations and history from localStorage on component mount
  useEffect(() => {
    const storedReservations = JSON.parse(localStorage.getItem('activeReservations')) || [];
    const storedHistory = JSON.parse(localStorage.getItem('reservationHistory')) || [];
    setReservations(storedReservations);
    setHistory(storedHistory);
  }, []);

  // Function to check if a reservation already exists
  const isReservationValid = (newReservation) => {
    return !reservations.some((reservation) => {
      // Normalize dates to YYYY-MM-DD for accurate comparison
      const existingDate = new Date(reservation.reservationDate).toISOString().split('T')[0];
      const newDate = new Date(newReservation.reservationDate).toISOString().split('T')[0];
  
      return (
        existingDate === newDate && // Check if dates are the same
        reservation.time === newReservation.time && // Check if time is the same
        reservation.partySize === newReservation.partySize // Check if party size is the same
      );
    });
  };

  // Function to add a new reservation and save it to localStorage
  const addReservation = (reservationData) => {
    if (isReservationValid(reservationData)) {
      const newReservation = { ...reservationData, id: Date.now() };
      const updatedReservations = [...reservations, newReservation];

      setReservations(updatedReservations);
      localStorage.setItem('activeReservations', JSON.stringify(updatedReservations));
    } else {
      alert('This reservation is already taken. Please choose a different date, time, or party size.');
    }
  };

  return (
    <Router>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Reservation Form Page */}
        <Route
          path="/reservation"
          element={
            <ReservationForm 
              addReservation={addReservation} 
              existingReservations={reservations} 
            />
          }
        />

        {/* Admin Login Page */}
        <Route
          path="/admin-login"
          element={<AdminLoginPage setAuthenticated={setAuthenticated} />}
        />

        {/* Protected Admin Page */}
        <Route
          path="/admin"
          element={
            authenticated ? (
              <AdminPage />
            ) : (
              <Navigate to="/admin-login" />
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
