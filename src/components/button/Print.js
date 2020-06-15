import React from 'react';
import styled from "styled-components";
import {Button} from "../../assets/css/Button.style";
import {media} from "../../assets/css/Media.style";
import {IconXs} from "../../assets/css/Image.style";

const PrintButton=styled(Button)`
    font-size: 13px;
    padding: 0.5rem 1rem;
    &:hover {
      font-weight: 600;
    }
    ${media.sm`
      font-size: 11px;
    `}
    
    //@media print {
    //  @page {
    //    size: A4 portrait;
    //    margin: 0;
    //    padding: 0;
    //    page-break-before: always;
    //  }
    //  header {
    //    display: none;
    //  }
    //  button {
    //    display: none;
    //  }
    //}

`;
const PrintIcon=styled(IconXs)`
  vertical-align: middle;
  margin-right:5px;
`

const Print = ({onPrint}) => {

    return (
        <PrintButton onClick={onPrint}>
            <PrintIcon alt="만다라트-프린트" src={require('../../assets/img/icon/print.svg')}/>인쇄하기
        </PrintButton>
    );

}

export default Print;