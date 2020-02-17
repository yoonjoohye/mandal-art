import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/home/Home';

import Sign from './components/auth/Sign';
import Header from './components/header/Header';

import Guide from './components/mandal/Guide';

import Write from "./components/mandal/write/Index";
import Detail from "./components/mandal/detail/Index";
import List from "./components/mandal/list/Index";

// Redux 관련 불러오기
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './redux/actions';

// 스토어 생성
const store = createStore(reducers);
const basename = "/mandal-art";

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
