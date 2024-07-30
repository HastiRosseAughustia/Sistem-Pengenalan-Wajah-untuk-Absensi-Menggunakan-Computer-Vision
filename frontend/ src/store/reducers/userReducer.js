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

const initialState = {
    loading: false,
    users: [],
    user: null,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            };
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case FETCH_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CREATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: [...state.users, action.payload]
            };
        case CREATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.map(user =>
                    user.id === action.payload.id ? action.payload : user
                ),
                user: action.payload
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case DELETE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.filter(user => user.id !== action.payload.id)
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default userReducer;

