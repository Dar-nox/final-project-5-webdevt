import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ReservationForm from './components/ReservationForm';
import AdminPage from './components/AdminPage';
import AdminLoginPage from './components/AdminLoginPage'; // Admin login page

const App = () => {
  const [reservations, setReservations] = useState([]); // State to store confirmed reservations
  const [authenticated, setAuthenticated] = useState(false); // State to track authentication

  // Function to add a new reservation
  const addReservation = (reservationData) => {
    const newReservation = { ...reservationData, id: Date.now() }; // Use current timestamp as ID
    setReservations((prevReservations) => [...prevReservations, newReservation]);
  };

  return (
    <Router>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route
          path="/reservation"
          element={<ReservationForm addReservation={addReservation} />} // Pass function to ReservationForm
        /> {/* Reservation Form page */}
        
        {/* Admin Login page */}
        <Route
          path="/admin-login"
          element={<AdminLoginPage setAuthenticated={setAuthenticated} />}
        />

        {/* Protected Admin page */}
        <Route
          path="/admin"
          element={authenticated ? <AdminPage reservations={reservations} /> : <Navigate to="/admin-login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
