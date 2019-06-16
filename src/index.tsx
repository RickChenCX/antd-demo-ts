import React from 'react';
import ReactDOM from 'react-dom';
import './asset/less/index.less';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import RouterComponent from "./router/router"
import StoreConfig  from './reduxs/index';
import {Store} from "redux"
import { Provider } from 'react-redux'
console.log(process.env)

const store = StoreConfig as Store

ReactDOM.render(
    <Provider store={store}>
        <RouterComponent  />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
