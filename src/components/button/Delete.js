import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Button } from '../../assets/css/Button.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';
import cancelIcon from '../../assets/img/icon/cancel.svg';

const DeleteButton = styled(Button)`
  padding: 0.6rem 0.6rem 0.6rem 0.6rem;
  width: 40px;
  height: 40px;
  border: 1px solid ${Color.red};
  border-radius: 50%;

  ${media.md`
      padding:0.5rem 0.5rem 0.5rem 0.5rem;
      width: 30px;
      height: 30px;
    `}
  ${media.sm`
      width: 30px;
      height: 30px;
      border: none;
    `}
	&:empty {
    background-color: #c7c7c757;
  }
`;
const DeleteIcon = styled.img`
  width: 100%;
  height: auto;
`;

const Delete = ({ pageNo, onDelete }) => {
  return (
    <DeleteButton onClick={() => onDelete(pageNo)}>
      <DeleteIcon
        alt="만다라트-취소"
        src={cancelIcon}
      />
    </DeleteButton>
  );
};

export default connect((state) => ({
  user: state.auth.user
}))(Delete);
