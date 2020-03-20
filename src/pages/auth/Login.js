import React, {Component} from 'react';
import * as firebase from "firebase/app";
import Loading from '../../components/Loading';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: localStorage.getItem('logInfo'),
            show:true,
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
            }).then(()=>{
                window.location.href='/';
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
            }).then(()=>{
                window.location.href='/';
            })
        }).catch((error) => {
            console.log(error);
            this.setState({
                show: false
            });
        })
    }

    render() {

        return (
            <section className="home-section">
                <Loading show={this.state.show}/>
                <div className="h-100 bg-white-m container flex justify-center items-center">
                    <div className="login-box flex flex-col justify-center items-center">
                        <div className="flex justify-center items-center font-md font-bold"><img
                            className="login-icon mr-10" src={require('../../assets/icon/puzzle.svg')}/>Mandal-ART
                        </div>
                        <div className="font-medium mb-70">로그인</div>

                        <div className="flex items-center justify-between btn login google mb-20"
                             onClick={this.onGoogleLogin}>
                            <img className="modal-icon" alt="만다라트-구글"
                                 src={require('../../assets/icon/google.svg')}/>
                            <div className="w-100 text-center">구글로 로그인</div>
                        </div>
                        <div className="flex items-center justify-between btn login facebook"
                             onClick={this.onFacebookLogin}>
                            <img className="modal-icon" alt="만다라트-페이스북"
                                 src={require('../../assets/icon/facebook.svg')}/>
                            <div className="w-100 text-center">페이스북으로 로그인</div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}


export default Login;

