import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../assets/css/Button.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';
import { ping } from '../../assets/css/Animate.style';
import { FlexBox } from '../../assets/css/Section.style';
import plusIcon from '../../assets/img/icon/plus.svg';

const FloatWrapper = styled(Link)`
  ${FlexBox};
`;
const FloatButton = styled(Button)`
  position: relative;
  padding: 1rem 1rem 1rem 1rem;
  width: 70px;
  height: 70px;
  background-color: ${Color.pink200};
  color: ${Color.white};
  border-radius: 50%;
  &:hover {
    background-color: ${Color.pink400};
  }
  ${media.sm`
      width: 50px;
      height: 50px;
    `}
`;
const Ping = styled.div`
  position: absolute;
  z-index: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${Color.pink200};
  animation: ${ping} 0.8s ease-in-out infinite both;
  ${media.sm`
      width: 50px;
      height: 50px;
  `}
`;
const SpeechBubble = styled.div`
  position: relative;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-right: 10px;
  color: ${Color.white};
  background: linear-gradient(
    to right,
    ${Color.pink100},
    ${Color.pink200},
    ${Color.pink300}
  );

  &:after {
    left: 100%;
    top: 50%;
    border: solid transparent;
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-left-color: ${Color.pink300};
    border-width: 9px;
    margin-top: -8px;
  }
`;

const FloatIcon = styled.img`
  width: 100%;
  height: auto;
`;
const Float = () => {
  return (
    <>
      <SpeechBubble>바로 나만의 만다라트를 만들기</SpeechBubble>
      <FloatWrapper to="/write">
        <Ping />
        <FloatButton>
          <FloatIcon
            alt="만다라트-추가"
            src={plusIcon}
          />
        </FloatButton>
      </FloatWrapper>
    </>
  );
};

export default Float;
