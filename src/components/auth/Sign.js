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
            user: localStorage.getItem('logInfo')
        };
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('logInfo', JSON.stringify(nextState.user));
    }

    onLogin = (e) => {
        // const {dispatchLogin}=this.props;

        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider)
                    .then((authData) => {
                        this.setState({
                            user:authData
                        });
                        // dispatchLogin();

                        // this.props.history.push('/');
                    });
            })
            .catch((error) => {
                console.log(error);
            });

    }

    onLogout = (e) => {
        // const {dispatchLogout}=this.props;
        e.preventDefault();

        firebase.auth().signOut().then(() => {
            this.setState({
                user:null
            });
            // dispatchLogout();

            // this.props.history.push('/');

        }).catch(function (error) {
            console.log(error);
        });

    }

    render() {
        // const { user } = this.props;
        return (
            <section className="login-section">
                {
                    this.state.user ?
                    (<button onClick={this.onLogout}>로그아웃</button>) :
                    (<button onClick={this.onLogin}>로그인</button>)

                }
            </section>
        );
    }

}


export default Sign;
// export default connect(
//     state => ({ user: state.user }),
//     dispatch=>({
//         dispatchLogin:()=>{dispatch(actions.login)},
//         dispatchLogout:()=>{dispatch(actions.logout)}
//     })
// )(Sign);
