import React from 'react';
import styled from 'styled-components';
import { Button } from '../../assets/css/Button.style';
import { media } from '../../assets/css/Media.style';
import { IconXs } from '../../assets/css/Image.style';
import printIcon from '../../assets/img/icon/print.svg';

const PrintButton = styled(Button)`
  font-size: 13px;
  padding: 0.5rem 1rem;
  &:hover {
    font-weight: 600;
  }
  ${media.sm`
      font-size: 11px;
    `}
`;

const PrintIcon = styled(IconXs)`
  vertical-align: middle;
  margin-right: 5px;
`;

const Print = ({ onPrint }) => {
  return (
    <PrintButton onClick={onPrint}>
      <PrintIcon
        alt="만다라트-프린트"
        src={printIcon}
      />
      인쇄하기
    </PrintButton>
  );
};

export default Print;
