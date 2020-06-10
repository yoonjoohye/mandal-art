import React from 'react';
import {connect} from 'react-redux';


const Delete = ({pageNo,onDelete}) => {
    return (
        <button className="btn delete" onClick={()=>onDelete(pageNo)}>
            <img alt="만다라트-취소" className="w-100" src={require('../../assets/img/icon/cancel.svg')}/>
        </button>
    );

}

export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Delete);