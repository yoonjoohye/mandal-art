import { css } from 'styled-components';

export const Input = (size, fontWeight) => css`
	border: none;
	outline: none;
	font-size: ${size}px;
	font-weight: ${fontWeight};
`;

export const Textarea = (size, fontWeight) => css`
	resize: none;
	border: none;
	outline: none;
	font-size: ${size}px;
	font-weight: ${fontWeight};
`;
