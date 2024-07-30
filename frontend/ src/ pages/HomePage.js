import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Mengimpor file CSS untuk styling

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to the Attendance and Face Recognition System</h1>
            <p>This is the home page of our application where you can navigate to different sections.</p>
            <div className="links">
                <Link to="/attendance" className="link-button">Go to Attendance Page</Link>
                <Link to="/capture" className="link-button">Go to Capture Page</Link>
            </div>
        </div>
    );
};

export default HomePage;

