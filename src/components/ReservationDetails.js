import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/ReservationDetails.css'; // Import the CSS file

const ReservationDetails = ({ nextStep }) => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [partySize, setPartySize] = useState('');

    const handleNext = () => {
        if (date && time && partySize) {
            nextStep({ date, time, partySize });
        } else {
            alert('Please select a date, time, and party size.');
        }
    };

    return (
        <div className="reservation-details">
            <div className="calendar-section">
                <h2>Select Date</h2>
                <Calendar
                    onChange={setDate}
                    value={date}
                    minDate={new Date()}
                    maxDate={new Date(new Date().setMonth(new Date().getMonth() + 3))}
                    className="custom-calendar" // Add custom class for styling
                />
            </div>
            <div className="time-section">
                <h2>Select Time</h2>
                <div className="time-buttons">
                    <button 
                        className={`time-button ${time === 'lunch' ? 'selected' : ''}`} 
                        onClick={() => setTime('lunch')}
                    >
                        Lunch (11:00 AM - 2:00 PM)
                    </button>
                    <button 
                        className={`time-button ${time === 'dinner' ? 'selected' : ''}`} 
                        onClick={() => setTime('dinner')}
                    >
                        Dinner (7:00 PM - 10:00 PM)
                    </button>
                </div>
            </div>
            <div className="party-size-section">
                <h2>Select Party Size</h2>
                <div className="party-size-buttons">
                    <button 
                        className={`party-size-button ${partySize === '1-2' ? 'selected' : ''}`} 
                        onClick={() => setPartySize('1-2')}
                    >
                        1-2 PAX
                    </button>
                    <button 
                        className={`party-size-button ${partySize === '3-5' ? 'selected' : ''}`} 
                        onClick={() => setPartySize('3-5')}
                    >
                        3-5 PAX
                    </button>
                    <button 
                        className={`party-size-button ${partySize === '6-10' ? 'selected' : ''}`} 
                        onClick={() => setPartySize('6-10')}
                    >
                        6-10 PAX
                    </button>
                    <button 
                        className={`party-size-button ${partySize === 'more-than-10' ? 'selected' : ''}`} 
                        onClick={() => setPartySize('more-than-10')}
                    >
                        More than 10 PAX
                    </button>
                </div>
            </div>
            <button className="next-button" onClick={handleNext}>Next</button>
        </div>
    );
};

export default ReservationDetails;