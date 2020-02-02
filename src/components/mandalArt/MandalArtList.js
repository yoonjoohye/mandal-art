import React, {Component} from 'react';
import * as firebase from "firebase";
import {Map,List} from 'immutable';

import {Link} from 'react-router-dom';

class MandalArtList extends Component {

    constructor(props){
        super(props);
        this.state= {
            list: []
        }

    }

    componentWillMount() {
        let uid=JSON.parse(localStorage.getItem('logInfo')).user.uid;

        let database=firebase.database();

        database.ref(`/mandal/${uid}`).once('value').then((snapshot)=> {
            console.log(snapshot);
            this.setState({
                list:[
                    snapshot.val()
                    ]
            });
        });
    }

    render(){
            console.log(this.state.list);
        return (
            <section className="mandal-section">
                    마이페이지
                    {

                        // this.state.list
                        // this.state.list.map((data,index)=>{
                        //     return(
                        //         <Link to={`/mandal/${index+1}`} key={index} className="mandal-list">{index}</Link>
                        //     );
                        // })
                    }
            </section>
        )
    }
}

export default MandalArtList;
