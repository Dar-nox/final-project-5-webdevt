import React, { useState, useEffect } from 'react';
import './styles/AdminPage.css';

const AdminPage = () => {
  const [activeReservations, setActiveReservations] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedActive = JSON.parse(localStorage.getItem('activeReservations')) || [];
    const storedHistory = JSON.parse(localStorage.getItem('reservationHistory')) || [];
    setActiveReservations(storedActive);
    setHistory(storedHistory);
  }, []);

  const saveData = (updatedActive, updatedHistory) => {
    setActiveReservations(updatedActive);
    setHistory(updatedHistory);
    localStorage.setItem('activeReservations', JSON.stringify(updatedActive));
    localStorage.setItem('reservationHistory', JSON.stringify(updatedHistory));
  };

  const handleCancel = (id) => {
    const reservation = activeReservations.find((res) => res.id === id);
    const updatedActive = activeReservations.filter((res) => res.id !== id);
    saveData(updatedActive, [...history, { ...reservation, status: 'Cancelled' }]);
  };

  const handleMarkAsDone = (id) => {
    const reservation = activeReservations.find((res) => res.id === id);
    const updatedActive = activeReservations.filter((res) => res.id !== id);
    saveData(updatedActive, [...history, { ...reservation, status: 'Done' }]);
  };

  
  const addOneDayToDate = (dateString) => {
    const date = new Date(dateString);
    date.setDate(date.getDate() + 1); 
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="admin-page">
      <h2>Active Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Party Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {activeReservations.map((res) => (
            <tr key={res.id}>
              <td>{res.name}</td>
              <td>{addOneDayToDate(res.reservationDate)}</td> {/* Display modified date */}
              <td>{res.time}</td>
              <td>{res.partySize}</td>
              <td>
                <button
                  className="admin-page-mark-done-button"
                  onClick={() => handleMarkAsDone(res.id)}
                >
                  Done
                </button>
                <button
                  className="admin-page-cancel-button"
                  onClick={() => handleCancel(res.id)}
                >
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Reservation History</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Party Size</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {history.map((res, index) => (
            <tr key={index}>
              <td>{res.name}</td>
              <td>{addOneDayToDate(res.reservationDate)}</td> {/* Display modified date */}
              <td>{res.time}</td>
              <td>{res.partySize}</td>
              <td>{res.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
