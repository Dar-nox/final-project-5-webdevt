import React, { useState } from 'react';
import '../styles/MealCourse.css';

const mealOptions = [
    {
        id: 1,
        name: 'Course 1',
        image: 'path/to/image1.jpg',
        allergies: 'Nuts, Dairy',
        cost: '₱500',
    },
    {
        id: 2,
        name: 'Course 2',
        image: 'path/to/image2.jpg',
        allergies: 'Gluten',
        cost: '₱600',
    },
    {
        id: 3,
        name: 'Course 3',
        image: 'path/to/image3.jpg',
        allergies: 'Seafood',
        cost: '₱700',
    },
];

const MealCourse = ({ nextStep, previousStep }) => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleSelectCourse = (course) => {
        setSelectedCourse(course);
    };

    const handleNext = () => {
        if (selectedCourse) {
            nextStep({ mealCourse: selectedCourse }); // Pass the entire course object
        }
    };

    return (
        <div className="meal-course-container">
            <h2>Select Your Meal Course</h2>
            <div className="meal-course-grid">
                {mealOptions.map((course) => (
                    <div
                        key={course.id}
                        className={`meal-course-option ${selectedCourse === course ? 'selected' : ''}`}
                        onClick={() => handleSelectCourse(course)}
                        style={{ backgroundImage: `url(${course.image})` }}
                    >
                        <div className="course-info">
                            <h3>{course.name}</h3>
                            <p>Allergies: {course.allergies}</p>
                            <p>Cost: {course.cost}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="button-container">
                <button className="previous-button" onClick={previousStep}>Previous</button>
                <button className="next-button" onClick={handleNext} disabled={!selectedCourse}>Next</button>
            </div>
        </div>
    );
};

export default MealCourse;
