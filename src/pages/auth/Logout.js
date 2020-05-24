import React, {Component} from 'react';
import {connect} from 'react-redux';
import {logoutAsync} from "../../modules/auth";

import Loading from '../../components/Loading';
import ReactHelmet from "../../components/ReactHelmet";


class Logout extends Component {
    constructor(props) {
        super(props);
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
        let {logoutAsync}=this.props;
        return (
            <>
                <section className="mandal-section">
                    <button onClick={()=>logoutAsync()}>로그아웃</button>
                </section>
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

