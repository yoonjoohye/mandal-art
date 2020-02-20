import React from 'react';

const Print=()=>{

    const onPrint=()=>{
        window.print();
    }

    return(
        <button className="btn print" onClick={onPrint}>프린트</button>
    );

}

export default Print;