import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../../css/layout/Home.scss';

class Home extends Component {
    render() {
        return (
            <section className="home-section">
                <div className="h-100 container flex flex-col justify-center mb-200">
                    <div className="font-xl font-white mb-50">
                        함께, <span className="yellow">계획</span>을 세워요<br/>
                        지금 바로 시작하세요
                    </div>
                    <Link to="/guide">
                        <button className="btn write">시작하기</button>
                    </Link>
                </div>
                <div className="h-100 container flex flex-col items-center justify-center">
                    <div className=" flex flex-col-m justify-between items-center">
                        <>
                            <img className="mandal-img shadow mr-50"
                                 src={require('../../assets/mandal-otani.png')}/>
                        </>
                        <div>
                            <div className="py-1 border-bottom">
                                <div className="inline-block text-center box-title bg-blue font-bold yellow mb-20">
                                    만다라트란?
                                </div>
                                <p className="font-light">
                                    만다라트(Mandal-Art) 기법은 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                                    Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로 '목적을 달성하는 기술'을 뜻합니다.<br/>
                                    핵심목표를 세우고 이에 대한 해결점, 아이디어, 생각들을 확산해 나가는 형태로, <span className="font-bold">목표를 계획하거나 아이디어를 구체화</span> 할
                                    때 아주 유용하게 활용할 수
                                    있습니다.
                                </p>
                            </div>

                            <div className="py-1">
                                <div className="inline-block text-center bg-blue box-title font-bold yellow mb-20">
                                    대표적인 사례
                                </div>
                                <p className="font-light">
                                    만다라트는 <span className="font-bold">'오타니 쇼헤이'의 성공비법</span>으로 잘 알려져있습니다.<br/>
                                    '오타니 쇼헤이'는 철저한 자기관리로 가장 영향력있는 인물 100인, TOP5으로 선정된 인물입니다.<br/>
                                    '오타니 쇼헤이'는 고교시절에 쓴 만다라트를 꾸준히 실천하여, 지금의 자리까지 올 수 있었습니다.<br/>
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Home;