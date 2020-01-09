import React, {Component} from 'react';
import firebaseInfo  from '../../firebase';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            user: ''
        }
    }

    onLogin = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        provider.addScope('https://www.googleapis.com/auth/plus.login');

        firebase.auth().signInWithPopup(provider).then((authData) => {
            console.log(authData);
            this.setState({
                token: authData.credential.accessToken,
                user:authData.user.displayName
            });

        }).catch(function (error) {
            console.log(error);
        });
    }

    onLogout = () => {
        firebase.auth().signOut().then(() => {
        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        return (
            <section>
                만다라트
                <div>{this.state.user}님 환영합니다!</div>

                <button onClick={this.onLogin}>구글 로그인</button>
                <button onClick={this.onLogout}>구글 로그아웃</button>

            </section>
        );
    }
}

export default Sign;