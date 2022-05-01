import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import KadenaCoin from './components/KadenaCoin';
import News from './components/News';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <News />
  </React.StrictMode>
);

