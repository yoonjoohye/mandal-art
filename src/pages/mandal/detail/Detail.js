import React, {Component} from 'react';

import * as firebase from "firebase";


import {List, fromJS} from 'immutable';

import Table from '../../../components/mandal/Table';
import Print from "../../../components/button/Print";
import Edit from "../../../components/button/Edit";
import Delete from "../../../components/button/Delete";
import Title from "../../../components/mandal/Title";
import ReactHelmet from "../../../components/ReactHelmet";


class Detail extends Component {

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
            )
        }
    }

    componentWillMount() {
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));
        if (!userInfo) {
            window.location.href = '/';
        }
    }

    componentDidMount() {
        let uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
        let database = firebase.database();

        const dataList = [];

        database.ref(`/mandal/${uid}`).once('value').then((snapshot) => {
            const obj = snapshot.val();
            for (let key in snapshot.val()) {
                dataList.push(obj[key]);
            }
            this.setState({
                title: dataList[this.props.match.params.id].title,
                data: fromJS(JSON.parse(dataList[this.props.match.params.id].data))
            });
        });

    }

    // onEdit = () => {
    //     const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
    //     let database = firebase.database();
    //
    //     let time = new Date();
    //     let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    //
    //     database.ref(`mandal/${uid}`).once('value', (snapshot) => {
    //         const obj = snapshot.val();
    //         const keyList = [];
    //
    //         //키값 찾기
    //         for (let key in obj) {
    //             if (obj.hasOwnProperty(key)) {
    //                 keyList.push(key);
    //                 // console.log(key);
    //             }
    //         }
    //         // console.log(keyList);
    //         database.ref(`mandal/${uid}/${keyList[this.props.match.params.id]}`).update({
    //             data: JSON.stringify(this.state.data),
    //             time: date
    //         });
    //     });
    // }

    // onDelete = (e) => {
    //     const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;
    //
    //     let database = firebase.database();
    //
    //     database.ref(`mandal/${uid}`).once('value', (snapshot) => {
    //         const obj = snapshot.val();
    //         const keyList = [];
    //
    //         //키값 찾기
    //         for (let key in obj) {
    //             if (obj.hasOwnProperty(key)) {
    //                 keyList.push(key);
    //                 // console.log(key);
    //             }
    //         }
    //         // console.log(keyList);
    //         database.ref(`mandal/${uid}/${keyList[this.props.match.params.id]}`).remove();
    //     });
    //     window.location.href='/list';
    // }
    // onChange = (e) => {
    //     e.preventDefault();
    //     this.setState({
    //         title:e.target.value
    //     });
    // }

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
        return (
            <>
                <ReactHelmet
                    title="수정 - 나만의 만다라트"
                    description="만다라트는 오타니쇼헤이의 성공비법으로 유명한 기법입니다. 홈페이지에서 나만의 만다라트를 세우고 성공목표를 세워보세요."
                    keywords="만다라트, 계획, 계획표, 플랜, mandal, 사이트, 온라인, 프린트, 인쇄, 오타니쇼헤이, 성공, 제작, 홈페이지, success, mandalart, plan, 플래너, 나만의"
                />
                <section className="mandal-section">

                    <div className="container">
                        <div className="flex justify-end">
                            <div className="only-pc mr-5"><Print></Print></div>
                            <div><Edit title={this.state.title} data={this.state.data}
                                       pageNo={this.props.match.params.id}></Edit></div>
                            {/*<Delete pageNo={this.props.match.params.id}></Delete>*/}
                        </div>
                        <div className="border-bottom py-1 mb-30">
                            <Title title={this.state.title} titleChange={this.titleChange}> </Title>
                        </div>

                        <div>
                            <Table data={this.state.data} tableChange={this.tableChange}></Table>
                        </div>


                    </div>
                </section>
            </>
        );
    }

}

export default Detail;