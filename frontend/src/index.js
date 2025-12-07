import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // Because we are using strictMode the useEffects is called twice...
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

