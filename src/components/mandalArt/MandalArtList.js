import React, {Component} from 'react';
import * as firebase from "firebase";
import {Map, List} from 'immutable';

import {Link} from 'react-router-dom';

class MandalArtList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }

    }

    componentWillMount() {
        let uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;

        let database = firebase.database();

        const mandalList=[];

        database.ref(`/mandal/${uid}`).on('child_added', (snapshot)=> {
            mandalList.push(snapshot.val());

            this.setState({
                list: mandalList
            });
        });


        // database.ref(`/mandal/${uid}`).once('value').then((snapshot) => {
        //     const obj = snapshot.val();
        //
        //     const arr = [];
        //
        //     for (let key in obj) {
        //         arr.push(obj[key]);
        //     }
        //     this.setState({
        //         list: arr
        //     });
        // });
    }

    render() {
        // console.log(this.state.list);
        return (
            <section className="mandal-section">
                마이페이지
                {
                    // this.state.list
                    this.state.list.map((data, index) => {
                        return (
                            <Link to={`/mandal/${index}`} key={index} className="mandal-list">{data.time}</Link>
                        );
                    })
                }
            </section>
        )
    }
}

export default MandalArtList;
