import React from 'react';
import styled from 'styled-components';
import { Button } from '../../assets/css/Button.style';
import { Color } from '../../assets/css/Theme.style';
import { media } from '../../assets/css/Media.style';

const EditButton = styled(Button)`
	padding: 0.5rem 1.2rem;
	background-color: ${Color.pink200};
	color: ${Color.white};
	&:hover {
		background-color: ${Color.pink400};
	}
	${media.sm`
          padding: 0.5rem 1rem;
    `}
`;
const Edit = ({ title, data, pageNo, onEdit }) => {
	return (
		<EditButton onClick={() => onEdit(title, data, pageNo)}>
			수정완료
		</EditButton>
	);
};

export default Edit;
