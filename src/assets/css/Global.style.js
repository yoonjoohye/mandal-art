import {createGlobalStyle} from "styled-components";
import {Color} from "./Theme.style";
import {media} from "./Media.style";

export const Global = createGlobalStyle`
    html {
      width: 100%;
      height: 100%;
      margin: 0;
    }
    
    @media print {
      @page {
        size: A4 portrait;
        margin: 0;
        padding: 0;
        page-break-before: always;
      }
      section{
        padding:2rem 0!important;
      }
      textarea{
        height:70px!important;
        line-height:1.5!important;
      }
      header {
        display: none;
      }
      button {
        display: none;
      }
    }
    
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 300;
     src: url(require('../font/NanumSquareL.eot'));
     src: url(require('../font/NanumSquareL.eot?#iefix')) format('embedded-opentype'),
          url(require('../font/NanumSquareL.woff')) format('woff'),
          url(require('../font/NanumSquareL.ttf')) format('truetype');
    }
    
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 400;
     src: url(require('../font/NanumSquareR.eot'));
     src: url(require('../font/NanumSquareR.eot?#iefix')) format('embedded-opentype'),
          url(require('../font/NanumSquareR.woff')) format('woff'),
          url(require('../font/NanumSquareR.ttf')) format('truetype');
    }
    @font-face {
     font-family: 'NanumSquare';
     font-weight: 500;
     src: url(require('../font/NanumSquareB.eot'));
     src: url(require('../font/NanumSquareB.eot?#iefix')) format('embedded-opentype'),
          url(require('../font/NanumSquareB.woff')) format('woff'),
          url(require('../font/NanumSquareB.ttf')) format('truetype');
    }
    
    body {
      width: 100%;
      margin: 0;
      font-family: 'NanumSquare', sans-serif;
      font-size: 16px;
      font-weight: 300;
      line-height: 1.5;
      color: ${Color.gray500};
      ${media.sm`
        font-size: 13px;
      `}
    }
    
    textarea {
      font-family: 'NanumSquare', sans-serif;
      font-weight:300;
      font-size: 16px;
    }
    
    input {
      font-family: 'NanumSquare', sans-serif;
      font-weight:400;
      font-size: 16px;
      &::placeholder{
         font-weight:400;
      }
    }
    
    li {
      padding-left: 15px;
      list-style: none;
    }
    
    ol, ul {
      margin: 0;
      padding-left: 20px;
    }
    
    a {
      text-decoration: none;
      color: black;
    }
    
    p {
      line-height: 1.8;
      margin: 0;
    }
`;