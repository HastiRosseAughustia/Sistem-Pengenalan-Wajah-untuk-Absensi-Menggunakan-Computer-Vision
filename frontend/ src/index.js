import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'; // Impor store Redux
import App from './App'; // Impor komponen utama aplikasi
import './styles/main.css'; // Impor file CSS utama

ReactDOM.render(
    <Provider store={store}> {/* Membungkus aplikasi dengan Provider */}
        <App /> {/* Render aplikasi utama */}
    </Provider>,
    document.getElementById('root') // Elemen DOM tempat aplikasi akan dirender
);

