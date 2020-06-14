import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Index from '../pages/index/Index';
import Login from '../pages/auth/Login';
import Header from '../components/base/Header';
import Guide from '../pages/guide/Guide';
import NotFound from '../pages/NotFound';
import Write from "../pages/write/Write";
import Mypage from "../pages/mypage/Mypage";
import ServiceUseRule from "../pages/auth/ServiceUseRule";
import PrivacyRule from "../pages/auth/PrivacyRule";
import AuthRoute from "./AuthRoute";

const Root = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Index}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/guide" component={Guide}/>

                <Route exact path="/service-rule" component={ServiceUseRule}/>
                <Route exact path="/privacy-rule" component={PrivacyRule}/>
                <Route exact path="/write" component={Write}/>
                <AuthRoute exact path="/mypage" component={Mypage}/>
                <AuthRoute exact path="/detail/:id" component={Write}/>
                <Route path="" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );

}

export default Root;