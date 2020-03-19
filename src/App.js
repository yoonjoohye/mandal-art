import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/home/Home';

import Login from './pages/auth/Login.js';
import Logout from './pages/auth/Logout.js';
import Header from './components/header/Header';
// import Guide from './pages/guide/Guide';
import Write from "./pages/mandal/write/Index";
import Detail from "./pages/mandal/detail/Index";
import Mypage from "./pages/mandal/mypage/Index";
import NotFound from './pages/NotFound';

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
                    {
                        //(window.location.pathname)
                    }
                    <Header/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/write" component={Write}/>
                        {/*<Route exact path="/guide" component={Guide}/>*/}
                        <Route exact path="/mypage" component={Mypage}/>
                        <Route exact path="/detail/:id" component={Detail}/>

                        <Route path="" component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        );
    };
}

export default App;
