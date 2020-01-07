import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import MandalArtTemplate from "./components/MandalArt/MandalArtTemplate";
import MandalArtList from "./components/MandalArt/MandalArtList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Header/>
                <div>
                    <Route exact path="/write" component={MandalArtTemplate}/>
                    <Route path="/list" component={MandalArtList}/>
                </div>
            </BrowserRouter>
        );
    };
}

export default App;
