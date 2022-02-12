import React from 'react';
import styled from 'styled-components';
import { Button } from '../../assets/css/Button.style';
import { media } from '../../assets/css/Media.style';
import { IconXs } from '../../assets/css/Image.style';
import guideIcon from '../../assets/img/icon/pencil.svg';
const GuideButton = styled(Button)`
  font-size: 13px;
  padding: 0.5rem 1rem;
  &:hover {
    font-weight: 600;
  }
  ${media.sm`
      font-size: 11px;
    `}
`;

const GuideIcon = styled(IconXs)`
  vertical-align: middle;
  margin-right: 5px;
`;

const Guide = () => {
  return (
    <GuideButton onClick={() => window.open('/guide')}>
      <GuideIcon
        alt="만다라트-가이드"
        src={guideIcon}
      />
      작성 가이드 보러가기
    </GuideButton>
  );
};

export default Guide;
