import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../../assets/css/Section.style';
import { Button } from '../../assets/css/Button.style';
import { MarkdownBase } from '../../assets/css/Markdown.style';
import { Color } from '../../assets/css/Theme.style';
import { IconSm } from '../../assets/css/Image.style';

const LoginButton = styled(Button)`
  width: 100%;
  padding: 0.8rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 0.5rem;
  background-color: white;
  ${FlexBox('space-between')};
  margin-bottom: 20px;
`;

const LoginName = styled(MarkdownBase)`
  width: 100%;
  text-align: center;
`;
const GoogleLogin = ({ onLogin }) => {
  return (
    <LoginButton onClick={() => onLogin('google')}>
      <IconSm
        alt="만다라트-구글"
        src={require('../../assets/img/icon/google.svg')}
      />
      <LoginName fontWeight={400} color={Color.gray400}>
        구글로 로그인
      </LoginName>
    </LoginButton>
  );
};
export default GoogleLogin;
