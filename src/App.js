import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import firebaseInfo,{firebase} from './firebase';

import Sign from './components/auth/Sign';
import Header from './components/layout/Header';

import MandalArtTable from "./components/MandalArt/MandalArtTable";
import MandalArtList from "./components/MandalArt/MandalArtList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Sign/>
                <Header/>
                <div>
                    <Route exact path="/" component={MandalArtTable}/>
                    <Route path="/list" component={MandalArtList}/>
                </div>
            </BrowserRouter>
        );
    };
}

export default App;
