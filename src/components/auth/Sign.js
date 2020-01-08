import React, {Component} from 'react';
import firebaseInfo from '../../firebase';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Sign extends Component {
    constructor(props) {
        super(props);
    }

    onLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider).then(function (authData) {
            console.log(authData);

        }).catch(function (error) {
            console.log(error);
        });
    }

    onLogout = () => {
        firebase.auth().signOut().then(function () {
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <section>
                만다라트
                <div></div>

                <button onClick={this.onLogin}>구글 로그인</button>
                <button onClick={this.onLogout}>구글 로그아웃</button>

            </section>
        );
    }
}

export default Sign;