import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import firebaseInfo from './firebase';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import Sign from './components/auth/Sign';
import Header from './components/layout/Header';
import MandalArtTemplate from "./components/MandalArt/MandalArtTemplate";
import MandalArtList from "./components/MandalArt/MandalArtList";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Sign/>
                <Header/>
                <div>
                    <Route exact path="/" component={MandalArtTemplate}/>
                    <Route path="/list" component={MandalArtList}/>
                    {/*<Route path="/logout" component={}/>*/}

                </div>
            </BrowserRouter>
        );
    };
}

export default App;
