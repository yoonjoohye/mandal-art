import React, {Component} from 'react';
import {BrowserRouter, Route, Switch,Redirect} from 'react-router-dom';

import Home from './components/home/Home';

import Sign from './components/auth/Sign';
import Header from './components/layout/Header';

import MandalArtTable from "./components/mandalArt/MandalArtTable";
import MandalArtList from "./components/mandalArt/MandalArtList";

class App extends Component {


    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/mandal" component={MandalArtTable}/>
                    <Route path="/mandal/:id" component={MandalArtTable}/>
                </Switch>
                <Route path="/list" component={MandalArtList}></Route>
                <Route path="/sign" component={Sign}></Route>
            </BrowserRouter>
        );
    };
}

export default App;
