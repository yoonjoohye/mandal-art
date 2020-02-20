import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";

class Nav extends Component {

    onLogout = (e) => {
        e.preventDefault();

        firebase.auth().signOut().then(() => {
            localStorage.removeItem('logInfo');
        }).catch(function (error) {
            console.log(error);
        });
        setTimeout(()=>{window.location.href = '/';},1000);
    }

    render() {
        return (
            <div className="nav">
                <div className="nav-container border-bottom">
                    <img className="nav-profile-img mb-20" src={this.props.userInfo.photoURL}/>
                    <div className="mb-5 font-medium">{this.props.userInfo.displayName}</div>
                    <div className="font-sm">{this.props.userInfo.email}</div>
                </div>
                <div className="nav-container border-bottom">
                    <Link to="/list">
                        <span className="font-sm">마이페이지 <span className="ml-10"> > </span></span>
                    </Link>
                </div>
                <div className="nav-container">
                    <span className="font-sm nav-logout cursor-pointer" onClick={this.onLogout}>로그아웃</span>
                </div>
            </div>
        )
    }
}

export default Nav;