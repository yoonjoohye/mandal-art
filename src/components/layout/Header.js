import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <>
                <span>만다라트</span>
                <ul>
                    <li><Link to="/">만다라트 만들기</Link></li>
                    <li><Link to="/list">리스트 보기</Link></li>
                </ul>
            </>
        )
    }
}

export default Header;