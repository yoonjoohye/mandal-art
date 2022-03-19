import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Input } from '../../assets/css/Form.style';
import { media } from '../../assets/css/Media.style';
import { Color } from '../../assets/css/Theme.style';

const TitleInput = styled.input`
  border-bottom: 1px solid ${Color.gray100}!important;
  padding: 1rem 0;
  margin-bottom: 30px;
  width: 100%;
  ${Input(40, 400)}
  ${media.md`${Input(28, 400)}`}
    ${media.sm`${Input(24, 400)}`}
    &:focus {
    border-color: ${Color.gray200}!important;
  }
`;

const Title = (props) => {
  return (
    <TitleInput
      type="text"
      placeholder="제목을 입력하세요"
      value={props.title}
      onChange={(e) => props.titleChange(e.target.value)}
    ></TitleInput>
  );
};

export default Title;
