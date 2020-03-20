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
        }).then(()=>{
            window.location.reload();
        });
    }

    render() {
        return (
            <div className="nav">
                <div className="flex flex-col items-center justify-center nav-container border-bottom">
                    <img alt="만다라트-유저이미지" className="nav-profile-img mb-20" src={this.props.userInfo.photoURL}/>
                    <div className="mb-5 font-medium">{this.props.userInfo.displayName}</div>
                    <div className="font-sm">{this.props.userInfo.email}</div>
                </div>
                <div className="nav-container border-bottom">
                    <Link className="flex items-center justify-between" to="/write">
                        <div className="w-100 font-sm">만다라트 만들기</div>
                        <div className="font-gray"> > </div>
                    </Link>
                </div>
                <div className="nav-container border-bottom">
                    <Link className="flex items-center justify-between" to="/mypage">
                        <div className="w-100 font-sm">마이페이지 </div>
                        <div className="font-gray"> > </div>
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