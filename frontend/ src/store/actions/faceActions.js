import {
    UPLOAD_FACE_REQUEST,
    UPLOAD_FACE_SUCCESS,
    UPLOAD_FACE_FAILURE,
    FETCH_FACE_LIST_REQUEST,
    FETCH_FACE_LIST_SUCCESS,
    FETCH_FACE_LIST_FAILURE,
    FETCH_FACE_REQUEST,
    FETCH_FACE_SUCCESS,
    FETCH_FACE_FAILURE,
    DELETE_FACE_REQUEST,
    DELETE_FACE_SUCCESS,
    DELETE_FACE_FAILURE
} from '../constants/faceConstants';
import * as faceService from '../services/faceService';

// Mengunggah gambar wajah
export const uploadFaceImage = (imageData) => async (dispatch) => {
    dispatch({ type: UPLOAD_FACE_REQUEST });
    try {
        const data = await faceService.uploadFaceImage(imageData);
        dispatch({ type: UPLOAD_FACE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPLOAD_FACE_FAILURE, payload: error.message });
    }
};

// Mendapatkan daftar wajah
export const fetchFaceList = () => async (dispatch) => {
    dispatch({ type: FETCH_FACE_LIST_REQUEST });
    try {
        const data = await faceService.getFaceList();
        dispatch({ type: FETCH_FACE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_FACE_LIST_FAILURE, payload: error.message });
    }
};

// Mendapatkan detail gambar wajah berdasarkan ID
export const fetchFaceById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_FACE_REQUEST });
    try {
        const data = await faceService.getFaceById(id);
        dispatch({ type: FETCH_FACE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_FACE_FAILURE, payload: error.message });
    }
};

// Menghapus gambar wajah berdasarkan ID
export const deleteFaceById = (id) => async (dispatch) => {
    dispatch({ type: DELETE_FACE_REQUEST });
    try {
        const data = await faceService.deleteFaceById(id);
        dispatch({ type: DELETE_FACE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_FACE_FAILURE, payload: error.message });
    }
};

