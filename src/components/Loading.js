import React, { useState, useEffect } from 'react';
import { ModalSection } from '../assets/css/Section.style';
import { IconMd } from '../assets/css/Image.style';
import styled from 'styled-components';
import { Color } from '../assets/css/Theme.style';

const LoadingSection = styled.div`
  position: ${(props) => props.position || 'fixed'};
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor || Color.blackOpacity};
  z-index: 3;
`;
const Loading = ({ show, position, bgColor }) => {
  // const [show, setShow] = useState(props.show);
  //
  // useEffect(() => {
  //   setShow(props.show);
  // }, [props.show]);
  return (
    <>
      {show ? (
        <LoadingSection bgColor={bgColor} position={position}>
          <IconMd
            alt="만다라트-로딩"
            src={require('../assets/img/icon/spinner.svg')}
          />
        </LoadingSection>
      ) : null}
    </>
  );
};

export default Loading;
