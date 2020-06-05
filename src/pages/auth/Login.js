import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {loginAsync} from '../../stores/auth';
import Loading from '../../components/Loading';
import ReactHelmet from "../../components/ReactHelmet";

const Login = (props) => {
    const [showBubble, setShowBubble] = useState(false);
    let {loginAsync, loading} = props;

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         showBubble: false,
    //     };
    // }

    const onShowBubble = () => {
        setShowBubble(!showBubble);
    }

    return (
        <>
            <ReactHelmet
                title="로그인 - 나만의 만다라트"
                description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 인쇄, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
            />
            <section className="home-section">
                <Loading show={loading}/>
                <div className="h-100 bg-white-m container flex justify-center items-center">
                    <div className="login-box flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img alt="만다라트-로고" className="login-icon mr-10"
                                 src={require('../../assets/img/icon/puzzle.svg')}/>
                            <div className="font-md font-white-pink font-bold">Mandal-ART</div>
                        </div>
                        <div className="font-xmd font-white-black font-medium mb-70">로그인</div>

                        <div className="flex items-center justify-between btn login google mb-20"
                             onClick={() => loginAsync('google')}>
                            <img className="modal-icon" alt="만다라트-구글"
                                 src={require('../../assets/img/icon/google.svg')}/>
                            <div className="w-100 text-center">구글로 로그인</div>
                        </div>
                        <div className="flex items-center justify-between btn login facebook mb-70-m"
                             onClick={() => loginAsync('facebook')}>
                            <img className="modal-icon" alt="만다라트-페이스북"
                                 src={require('../../assets/img/icon/facebook.svg')}/>
                            <div className="w-100 text-center">페이스북으로 로그인</div>
                        </div>

                        <div className="w-100 only-mobile">
                            <div className="font-gray text-right mb-20" onClick={onShowBubble}>ⓘ 로그인이 작동하지
                                않나요?
                            </div>
                            {
                                showBubble ?
                                    <div className="fade-in bubble-top font-sm keep-all font-white text-center">
                                        인앱브라우저는 소셜 로그인을 제공하지 않습니다.<br/>
                                        우측 상단의 <b>더보기(…)</b>에서 <b>다른 브라우저로 열기</b>를 선택하셔서 로그인을 다시 시도해주세요!
                                    </div> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    );


}


export default connect(
    (state) => ({
        user: state.auth.user,
        loading: state.auth.loading.login
    }), {
        loginAsync
    }
)(Login);

