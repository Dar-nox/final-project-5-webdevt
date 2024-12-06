import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import ReservationForm from './components/ReservationForm';

const App = () => {
  return (
    <Router>
      <Navbar /> {/* Navbar will be displayed on all pages */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home page */}
        <Route path="/reservation" element={<ReservationForm />} /> {/* Reservation Form page */}
      </Routes>
    </Router>
  );
};

export default App;
