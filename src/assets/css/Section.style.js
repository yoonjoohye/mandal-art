import styled, { css } from 'styled-components';
import { media } from './Media.style';
import { Color } from './Theme.style';

export const Section = styled.section`
	padding: 100px 0;
	min-height: 100vh;
	${media.sm`
      padding: 85px 0;
    `}
`;

export const BackgroundSection = styled.section`
    background: url(${(props) => props.img});
    background-size: initial;
    background-repeat: no-repeat;
    ${media.xxl`
        background-size:120%;
    `}
    ${media.lg`
        background-size: 130%;
    `}
     ${media.md`
        background-size: 200%;
    `}
    ${media.sm`
        background: ${Color.white};
    `}
`;

export const ModalSection = styled.section`
	position: fixed;
	width: 100%;
	height: 100%;
	left: 0;
	right: 0;
	top: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.bgColor || Color.blackOpacity};
	backdrop-filter: blur(4px);
	z-index: 3;
`;

export const Container = styled.div`
	padding-right: 15%;
	padding-left: 15%;
	${media.sm`
      padding-right: 5%;
      padding-left: 5%;
    `}

	@media print {
		padding-right: 5%;
		padding-left: 5%;
	}
`;

export const FlexBox = (justifyContent = 'center') => css`
	display: flex;
	justify-content: ${justifyContent};
	align-items: center;
`;

export const OnlyMobile = () => css`
	display: none !important;
	${media.sm`
    display: initial !important;
  `}
`;

export const OnlyPc = () => css`
	display: initial !important;
	${media.sm`
    display: none !important;
  `}
`;
