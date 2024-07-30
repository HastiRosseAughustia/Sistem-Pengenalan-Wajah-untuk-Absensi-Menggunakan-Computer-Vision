import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserPage.css'; // Mengimpor file CSS untuk styling

const UserPage = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch users');
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDetails = () => {
        setSelectedUser(null);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="user-page">
            <h1>User List</h1>
            <div className="user-list">
                {users.map(user => (
                    <div
                        key={user._id}
                        className="user-card"
                        onClick={() => handleUserClick(user)}
                    >
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>

            {selectedUser && (
                <div className="user-details">
                    <button onClick={handleCloseDetails} className="close-button">Close</button>
                    <h2>{selectedUser.name}</h2>
                    <p>Email: {selectedUser.email}</p>
                    <p>Role: {selectedUser.role}</p>
                    <p>Joined: {new Date(selectedUser.joinedDate).toLocaleDateString()}</p>
                </div>
            )}
        </div>
    );
};

export default UserPage;

