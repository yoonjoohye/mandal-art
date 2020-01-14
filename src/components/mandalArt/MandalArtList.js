import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class MandalArtList extends Component {

    constructor(props){
        super(props);
        this.state={
            list:['1월 인생계획','2월','언젠']
        }
    }

    render() {
        return (
            <section className="mandal-section">
                    {
                        this.state.list.map((data,index)=>{
                            return(
                                <Link to={`/mandal/${index+1}`} key={index} className="mandal-list">{data}</Link>
                            );
                        })
                    }
            </section>
        )
    }
}

export default MandalArtList;
