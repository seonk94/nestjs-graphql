import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyle } from './assets/style/globalStyles';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './router';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Root />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
