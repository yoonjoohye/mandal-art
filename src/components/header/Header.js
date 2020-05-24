import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'firebase/auth';

import Nav from './Nav.js';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNav: false,
        }
    }

    // componentWillUpdate(nextProps, nextState, nextContext) {
    //     if (nextState.user) {
    //         localStorage.setItem('logInfo', nextState.user);
    //     } else {
    //         localStorage.removeItem('logInfo');
    //     }
    // }
    //
    // onLogin = (e) => {
    //     e.preventDefault();
    //     firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
    //         var provider = new firebase.auth.GoogleAuthProvider();
    //         return firebase.auth().signInWithPopup(provider).then((authData) => {
    //             this.setState({
    //                 user: JSON.stringify(authData)
    //             });
    //         });
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // }
    //
    // onLogout = (e) => {
    //     e.preventDefault();
    //
    //     firebase.auth().signOut().then(() => {
    //         this.setState({
    //             user: null
    //         });
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    //     window.location.href = '/';
    // }

    onNav = () => {
        this.setState((prevState) => {
            return {
                isNav: !prevState.isNav
            }
        });
    }


    render() {
        let {isNav} = this.state;
        let {user}=this.props;

        return (
            <section className={`header-section header-bg`}>
                <div className="header-container flex justify-center justify-between items-center">
                    <Link className="flex justify-center items-center" to="/">
                        <img alt="만다라트-로고" className="header-icon mr-10" src={require("../../assets/icon/puzzle.svg")}/>
                        <div className="header-name"><span className="blue">M</span>andal-<span
                            className="yellow">A</span>RT
                        </div>
                    </Link>
                    <div>
                        {
                            user ?
                                <>
                                    <img className="cursor-pointer profile-img" alt="만다라트-프로필"
                                         src={user.photoURL} onClick={this.onNav}/>
                                    {/*<span className="font-white cursor-pointer" onClick={this.onLogout}>로그아웃</span>*/}

                                    {
                                        isNav ?

                                            <Nav/>
                                            : null
                                    }
                                </>
                                : <Link to="/login"><span className="font-white cursor-pointer">로그인/가입</span></Link>
                        }

                    </div>
                </div>
            </section>
        )
    }
}

// export default Header;
export default connect(
    (state) => ({
        user:state.auth.user
    })
)(Header);