import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/layout/Home.scss';

class Home extends Component{
    render() {
        return (
            <section className="home-section flex flex-col justify-center items-center">
                <div className="font-large font-bold mb-30">
                    함께, 계획을 세워요!<br/>
                    지금 바로 시작하세요!
                </div>
                <Link to="/write">
                    <button className="btn write">만다라트 만들어보기</button>
                </Link>
            </section>
    )
    }
    }

    export default Home;