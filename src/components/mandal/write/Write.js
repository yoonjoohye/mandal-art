import React, {Component} from 'react';
import {List} from 'immutable';
import * as firebase from "firebase";

import Table from '../Table';
import Save from '../button/Save';


class Write extends Component {

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

    change=(data) => {
        this.setState({
            data:data
        });
    }

    // onSave = (e) => {
    //     e.preventDefault();
    //     const uid=JSON.parse(localStorage.getItem('logInfo')).user.uid;
    //
    //     let database = firebase.database();
    //
    //     let time=new Date();
    //     let date=`${time.getFullYear()}년 ${time.getMonth()+1}월 ${time.getDate()}일 ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    //
    //     // console.log(date);
    //     database.ref(`mandal/${uid}/`).push({
    //         data: JSON.stringify(this.state.data),
    //         time: date
    //     });
    // }

    render() {
        return (
            <section className="mandal-section">
                <Table data={this.state.data} change={this.change}></Table>

                <div className="flex justify-center">
                    <Save data={this.state.data}></Save>
                </div>

            </section>
        );
    }
}

export default Write;