import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MarkdownBase, MarkdownMd } from '../assets/css/Markdown.style';
import { media } from '../assets/css/Media.style';
import { Color } from '../assets/css/Theme.style';
import { FlexBox } from '../assets/css/Section.style';
import { Icon } from '../assets/css/Image.style';
import logoIcon from '../assets/img/icon/puzzle.svg';
import {Button} from "../assets/css/Button.style";

export const NotFoundSection = styled.section`
  ${FlexBox('center')};
  flex-direction: column;
  height: 100vh;
`;

const NotFoundTitle = styled(MarkdownMd)`
  margin-bottom: 10px;
`;

const NotFoundContent = styled(MarkdownBase)`
  margin-bottom: 30px;
  ${media.sm`margin-bottom:20px;`}
`;
const NotFoundIcon = styled(Icon)`
  margin-bottom: 20px;
  ${media.sm`margin-bottom:10px;`}
`;

const NotFoundButton=styled(Button)`
  background-color:${Color.pink300};
  padding:10px 20px;
  font-size: 16px;
  color:${Color.white};
`
const NotFound = () => {
  return (
    <NotFoundSection>
      <NotFoundIcon
        alt="만다라트-로고"
        src={logoIcon}
      />
      <NotFoundTitle>페이지를 찾을 수 없습니다.</NotFoundTitle>
      <NotFoundContent color={Color.gray300}>
        요청하신 페이지가 존재하지 않습니다.
      </NotFoundContent>

      <Link to="/">
        <NotFoundButton>홈페이지로 돌아가기</NotFoundButton>
      </Link>
    </NotFoundSection>
  );
};

export default NotFound;
