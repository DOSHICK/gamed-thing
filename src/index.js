import React,{} from 'react';
import ReactDOM from 'react-dom/client';

import './styles/style.css';

import {personsArray, monstersArray} from './state/state';


import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App personsArray={personsArray} monstersArray={monstersArray}/>
  </React.StrictMode>
);
