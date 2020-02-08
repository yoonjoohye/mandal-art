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

                <div className="mandal-section mandal-bg">
                    <div className="container">
                        <img className="mandal-profile-img " src={userInfo.user.photoURL}/>
                        <div>이름</div>
                        <div>이메일</div>
                    </div>
                </div>


                <div className="mandal-container flex items-center justify-between flex-wrap">
                    {
                        this.state.list.map((data, index) => {
                            return (
                                <List key={index} data={data} index={index}></List>
                            );
                        })
                    }
                </div>

            </section>
        )
    }
}

export default ListContainer;
