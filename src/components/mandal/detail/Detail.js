import React, {Component} from 'react';
import * as firebase from "firebase";

import {List, fromJS} from 'immutable';

import Table from '../Table';
import Print from "../button/Print";
import Edit from "../button/Edit";
import Delete from "../button/Delete";


class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
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


    change = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <section className="mandal-section">

                <Table data={this.state.data} change={this.change}></Table>

                <Edit data={this.state.data} pageNo={this.props.match.params.id}></Edit>
                <Delete pageNo={this.props.match.params.id}></Delete>

                <Print></Print>
            </section>
        );
    }

}

export default Detail;