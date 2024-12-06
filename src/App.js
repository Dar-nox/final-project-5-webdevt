import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import ReservationForm from './components/ReservationForm';
import Admin from './components/Admin';
import Login from './components/Login';
import ContactInformation from './components/ContactInformation';
import ConfirmationModal from './components/ConfirmationModal';  // Import the ConfirmationModal

const Home = ({ onAdminLogin }) => (
    <div>
        <HeroSection />
        <Gallery />
        <Footer />
        <div className="admin-login">
            <button onClick={onAdminLogin}>Admin Login</button>
        </div>
    </div>
);

const App = () => {
    const [reservations, setReservations] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false); // Track admin login state
    const [showLogin, setShowLogin] = useState(false); // State for showing login form
    const [username, setUsername] = useState(''); // State for admin username
    const [password, setPassword] = useState(''); // State for admin password
    const [reservationData, setReservationData] = useState(null); // State for reservation data to be confirmed
    const navigate = useNavigate(); // Hook for navigation

    const addReservation = (reservation) => {
        const newReservation = {
            ...reservation,
            id: Date.now(), // Automatically assign a unique reservation ID
            date: new Date().toLocaleDateString(), // Add current date to the reservation
            cost: calculateCost(reservation), // Calculate cost (for simplicity, you can hardcode or create a formula)
        };
        setReservations([...reservations, newReservation]);
    };

    const calculateCost = (reservation) => {
        // Example logic for calculating cost based on meal course and party size
        const baseCost = 100; // Example base cost per person
        const courseCost = reservation.mealCourse === 'Main' ? 50 : 0;
        return reservation.partySize * (baseCost + courseCost);
    };

    const handleAdminLogin = () => {
        // Simple check for demo purposes
        if (username === "admin" && password === "admin123") {
            setIsAdmin(true);
            setShowLogin(false); // Close the login form after successful login
            navigate('/admin'); // Redirect to the Admin page
        } else {
            alert("Invalid credentials");
        }
    };

    const showLoginForm = () => {
        setShowLogin(true); // Show login form when "Admin Login" is clicked
    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    // Handle the modal confirm action
    const handleConfirmReservation = (data) => {
        addReservation(data); // Add the confirmed reservation to the list
        setReservationData(null); // Close the modal after confirmation
    };

    // Handle the modal edit action
    const handleEditReservation = () => {
        console.log('Edit Reservation');
        // You can set the data back to your reservation form if needed
    };

    return (
        <div>
            <Navbar />
            {showLogin && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Admin Login</h2>
                        <input type="text" value={username} onChange={handleUsernameChange} placeholder="Username" />
                        <input type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
                        <button onClick={handleAdminLogin}>Login</button>
                        <button onClick={() => setShowLogin(false)}>Cancel</button>
                    </div>
                </div>
            )}
            <Routes>
                <Route path="/" element={<Home onAdminLogin={showLoginForm} />} />
                <Route
                    path="/reservation"
                    element={<ReservationForm addReservation={addReservation} setReservationData={setReservationData} />}
                />
                <Route
                    path="/contact-info"
                    element={<ContactInformation nextStep={addReservation} />}
                />
                <Route
                    path="/admin"
                    element={isAdmin ? (
                        <Admin
                            reservations={reservations}
                        />
                    ) : (
                        <Login onAdminLogin={handleAdminLogin} />
                    )}
                />
            </Routes>

            {/* Confirmation Modal */}
            {reservationData && (
                <ConfirmationModal
                    reservationData={reservationData}
                    onConfirm={handleConfirmReservation}
                    onEdit={handleEditReservation}
                />
            )}
        </div>
    );
};

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;
