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

const initialState = {
    loading: false,
    faceList: [],
    face: null,
    error: null
};

const faceReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPLOAD_FACE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case UPLOAD_FACE_SUCCESS:
            return {
                ...state,
                loading: false,
                faceList: [...state.faceList, action.payload]
            };
        case UPLOAD_FACE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_FACE_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_FACE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                faceList: action.payload
            };
        case FETCH_FACE_LIST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_FACE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_FACE_SUCCESS:
            return {
                ...state,
                loading: false,
                face: action.payload
            };
        case FETCH_FACE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DELETE_FACE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_FACE_SUCCESS:
            return {
                ...state,
                loading: false,
                faceList: state.faceList.filter(face => face.id !== action.payload.id)
            };
        case DELETE_FACE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default faceReducer;

