import React, {useEffect, useState} from 'react';
import {List} from 'immutable';
import styled from "styled-components";

import Tr from './Tr';
import {media} from "../../assets/css/Media.style";
import {Color} from "../../assets/css/Theme.style";

const Grid = styled.div`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: 0 0 7px #0000002b;
    background-color: rgba(0, 0, 0, 0);
    
    ${media.md `
        grid-gap: 1rem;
        padding: 1rem;
    `}
    ${media.sm`
        grid-gap: 0.5rem;
        padding: 0;
        box-shadow:none;
    `}
`;


const Table = (props) => {
    const [data, setData] = useState(List());

    useEffect(() => {
        setData(props.data);
    }, [props.data]);

    const onChange = (e, tableIndex, dataIndex) => {
        const {value} = e.target;

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
    }

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
        let lineCnt = word.substr(0, word.selectionStart).split('\n').length;

        if (window.screen.width < 480) {
            if (word.length < 4 && lineCnt === 1) {
                return 3;
            } else if (word.length < 7 && lineCnt <3) {
                return 2;
            } else {
                return 1;
            }
        }  else if (window.screen.width <= 1024) {
            if (word.length < 8 && lineCnt === 1) {
                return 5;
            } else if(word.length < 15 && lineCnt < 3){
                return 2;
            } else{
                return 1.5;
            }
        }
        else if (window.screen.width <= 1640) {
            if (word.length < 8 && lineCnt === 1) {
                return 5;
            } else if(word.length < 15 && lineCnt < 3){
                return 2;
            } else{
                return 1.5;
            }
        }
        else if (window.screen.width > 1640) {
            if (word.length < 10 && lineCnt === 1) {
                return 5;
            } else if (word.length < 21 && lineCnt < 3) {
                return 2;
            } else {
                return 1.5;
            }
        }
    }
    const onBgColor=(tableIndex,dataIndex)=>{
        if(tableIndex === 4 && dataIndex === 4){
            return Color.blue200;
        }else if(tableIndex === 4 || dataIndex === 4){
            return Color.blue100;
        }else{
            return Color.white;
        }
    }

    return (
        <Grid>
            {data.map((table, tableIndex) => {
                return (
                    <Tr
                        table={table}
                        tableIndex={tableIndex}
                        key={tableIndex}
                        onChange={onChange}
                        onBgColor={onBgColor}
                        onPlaceholder={onPlaceholder}
                        onVertical={onVertical}>
                    </Tr>
                );
            })}
        </Grid>
    );
}

export default Table;