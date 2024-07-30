import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import attendanceReducer from './reducers/attendanceReducer';
import faceReducer from './reducers/faceReducer';
import userReducer from './reducers/userReducer';

// Menggabungkan semua reducer
const rootReducer = combineReducers({
    attendance: attendanceReducer,
    face: faceReducer,
    user: userReducer
});

// Konfigurasi middleware
const middleware = [thunk];

// Membuat store Redux
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

