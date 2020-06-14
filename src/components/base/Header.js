import React, {useState, useCallback} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Nav from '../components/base/Nav.js';
import {HeaderSection, Container} from "../assets/css/Section.style";
import styled from "styled-components";

const HeaderContainer = styled(Container)`
    height:60px;
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

const Header = ({user}) => {
    const [isNav, setIsNav] = useState(false);

    const onNav = useCallback(() => {
        setIsNav(!isNav);
    }, [isNav]);

    return (
        <HeaderSection bgColor="#4093fb">
            {/*<section className={`header-section header-bg`}>*/}
            {/*    <div className="header-container flex justify-center justify-between items-center">*/}
            <HeaderContainer>
                <Link className="flex justify-center items-center" to="/">
                    <img alt="만다라트-로고" className="header-icon mr-10"
                         src={require("../assets/img/icon/puzzle.svg")}/>
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
                                    isNav ?
                                        <Nav/>
                                        : null
                                }
                            </>
                            : <Link to="/login"><span className="font-white cursor-pointer">로그인/가입</span></Link>
                    }

                </div>
            </HeaderContainer>
            {/*</div>*/}
            {/*</section>*/}
        </HeaderSection>

    )

}

// export default Header;
export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Header);