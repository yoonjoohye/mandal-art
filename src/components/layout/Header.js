import React,{Component} from 'react';
import {Link} from 'react-router-dom';

import '../../css/header.css';

class Header extends Component{
    render(){
        return(
            <section className="header-section">
                <div className="header-container flex justify-center justify-between items-center">
                <div>만다라트</div>
                <div>
                    <span className="header-list"><Link className="mr-10" to="/mandal">만다라트 만들기</Link></span>
                    <span className="header-list"><Link className="" to="/list">리스트 보기</Link></span>
                </div>
                </div>
            </section>
        )
    }
}

export default Header;