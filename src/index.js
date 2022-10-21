import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import TestProvider from './Context/TestProvider';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <TestProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </TestProvider>
  </BrowserRouter>
);


