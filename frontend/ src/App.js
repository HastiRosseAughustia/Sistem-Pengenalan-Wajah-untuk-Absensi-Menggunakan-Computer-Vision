import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AttendancePage from './pages/AttendancePage';
import CapturePage from './pages/CapturePage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/attendance" element={<AttendancePage />} />
                        <Route path="/capture" element={<CapturePage />} />
                        <Route path="/user" element={<UserPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;

