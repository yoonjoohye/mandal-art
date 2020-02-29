import React,{Component} from 'react';

class NotFound extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <section className="h-100">
                <div className="h-100 flex items-center justify-center font-lg">
                 페이지를 찾을 수 없습니다.😓
                </div>
            </section>
        );
    }
}

export default NotFound;