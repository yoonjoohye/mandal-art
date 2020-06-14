import {css} from 'styled-components';

const size={
    md:1024,
    sm:480,
}

export const media=Object.keys(size).reduce((acc,label)=>{
    acc[label]=(...args)=> css`
      @media(max-width:${size[label]}px){
        ${css(...args)};
      }
    `;
    return acc;
},{});