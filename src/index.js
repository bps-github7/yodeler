import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import Counter from './components/counter';
import bootstrap_nav from './components/bootstrap_nav';
import App from './app.js'

const element = <App/>
ReactDOM.render(element, document.getElementById('root'));