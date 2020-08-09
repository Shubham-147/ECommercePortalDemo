import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import Reducers from './components/redux/reducers'
import App from './components/Container/app';
import './style.css';

const store = createStore(Reducers)
console.log(store.getState())
ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))