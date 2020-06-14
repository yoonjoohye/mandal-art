import React from 'react';
import {Link} from 'react-router-dom';
import {NotFoundSection} from "../assets/css/Section.style";

const NotFound = () => {
    return (
        <NotFoundSection>
            <img alt="만다라트-로고" className="puzzle-icon mb-20" src={require('../assets/img/icon/puzzle.svg')}/>
            <div className="font-md font-medium mb-10">페이지를 찾을 수 없습니다.</div>
            <div className="font-gray mb-30">요청하신 페이지가 존재하지 않습니다.</div>
            <Link to="/">
                <button className="btn save">홈페이지로 돌아가기</button>
            </Link>
        </NotFoundSection>

    );
}

export default NotFound;