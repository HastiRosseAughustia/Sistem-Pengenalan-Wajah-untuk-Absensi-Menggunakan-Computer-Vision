import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AttendanceList.css'; // Mengimpor file CSS untuk styling

const AttendanceList = () => {
    const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAttendanceRecords = async () => {
            try {
                const response = await axios.get('/api/attendance');
                setAttendanceRecords(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch attendance records');
                setLoading(false);
            }
        };

        fetchAttendanceRecords();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="attendance-list">
            <h1>Attendance Records</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceRecords.map(record => (
                        <tr key={record._id}>
                            <td>{record.name}</td>
                            <td>{new Date(record.date).toLocaleDateString()}</td>
                            <td>{new Date(record.time).toLocaleTimeString()}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendanceList;

