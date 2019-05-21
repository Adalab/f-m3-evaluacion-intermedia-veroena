import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import './stylesheets/modal.css';
import './stylesheets/detail.css';
import './stylesheets/header.css';
import './stylesheets/main.css';
import './stylesheets/footer.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
