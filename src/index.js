require('file-loader?name=[name].[ext]!./index.html');
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import './cssReset.scss';
import './App.scss';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
//import allReducers from './reducers';


//const store = createStore(allReducers,
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());



const appElement = document.getElementById('root');

ReactDOM.render(
    // <Provider store={store}>
    <App />
    // </Provider>
    , appElement);