import React from "react";
import styled from "styled-components";

const Textarea = () => styled.textarea`
    box-shadow: 0 0 10px #0000002b;
    font-size: 12px;
    font-weight: 300;
    text-align: center;
    word-break: keep-all;
    width: 100%;
    height: 60px;
    overflow-y: hidden;
    overflow-x: hidden;
    resize: none;
    outline: none;
    border: 0;
    background-color:${props => props.bgColor || '#ffffff'};
    
    @media(max-width: 1024px) {
        overflow-y: auto;
        padding:0;
        height:50px;
        font-size: 10px;
    }
    
    @media(max-width: 480px) {
        box-shadow: none;
        border: 1px solid #eeeeee;
        height: 35px;
    }
`;

const Td = ({data, dataIndex, table, tableIndex, onChange, onPlaceholder, onVertical}) => {
    return (
        <textarea
            className={`mandal-input ${(tableIndex === 4 && dataIndex === 4 ? 'bg-main' : tableIndex === 4 || dataIndex === 4 ? 'bg-sub' : '')} ${onVertical(tableIndex, dataIndex)}`}
            placeholder={onPlaceholder(tableIndex, dataIndex)}
            value={data}
            onChange={(e) => onChange(e, tableIndex, dataIndex)}
            maxLength={24}
        >
        </textarea>
    )
};

export default Td;