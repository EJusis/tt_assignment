import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ReceiptContextProvider } from "./context/ReceiptContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ReceiptContextProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ReceiptContextProvider>

);

