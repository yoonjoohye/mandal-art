import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Nav from './Nav.js';
import {HeaderSection, Container} from "../../assets/css/Section.style";
import styled from "styled-components";
import {logoutAsync} from "../../stores/auth";

const HeaderContainer = styled(Container)`
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Header = ({user,loading,logoutAsync}) => {
    const [isNav, setIsNav] = useState(false);

    const onNav = useCallback(() => {
        setIsNav(!isNav);
    }, [isNav]);

    return (
        <HeaderSection bgColor="#4093fb">
            <HeaderContainer>
                <Link className="flex justify-center items-center" to="/">
                    <img alt="만다라트-로고" className="header-icon mr-10"
                         src={require("../../assets/img/icon/puzzle.svg")}/>
                    <div className="header-name"><span className="blue">M</span>andal-<span
                        className="yellow">A</span>RT
                    </div>
                </Link>
                <div>
                    {
                        user ?
                            <>
                                <img className="cursor-pointer profile-img" alt="만다라트-프로필"
                                     src={user.photoURL} onClick={onNav}/>
                                {
                                    isNav &&
                                        <Nav user={user} loading={loading} onLogout={()=>logoutAsync()}/>
                                }
                            </>
                            : <Link to="/login"><span className="font-white cursor-pointer">로그인/가입</span></Link>
                    }

                </div>
            </HeaderContainer>
        </HeaderSection>
    )
}

export default connect(
    (state) => ({
        user: state.auth.user,
        loading: state.auth.loading.logout
    }),
    {logoutAsync}
)(Header);