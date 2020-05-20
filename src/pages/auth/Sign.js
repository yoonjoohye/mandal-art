import React, {Component} from 'react';
import * as firebase from "firebase/app";
import * as api from "../../api/api";
import {connect} from 'react-redux';
import {loginAsync,logoutAsync} from '../../modules/auth';

class Sign extends Component {
    constructor(props) {
        super(props);
    }


    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     localStorage.setItem('logInfo', JSON.stringify(nextState.user));
    // }

    // googleLogin = (e) => {
    //     const {login} = this.props;
    //
    //     e.preventDefault();
    //     actions.login();
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //         let provider = new firebase.auth.GoogleAuthProvider();
    //
    //         return firebase.auth().signInWithPopup(provider).then((authData) => {
    //             actions.loginSuccess(authData);
    //         })
    //     }).catch((error) => {
    //         actions.loginFailure(error);
    //         throw error;
    //     })
    //
    // }
    // facebookLogin = (e) => {
    //     const {login} = this.props;
    //     e.preventDefault();
    //
    //     actions.login();
    //
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //         let provider = new firebase.auth.FacebookAuthProvider();
    //         return firebase.auth().signInWithPopup(provider).then((authData) => {
    //             actions.loginSuccess(authData);
    //         }).then(() => {
    //             window.location.href = '/';
    //         })
    //     }).catch((error) => {
    //         actions.loginFailure(error);
    //         throw error;
    //     })
    // }
    //
    // logout = (e) => {
    //     const {logout} = this.props;
    //
    //     e.preventDefault();
    //     logout.actions.logout();
    //     firebase.auth().signOut().then(() => {
    //         actions.logoutSuccess(null);
    //     }).catch((error) => {
    //         throw error;
    //         actions.logoutFailure(error);
    //     });
    //
    // }

    render() {
        const { user,loginAsync, logoutAsync} = this.props;
        return (
            <section className="mandal-section">
                {
                    user ?
                        <button onClick={()=>logoutAsync()}>로그아웃</button> :
                        <>
                            <button onClick={()=>loginAsync('google')}>구글로그인</button>
                            <button onClick={()=>loginAsync('facebook')}>페이스북로그인</button>
                        </>

                }
            </section>
        );
    }

}


export default connect(
    (state) => ({
        user: state.auth.user
    }),
    {
        loginAsync,
        logoutAsync
    }
)(Sign);
