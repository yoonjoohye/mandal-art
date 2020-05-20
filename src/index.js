import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import App from './App';
import './css/_Style.scss';

// Redux 관련 불러오기
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';

//redux devtool
import {composeWithDevTools} from "redux-devtools-extension";

//redux thunk
import {createLogger} from 'redux-logger';
import ReduxThunk from 'redux-thunk';
// reducer
import rootReducer from './modules';
// 스토어 생성
const logger=createLogger();
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,ReduxThunk)));




// const render = () => {
    ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));
// }
// store.subscribe(render);
// render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
