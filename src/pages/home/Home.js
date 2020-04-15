import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ReactHelmet from "../../components/ReactHelmet";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
    componentDidMount() {
        AOS.init();
    }

    render() {
        return (
            <>
                <ReactHelmet
                    title="만다라트 | 나만의 만다라트를 만들어 계획을 실천하세요"
                    description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                    keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
                />
                <section className="home-section">
                    <div className="h-100 bg-blue-m container flex flex-col justify-center mb-100">
                        <div className="font-xl font-medium font-white mb-50">
                            함께, <span className="yellow">계획</span>을 세워요<br/>
                            지금 바로 시작하세요
                        </div>
                        <button className="btn write">
                            <Link className="font-white" to="/write">시작하기</Link>
                        </button>
                    </div>

                    <div className="h-100 py-3 container flex flex-col justify-center">
                        <div data-aos="zoom-in" className="text-center mb-100 mt-200">
                            <div className="font-lg font-medium py-1">만다라트란?</div>
                            <div className=" font-gray mb-50">
                                <span className="only-pc">만다라트(Mandal-Art) 기법은</span> 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                                Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로<br className="only-mobile"/> '목적을 달성하는 기술'을 뜻합니다.<br/>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                            <img className="home-img mr-50" src={require('../../assets/note.svg')}/>
                            <div className="w-100 text-right">
                                <div className="font-lg font-medium py-1 mb-20 border-bottom">아이디어 구체화</div>
                                <div className=" font-gray mb-50">
                                    핵심목표에 대한 아이디어, 생각들을 확산하여<br/>
                                    구체화 할 때 아주 유용하게 활용할 수 있습니다.
                                </div>
                                <button className="btn write only-pc">
                                    <Link className="font-white" to="/write">시작하기</Link>
                                </button>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                            <div className="w-100">
                                <div className="font-lg font-medium py-1 mb-20 border-bottom">모바일 환경 제공</div>
                                <div className="font-gray mb-50">
                                    웹뿐만 아니라 모바일에서도 이용할 수 있습니다.<br/>
                                    하지만, 저는 웹을 권장합니다.
                                </div>
                                <button className="btn write only-pc">
                                    <Link className="font-white" to="/write">시작하기</Link>
                                </button>
                            </div>
                            <img className="home-img ml-50" src={require('../../assets/mobile.svg')}/>
                        </div>

                        <div data-aos="zoom-in" className="flex items-center justify-between mb-150">
                            <img className="home-img mr-50" src={require('../../assets/onoffline.svg')}/>
                            <div className="w-100 text-right">
                                <div className="font-lg font-medium py-1 mb-20 border-bottom">온오프라인 만다라트</div>
                                <div className=" font-gray mb-50">
                                    온라인에서 작성한 만다라트를 인쇄해보세요.<br/>
                                    오프라인에서도 만다라트를 즐길 수 있습니다.
                                </div>
                                <button className="btn write only-pc">
                                    <Link className="font-white" to="/write">시작하기</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-100 container bg-blue flex flex-col items-center justify-center">
                        <div className="font-lg font-medium font-white text-center mb-50">
                            이제 시작해볼까요?<br/>
                            함께, 만다라트를 만들어요
                        </div>
                        <button className="btn write">
                            <Link className="font-white" to="/write">시작하기</Link>
                        </button>
                    </div>

                    {/*<div className="h-100 py-3 container flex flex-col items-center justify-center border-bottom">*/}
                    {/*    <div className=" flex flex-col-m justify-between">*/}
                    {/*        <>*/}
                    {/*            <img alt="만다라트-오타니쇼헤이" className="mandal-img shadow mr-50"*/}
                    {/*                 src={require('../../assets/mandal-otani.jpg')}/>*/}
                    {/*        </>*/}
                    {/*        <div className="flex flex-col justify-between">*/}

                    {/*            <div className="py-1">*/}
                    {/*                <div className="inline-block text-center box-title bg-blue font-bold yellow mb-30">*/}
                    {/*                    만다라트란?*/}
                    {/*                </div>*/}
                    {/*                <p className="font-light">*/}
                    {/*                    만다라트(Mandal-Art) 기법은 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>*/}
                    {/*                    Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로 '목적을 달성하는 기술'을 뜻합니다.<br/>*/}
                    {/*                    핵심목표를 세우고 이에 대한 해결점, 아이디어, 생각들을 확산해 나가는 형태로, <span className="font-bold">목표를 계획하거나 아이디어를 구체화</span> 할*/}
                    {/*                    때 아주 유용하게 활용할 수 있습니다.*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*            <div className="border-bottom"/>*/}

                    {/*            <div className="py-1 pt-1-m">*/}
                    {/*                <div className="inline-block text-center bg-blue box-title font-bold yellow mb-30">*/}
                    {/*                    대표적인 사례*/}
                    {/*                </div>*/}
                    {/*                <p className="font-light">*/}
                    {/*                    만다라트는 <span className="font-bold">'오타니 쇼헤이'의 성공비법</span>으로 잘 알려져있습니다.<br/>*/}
                    {/*                    '오타니 쇼헤이'는 철저한 자기관리로 가장 영향력있는 인물 100인, TOP5으로 선정된 인물입니다.<br/>*/}
                    {/*                    '오타니 쇼헤이'는 고교시절에 쓴 만다라트를 꾸준히 실천하여, 지금의 자리까지 올 수 있었습니다.<br/>*/}
                    {/*                </p>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}

                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="h-100 py-3 container flex flex-col  justify-center">*/}
                    {/*    <div className="mandal-banner mb-50">*/}
                    {/*        <div className="px-4 py-2 p-1-m">*/}
                    {/*            <div className="font-white font-medium font-md yellow mb-20">작성 시 주의사항️ ✓</div>*/}
                    {/*            <ul className="font-white font-light">*/}
                    {/*                <li className="mb-10"> 달성하기 어려운 목표도 안 되지만, 너무 쉬워서 동기 부여가 안 되는 것도 삼가야 합니다. (간단 명료하게*/}
                    {/*                    작성해야 합니다.)*/}
                    {/*                </li>*/}
                    {/*                <li className="mb-10">핵심목표는 담대하게 작성해야 합니다. 노력하면 이룰 수 있는 목표를 작성해야 합니다.</li>*/}
                    {/*                <li className="mb-10">세부목표는 현실적으로 작성해야 합니다.</li>*/}
                    {/*            </ul>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="flex flex-col-m items-center justify-center mb-100">*/}
                    {/*        <div>*/}
                    {/*            <img alt="만다라트-쓰는법" className="mandal-img shadow mr-50"*/}
                    {/*                 src={require('../../assets/mandal.jpg')}/>*/}
                    {/*        </div>*/}

                    {/*        <div className="w-100">*/}
                    {/*            <div className="box-title bg-blue font-bold yellow text-center mb-30">만다라트 계획표 작성법</div>*/}
                    {/*            <ol>*/}
                    {/*                <li className="mb-20"><Link className="under-line font-blue font-medium"*/}
                    {/*                                            to="/write">만다라트*/}
                    {/*                    만들기</Link>를 시작합니다.*/}
                    {/*                </li>*/}
                    {/*                <li className="mb-20">자신의 핵심목표를 가장 중심에 적습니다.(최대 8글자)</li>*/}
                    {/*                <li className="mb-20">세부목표 8칸에 핵심목표에 대한 해결점, 아이디어 등을 적습니다.</li>*/}
                    {/*                <li className="mb-20">나머지 8칸에 세부목표에 대한 해결점, 아이디어 등을 적습니다.</li>*/}
                    {/*                <li className="mb-20">모두 채웠다면, 나만의 만다라트 완성 💙</li>*/}
                    {/*            </ol>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}

                    {/*    <div className="text-center">*/}
                    {/*        <button className="btn write"><Link className="font-white" to="/write">시작하기</Link></button>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </section>
            </>
        )
    }
}

export default Home;