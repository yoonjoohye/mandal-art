import React from 'react';

const Save = ({title,data,onSave}) => {

    return (
        <button className="btn save" onClick={()=>onSave(title,data)}>저장하기</button>
    );

}

export default Save;