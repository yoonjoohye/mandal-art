import styled from 'styled-components';
import { media } from './Media.style';

export const Img = styled.img`
	width: 250px;
	height: 250px;
	${media.md`
     width:180px;
     height:180px;
  `}
	${media.sm`
      width:80px;
      height:80px;
  `}
`;

export const IconMd = styled.img`
	width: 80px;
	height: 80px;
	${media.sm`
      width:60px;
      height:60px;
  `}
`;

export const Icon = styled.img`
	width: 40px;
	height: 40px;
	${media.sm`
      width:30px;
      height:30px;
  `}
`;

export const IconSm = styled.img`
	width: 30px;
	height: 30px;
	${media.sm`
      width:20px;
      height:20px;
  `}
`;

export const IconXs = styled.img`
	width: 20px;
	height: 20px;
	${media.sm`
      width:10px;
      height:10px;
  `}
`;
