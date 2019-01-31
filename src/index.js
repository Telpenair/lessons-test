import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import './stylesheets/index.css';
import configureStore from './store/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }><App /></Provider>,
    document.getElementById('app')
);

module.hot.accept();
