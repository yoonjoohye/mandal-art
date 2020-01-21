import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './css/App.css';
import './css/MandalArtTemplate.css';

import firebaseApp from "./firebaseApp";

// Redux 관련 불러오기
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/actions';

// 스토어 생성
const store = createStore(reducers);

console.log(store);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
