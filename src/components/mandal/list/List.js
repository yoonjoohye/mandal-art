import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class List extends Component {

    constructor(props) {
        super(props);
        this.state={
            index:this.props.index,
            data:this.props.data
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            index:nextProps.index,
            data:nextProps.data
        })
    }

    render() {
        return (
            <Link to={`/detail/${this.state.index}`} key={this.state.index} className="mandal-list">{this.state.data.time}</Link>
        )
    }
}

export default List;
