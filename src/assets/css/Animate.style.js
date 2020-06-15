import {keyframes} from "styled-components";

export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ping = keyframes`
  0% {
    transform: scale(0.2);
    opacity: 0.8;
  }
  80% {
    transform: scale(1.8);
    opacity: 0;
  }
  100% {
    transform: scale(2.8);
    opacity: 0;
  }

`;
