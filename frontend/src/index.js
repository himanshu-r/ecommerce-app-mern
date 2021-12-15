import React from 'react';
import ReactDOM from 'react-dom';
import './bootstrap.min.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
    <BrowserRouter>
  <React.Fragment>
  <App />

  </React.Fragment>
    </BrowserRouter>,
  document.getElementById('root')
);


