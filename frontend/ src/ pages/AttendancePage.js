import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AttendancePage.css'; // Mengimpor file CSS untuk styling

const AttendancePage = () => {
    const [attendanceList, setAttendanceList] = useState([]);
    const [newAttendance, setNewAttendance] = useState({
        userId: '',
        date: '',
        status: 'Present'
    });

    useEffect(() => {
        // Fetch attendance data from API
        const fetchAttendance = async () => {
            try {
                const response = await axios.get('/api/attendance');
                setAttendanceList(response.data);
            } catch (error) {
                console.error('Failed to fetch attendance data:', error);
            }
        };

        fetchAttendance();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAttendance({
            ...newAttendance,
            [name]: value
        });
    };

    const handleAddAttendance = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/attendance', newAttendance);
            setAttendanceList([...attendanceList, response.data]);
            setNewAttendance({ userId: '', date: '', status: 'Present' });
        } catch (error) {
            console.error('Failed to add attendance:', error);
        }
    };

    return (
        <div className="attendance-page">
            <h1>Attendance List</h1>

            <form onSubmit={handleAddAttendance} className="attendance-form">
                <h2>Add Attendance</h2>
                <label>
                    User ID:
                    <input
                        type="text"
                        name="userId"
                        value={newAttendance.userId}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Date:
                    <input
                        type="date"
                        name="date"
                        value={newAttendance.date}
                        onChange={handleInputChange}
                        required
                    />
                </label>
                <label>
                    Status:
                    <select
                        name="status"
                        value={newAttendance.status}
                        onChange={handleInputChange}
                    >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                    </select>
                </label>
                <button type="submit">Add Attendance</button>
            </form>

            <h2>Attendance Records</h2>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Date</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {attendanceList.map((record) => (
                        <tr key={record._id}>
                            <td>{record.userId}</td>
                            <td>{record.date}</td>
                            <td>{record.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttendancePage;

