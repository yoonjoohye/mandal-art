import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Nav extends Component {

    render() {
        return (

            <div className="nav">
                <div className="nav-container border-bottom">
                    <img className="nav-profile-img mb-20" src={this.props.userInfo.photoURL}/>
                    <div className="mb-5 font-medium">{this.props.userInfo.displayName}</div>
                    <div className="font-small">{this.props.userInfo.email}</div>
                </div>
                <div className="nav-container border-bottom">
                    <Link to="/list">
                        <span className="font-small">마이페이지 <span className="ml-10"> > </span></span>
                    </Link>
                </div>
                <div className="nav-container">
                    <Link to="/logout">
                        <span className="font-small nav-logout">로그아웃</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Nav;