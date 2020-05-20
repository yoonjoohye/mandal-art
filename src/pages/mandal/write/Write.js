import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fromJS, List} from 'immutable';
import ReactHelmet from "../../../components/ReactHelmet";
import Table from '../../../components/mandal/Table';
import Title from '../../../components/mandal/Title';
import Save from '../../../components/button/Save';
import Print from "../../../components/button/Print";
import Edit from "../../../components/button/Edit";
import Modal from '../../../components/modal/Modal';
import ValidModal from '../../../components/modal/ValidModal';
import * as firebase from "firebase";


class Write extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            data: List([
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                    List(['', '', '', '', '', '', '', '', '']),
                ]
            ),
            page:window.location.pathname,
        }
    }

    componentWillMount() {
        if(this.state.page!=='/write') {
            let {user,match} = this.props;

            if (user) {
                let database = firebase.database();
                const dataList = [];
                database.ref(`/mandal/${user.uid}`).once('value').then((snapshot) => {
                    const obj = snapshot.val();
                    for (let key in obj) {
                        dataList.push(obj[key]);
                    }
                    this.setState({
                        title: dataList[match.params.id].title,
                        data: fromJS(JSON.parse(dataList[match.params.id].data))
                    });
                });
            }
        }
    }

    titleChange = (data) => {
        this.setState({
            title: data
        });
    }

    tableChange = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        let {user} = this.props;
        return (
            <>
                <ReactHelmet
                    title="작성 - 나만의 만다라트"
                    description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                    keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
                />
                {
                    !user &&
                    <Modal
                        isOpen={true}
                        isConfirm={false}
                        title="로그인이 필요합니다"
                        contents="3초만에 소셜 계정으로 로그인하세요.<br/>로그인 후 만다라트 계획표를 세워보세요!"
                        buttonName="로그인 하러가기"
                        img={require('../../../assets/icon/login.svg')}
                        path="/login"
                    />
                }

                <section className="mandal-section">
                    <div className="container">
                        {
                            this.state.page==='/write'?
                                <div className="text-right">
                                    <Save title={this.state.title} data={this.state.data}></Save>
                                </div>:
                                <div className="flex justify-end">
                                    <div className="only-pc mr-5">
                                        <Print></Print>
                                    </div>
                                    <div>
                                        <Edit title={this.state.title} data={this.state.data}
                                              pageNo={this.props.match.params.id}></Edit>
                                    </div>
                                </div>
                        }
                        <div className="border-bottom py-1 mb-30">
                            <Title title={this.state.title} titleChange={this.titleChange}> </Title>
                        </div>
                        <div className="mb-30">
                            <Table data={this.state.data} tableChange={this.tableChange}></Table>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default connect(
    (state)=>({
        user:state.auth.user
    })
)(Write);