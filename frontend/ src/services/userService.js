import axios from 'axios';

const API_URL = '/api/users';

// Mendapatkan semua pengguna
export const getAllUsers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch users');
    }
};

// Mendapatkan detail pengguna berdasarkan ID
export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch user details');
    }
};

// Menambahkan pengguna baru
export const createUser = async (userData) => {
    try {
        const response = await axios.post(API_URL, userData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create user');
    }
};

// Memperbarui pengguna yang ada
export const updateUser = async (id, userData) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, userData);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update user');
    }
};

// Menghapus pengguna berdasarkan ID
export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete user');
    }
};

