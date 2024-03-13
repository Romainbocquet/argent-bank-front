import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/styles/index.css';
import Root from '../src/Routes/Root';
// App.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Ajoutez les icônes que vous souhaitez utiliser à la bibliothèque
library.add(fas);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

