import React, {Component} from 'react';
import * as firebase from "firebase/app";
import Loading from '../../components/Loading';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('logInfo'),
            show: false,
            showBubble: false,
        };
    }

    // componentWillMount() {
    //     let userInfo = JSON.parse(localStorage.getItem('logInfo'));
    //     if (userInfo) {
    //         window.history.go(-1);
    //     }
    // }

    componentWillUpdate(nextProps, nextState, nextContext) {
        localStorage.setItem('logInfo', nextState.user);
    }

    onGoogleLogin = (e) => {
        this.setState({
            show: true
        });
        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            let provider = new firebase.auth.GoogleAuthProvider();

            return firebase.auth().signInWithPopup(provider).then((authData) => {
                this.setState({
                    user: JSON.stringify(authData)
                });
            }).then(() => {
                window.location.href = '/';
            })
        }).catch((error) => {
            console.log(error);
            this.setState({
                show: false
            });
        })
    }

    onFacebookLogin = (e) => {
        this.setState({
            show: true
        });
        e.preventDefault();
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(() => {
            let provider = new firebase.auth.FacebookAuthProvider();
            return firebase.auth().signInWithPopup(provider).then((authData) => {
                this.setState({
                    user: JSON.stringify(authData)
                });
            }).then(() => {
                window.location.href = '/';
            })
        }).catch((error) => {
            console.log(error);
            this.setState({
                show: false
            });
        })
    }
    onShowBubble = () => {
        this.setState({
            ...this.state,
            showBubble: !this.state.showBubble
        })
    }

    render() {
        return (
            <section className="home-section">
                <Loading show={this.state.show}/>
                <div className="h-100 bg-white-m container flex justify-center items-center">
                    <div className="login-box flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center">
                            <img alt="만다라트-로고" className="login-icon mr-10"
                                 src={require('../../assets/icon/puzzle.svg')}/>
                            <div className="font-md font-bold">Mandal-ART</div>
                        </div>
                        <div className="font-medium mb-70">로그인</div>

                        <div className="flex items-center justify-between btn login google mb-20"
                             onClick={this.onGoogleLogin}>
                            <img className="modal-icon" alt="만다라트-구글"
                                 src={require('../../assets/icon/google.svg')}/>
                            <div className="w-100 text-center">구글로 로그인</div>
                        </div>
                        <div className="flex items-center justify-between btn login facebook mb-70-m"
                             onClick={this.onFacebookLogin}>
                            <img className="modal-icon" alt="만다라트-페이스북"
                                 src={require('../../assets/icon/facebook.svg')}/>
                            <div className="w-100 text-center">페이스북으로 로그인</div>
                        </div>

                        <div className="w-100 only-mobile">
                            <div className="font-gray text-right mb-20" onClick={this.onShowBubble}>ⓘ 로그인이 작동하지 않나요?</div>
                            {
                                this.state.showBubble ?
                                <div className="fade-in bubble-top font-sm keep-all font-white text-center">
                                    인앱브라우저는 소셜 로그인을 제공하지 않습니다.<br/>
                                    우측 상단의 <b>더보기(…)</b>에서 <b>다른 브라우저로 열기</b>를 선택하셔서 로그인을 다시 시도해주세요!
                                </div> : null
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}


export default Login;

