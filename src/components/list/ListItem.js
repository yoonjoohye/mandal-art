import React from 'react';
import { Link } from 'react-router-dom';
import Delete from '../button/Delete';
import styled from 'styled-components';
import { MarkdownMd, MarkdownSm } from '../../assets/css/Markdown.style';
import { FlexBox } from '../../assets/css/Section.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';

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
`;

const ListItem = ({ data, index, onDelete }) => {
	const { title, time } = data;

	return (
		<ItemWrapper>
			<Link className="cursor-pointer" to={`detail/${index}`}>
				<ListTitle fontWeight={400}>{title}</ListTitle>
				<MarkdownSm fontWeight={400} color={Color.gray300}>
					{time} 작성
				</MarkdownSm>
			</Link>

			<Delete pageNo={index} onDelete={onDelete} />
		</ItemWrapper>
	);
};

export default ListItem;
