import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Guide extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <section className="mandal-section">
                <div className="h-100 bg-none flex flex-col justify-center items-center">
                    <div className="container">
                        {/*<div className="font-md font-medium text-center mb-50">*/}
                        {/*    ✏️ 만다라트 계획표 작성법*/}
                        {/*</div>*/}
                        <div className="mandal-banner px-1 mb-50">
                            <div className="font-white font-bold mb-20">⛔작성 시 주의사항 ⛔️</div>
                            <p className="font-white font-light">
                                - 달성하기 어려운 목표도 안 되지만, 너무 쉬워서 동기 부여가 안 되는 것도 삼가야 합니다. (간단 명료하게 작성해야 합니다.)<br/>
                                - 핵심목표는 담대하게 작성해야 합니다. 노력하면 이룰 수 있는 목표를 작성해야 합니다.<br/>
                                - 세부목표는 현실적으로 작성해야 합니다.
                            </p>
                        </div>
                        <div className="flex flex-col-m items-center mb-50">
                            <>
                                <img className="mandal-img shadow mr-50" src={require('../../assets/mandal.png')}/>
                            </>

                            <p className="px-1">
                                <span className="font-medium">1.</span> <Link className="font-blue font-medium" to="/write">만다라트 만들기</Link>를 시작합니다.<br/><br/>
                                <span className="font-medium">2.</span> 자신의 핵심목표를 가장 중심에 적습니다.(최대 8글자)<br/><br/>
                                <span className="font-medium">3.</span> 세부목표 8칸에 핵심목표에 대한 해결점, 아이디어 등을 적습니다.<br/><br/>
                                <span className="font-medium">4.</span> 나머지 8칸에 세부목표에 대한 해결점, 아이디어 등을 적습니다.<br/><br/>
                                <span className="font-medium">5.</span> 모두 채웠다면, 나만의 만다라트 완성 💙
                            </p>
                        </div>

                        <div className="text-center mb-50">
                            <Link to="/write">
                                <button className="btn write">만다라트 만들기</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Guide;