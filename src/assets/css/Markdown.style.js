import styled, {css} from 'styled-components';
import {media} from './Media.style';

export const MarkdownXl = styled.div`
  font-size: 65px;
  font-weight:${props=>props.fontWeight || '500'};
  color:${props=>props.color||'#ffffff'};
  ${media.md `font-size: 60px;`}
  ${media.sm `font-size: 30px;`}
`;

export const MarkdownLg = styled.div`
    font-size: 50px;
    font-weight:${props=>props.fontWeight || '500'};
    color:${props=>props.color||'#ffffff'};
    ${media.md `font-size: 30px;`}
    ${media.sm `font-size: 20px;`}
`;