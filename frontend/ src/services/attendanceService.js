import axios from 'axios';

const API_URL = '/api/attendance';

// Mendapatkan semua catatan kehadiran
export const getAllAttendanceRecords = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch attendance records');
    }
};

// Mendapatkan catatan kehadiran berdasarkan ID
export const getAttendanceRecordById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch attendance record');
    }
};

// Menambahkan catatan kehadiran baru
export const createAttendanceRecord = async (record) => {
    try {
        const response = await axios.post(API_URL, record);
        return response.data;
    } catch (error) {
        throw new Error('Failed to create attendance record');
    }
};

// Memperbarui catatan kehadiran yang ada
export const updateAttendanceRecord = async (id, record) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, record);
        return response.data;
    } catch (error) {
        throw new Error('Failed to update attendance record');
    }
};

// Menghapus catatan kehadiran berdasarkan ID
export const deleteAttendanceRecord = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete attendance record');
    }
};

