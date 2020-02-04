import React,{Component} from 'react';
import Table from '../Table.js';
import * as firebase from "firebase";

class Detail extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillMount() {
        let uid = JSON.parse(localStorage.getItem('logInfo')).user.uid;

        let database = firebase.database();

        const mandalList=[];

        database.ref(`/mandal/${uid}`).on('child_added', (snapshot)=> {
            mandalList.push(snapshot.val());
        });

        console.log(mandalList[this.props.match.params.id]);
        // this.setState({
        //     list: mandalList[this.props.match.params.id]
        // });
        console.log(this.props.match.params.id);
    }
    change=(data) => {
        this.setState({
            data:data
        });
    }

    render(){
        return(
            <section className="mandal-section">
                <Table data={this.state.data} change={this.change}></Table>

                <button>수정</button>
                <button>삭제</button>
            </section>
        );
    }

}
export default Detail;