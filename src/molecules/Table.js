import React, {useEffect, useState,useCallback} from 'react';
import {List} from 'immutable';


const Table = (props) => {
    const [data, setData] = useState(List());

    useEffect(() => {
        setData(props.data);
    });

    const onChange = useCallback((e, tableIndex, dataIndex) => {
        const {value} = e.target;

        if (data.getIn([dataIndex, tableIndex]).split("\n").length > 3) {
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

        setData(goal);
        props.tableChange(goal);
    },[data]);

    const onPlaceholder = (tableIndex, dataIndex) => {
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

    const onVertical = (tableIndex, dataIndex) => {
        let word = data.getIn([tableIndex, dataIndex]);
        let lineCnt = word.substr(0, word.selectionStart).split("\n").length;

        if (window.screen.width < 480) {
            if (word.length < 4 && lineCnt === 1) {
                return 'line-height-3';
            } else if (word.length < 7) {
                return 'line-height-15';
            } else {
                return 'line-height-1';
            }
        } else if (window.screen.width <= 1024) {
            if (word.length < 5 && lineCnt === 1) {
                return 'line-height-5';
            } else {
                return 'line-height-15';
            }
        } else if (window.screen.width > 1440) {
            if (word.length < 10 && lineCnt === 1) {
                return 'line-height-5';
            } else if (word.length < 20 && lineCnt < 3) {
                return 'line-height-2';
            } else {
                return 'line-height-15';
            }
        }
    }

    return (
        <div className="grid outer-grid justify-between">
            {data.map((table, tableIndex) => {
                return (
                    <div className="grid inner-grid justify-between items-center" key={tableIndex}>
                        {table.map((data, dataIndex) => {
                            return (
                                <textarea
                                    className={`mandal-input ${(tableIndex === 4 && dataIndex === 4 ? 'bg-main' : tableIndex === 4 || dataIndex === 4 ? 'bg-sub' : '')} ${onVertical(tableIndex, dataIndex)}`}
                                    key={[dataIndex, tableIndex].join('_')}
                                    placeholder={onPlaceholder(tableIndex, dataIndex)} value={data}
                                    onChange={(e) => onChange(e, tableIndex, dataIndex)}
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

export default Table;