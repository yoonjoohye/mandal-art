import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Edit from '../button/Edit';
import Delete from '../button/Delete';


class List extends Component {

    constructor(props) {
        super(props);
        this.state = {
            index: this.props.index,
            data: this.props.data
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            index: nextProps.index,
            data: nextProps.data
        })
    }

    render() {
        return (
            <Link to={`detail/${this.state.index}`} key={this.state.index}>
                <div className="py-1 flex items-center justify-between border-bottom">
                    <div>
                        <div className="font-md mb-5">{this.state.data.title}</div>
                        <div className="font-sm font-gray">{this.state.data.time} 작성</div>
                    </div>
                    <div>
                        <Delete pageNo={this.state.index}></Delete>
                    </div>
                </div>
            </Link>
        )
    }
}

export default List;
