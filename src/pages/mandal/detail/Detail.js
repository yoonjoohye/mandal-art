import React, {Component} from 'react';

import * as firebase from "firebase";


import {List, fromJS} from 'immutable';

import Table from '../../../components/mandal/Table';
import Print from "../../../components/button/Print";
import Edit from "../../../components/button/Edit";
import Delete from "../../../components/button/Delete";
import Title from "../../../components/mandal/Title";


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
    componentWillMount(){
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));
        if(!userInfo){window.location.href='/';}
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
            <section className="mandal-section">
                <div className="container">
                    <div className="flex justify-end">
                        <div className="only-pc mr-5"><Print></Print></div>
                        <div ><Edit title={this.state.title} data={this.state.data} pageNo={this.props.match.params.id}></Edit></div>
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
        );
    }

}

export default Detail;