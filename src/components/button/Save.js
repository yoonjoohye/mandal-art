import React from 'react';
import { Button } from '../../assets/css/Button.style';
import { Color } from '../../assets/css/Theme.style';
import styled from 'styled-components';
import { media } from '../../assets/css/Media.style';

const SaveButton = styled(Button)`
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

const Save = ({ title, data, onSave }) => {
	return <SaveButton onClick={() => onSave(title, data)}>저장하기</SaveButton>;
};

export default Save;
