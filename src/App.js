import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';

import Login from './pages/auth/Login.js';
import Logout from './pages/auth/Logout.js';
import Header from './components/header/Header';
import Write from "./pages/mandal/write/Index";
import Detail from "./pages/mandal/detail/Index";
import Mypage from "./pages/mandal/mypage/Index";
import NotFound from './pages/NotFound';

import ServiceUseRule from "./pages/auth/ServiceUseRule";
import PrivacyRule from "./pages/auth/PrivacyRule";

// Redux 관련 불러오기
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// reducer
import reducers from './redux/reducers/index';

// 스토어 생성
const store = createStore(reducers);

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Header/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/logout" component={Logout}/>
                        <Route exact path="/service-rule" component={ServiceUseRule}/>
                        <Route exact path="/privacy-rule" component={PrivacyRule}/>

                        <Route path="/write" component={Write}/>
                        <Route path="/mypage" component={Mypage}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="" component={NotFound}/>
                    </Switch>

                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
