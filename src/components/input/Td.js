import React, {useState,useEffect} from "react";
import styled from "styled-components";
import {media} from "../../assets/css/Media.style";
import {Textarea} from "../../assets/css/Form.style";

const MandalInput = styled.textarea`
    box-shadow: 0 0 10px #0000002b;
    text-align: center;
    word-break: keep-all;
    width: 100%;
    height: 60px;
    overflow: hidden;
    ${Textarea(12,300)}
    line-height:${props => props.lineHeight};
    background-color:${props => props.bgColor};
    ${media.md `
        overflow-y: auto;
        padding:0;
        height:50px;
        ${Textarea(10,300)}
    `}
   ${media.sm `
        box-shadow: none;
        border: 1px solid #eeeeee;
        height: 35px;
   `}
`;


const Td = ({data, dataIndex, tableIndex, onChange,onVertical,onPlaceholder,onBgColor}) => {

    const [bgColor,setBgColor]=useState('');
    const [placeholder,setPlaceholder]=useState('');
    const [vertical,setVertical]=useState(1);

    useEffect(()=>{
        setBgColor(onBgColor(tableIndex,dataIndex));
        setPlaceholder(onPlaceholder(tableIndex, dataIndex));
        setVertical(onVertical(tableIndex, dataIndex));
    },[dataIndex,tableIndex, onBgColor, onPlaceholder, onVertical]);

    return (
        <MandalInput
            bgColor={bgColor}
            lineHeight={vertical}
            placeholder={placeholder}
            value={data}
            onChange={(e) => onChange(e, tableIndex, dataIndex)}
            maxLength={24}>
        </MandalInput>

        // <textarea
        //     className="mandal-input"
        //     style={{
        //         background:bgColor,
        //         lineHeight:vertical
        //     }}
        //     placeholder={placeholder}
        //     value={data}
        //     onChange={(e) => onChange(e, tableIndex, dataIndex)}
        //     maxLength={24}
        // >
        // </textarea>
    )
};

export default Td;