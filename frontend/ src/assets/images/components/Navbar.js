import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Mengimpor file CSS untuk styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1>MyApp</h1>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/attendance" className="nav-link">Attendance</Link>
                </li>
                <li className="nav-item">
                    <Link to="/capture" className="nav-link">Face Capture</Link>
                </li>
                <li className="nav-item">
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;

