import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Nav from './Nav.js';
import { Container, FlexBox } from '../../assets/css/Section.style';
import styled from 'styled-components';
import { logoutAsync } from '../../stores/auth';
import {
  Blue,
  MarkdownBase,
  MarkdownXmd,
  Yellow
} from '../../assets/css/Markdown.style';
import { Color } from '../../assets/css/Theme.style';
import { Icon } from '../../assets/css/Image.style';

const HeaderSection = styled.header`
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  box-shadow: 0 1px 10px #00000063;
  background-color: ${(props) => props.bgColor};
`;

const HeaderContainer = styled(Container)`
  height: 60px;
  ${FlexBox('space-between')};
`;

const HeaderButton = styled(MarkdownBase)`
  cursor: pointer;
`;
const HeaderWrapper = styled.div`
  ${FlexBox('ceneter')};
`;

const HeaderIcon = styled(Icon)`
  margin-right: 10px;
`;
const ProfileIcon = styled(Icon)`
  cursor: pointer;
  border-radius: 50%;
`;

const Header = ({ user, loading, logoutAsync }) => {
  const [isNav, setIsNav] = useState(false);

  const onNav = useCallback(() => {
    setIsNav(!isNav);
  }, [isNav]);

  return (
    <HeaderSection bgColor={Color.blue300}>
      <HeaderContainer>
        <Link to="/">
          <HeaderWrapper>
            <HeaderIcon
              alt="만다라트-로고"
              src={require('../../assets/img/icon/puzzle.svg')}
            />
            <MarkdownXmd fontWeight={600} color={Color.white}>
              <Blue>M</Blue>andal-<Yellow>A</Yellow>RT
            </MarkdownXmd>
          </HeaderWrapper>
        </Link>
        <>
          {user ? (
            <>
              <ProfileIcon
                alt="만다라트-프로필"
                src={user.photoURL}
                onClick={onNav}
              />
              {/*<img className="cursor-pointer profile-img" alt="만다라트-프로필" src={user.photoURL}*/}
              {/*     onClick={onNav}/>*/}
              {isNav && (
                <Nav
                  user={user}
                  loading={loading}
                  onLogout={() => logoutAsync()}
                />
              )}
            </>
          ) : (
            <Link to="/login">
              <HeaderButton color={Color.white}>로그인/가입</HeaderButton>
            </Link>
          )}
        </>
      </HeaderContainer>
    </HeaderSection>
  );
};

export default connect(
  (state) => ({
    user: state.auth.user,
    loading: state.auth.loading.logout
  }),
  { logoutAsync }
)(Header);
