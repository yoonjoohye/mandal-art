import React from 'react';

const Print = () => {

    const onPrint = () => {
        window.print();
    }

    return (
            <button className="btn print mr-10" onClick={onPrint}><img className="print-icon mr-5" src={require('../../assets/icon/print.svg')}/>인쇄하기</button>
    );

}

export default Print;