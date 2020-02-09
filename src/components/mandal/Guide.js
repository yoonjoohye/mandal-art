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
                            <div className="font-md font-bold font-white mb-10">
                                만다라트
                            </div>
                            <p className=" font-light font-white mb-100">
                                만다라트(Mandal-Art) 기법은 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                                Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로 '목적을 달성하는 기술'을 뜻합니다.<br/>
                                핵심목표를 세우고 이에 대한 해결점, 아이디어, 생각들을 확산해 나가는 형태로, 목표를 계획하거나 아이디어를 구체화 할 때 아주 유용하게 활용할 수 있습니다.
                            </p>

                            <div className="font-md font-white font-bold mb-10">
                                왜 쓰는 걸까?
                            </div>
                            <p className="font-white font-light">
                                만다라트 하면 떠오르는 인물이 있습니다.<br/>
                                바로 일본의 괴물투수 '오타니 쇼헤이'입니다.<br/>
                                2017년 USATODAY지 선정 MLB 가장 영향력있는 인물 100인, TOP5으로 선정된 그는 2018 메이저리그의 역사를 새로 써내려갔습니다.<br/>
                                만다라트는 고교시절 사용한 자기계발 방법입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-100 bg-none flex flex-col items-center justify-center">
                    <div className="container">
                        <div className="font-md font-bold">
                            만다라트 계획표 작성법
                        </div>
                        <p className="font-light">
                            1. <Link className="bg-pink font-white" to="/write">만다라트 계획표</Link>를 시작합니다.<br/>
                            2. 자신의 핵심목표를 가장 중심에 적습니다.<br/>
                            (목표 내용이 구체적인가, 측정 가능한가, 달성 가능한가, 현실적인가, 기한을 정했나, 긍정문 진술, 구성원들이 이해했나, 동의했나, 관련성 있는 목적인가,
                            윤리적인가,
                            도전적인가, 합법적인가, 친환경적인가, 문서로 남겼는가이다. 학생 개인의 목표에도 최소 8개 정도는 해당될 것 같다. 여기서 주의할 점은 달성하기 어려운 희망 없는
                            목표도
                            안 되지만 또 너무 쉬워서 동기 부여가 안 되는 것도 삼가야 한다는 것이다. 가장 중요한 요건은 ‘KISS(Keep It Simple, Stupid)!’, 바로
                            ‘간단명료’다.)<br/>
                            3. 핵심목표에 대한 해결점, 아이디어 등을 세부목표(8개)에 적습니다.<br/>
                            (각 나머지 칸의 중심에 세부목표(8개)가 채워집니다.)<br/>
                            4. 세부목표에 대한 해결점, 아이디어 등 방법을 적습니다.
                        </p>
                    </div>
                </div>
            </section>
        );
    }
}

export default Guide;