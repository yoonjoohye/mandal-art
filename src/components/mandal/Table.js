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

    render() {
        return (
            <div className="grid outer-grid justify-between">
                {this.state.data.map((table, tableIndex) => {
                    return (
                        <div className="grid inner-grid justify-between items-center" key={tableIndex}>
                            {table.map((data, dataIndex) => {
                                return (
                                    <textarea
                                        className={`mandal-input ${(tableIndex === 4 && dataIndex === 4 ? 'bg-main' : tableIndex === 4 || dataIndex === 4 ? 'bg-sub' : '')}`}
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