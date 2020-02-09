import React, {Component} from 'react';
import {List,fromJS} from 'immutable';
import * as firebase from "firebase";


class Title extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title:this.props.title
        }
    }
    //props를 받아서 state를 변경할때 사용
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            title:nextProps.title
        });
    }

    onChange = (e) => {
        e.preventDefault();

        this.setState({
            title: e.target.value
        });

        this.props.titleChange(e.target.value);
    }

    render() {
        return (
            <input
                className="mandal-title"
                type="text"
                placeholder="제목을 입력하세요"
                value={this.state.title}
                onChange={(e) => this.onChange(e)}
            />
        );
    }
}

export default Title;