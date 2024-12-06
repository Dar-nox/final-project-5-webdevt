import React from 'react';

const Admin = ({ reservations, cancelReservation, updateReservation, markReservation }) => {
    return (
        <div>
            <h2>Admin Reservation Overview</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Meal Course</th>
                        <th>Special Requests</th>
                        <th>Party Size</th>
                        <th>Reservation Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reservations.map((reservation) => (
                        <tr key={reservation.id}>
                            <td>{reservation.id}</td>
                            <td>{reservation.name}</td>
                            <td>{reservation.email}</td>
                            <td>{reservation.phone}</td>
                            <td>{reservation.mealCourse ? reservation.mealCourse.name : 'N/A'}</td>
                            <td>{reservation.specialRequest || 'N/A'}</td>
                            <td>{reservation.partySize}</td>
                            <td>{reservation.reservationDate}</td>
                            <td>{reservation.status}</td>
                            <td>
                                <button onClick={() => cancelReservation(reservation.id)}>Cancel</button>
                                <button onClick={() => updateReservation(reservation.id, { status: 'confirmed' })}>Confirm</button>
                                <button onClick={() => markReservation(reservation.id, 'completed')}>Mark Completed</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;
