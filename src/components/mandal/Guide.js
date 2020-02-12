import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Guide extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section>
                <div className="h-100 bg-blue shadow box-round flex flex-col items-center justify-center">
                    <div className="container flex justify-between items-center">
                        <>
                            <img className="mandal-img mr-50" src={require('../../images/mandal-otani.png')}/>
                        </>

                        <div>
                            <div className="font-md font-medium yellow mb-20">
                                만다라트
                            </div>
                            <p className=" font-light font-white mb-100">
                                만다라트(Mandal-Art) 기법은 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                                Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로 '목적을 달성하는 기술'을 뜻합니다.<br/>
                                핵심목표를 세우고 이에 대한 해결점, 아이디어, 생각들을 확산해 나가는 형태로, 목표를 계획하거나 아이디어를 구체화 할 때 아주 유용하게 활용할 수 있습니다.
                            </p>

                            <div className="font-md font-medium yellow mb-20">
                                왜 쓰는가?
                            </div>
                            <p className="font-white font-light">
                                만다라트는 '오타니 쇼헤이'의 성공비법으로 잘 알려져있습니다.<br/>
                                '오타니 쇼헤이'는 철저한 자기관리로 가장 영향력있는 인물 100인, TOP5으로 선정된 인물입니다.<br/>
                                '오타니 쇼헤이'는 고교시절에 쓴 만다라트를 꾸준히 실천하여, 지금의 자리까지 올 수 있었습니다.<br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-100 bg-none flex flex-col justify-center">
                    <div className="container">
                        <div className="font-md font-medium text-center mb-50 mt-50">
                            ✏️ 만다라트 계획표 작성법
                        </div>

                        <div className="mandal-banner px-1 mb-50">
                            <div className="font-white font-bold mb-20">⛔작성 시 주의사항 ⛔️</div>
                            <p className="font-white font-light">
                                - 달성하기 어려운 목표도 안 되지만, 너무 쉬워서 동기 부여가 안 되는 것도 삼가야 합니다. (간단 명료하게 작성해야 합니다.)<br/>
                                - 핵심목표는 담대하게 작성해야 합니다. 노력하면 이룰 수 있는 목표를 작성해야 합니다.<br/>
                                - 세부목표는 현실적으로 작성해야 합니다.
                            </p>
                        </div>
                        <div className="flex justify-between items-center mb-50">
                            <>
                                <img className="mandal-img mr-50" src={require('../../images/mandal.png')}/>
                            </>

                            <p className="px-1 font-light">
                                <span className="font-medium">1.</span> <Link className="font-blue font-medium" to="/write">만다라트 만들기</Link>를 시작합니다.<br/>
                                <span className="font-medium">2.</span> 자신의 핵심목표를 가장 중심에 적습니다.(최대 8글자)<br/>
                                <span className="font-medium">3.</span> 핵심목표에 대한 해결점, 아이디어 등을 세부목표(8개)에 적습니다.(각 나머지 칸의 중심에 세부목표(8개)가 채워집니다.)<br/>
                                <span className="font-medium">4.</span> 세부목표에 대한 해결점, 아이디어 등을 적습니다.
                            </p>
                        </div>

                        <div className="text-center">
                            <Link to="/write">
                                <button className="btn write">만다라트 만들러 가기</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Guide;