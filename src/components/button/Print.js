import React from 'react';

const Print = ({onPrint}) => {

    return (
            <div className="btn print" onClick={onPrint}>
                <img alt="만다라트-프린트" className="print-icon mr-5" src={require('../../assets/img/icon/print.svg')}/>인쇄하기
            </div>
    );

}

export default Print;