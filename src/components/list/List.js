import React from 'react';
import ListItem from './ListItem';
import { FlexBox } from '../../assets/css/Section.style';
import styled from 'styled-components';
import { media } from '../../assets/css/Media.style';
import { Color } from '../../assets/css/Theme.style';
import Loading from '../Loading';

const ListWrappper = styled.div`
  padding: 2rem 4rem;
  border-radius: 1rem;
  box-shadow: 0 5px 20px #00000020;
  margin-bottom: 10px;
  ${media.sm`
        padding: 1rem 1.5rem;
    `}
`;
const ListBox = styled.div`
  ${FlexBox('center')};
`;
const NothingImg = styled.img`
  width: 600px;
  ${media.md`
        width: 100%;
    `}
`;

const List = ({ loading, list, onDelete }) => {
  return (
    <ListWrappper>
      {loading ? (
        list.length > 0 ? (
          list.map((data, index) => {
            return (
              <ListItem
                key={index}
                data={data}
                index={index}
                onDelete={onDelete}
              />
            );
          })
        ) : (
          <ListBox>
            <NothingImg
              alt="만다라트-존재하지않는이미지"
              src={require('../../assets/img/nothing.jpg')}
            />
          </ListBox>
        )
      ) : (
        <Loading
          bgColor={Color.whiteOpacity}
          position="initial"
          show={!loading}
        />
      )}
    </ListWrappper>
  );
};

export default List;
