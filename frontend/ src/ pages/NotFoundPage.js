import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Mengimpor file CSS untuk styling

const NotFoundPage = () => {
    return (
        <div className="not-found-page">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <Link to="/" className="back-home-button">Go to Home Page</Link>
        </div>
    );
};

export default NotFoundPage;

