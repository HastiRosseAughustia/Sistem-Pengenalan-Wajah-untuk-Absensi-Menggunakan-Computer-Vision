import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    CREATE_USER_REQUEST,
    CREATE_USER_SUCCESS,
    CREATE_USER_FAILURE,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from '../constants/userConstants';
import * as userService from '../services/userService';

// Mendapatkan semua pengguna
export const fetchUsers = () => async (dispatch) => {
    dispatch({ type: FETCH_USERS_REQUEST });
    try {
        const data = await userService.getAllUsers();
        dispatch({ type: FETCH_USERS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_USERS_FAILURE, payload: error.message });
    }
};

// Mendapatkan detail pengguna berdasarkan ID
export const fetchUserById = (id) => async (dispatch) => {
    dispatch({ type: FETCH_USER_REQUEST });
    try {
        const data = await userService.getUserById(id);
        dispatch({ type: FETCH_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_USER_FAILURE, payload: error.message });
    }
};

// Menambahkan pengguna baru
export const createUser = (userData) => async (dispatch) => {
    dispatch({ type: CREATE_USER_REQUEST });
    try {
        const data = await userService.createUser(userData);
        dispatch({ type: CREATE_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_USER_FAILURE, payload: error.message });
    }
};

// Memperbarui pengguna yang ada
export const updateUser = (id, userData) => async (dispatch) => {
    dispatch({ type: UPDATE_USER_REQUEST });
    try {
        const data = await userService.updateUser(id, userData);
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_USER_FAILURE, payload: error.message });
    }
};

// Menghapus pengguna berdasarkan ID
export const deleteUser = (id) => async (dispatch) => {
    dispatch({ type: DELETE_USER_REQUEST });
    try {
        const data = await userService.deleteUser(id);
        dispatch({ type: DELETE_USER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_USER_FAILURE, payload: error.message });
    }
};

