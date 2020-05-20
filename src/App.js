import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// firebase
import './firebaseApp';

import Home from './pages/home/Home';
import Login from './pages/auth/Login.js';
import Sign from './pages/auth/Sign.js';
import Logout from './pages/auth/Logout.js';
import Header from './components/header/Header';
import Write from "./pages/mandal/write/Index";
import Detail from "./pages/mandal/detail/Index";
import Mypage from "./pages/mandal/mypage/Index";
import NotFound from './pages/NotFound';

import ServiceUseRule from "./pages/auth/ServiceUseRule";
import PrivacyRule from "./pages/auth/PrivacyRule";


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/sign" component={Sign}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>
                    <Route exact path="/service-rule" component={ServiceUseRule}/>
                    <Route exact path="/privacy-rule" component={PrivacyRule}/>

                    <Route path="/write" component={Write}/>
                    <Route path="/mypage" component={Mypage}/>
                    <Route path="/detail/:id" component={Write}/>
                    <Route path="" component={NotFound}/>
                </Switch>

            </BrowserRouter>
        );
    };
}

export default App;
