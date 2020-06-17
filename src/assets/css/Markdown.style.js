import styled from 'styled-components';
import { media } from './Media.style';
import { Color } from './Theme.style';

export const MarkdownXl = styled.div`
	font-size: 60px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || Color.black};
	${media.md`font-size: 50px;`}
	${media.sm`font-size: 28px;`}
`;

export const MarkdownLg = styled.div`
	font-size: 45px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || Color.black};
	${media.md`font-size: 30px;`}
	${media.sm`font-size: 22px;`}
`;

export const MarkdownMd = styled.div`
	font-size: 30px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || Color.black};
	${media.md`font-size: 22px;`}
	${media.sm`font-size: 20px;`}
`;

export const MarkdownXmd = styled.div`
	font-size: 22px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || Color.black};
	${media.md`font-size: 18px;`}
	${media.sm`font-size: 15px;`}
`;

export const MarkdownBase = styled.div`
	font-size: 16px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || Color.black};
	${media.md`font-size: 14px;`}
	${media.sm`font-size: 11px;`}
`;

export const MarkdownSm = styled.div`
	font-size: 12px;
	font-weight: ${(props) => props.fontWeight || '300'};
	color: ${(props) => props.color || '#000000'};
	${media.sm`font-size: 10px;`}
`;

export const Blue = styled.span`
	color: ${Color.blue200};
`;

export const Yellow = styled.span`
	color: ${Color.yellow};
`;
