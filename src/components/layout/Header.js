import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component{
    render(){
        return(
            <>
                <span>만다라트</span>
                <ul>
                    <li><Link to="/write">작성하기</Link></li>
                    <li><Link to="list">리스트</Link></li>
                </ul>
            </>
        )
    }
}

export default Header;