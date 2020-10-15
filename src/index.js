import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import GlobalStyles from './global_styles';

ReactDOM.render(
    <>
        <GlobalStyles />
        <App />
    </>, 
    document.getElementById('root'));