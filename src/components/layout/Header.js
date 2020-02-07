import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import '../../css/header.scss';

import * as firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('logInfo')
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextState.user) {
            localStorage.setItem('logInfo', JSON.stringify(nextState.user));
        } else {
            localStorage.removeItem('logInfo');
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {

                var provider = new firebase.auth.GoogleAuthProvider();
                return firebase.auth().signInWithPopup(provider)
                    .then((authData) => {
                        this.setState({
                            user: authData
                        });
                    });
            })
            .catch((error) => {
                console.log(error);
            });
    }


    onLogout = (e) => {
        e.preventDefault();

        firebase.auth().signOut().then(() => {
            this.setState({
                user: null
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    render() {
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));
        console.log(userInfo);

        return (
            <section className="header-section">
                <div className="header-container flex justify-center justify-between items-center">
                    <Link to="/"><img className="header-icon" src={require("../../images/icon/puzzle.svg")}/>Mandal-ART</Link>
                    <div>
                        {/*<span className="header-list"><Link className="mr-10" to="/write">만다라트 만들기</Link></span>*/}
                        {
                            userInfo ?
                                <>
                                    <Link className="mr-10" to="/list">
                                        <img className="profile-img mr-10" src={userInfo.user.photoURL}/>
                                    </Link>
                                    <span className="cursor-pointer mr-10" onClick={this.onLogout}>로그아웃</span>

                                </>
                                : <span className="cursor-pointer" onClick={this.onLogin}>로그인</span>
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export default Header;