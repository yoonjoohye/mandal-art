import React from 'react';


const Edit = ({title, data, pageNo, onEdit}) => {

    return (
        <button className="btn edit" onClick={()=>onEdit(title,data,pageNo)}>수정완료</button>
    );

}

export default Edit;