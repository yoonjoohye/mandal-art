import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";

import Nav from './Nav';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('logInfo'),
            isNav: false,
            scroll: 0,
            bgColor:''
        }
    }

    componentDidMount() {
        // 스크롤 이벤트 적용
        window.addEventListener('scroll', this.onScroll);
    }
    
    onScroll = (e) => {
        // 스크롤 할때마다 state에 scroll한 만큼 scrollTop 값 증가하므로 이를 업데이트해줌,
        //따라서 스크롤 시점에 따라 특정액션을 추후에 state를 활용하여 구현 가능
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);

        this.setState({
            ...this.state,
            scroll:scrollTop
        });
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
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            var provider = new firebase.auth.GoogleAuthProvider();
            return firebase.auth().signInWithPopup(provider).then((authData) => {
                this.setState({
                    user: authData
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
        let nav;

        if (this.state.isNav) {
            nav = <Nav userInfo={userInfo.user}></Nav>;
        }

        return (
            <section className={`header-section ${(this.state.scroll>900)?'bg-blue':''}`}>
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
                                    <img className="cursor-pointer profile-img" src={userInfo.user.photoURL}/>
                                    <span className="cursor-pointer" onClick={this.onLogout}>로그아웃</span>

                                    {/*<Nav userInfo={userInfo.user}/>*/}
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