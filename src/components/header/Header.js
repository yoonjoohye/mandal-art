import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";

import Nav from './Nav.js';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('logInfo'),
            isNav: true,
        }
    }

    componentWillUpdate(nextProps, nextState, nextContext) {
        if (nextState.user) {
            localStorage.setItem('logInfo', nextState.user);
        } else {
            localStorage.removeItem('logInfo');
        }
    }

    onLogin = (e) => {
        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            var provider = new firebase.auth.GoogleAuthProvider();
            return firebase.auth().signInWithPopup(provider).then((authData) => {
                this.setState({
                    user: JSON.stringify(authData)
                });
            });
        }).catch((error) => {
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
        window.location.href = '/';
    }

    onNav = () => {
        this.setState((prevState) => {
            return {
                isNav: !prevState.isNav
            }
        });
    }


    render() {
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));
        console.log(userInfo);
        // let nav='';
        //
        // if (this.state.isNav) {
        //     nav = <Nav userInfo={userInfo.user}></Nav>;
        // }

        return (
            <section className={`header-section header-bg`}>
                <div className="header-container flex justify-center justify-between items-center">
                    <Link className="flex justify-center items-center" to="/">
                        <img className="header-icon mr-10" src={require("../../images/icon/puzzle.svg")}/>
                        <div className="header-name"><span className="blue">M</span>andal-<span
                            className="yellow">A</span>RT
                        </div>
                    </Link>
                    <div>
                        {
                            userInfo ?
                                <>
                                    <img className="cursor-pointer profile-img" src={userInfo.user.photoURL} onClick={this.onNav}/>
                                    {/*<span className="font-white cursor-pointer" onClick={this.onLogout}>로그아웃</span>*/}

                                    {
                                        this.state.isNav ?

                                        <Nav userInfo={userInfo.user}></Nav>
                                        : <></>
                                    }
                                </>
                                : <span className="font-white cursor-pointer" onClick={this.onLogin}>로그인</span>
                        }

                    </div>
                </div>
            </section>
        )
    }
}

export default Header;