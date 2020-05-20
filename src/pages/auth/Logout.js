import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutAsync} from "../../modules/auth";

import Loading from '../../components/Loading';
import ReactHelmet from "../../components/ReactHelmet";


class Logout extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.logoutAsync();
    }

    // onLogout = (e) => {
    //     e.preventDefault();
    //
    //     firebase.auth().signOut().then(() => {
    //         localStorage.removeItem('logInfo');
    //
    //     }).catch(function (error) {
    //         console.log(error);
    //     });
    //
    //     window.location.href = '/';
    // }
    render() {
        let {logoutAsync,loading}=this.props;
        return (
            <>
                <ReactHelmet
                    title="로그아웃 - 나만의 만다라트"
                    description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                    keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 인쇄, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
                />
                <Loading show={loading}/>
            </>
        )
    }
}


export default connect(
    (state) => ({
        user: state.auth.user,
        loading: state.auth.loading.logout
    }), {
        logoutAsync
    }
)(Logout);

