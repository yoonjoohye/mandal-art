import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../assets/css/Section.style';
import { Button } from '../../assets/css/Button.style';
import { media } from '../../assets/css/Media.style';
import { MarkdownBase } from '../../assets/css/Markdown.style';
import { Color } from '../../assets/css/Theme.style';
import { IconSm } from '../../assets/css/Image.style';
import facebookIcon from '../../assets/img/icon/facebook.svg';

const LoginButton = styled(Button)`
  width: 100%;
  padding: 0.8rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: ${Color.facebook};
  ${FlexBox('space-between')};
  ${media.sm`
    margin-bottom:70px;
  `}
`;
const LoginName = styled(MarkdownBase)`
  width: 100%;
  text-align: center;
`;

const FacebookLogin = ({ onLogin }) => {
  return (
    <LoginButton onClick={() => onLogin('facebook')}>
      <IconSm
        alt="만다라트-페이스북"
        src={facebookIcon}
      />
      <LoginName fontWeight={400} color={Color.white}>
        페이스북으로 로그인
      </LoginName>
    </LoginButton>
  );
};
export default FacebookLogin;
