import React from 'react';
import {Link} from 'react-router-dom';
import Loading from "../Loading";
import styled from "styled-components";
import {MarkdownBase, MarkdownSm} from "../../assets/css/Markdown.style";
import {fadeIn} from "../../assets/css/Animate.style";
import {media} from "../../assets/css/Media.style";
import {FlexBox} from "../../assets/css/Section.style";
import {Color} from "../../assets/css/Theme.style";
import {Button} from "../../assets/css/Button.style";
import {Icon} from "../../assets/css/Image.style";

export const NavSection = styled.nav`
    position: absolute;
    animation: ${fadeIn} 0.3s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    right: 15%;
    top: 60px;
    min-width: 250px;
    background-color: white;
    border: 1px solid ${Color.gray100};
    border-radius: 10px;
    box-shadow: 0 0 10px #00000020;
    ${media.sm`
        right:5%;
        min-width:180px;
    `}
`;
const NavContainer = styled.div`
    text-align:center;
    padding:1rem;
    border-top:${props => props.border}px solid ${Color.gray100};
`;

const NavBox = styled.div`
  ${FlexBox('space-between')};
  cursor:pointer;
`;

const NavItem = styled(MarkdownSm)`
    width:100%;
`;

const Name = styled(MarkdownBase)`
    margin-bottom:5px;
`;

const Logout = styled(Button)`
    cursor: pointer;
    padding: 0.3rem 0.8rem;
    font-size:10px;
    color:${Color.gray200};
    border: 1px solid #aaaaaa64;
    border-radius: 1rem;
    ${media.sm`
        font-size:10px;
    `}
`
const ProfileLogo=styled(Icon)`
  border-radius:50%;
  margin-bottom:20px;
  ${media.sm`
    margin-bottom:10px;
  `}
`

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
                    <ProfileLogo alt="만다라트-유저이미지" src={user.photoURL}/>
                    <Name>{user.displayName}</Name>
                    <MarkdownSm>{user.email}</MarkdownSm>
                </NavContainer>

                <NavContainer border={1}>
                    <Link to="/mypage">
                        <NavBox>
                            <NavItem>마이페이지</NavItem>
                            <MarkdownBase color={Color.gray300}> ></MarkdownBase>
                        </NavBox>
                    </Link>
                </NavContainer>
                <NavContainer border={1}>
                    <NavBox onClick={onIssue}>
                        <NavItem>문의사항</NavItem>
                        <MarkdownBase color={Color.gray300}> ></MarkdownBase>
                    </NavBox>
                </NavContainer>
                <NavContainer border={1}>
                    <Logout onClick={onLogout}>로그아웃</Logout>
                </NavContainer>
            </NavSection>
        </>
    )
}

export default Nav;