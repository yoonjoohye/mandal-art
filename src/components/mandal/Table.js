import React, {Component} from 'react';
import {List, fromJS} from 'immutable';
import * as firebase from "firebase";


class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
        }
    }

    //props를 받아서 state를 변경할때 사용
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            data: nextProps.data
        });


    }

    onChange = (e, tableIndex, dataIndex) => {
        e.preventDefault();
        const {value} = e.target;
        const data = this.state.data;

        if(data.getIn([dataIndex, tableIndex]).split("\n").length>3){
            data.setIn([dataIndex, tableIndex])
        }

        let goal;

        if (tableIndex === 4) {
            goal = data.setIn([dataIndex, tableIndex], value).setIn([tableIndex, dataIndex], value);
        } else if (dataIndex === 4) {
            goal = data.setIn([dataIndex, tableIndex], value).setIn([tableIndex, dataIndex], value);
        } else {
            goal = data.setIn([tableIndex, dataIndex], value);
        }

        this.setState({data: goal});
        this.props.tableChange(goal);
    }

    onPlaceholder = (tableIndex, dataIndex) => {
        if (window.screen.width > 480) {
            if (tableIndex === 4) {
                if (dataIndex === 4) {
                    return '핵심목표';
                } else {
                    return '세부목표';
                }
            } else if (dataIndex === 4) {
                return '세부목표';
            }
        } else {
            if (tableIndex === 4) {
                if (dataIndex === 4) {
                    return '핵심';
                } else {
                    return '세부';
                }
            } else if (dataIndex === 4) {
                return '세부';
            }
        }
    }

    onVertical = (tableIndex, dataIndex) => {
        let data = this.state.data.getIn([tableIndex, dataIndex]);
        let lineCnt = data.substr(0, data.selectionStart).split("\n").length;

        if (window.screen.width < 480) {
            if (data.length < 3 && lineCnt === 1) {
                return 'line-height-3';
            } else {
                return 'line-height-1';
            }
        } else if (window.screen.width <= 1024) {
            if (data.length < 5 && lineCnt === 1) {
                return 'line-height-5';
            } else {
                return 'line-height-1.5';
            }
        } else if (window.screen.width > 1440) {
            if (data.length < 10 && lineCnt === 1) {
                return 'line-height-5';
            } else if (data.length < 19 && lineCnt < 3) {
                return 'line-height-2';
            } else {
                return 'line-height-1.5';
            }
        }
    }

    render() {
        return (
            <div className="grid outer-grid justify-between">
                {this.state.data.map((table, tableIndex) => {
                    return (
                        <div className="grid inner-grid justify-between items-center" key={tableIndex}>
                            {table.map((data, dataIndex) => {
                                return (
                                    <textarea
                                        className={`mandal-input ${(tableIndex === 4 && dataIndex === 4 ? 'bg-main' : tableIndex === 4 || dataIndex === 4 ? 'bg-sub' : '')} ${this.onVertical(tableIndex, dataIndex)}`}
                                        key={[dataIndex, tableIndex].join('_')}
                                        placeholder={this.onPlaceholder(tableIndex, dataIndex)} value={data}
                                        onChange={(e) => this.onChange(e, tableIndex, dataIndex)}
                                        maxLength={24}
                                    >
                                    </textarea>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Table;