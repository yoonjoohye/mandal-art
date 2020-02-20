import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';

import Login from './pages/auth/Login.js';
import Logout from './pages/auth/Logout.js';

import Header from './components/header/Header';

import Guide from './pages/guide/Guide';

import Write from "./pages/mandal/write/Index";
import Detail from "./pages/mandal/detail/Index";
import List from "./pages/mandal/list/Index";

// Redux 관련 불러오기
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './redux/actions';

// 스토어 생성
const store = createStore(reducers);

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
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Header/>

                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/logout" component={Logout}/>

                    <Route exact path="/" component={Home}/>
                    <Route path="/write" component={Write}/>

                    <Route path="/guide" component={Guide}/>


                    <Switch>
                        <Route path="/detail/:id" component={Detail}/>
                    </Switch>
                    <Route path="/list" component={List}></Route>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
