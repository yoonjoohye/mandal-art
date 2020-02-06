import React, {Component} from 'react';
import Table from '../Table.js';
import * as firebase from "firebase";
import {List, Map, fromJS} from 'immutable';

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

    onEdit = () => {
        const uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;

        let database = firebase.database();

        let time = new Date();
        let date = `${time.getFullYear()}년 ${time.getMonth() + 1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;



        database.ref(`mandal/${uid}`).once('value', (snapshot) => {
            const obj = snapshot.val();
            const keyList = [];

            //키값 찾기
            for (let key in obj) {
                if (obj.hasOwnProperty(key)) {
                    keyList.push(key);
                    console.log(key);
                }
                // if (obj.hasOwnProperty(key)) {
                //     // console.log("key/value", key);
                //     keyList.push(key);
                // }
            }
            console.log(keyList);
            database.ref(`mandal/${uid}/${keyList[this.props.match.params.id]}`).update({
                data: JSON.stringify(this.state.data),
                time: date
            });
        });
        // let updates = {};
        // updates[`mandal/${uid}/${keyList[this.props.match.params.id]}`] = {
        //     data: JSON.stringify(this.state.data),
        //     time: date
        // };

        // database.ref().update(updates);
    }

    onDelete = (e) => {

    }


    change = (data) => {
        this.setState({
            data: data
        });
    }

    render() {
        return (
            <section className="mandal-section">

                <Table data={this.state.data} change={this.change}></Table>

                <button onClick={this.onEdit}>수정</button>
                <button onClick={this.onDelete}>삭제</button>
            </section>
        );
    }

}

export default Detail;