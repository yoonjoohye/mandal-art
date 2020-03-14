import React,{Component} from 'react';
import {Link} from 'react-router-dom';

class NotFound extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="h-100">
                <div className="h-100 flex flex-col items-center justify-center">

                        <img className="puzzle-icon mb-20" src={require('../assets/icon/puzzle.svg')}/>
                        <div className="font-md font-medium mb-10">페이지를 찾을 수 없습니다.</div>
                        <div className="font-gray mb-30">요청하신 페이지가 존재하지 않습니다.</div>
                        <Link to="/"><button className="btn save">홈페이지로 돌아가기</button></Link>

                </div>
            </section>
        );
    }
}

export default NotFound;