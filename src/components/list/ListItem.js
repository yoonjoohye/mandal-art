import React from 'react';
import { Link } from 'react-router-dom';
import Delete from '../button/Delete';
import styled from 'styled-components';
import { MarkdownMd, MarkdownSm } from '../../assets/css/Markdown.style';
import { FlexBox } from '../../assets/css/Section.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';
import dayjs from 'dayjs';

const ItemWrapper = styled.div`
  padding: 2rem 0;
  ${FlexBox('space-between')};
  border-bottom: 1px solid ${Color.gray100};
  ${media.sm`
    padding:1rem 0;
  `}
`;
const ListTitle = styled(MarkdownMd)`
  margin-bottom: 5px;
  &:empty {
    width: 300px;
    height: 30px;
    background-color: #c7c7c757;
    border-radius: 5px;
    ${media.md`
		width:180px;
		height: 22px;
		`}
    ${media.sm`
		width:100px;
		height: 20px;
		`}
  }
`;

const ListDate = styled(MarkdownSm)`
  &:empty {
    width: 200px;
    height: 12px;
    background-color: #c7c7c757;
    border-radius: 3px;
    ${media.sm`
		width:80px;
		height: 10px;
		`}
  }
`;

const ListItem = ({ data, index, onDelete }) => {
  const { articleId, title, updatedAt } = data;

  return (
    <ItemWrapper>
      <Link to={`/detail/${articleId}`}>
        <ListTitle fontWeight={400}>{title}</ListTitle>
        <ListDate fontWeight={400} color={Color.gray300}>
          {dayjs(updatedAt).format('YYYY년 MM월 DD일 HH:MM')}
        </ListDate>
      </Link>
      <Delete pageNo={index} onDelete={() => onDelete(articleId)} />
    </ItemWrapper>
  );
};

export default ListItem;
