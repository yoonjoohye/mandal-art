import React, {Component} from 'react';
import Root from "./routes/Root";
// firebase
import './firebaseApp';
// redux 관련 불러오기
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// redux devtool
import {composeWithDevTools} from "redux-devtools-extension";
// redux thunk
import ReduxThunk from 'redux-thunk';
// reducer
import rootReducer from './stores';
// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

const App = () => {
    return (
        <Provider store={store}>
            <Root/>
        </Provider>
    );
}

export default App;
