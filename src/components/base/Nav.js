import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as firebase from "firebase";
import {connect} from 'react-redux';
import {logoutAsync} from '../../stores/auth';
import Loading from "../Loading";

class Nav extends Component {

    // onLogout = (e) => {
    //     e.preventDefault();
    //     firebase.auth().signOut().then(() => {
    //         localStorage.removeItem('token');
    //     }).catch((error)=> {
    //         console.log(error);
    //     }).then(()=>{
    //         window.location.reload();
    //     });
    // }

    onIssue=()=>{
        if(window.screen.width>1024) {
            window.open('https://github.com/yoonjoohye/mandal-art/issues/new');
        }else{
            window.location.href='https://github.com/yoonjoohye/mandal-art/issues/new';
        }
    }
    render() {
        let {user, loading, logoutAsync} = this.props;
        return (
            <>
                <Loading show={loading}/>
                <div className="nav">
                    <div className="flex flex-col items-center justify-center nav-container border-bottom">
                        <img alt="만다라트-유저이미지" className="nav-profile-img mb-20" src={user.photoURL}/>
                        <div className="mb-5 font-medium">{user.displayName}</div>
                        <div className="font-sm">{user.email}</div>
                    </div>
                    {/*<div className="nav-container border-bottom">*/}
                    {/*    <Link className="flex items-center justify-between cursor-pointer"*/}
                    {/*         to={'/write'}>*/}
                    {/*        <div className="w-100 font-sm">만다라트 만들기</div>*/}
                    {/*        <div className="font-gray"> ></div>*/}
                    {/*    </Link>*/}
                    {/*</div>*/}
                    <div className="nav-container border-bottom">
                        <Link className="flex items-center justify-between cursor-pointer"
                             to={'/mypage'}>
                            <div className="w-100 font-sm">마이페이지</div>
                            <div className="font-gray"> ></div>
                        </Link>
                    </div>
                    <div className="nav-container border-bottom">
                        <div className="flex items-center justify-between cursor-pointer" onClick={this.onIssue}>
                            <div className="w-100 font-sm">문의사항</div>
                            <div className="font-gray"> ></div>
                        </div>
                    </div>
                    <div className="nav-container">
                        <span className="font-sm nav-logout cursor-pointer" onClick={() => logoutAsync()}>로그아웃</span>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(
    (state) => ({
        user: state.auth.user,
        loading: state.auth.loading.logout
    }),
    {logoutAsync}
)(Nav);