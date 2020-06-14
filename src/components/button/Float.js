import React from "react";

const Float=()=>{
    return(
        <>
            <div className="bubble font-white mr-10">바로 나만의 만다라트를 만들기</div>
            <div className="flex items-center" onClick={() => window.location.href = '/write'}>
                <div className="ping"></div>
                <button className="btn floating">
                    <img alt="만다라트-추가" className="w-100"
                         src={require('../../assets/img/icon/plus.svg')}/>
                </button>
            </div>
        </>
    );
}

export default Float;