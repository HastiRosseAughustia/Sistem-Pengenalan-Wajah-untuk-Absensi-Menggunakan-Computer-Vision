import axios from 'axios';

const API_URL = '/api/face';

// Mengunggah gambar wajah
export const uploadFaceImage = async (imageData) => {
    try {
        const response = await axios.post(API_URL, { image: imageData });
        return response.data;
    } catch (error) {
        throw new Error('Failed to upload face image');
    }
};

// Mendapatkan daftar wajah
export const getFaceList = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch face list');
    }
};

// Mendapatkan detail gambar wajah berdasarkan ID
export const getFaceById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch face details');
    }
};

// Menghapus gambar wajah berdasarkan ID
export const deleteFaceById = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to delete face image');
    }
};

