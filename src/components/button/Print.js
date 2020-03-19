import React from 'react';

const Print = (props) => {

    const onPrint = () => {
        window.print();
    }

    return (
            <div className="btn print" onClick={onPrint}>
                <img className="print-icon mr-5" src={props.img}/>인쇄하기
            </div>
    );

}

export default Print;