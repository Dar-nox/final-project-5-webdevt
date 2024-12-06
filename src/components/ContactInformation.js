import React, { useState } from 'react';
import './styles/ContactInformation.css';

const ContactInformation = ({ nextStep }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const handleNext = (e) => {
        e.preventDefault();

        console.log({ name, email, phone });

        const phoneRegex = /^09\d{9}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

        if (name && phoneRegex.test(phone) && emailRegex.test(email)) {
            const reservationDetails = { name, email, phone, specialRequest };
            nextStep(reservationDetails);
        } else {
            alert('Please fill in all fields correctly.');
        }
    };

    return (
        <div className="form-container">
<form onSubmit={handleNext}>
            <h2>Contact Information</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Phone:
                <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                />
            </label>
            <label>
                Special Requests:
                <textarea
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                />
            </label>
            <button type="submit">Next</button>
        </form>
        </div>
    );
};

export default ContactInformation;
