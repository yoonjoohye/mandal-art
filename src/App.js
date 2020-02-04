import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

import Home from './components/home/Home';

import Sign from './components/auth/Sign';
import Header from './components/layout/Header';

import Write from "./components/mandal/write/Index";
import Detail from "./components/mandal/detail/Index";
import List from "./components/mandal/list/Index";

class App extends Component {

    // initializeUserInfo=async()=>{
    //     if(!localStorage.getItem('logInfo')){
    //         window.location.href='/auth';
    //     }
    // }
    //
    // componentDidMount(){
    //     this.initializeUserInfo();
    // }

    render() {
        return (
            <BrowserRouter>
                <Header/>

                <Route exact path="/" component={Home}/>
                <Route path="/write" component={Write}/>
                <Switch>
                    <Route path="/detail/:id" component={Detail}/>
                </Switch>
                <Route path="/list" component={List}></Route>
            </BrowserRouter>
        );
    };
}

export default App;
