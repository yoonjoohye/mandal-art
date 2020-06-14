import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginAsync} from '../../stores/auth';
import Loading from '../../components/Loading';
import ReactHelmet from "../../components/ReactHelmet";
import {BackgroundSection, Container} from "../../assets/css/Section.style";
import styled from "styled-components";

const LoginContainer = styled(Container)`
    min-height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
`;
const LoginBox = styled.div`
    box-shadow: 0 1px 10px #00000063;
    width: 350px;
    padding: 7rem;
    background-color: #ffffff08;
    border-radius: 0.5rem;
    @media(max-width:480px){
        width: 100%;
        padding: 0 1rem;
        box-shadow:none;
        background: none;
    }
`;

const Login = (props) => {
    const [showBubble, setShowBubble] = useState(false);
    let {loginAsync, loading} = props;

    const onShowBubble = () => {
        setShowBubble(!showBubble);
    }

    return (
        <>
            <ReactHelmet
                title="로그인 - 나만의 만다라트"
                description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                keywords="만다라트(mandal art) 사이트로 플랜(plan) 도구를 만나보세요! 나만의 만다라트를 만들어 성공 목표를 세워보세요."
            />
            <BackgroundSection>
                <Loading show={loading}/>
                <LoginContainer>
                    <LoginBox>
                        <div className="flex justify-center items-center mb-70">
                            <img alt="만다라트-로고" className="login-icon mr-10"
                                 src={require('../../assets/img/icon/puzzle.svg')}/>
                                <div className="font-md font-white-pink font-bold">Mandal-ART</div>
                        </div>
                        <div className="w-100">
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
                        </div>

                        <div className="w-100 only-mobile">
                            <div className="font-gray text-right mb-20" onClick={onShowBubble}>ⓘ 로그인이 작동하지
                                않나요?
                            </div>
                            {
                                showBubble &&
                                <div className="fade-in bubble-top font-sm keep-all font-white text-center">
                                    인앱브라우저는 소셜 로그인을 제공하지 않습니다.<br/>
                                    <b>더보기(…)</b>에서 <b>다른 브라우저로 열기</b>를 선택하셔서 로그인을 다시 시도해주세요!
                                </div>
                            }
                        </div>
                    </LoginBox>
                </LoginContainer>
            </BackgroundSection>
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

