import React from 'react';
import {Link} from 'react-router-dom';
import Loading from "../Loading";
import {NavSection} from "../../assets/css/Section.style";
import styled from "styled-components";

const NavContainer = styled.div`
    text-align:center;
    padding:1rem;
    border-top:${props=>props.border}px solid #eeeeee;
`;

const Nav = ({user, loading, onLogout}) => {

    const onIssue = () => {
        if (window.screen.width > 1024) {
            window.open('https://github.com/yoonjoohye/mandal-art/issues/new');
        } else {
            window.location.href = 'https://github.com/yoonjoohye/mandal-art/issues/new';
        }
    }

    return (
        <>
            <Loading show={loading}/>
            <NavSection>
                <NavContainer border={0}>
                    <img alt="만다라트-유저이미지" className="profile-img mb-20" src={user.photoURL}/>
                    <div className="mb-5 font-medium">{user.displayName}</div>
                    <div className="font-sm">{user.email}</div>
                </NavContainer>

                <NavContainer border={1}>
                    <Link className="flex items-center justify-between cursor-pointer"
                          to={'/mypage'}>
                        <div className="w-100 font-sm">마이페이지</div>
                        <div className="font-gray"> ></div>
                    </Link>
                </NavContainer>
                <NavContainer border={1}>
                    <div className="flex items-center justify-between cursor-pointer" onClick={onIssue}>
                        <div className="w-100 font-sm">문의사항</div>
                        <div className="font-gray"> ></div>
                    </div>
                </NavContainer>
                <NavContainer border={1}>
                    <span className="font-sm nav-logout cursor-pointer" onClick={onLogout}>로그아웃</span>
                </NavContainer>
            </NavSection>
        </>
    )
}

export default Nav;