import React from 'react';
import {connect} from 'react-redux';
import {logoutAsync} from "../../stores/auth";


const Logout = (props) => {
    let {logoutAsync} = props;
    return (
        <section className="mandal-section">
            <button onClick={() => logoutAsync()}>로그아웃</button>
        </section>
    )

}


export default connect(
    (state) => ({
        user: state.auth.user,
        loading: state.auth.loading.logout
    }), {
        logoutAsync
    }
)(Logout);

