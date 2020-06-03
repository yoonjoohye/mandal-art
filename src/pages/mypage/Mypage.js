import React, {Component} from 'react';
import * as firebase from "firebase";
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import List from '../../molecules/List.js';
import ReactHelmet from "../../components/ReactHelmet";
import Modal from "../../components/modal/Modal";


class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        let {user} = this.props;
        if (user) {
            let database = firebase.database();
            const dataList = [];
            database.ref(`/mandal/${user.uid}`).once('value').then((snapshot) => {
                const obj = snapshot.val();
                for (let key in obj) {
                    dataList.push(obj[key]);
                }
                this.setState({
                    list: dataList
                });
            });
        }
    }

    render() {
        let {user} = this.props;

        return (
            <>
                <ReactHelmet
                    title="마이페이지 - 나만의 만다라트"
                    description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                    keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
                />
                {/*{*/}
                {/*    !user &&*/}
                {/*    <Modal*/}
                {/*        isOpen={true}*/}
                {/*        isConfirm={false}*/}
                {/*        title="로그인이 필요합니다"*/}
                {/*        contents="3초만에 소셜 계정으로 로그인하세요.<br/>로그인 후 만다라트 계획표를 세워보세요!"*/}
                {/*        buttonName="로그인 하러가기"*/}
                {/*        img={require('../../../assets/icon/login.svg')}*/}
                {/*        path="/login"*/}
                {/*        bgColor='bg-black'*/}
                {/*    />*/}
                {/*}*/}
                <section className="mandal-section">
                    <div className="container">
                        <div className="mandal-banner mb-50">
                            <div className="px-4 py-2 p-1-m flex justify-between items-center">
                                <div className="w-100 text-center-m font-lg font-white">
                                    나만의 <span className="yellow">만다라트</span>로<br/>
                                    인생을 즐겁게!
                                </div>
                                <div className="only-pc">
                                    {
                                        user ?
                                            <>
                                                <div className="font-lg text-center font-white">{user.displayName}</div>
                                                <div className="font-sm-m text-center font-white">{user.email}</div>
                                            </> :
                                            null
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="mandal-list flex flex-col">
                            {
                                this.state.list.length !== 0 ?
                                    this.state.list.map((data, index) => {
                                        return (
                                            <List key={index} data={data} index={index}></List>
                                        );
                                    })
                                    :
                                    <div className="py-1 text-center">
                                        <img alt="만다라트-존재하지않는이미지" className="nothing-img"
                                             src={require('../../assets/img/nothing.jpg')}/>
                                    </div>
                            }
                        </div>
                        <div className="position-fixed bottom-10 right-5 flex items-center text-center">
                            <div className="bubble font-white mr-10">바로 나만의 만다라트를 만들기</div>
                            <div className="flex items-center" onClick={() => window.location.href = '/write'}>
                                <div className="ping"></div>
                                <button className="btn floating">
                                    <img alt="만다라트-추가" className="w-100"
                                         src={require('../../assets/img/icon/plus.svg')}/>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default connect(
    (state) => ({
        user: state.auth.user
    })
)(Mypage);
