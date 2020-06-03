import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import 'firebase/auth';

import Nav from '../components/base/Nav.js';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNav: false,
        }
    }

    onNav = () => {
        this.setState((prevState) => {
            return {
                isNav: !prevState.isNav
            }
        });
    }


    render() {
        let {isNav} = this.state;
        let {user} = this.props;

        return (
            <section className={`header-section header-bg`}>
                <div className="header-container flex justify-center justify-between items-center">
                    <Link className="flex justify-center items-center" to="/">
                        <img alt="만다라트-로고" className="header-icon mr-10"
                             src={require("../assets/img/icon/puzzle.svg")}/>
                        <div className="header-name"><span className="blue">M</span>andal-<span
                            className="yellow">A</span>RT
                        </div>
                    </Link>
                    <div>
                        {
                            user ?
                                <>
                                    <img className="cursor-pointer profile-img" alt="만다라트-프로필"
                                         src={user.photoURL} onClick={this.onNav}/>
                                    {
                                        isNav ?
                                            <Nav/>
                                            : null
                                    }
                                </>
                                : <Link to="/login"><span className="font-white cursor-pointer">로그인/가입</span></Link>
                        }

                    </div>
                </div>
            </section>
        )
    }
}

// export default Header;
export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Header);