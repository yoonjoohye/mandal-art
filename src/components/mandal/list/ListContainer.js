import React, {Component} from 'react';
import * as firebase from "firebase";
import List from './List.js';

class ListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentWillMount() {
        let uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;

        let database = firebase.database();

        const mandalList = [];

        // database.ref(`/mandal/${uid}`).on('child_added', (snapshot)=> {
        //     mandalList.push(snapshot.val());
        //
        //     this.setState({
        //         list: mandalList
        //     });
        // });


        database.ref(`/mandal/${uid}`).once('value').then((snapshot) => {
            const obj = snapshot.val();

            const arr = [];

            for (let key in obj) {
                arr.push(obj[key]);
            }
            this.setState({
                list: arr
            });
        });
    }

    render() {
        let userInfo = JSON.parse(localStorage.getItem('logInfo'));
        return (
            <section>

                <div className="mandal-section">
                    <div className="container">
                        <div className="mandal-banner flex justify-between items-center mb-50">
                            <div className="font-lg font-white">
                                나만의 <span className="yellow">만다라트</span>로<br/>
                                인생을 즐겁게!
                            </div>
                            <div className="flex flex-col">
                                <span className="font-lg text-center  font-white">{userInfo.user.displayName}</span>
                                <span className="font-white">{userInfo.user.email}</span>
                            </div>
                        </div>
                        <div className="mandal-list flex flex-col">
                            {
                                this.state.list.length!==0 ?
                                    this.state.list.map((data, index) => {
                                        return (
                                            <List key={index} data={data} index={index}></List>
                                        );
                                    })
                                    :
                                    <div className="px-1 text-center">
                                        <img src={require('../../../images/nothing.jpeg')}/>
                                    </div>
                            }
                        </div>
                    </div>
                </div>


            </section>
        )
    }
}

export default ListContainer;
