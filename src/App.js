import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// firebase
import './firebaseApp';

import Home from './pages/home/Home';
import Login from './pages/auth/Login.js';
// import Logout from './pages/auth/Logout.js';
import Header from './components/header/Header';
import NotFound from './pages/NotFound';
import Write from "./pages/mandal/write/Write";
import Mypage from "./pages/mandal/mypage/Mypage";
import ServiceUseRule from "./pages/auth/ServiceUseRule";
import PrivacyRule from "./pages/auth/PrivacyRule";
import AuthRoute from "./components/AuthRoute";

// redux 관련 불러오기
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
// redux devtool
import {composeWithDevTools} from "redux-devtools-extension";
// redux thunk
import ReduxThunk from 'redux-thunk';
// reducer
import rootReducer from './modules';
// 스토어 생성
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        {/*<Route exact path="/logout" component={Logout}/>*/}
                        <Route exact path="/service-rule" component={ServiceUseRule}/>
                        <Route exact path="/privacy-rule" component={PrivacyRule}/>
                        <Route exact path="/write" component={Write}/>

                        <AuthRoute exact path="/mypage" component={Mypage}/>
                        <AuthRoute exact path="/detail/:id" component={Write}/>

                        {/*<Route path="/write" component={Write}/>*/}
                        {/*<Route path="/mypage" component={Mypage}/>*/}
                        {/*<Route path="/detail/:id" component={Write}/>*/}

                        <Route path="" component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
