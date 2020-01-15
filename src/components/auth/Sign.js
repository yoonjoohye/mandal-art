import React, {Component} from 'react';
import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

import {connect} from 'react-redux';
import * as actions from '../../redux/actions/index';

class Sign extends Component {
    constructor(props) {
        super(props);
        this.state= {
            user: null
        };
    }

    onLogin = (e) => {
        const {dispatchLogin}=this.props;

        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider)
                    .then((authData) => {
                        dispatchLogin();
                    });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    onLogout = (e) => {
        const {dispatchLogout}=this.props;
        e.preventDefault();
        firebase.auth().signOut().then(() => {
            dispatchLogout();
        }).catch(function (error) {
            console.log(error);
        });

    }

    render() {
        const { user } = this.props;
        return (
            <section className="login-section">
                <div>{user ? user.displayName+'님 환영합니다.':'로그인 필요!'}</div>
                <button onClick={this.onLogin}>구글 로그인</button>
                <button onClick={this.onLogout}>구글 로그아웃</button>

            </section>
        );
    }

}


export default connect(
    state => ({ user: firebase.auth().currentUser }),
    dispatch=>({
        dispatchLogin:()=>{dispatch(actions.login)},
        dispatchLogout:()=>{dispatch(actions.logout)}
    })
)(Sign);
