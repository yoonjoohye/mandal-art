import React, {Component} from 'react';
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import firebaseApp from "../../firebaseApp";

import {connect} from 'react-redux';
import {Auth} from '../../redux/action';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: null,
            displayName: null
        }
    }
    componentDidMount(){
        console.log(firebase.auth().currentUser);
    }

    onLogin = (e) => {
        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider)
                    .then((authData) => {
                        console.log(authData);
                    });
            })
            .catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
            });

    }

    onLogout = (e) => {
        e.preventDefault();
        firebase.auth().signOut().then(() => {

        }).catch(function (error) {
            // An error happened.
        });
    }

    render() {
        const {token, displayName} = this.props;

        return (
            <section className="login-section">
                <div>{firebase.auth().currentUser?firebase.auth().currentUser.displayName:'null'}님 환영합니다!</div>

                <button onClick={this.onLogin}>구글 로그인</button>
                <button onClick={this.onLogout}>구글 로그아웃</button>

            </section>
        );
    }
}

export default connect(state => ({token: state.token, displayName: state.displayName}))(Sign);
