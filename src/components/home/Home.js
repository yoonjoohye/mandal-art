import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/layout/Home.scss';

class Home extends Component {
    render() {
        return (
            <section className="home-section">
                <div className="container pt-15">
                    <div className="font-xl font-white mb-50">
                        함께, <span className="yellow">계획</span>을 세워요!<br/>
                        지금 바로 시작하세요!
                    </div>
                    <Link to="/guide">
                        <button className="btn write">시작하기</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Home;