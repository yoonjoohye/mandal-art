import styled from 'styled-components';
import { media } from './Media.style';

export const Button = styled.button`
	cursor: pointer;
	outline: none;
	border: none;
	background: none;
	font-size: 13px;
	border-radius: 0.3rem;
	${media.sm`
    font-size: 11px;
  `}

	&:focus {
		outline: none;
	}
`;
