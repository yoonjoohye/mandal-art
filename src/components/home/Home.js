import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/Home.scss';

class Home extends Component{
    render() {
        return (
            <section className="mandal-section flex flex-col justofy-center items-center">
                <div className="home-hooking">
                    함께, 계획을 세워요!<br/>
                    지금 바로 시작하세요!
                </div>
                <Link to="/write">
                    <button className="btn write">만다라트 만들기</button>
                </Link>
            </section>
    )
    }
    }

    export default Home;