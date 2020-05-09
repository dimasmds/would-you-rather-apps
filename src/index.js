import React from 'react';
import ReactDOM from 'react-dom';
import './styling/main.css';
import './styling/responsive.css';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './redux/reducers';
import middlewares from './redux/middlewares';

const store = createStore(reducer, middlewares);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

