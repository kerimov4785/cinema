import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import DataContext from './context/DataContext.jsx';
// import { UserProvider } from './DataContext.jsx'; // если ты используешь context

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataContext>
            <App />
        </DataContext>
    </BrowserRouter>
);
