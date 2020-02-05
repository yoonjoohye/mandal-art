import React, {Component} from 'react';
import Table from '../Table.js';
import * as firebase from "firebase";
import {List,Map,fromJS} from 'immutable';

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

            // const data=this.state.data;

            for (let key in snapshot.val()) {
                 dataList.push(obj[key]);
            }

            this.setState({
                data: fromJS(JSON.parse(dataList[this.props.match.params.id].data))
            });
            // console.log(JSON.parse(dataList[this.props.match.params.id].data));
            // data.set(0,fromJS(JSON.parse(dataList[this.props.match.params.id].data)));
        });

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

                <button>수정</button>
                <button>삭제</button>
            </section>
        );
    }

}

export default Detail;