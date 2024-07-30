import {
    FETCH_ATTENDANCE_REQUEST,
    FETCH_ATTENDANCE_SUCCESS,
    FETCH_ATTENDANCE_FAILURE,
    ADD_ATTENDANCE_REQUEST,
    ADD_ATTENDANCE_SUCCESS,
    ADD_ATTENDANCE_FAILURE,
    UPDATE_ATTENDANCE_REQUEST,
    UPDATE_ATTENDANCE_SUCCESS,
    UPDATE_ATTENDANCE_FAILURE,
    DELETE_ATTENDANCE_REQUEST,
    DELETE_ATTENDANCE_SUCCESS,
    DELETE_ATTENDANCE_FAILURE
} from '../constants/attendanceConstants';
import * as attendanceService from '../services/attendanceService';

// Mendapatkan semua catatan kehadiran
export const fetchAttendance = () => async (dispatch) => {
    dispatch({ type: FETCH_ATTENDANCE_REQUEST });
    try {
        const data = await attendanceService.getAllAttendanceRecords();
        dispatch({ type: FETCH_ATTENDANCE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_ATTENDANCE_FAILURE, payload: error.message });
    }
};

// Menambahkan catatan kehadiran baru
export const addAttendance = (record) => async (dispatch) => {
    dispatch({ type: ADD_ATTENDANCE_REQUEST });
    try {
        const data = await attendanceService.createAttendanceRecord(record);
        dispatch({ type: ADD_ATTENDANCE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ADD_ATTENDANCE_FAILURE, payload: error.message });
    }
};

// Memperbarui catatan kehadiran yang ada
export const updateAttendance = (id, record) => async (dispatch) => {
    dispatch({ type: UPDATE_ATTENDANCE_REQUEST });
    try {
        const data = await attendanceService.updateAttendanceRecord(id, record);
        dispatch({ type: UPDATE_ATTENDANCE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_ATTENDANCE_FAILURE, payload: error.message });
    }
};

// Menghapus catatan kehadiran berdasarkan ID
export const deleteAttendance = (id) => async (dispatch) => {
    dispatch({ type: DELETE_ATTENDANCE_REQUEST });
    try {
        const data = await attendanceService.deleteAttendanceRecord(id);
        dispatch({ type: DELETE_ATTENDANCE_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: DELETE_ATTENDANCE_FAILURE, payload: error.message });
    }
};

