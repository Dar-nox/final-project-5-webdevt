import React, { useState, useEffect } from "react";
import "./styles/AdminPage.css";

const AdminPage = ({ reservations }) => {
  // Store active reservations and history
  const [activeReservations, setActiveReservations] = useState(reservations);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setActiveReservations(reservations);
  }, [reservations]);

  // Handle cancel reservation
  const handleCancel = (id) => {
    setActiveReservations(activeReservations.filter((res) => res.id !== id));
  };

  // Handle mark as done (move to history)
  const handleMarkAsDone = (id) => {
    const reservation = activeReservations.find((res) => res.id === id);
    setActiveReservations(activeReservations.filter((res) => res.id !== id));
    setHistory([...history, reservation]);
  };

  return (
    <div className="admin-page">
      <div className="active-reservations">
        <h2>Active Reservations</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Party Size</th>
              <th>Meal Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activeReservations.map((res, index) => (
              <tr key={res.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{new Date(res.reservationDate).toLocaleDateString()}</td>
                <td>{res.time}</td>
                <td>{res.partySize}</td>
                <td>{res.mealCourse ? res.mealCourse.name : "No meal course"}</td>
                <td>
                  <button
                    className="mark-done-button"
                    onClick={() => handleMarkAsDone(res.id)}
                  >
                    Mark as Done
                  </button>
                  <button
                    className="cancel-button"
                    onClick={() => handleCancel(res.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="history">
        <h2>Reservation History</h2>
        <table className="styled-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Date</th>
              <th>Meal Course</th>
            </tr>
          </thead>
          <tbody>
            {history.map((res, index) => (
              <tr key={res.id} className={index % 2 === 0 ? "even-row" : "odd-row"}>
                <td>{res.id}</td>
                <td>{res.name}</td>
                <td>{new Date(res.reservationDate).toLocaleDateString()}</td>
                <td>{res.mealCourse ? res.mealCourse.name : "No meal course"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPage;
