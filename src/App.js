import React, {Component} from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom';

import Sign from './components/auth/Sign';
import Header from './components/layout/Header';

import MandalArtTable from "./components/MandalArt/MandalArtTable";
import MandalArtList from "./components/MandalArt/MandalArtList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div>
                    <Switch>
                        <Route exact path="/mandal" component={MandalArtTable}/>
                        <Route exact path="/mandal/:id" component={MandalArtTable}/>
                    </Switch>
                    <Route path="/list" component={MandalArtList}></Route>
                </div>
                <Sign/>

            </BrowserRouter>
        );
    };
}

export default App;
