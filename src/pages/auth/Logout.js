import React from 'react';
import {connect} from 'react-redux';
import {logoutAsync} from "../../stores/auth";
import {Section} from "../../assets/css/Section.style";


const Logout = (props) => {
    let {logoutAsync} = props;
    return (
        <Section>
            <button onClick={() => logoutAsync()}>로그아웃</button>
        </Section>
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

